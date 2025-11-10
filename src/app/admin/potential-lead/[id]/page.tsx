import { auth } from "@/lib/auth";
import { getCustomerById, addClient } from "@/server/actions";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import AddNotesModal from "@/components/AddNotesModal";

export default async function PotentialLeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/admin/signin");
  }

  const { id } = await params;
  const customerData = await getCustomerById(id);
  const customer = customerData[0];

  if (!customer) {
    return (
      <div className="p-4 sm:ml-64">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-red-600">Customer not found</h1>
          <Link href="/admin/potential-lead" className="text-indigo-600 hover:text-indigo-800">
            Back to Potential Leads
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="mb-4">
            <Link
              href="/admin/potential-lead"
              className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 cursor-pointer"
            >
              ← Back to Potential Leads
            </Link>
          </div>

          <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Lead Details
          </h1>

          <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                Customer Information
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
                Personal details and inquiry message.
              </p>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700">
              <dl>
                <div className="bg-gray-50 dark:bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                    {customer.firstName} {customer.lastName}
                  </dd>
                </div>
                <div className="bg-white dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Company
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                    {customer.company}
                  </dd>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                    <a
                      href={`mailto:${customer.email}`}
                      className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400"
                    >
                      {customer.email}
                    </a>
                  </dd>
                </div>
                <div className="bg-white dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Phone number
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                    <a
                      href={`tel:${customer.phoneNumber}`}
                      className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400"
                    >
                      {customer.phoneNumber}
                    </a>
                  </dd>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Location
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                    {customer.city}, {customer.country}
                  </dd>
                </div>
                <div className="bg-white dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Message
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                    {customer.message}
                  </dd>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Privacy Policy
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                    {customer.privacyPolicyAgreed ? "Agreed" : "Not Agreed"}
                  </dd>
                </div>
                <div className="bg-white dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Submitted on
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                    {new Date(customer.createdAt).toLocaleString()}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {customer.discoveryNotes && (
            <div className="mt-6 bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Notes from the client during discovery
                </h3>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6">
                <div className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
                  {customer.discoveryNotes}
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 flex gap-3">
            <AddNotesModal customerId={customer.id} existingNotes={customer.discoveryNotes} />
            <form action={addClient}>
              <input type="hidden" name="id" value={customer.id} />
              <input type="hidden" name="firstName" value={customer.firstName} />
              <input type="hidden" name="lastName" value={customer.lastName} />
              <input type="hidden" name="city" value={customer.city} />
              <input type="hidden" name="country" value={customer.country} />
              <input type="hidden" name="company" value={customer.company} />
              <input type="hidden" name="email" value={customer.email} />
              <input type="hidden" name="phoneNumber" value={customer.phoneNumber} />
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
              >
                Convert to Client
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
