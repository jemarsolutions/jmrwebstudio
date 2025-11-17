"use client";

import { useState, useRef } from "react";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDialogElement>(null);

  const openMenu = () => {
    setMobileMenuOpen(true);
    mobileMenuRef.current?.showModal();
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    mobileMenuRef.current?.close();
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <p className="font-bold text-xl">
              JMR{" "}
              <span className="font-extralight text-indigo-600 dark:text-indigo-300">
                Web Studio
              </span>
            </p>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden gap-2">
          <button
            type="button"
            onClick={openMenu}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-6 h-6"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <ModeToggle />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex lg:gap-x-12">
          <a
            href="#about"
            className="text-sm font-semibold text-gray-900 dark:text-white"
          >
            About
          </a>
          <a
            href="#services"
            className="text-sm font-semibold text-gray-900 dark:text-white"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="text-sm font-semibold text-gray-900 dark:text-white"
          >
            Portfolio
          </a>
          <a
            href="#whychoose"
            className="text-sm font-semibold text-gray-900 dark:text-white"
          >
            Why Choose JMR
          </a>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#contact"
            className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2"
          >
            Get Started <span aria-hidden="true">&rarr;</span>
            <ModeToggle />
          </a>
        </div>
      </nav>

      {/* Mobile Menu Dialog */}
      <dialog ref={mobileMenuRef} className="backdrop:bg-black/30 lg:hidden">
        <div className="fixed inset-0 flex justify-end">
          <div className="w-full max-w-sm bg-white dark:bg-gray-900 p-6 overflow-y-auto sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <p className="font-bold text-xl">
                  JMR{" "}
                  <span className="font-extralight text-indigo-600 dark:text-indigo-300">
                    Web Studio
                  </span>
                </p>
              </a>
              <button
                type="button"
                onClick={closeMenu}
                className="-m-2.5 p-2.5 text-gray-700 dark:text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-6 h-6"
                >
                  <path
                    d="M6 18 18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-6 space-y-2">
              <a
                href="#about"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
              >
                About
              </a>
              <a
                href="#services"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
              >
                Portfolio
              </a>
              <a
                href="#whychoose"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
              >
                Why Choose JMR
              </a>
              <a
                href="#contact"
                className="rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5 flex items-center gap-2"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </dialog>
    </header>
  );
}
