"use client";

import { addClient } from "@/server/actions";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Customer = {
  id: string;
  firstName: string;
  lastName: string;
  city: string;
  country: string;
  company: string;
  email: string;
  phoneNumber: string;
  message: string;
  createdAt: Date;
};

export default function PotentialLeadsTable({
  initialCustomers,
}: {
  initialCustomers: Customer[];
}) {
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers);
  const router = useRouter();

  useEffect(() => {
    // Set up interval to poll for new data every 5 seconds
    const intervalId = setInterval(() => {
      router.refresh();
    }, 5000);

    // Listen for custom event when a customer is added
    const handleCustomerAdded = () => {
      router.refresh();
    };

    window.addEventListener("customerAdded", handleCustomerAdded);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("customerAdded", handleCustomerAdded);
    };
  }, [router]);

  // Update customers when initialCustomers changes
  useEffect(() => {
    setCustomers(initialCustomers);
  }, [initialCustomers]);

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    First Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Last Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    City
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Country
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Company
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Phone Number
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {customers.length === 0 && (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-6 py-4 text-center text-sm text-gray-500"
                    >
                      No potential leads found.
                    </td>
                  </tr>
                )}
                {customers.map((customer) => (
                  <tr
                    key={customer.id}
                    className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                      {customer.firstName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                      {customer.lastName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {customer.city}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {customer.country}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {customer.company}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {customer.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {customer.phoneNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium flex justify-end gap-2">
                      <Link
                        href={`/admin/potential-lead/${customer.id}`}
                        type="button"
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-indigo-600 hover:text-indigo-800 focus:outline-hidden focus:text-indigo-800 disabled:opacity-50 disabled:pointer-events-none dark:text-indigo-500 dark:hover:text-indigo-400 dark:focus:text-indigo-400 cursor-pointer"
                      >
                        See Inquiry
                      </Link>
                      <form action={addClient}>
                        <input type="hidden" name="id" value={customer.id} />
                        <input
                          id="firstName"
                          type="hidden"
                          name="firstName"
                          autoComplete="given-name"
                          value={customer.firstName}
                        />
                        <input
                          id="lastName"
                          type="hidden"
                          name="lastName"
                          autoComplete="family-name"
                          value={customer.lastName}
                        />
                        <input
                          id="city"
                          type="hidden"
                          name="city"
                          autoComplete="address-level2"
                          value={customer.city}
                        />
                        <input
                          id="country"
                          type="hidden"
                          name="country"
                          autoComplete="country"
                          value={customer.country}
                        />
                        <input
                          id="company"
                          type="hidden"
                          name="company"
                          autoComplete="organization"
                          value={customer.company}
                        />
                        <input
                          id="email"
                          type="hidden"
                          name="email"
                          autoComplete="email"
                          value={customer.email}
                        />
                        <input
                          id="phoneNumber"
                          type="hidden"
                          name="phoneNumber"
                          placeholder="123-456-7890"
                          value={customer.phoneNumber}
                        />
                        <button
                          type="submit"
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-indigo-500 hover:text-indigo-800 focus:outline-hidden focus:text-indigo-800 disabled:opacity-50 disabled:pointer-events-none dark:text-indigo-300 dark:hover:text-indigo-400 dark:focus:text-indigo-400 cursor-pointer"
                        >
                          Add as Client
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
