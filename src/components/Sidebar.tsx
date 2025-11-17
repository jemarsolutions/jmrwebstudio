"use client";

import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import {
  Brush,
  CheckCircle,
  Code,
  History,
  LogOut,
  User2Icon,
  UserSearch,
} from "lucide-react";
import { signOutAction } from "@/server/auth";

interface SidebarProps {
  customers: any[];
  clients: any[];
  designClients: any[];
  developmentClients: any[];
  revisionsClients: any[];
  doneClients: any[];
}

export default function Sidebar({
  customers = [],
  clients = [],
  designClients = [],
  developmentClients = [],
  revisionsClients = [],
  doneClients = [],
}: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSidebar = () => setMobileOpen(!mobileOpen);

  return (
    <>
      {/* Mobile toggle button */}
      <button
        type="button"
        onClick={toggleSidebar}
        className={`fixed top-1 ${mobileOpen && "right-1"} ${
          !mobileOpen && "left-1"
        } z-50 p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 lg:hidden`}
      >
        {mobileOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-gray-50 dark:bg-gray-800 overflow-y-auto
          ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
      >
        <div className="h-full px-3 py-4 relative">
          {/* Mode toggle */}
          <div className="absolute bottom-3 right-3">
            <ModeToggle />
          </div>

          {/* Logo */}
          <a href="/admin" className="flex items-center ps-2.5 mb-5">
            <p className="font-bold text-xl">
              JMR{" "}
              <span className="font-extralight text-indigo-600 dark:text-indigo-300">
                Web Studio
              </span>
            </p>
          </a>

          <ul className="space-y-2 font-medium">
            {/* Potential Lead */}
            <li>
              <Link
                href="/admin/potential-lead"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group relative"
              >
                <UserSearch className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3">Potential Lead</span>
                {customers.length > 0 && (
                  <span className="ms-3 font-bold text-xs absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-indigo-400 text-indigo-100 dark:bg-indigo-900 dark:text-indigo-200 w-7 h-7 flex items-center justify-center">
                    {customers.length}
                  </span>
                )}
              </Link>
            </li>

            {/* Clients + Submenus */}
            <li>
              <Link
                href="/admin/client"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group relative"
              >
                <User2Icon className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">Clients</span>
                {clients.length > 0 && (
                  <span className="ms-3 font-bold text-xs absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-indigo-400 text-indigo-100 dark:bg-indigo-900 dark:text-indigo-200 w-7 h-7 flex items-center justify-center">
                    {clients.length}
                  </span>
                )}
              </Link>

              <ul className="space-y-2 font-medium mt-2">
                {/** Design */}
                <li>
                  <Link
                    href="/admin/client/design"
                    className="flex items-center pl-5 text-gray-900 rounded-lg dark:text-white hover:text-indigo-500 dark:hover:text-indigo-200 group relative"
                  >
                    <Brush className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-200" />
                    <span className="flex-1 ms-3 whitespace-nowrap text-sm font-extralight">
                      Design
                    </span>
                    {designClients.length > 0 && (
                      <span className="ms-3 font-bold text-[10px] absolute right-0 top-0 rounded-full bg-pink-300 text-white dark:bg-pink-900 dark:text-indigo-200 w-5 h-5 flex items-center justify-center">
                        {designClients.length}
                      </span>
                    )}
                  </Link>
                </li>

                {/** Development */}
                <li>
                  <Link
                    href="/admin/client/development"
                    className="flex items-center pl-5 text-gray-900 rounded-lg dark:text-white hover:text-indigo-500 dark:hover:text-indigo-200 group relative"
                  >
                    <Code className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-200" />
                    <span className="flex-1 ms-3 whitespace-nowrap text-sm font-extralight">
                      Development
                    </span>
                    {developmentClients.length > 0 && (
                      <span className="ms-3 font-bold text-[10px] absolute right-0 top-0 rounded-full bg-blue-300 text-white dark:bg-blue-900 dark:text-indigo-200 w-5 h-5 flex items-center justify-center">
                        {developmentClients.length}
                      </span>
                    )}
                  </Link>
                </li>

                {/** Revisions */}
                <li>
                  <Link
                    href="/admin/client/revisions"
                    className="flex items-center pl-5 text-gray-900 rounded-lg dark:text-white hover:text-indigo-500 dark:hover:text-indigo-200 group relative"
                  >
                    <History className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-200" />
                    <span className="flex-1 ms-3 whitespace-nowrap text-sm font-extralight">
                      Revisions
                    </span>
                    {revisionsClients.length > 0 && (
                      <span className="ms-3 font-bold text-[10px] absolute right-0 top-0 rounded-full bg-yellow-300 text-black dark:bg-yellow-500 dark:text-black w-5 h-5 flex items-center justify-center">
                        {revisionsClients.length}
                      </span>
                    )}
                  </Link>
                </li>

                {/** Done */}
                <li>
                  <Link
                    href="/admin/client/done"
                    className="flex items-center pl-5 text-gray-900 rounded-lg dark:text-white hover:text-indigo-500 dark:hover:text-indigo-200 group relative"
                  >
                    <CheckCircle className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-200" />
                    <span className="flex-1 ms-3 whitespace-nowrap text-sm font-extralight">
                      Done
                    </span>
                    {doneClients.length > 0 && (
                      <span className="ms-3 font-bold text-[10px] absolute right-0 top-0 rounded-full bg-green-300 text-black dark:bg-green-900 dark:text-indigo-200 w-5 h-5 flex items-center justify-center">
                        {doneClients.length}
                      </span>
                    )}
                  </Link>
                </li>
              </ul>
            </li>

            {/* Logout */}
            <li>
              <form action={signOutAction}>
                <button className="flex w-full items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group relative cursor-pointer">
                  <LogOut className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="ms-3">Logout</span>
                </button>
              </form>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
