import {
  getAllClients,
  getAllClientsOnDesign,
  getAllClientsOnDevelopment,
  getAllClientsOnDone,
  getAllClientsOnRevisions,
  getAllCustomers,
} from "@/server/actions";
import {
  Brush,
  CheckCircle,
  Code,
  History,
  LogOut,
  User2Icon,
  UserSearch,
} from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { signOutAction } from "@/server/auth";
import Link from "next/link";

export default async function Sidebar() {
  const customers = await getAllCustomers();
  const clients = await getAllClients();
  const designClients = await getAllClientsOnDesign();
  const developmentClients = await getAllClientsOnDevelopment();
  const revisionsClients = await getAllClientsOnRevisions();
  const doneClients = await getAllClientsOnDone();
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) return null;
  return (
    <div>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="absolute bottom-3 right-3">
            <ModeToggle />
          </div>
          <a href="/admin" className="flex items-center ps-2.5 mb-5">
            <p className="font-bold text-xl">
              JMR{" "}
              <span className="font-extralight text-indigo-600 dark:text-indigo-300">
                Web Studio
              </span>
            </p>
          </a>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/admin/potential-lead"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group relative"
              >
                <UserSearch
                  fill="currentColor"
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                />
                <span className="ms-3">Potential Lead</span>
                {customers.length > 0 && (
                  <span className="ms-3 font-bold text-xs absolute right-1 top-1/2 -translate-y-1/2 rounded-4xl bg-indigo-400 text-indigo-100 dark:bg-indigo-900 dark:text-indigo-200 w-7 h-7 flex items-center justify-center">
                    {customers.length}
                  </span>
                )}
              </Link>
            </li>
            <li>
              <a
                href="/admin/client"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group relative"
              >
                <User2Icon className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />

                <span className="flex-1 ms-3 whitespace-nowrap">Clients</span>
                {clients.length > 0 && (
                  <span className="ms-3 font-bold text-xs absolute right-1 top-1/2 -translate-y-1/2 rounded-4xl bg-indigo-400 text-indigo-100 dark:bg-indigo-900 dark:text-indigo-200 w-7 h-7 flex items-center justify-center">
                    {clients.length}
                  </span>
                )}
              </a>
              <ul className="space-y-2 font-medium mt-2">
                <li>
                  <a
                    href="/admin/client/design"
                    className="flex items-center pl-5 text-gray-900 rounded-lg dark:text-white hover:text-indigo-500 dark:hover:text-indigo-200 group relative"
                  >
                    <Brush className="w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-200" />

                    <span className="flex-1 ms-3 whitespace-nowrap text-sm font-extralight">
                      Design
                    </span>
                    {designClients.length > 0 && (
                      <span className="ms-3 font-bold text-[10px] absolute right-0 top-0 rounded-4xl bg-pink-300 text-white dark:bg-pink-900 dark:text-indigo-200 w-5 h-5 flex items-center justify-center">
                        {designClients.length}
                      </span>
                    )}
                  </a>
                </li>
                <li>
                  <a
                    href="/admin/client/development"
                    className="flex items-center pl-5 text-gray-900 rounded-lg dark:text-white hover:text-indigo-500 dark:hover:text-indigo-200 group relative"
                  >
                    <Code className="w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-200" />

                    <span className="flex-1 ms-3 whitespace-nowrap text-sm font-extralight">
                      Development
                    </span>
                    {developmentClients.length > 0 && (
                      <span className="ms-3 font-bold text-[10px] absolute right-0 top-0 rounded-4xl bg-blue-300 text-white dark:bg-blue-900 dark:text-indigo-200 w-5 h-5 flex items-center justify-center">
                        {developmentClients.length}
                      </span>
                    )}
                  </a>
                </li>
                <li>
                  <a
                    href="/admin/client/revisions"
                    className="flex items-center pl-5 text-gray-900 rounded-lg dark:text-white hover:text-indigo-500 dark:hover:text-indigo-200 group relative"
                  >
                    <History className="w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-200" />

                    <span className="flex-1 ms-3 whitespace-nowrap text-sm font-extralight">
                      Revisions
                    </span>
                    {revisionsClients.length > 0 && (
                      <span className="ms-3 font-bold text-[10px] absolute right-0 top-0 rounded-4xl bg-yellow-300 text-black dark:bg-yellow-500 dark:text-black w-5 h-5 flex items-center justify-center">
                        {revisionsClients.length}
                      </span>
                    )}
                  </a>
                </li>
                <li>
                  <a
                    href="/admin/client/done"
                    className="flex items-center pl-5 text-gray-900 rounded-lg dark:text-white hover:text-indigo-500 dark:hover:text-indigo-200 group relative"
                  >
                    <CheckCircle className="w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-200" />

                    <span className="flex-1 ms-3 whitespace-nowrap text-sm font-extralight">
                      Done
                    </span>
                    {doneClients.length > 0 && (
                      <span className="ms-3 font-bold text-[10px] absolute right-0 top-0 rounded-4xl bg-green-300 text-black dark:bg-green-900 dark:text-indigo-200 w-5 h-5 flex items-center justify-center">
                        {doneClients.length}
                      </span>
                    )}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <form action={signOutAction}>
                <button
                  type="submit"
                  className="flex w-full items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group relative cursor-pointer"
                >
                  <LogOut
                    fill="currentColor"
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  />
                  <span className="ms-3">Logout</span>
                </button>
              </form>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
