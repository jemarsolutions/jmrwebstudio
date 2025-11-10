import { auth } from "@/lib/auth";
import { getAllClientsOnRevisions, updateClientStatus } from "@/server/actions";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Client } from "@/types";

export default async function ClientRevisionsPage() {
  const clients = await getAllClientsOnRevisions();
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/admin/signin");
  }

  return (
    <div>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Clients in Revisions Phase
          </h1>
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                        <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Company</th>
                        <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Email</th>
                        <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clients.length === 0 && (
                        <tr>
                          <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                            No clients in revisions phase.
                          </td>
                        </tr>
                      )}
                      {clients.map((client: Client) => (
                        <tr key={client.id} className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                            {client.firstName} {client.lastName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {client.company}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {client.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span className="px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                              {client.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                            <form action={async () => {
                              "use server";
                              await updateClientStatus(client.id, "Done");
                            }} className="inline">
                              <button type="submit" className="text-green-600 hover:text-green-900 cursor-pointer">
                                Mark as Done
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
        </div>
      </div>
    </div>
  );
}
