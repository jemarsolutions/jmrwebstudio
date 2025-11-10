import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AdminPage() {
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
          <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Admin Dashboard
          </h1>
          <p className="mb-8 text-gray-600 dark:text-gray-300">
            Welcome back, {session.user.name}!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/admin/potential-lead"
              className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Potential Leads
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                View and manage incoming customer inquiries
              </p>
            </Link>

            <Link
              href="/admin/client"
              className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Pending Clients
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Manage clients waiting to start
              </p>
            </Link>

            <Link
              href="/admin/client/design"
              className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Design Phase
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Clients currently in design phase
              </p>
            </Link>

            <Link
              href="/admin/client/development"
              className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Development Phase
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Clients currently in development
              </p>
            </Link>

            <Link
              href="/admin/client/revisions"
              className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Revisions Phase
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Clients in revision phase
              </p>
            </Link>

            <Link
              href="/admin/client/done"
              className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Completed
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                View completed client projects
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
