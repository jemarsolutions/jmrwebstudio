import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <div>
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
          <div className="flex lg:hidden">
            <button
              type="button"
              data-command="show-modal"
              data-commandfor="mobile-menu"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                data-slot="icon"
                aria-hidden="true"
                className="size-6"
              >
                <path
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="#about"
              className="text-sm/6 font-semibold text-gray-900 dark:text-white"
            >
              About
            </a>
            <a
              href="#services"
              className="text-sm/6 font-semibold text-gray-900 dark:text-white"
            >
              Servicecs
            </a>
            <a
              href="#portfolio"
              className="text-sm/6 font-semibold text-gray-900 dark:text-white"
            >
              Portfolio
            </a>
            <a
              href="#whychoose"
              className="text-sm/6 font-semibold text-gray-900 dark:text-white"
            >
              Why Choose JMR
            </a>
            {/* <a
              href="#testimonials"
              className="text-sm/6 font-semibold text-gray-900 dark:text-white"
            >
              Testimonials
            </a> */}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#contact"
              className="text-sm/6 font-semibold text-gray-900 dark:text-white flex align-middle items-center gap-2"
            >
              Get Started <span aria-hidden="true">&rarr;</span>
              <div>
                <ModeToggle />
              </div>
            </a>
          </div>
        </nav>
        <dialog id="mobile-menu" className="backdrop:bg-transparent lg:hidden">
          <div tabIndex={0} className="fixed inset-0 focus:outline-none">
            <div
              role="dialog"
              aria-modal="true"
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900 dark:sm:ring-gray-100/10"
            >
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <p className="font-bold text-xl">
                    JMR{" "}
                    <span className="font-extralight text-indigo-600 dark:text-indigo-300">
                      Web Studio
                    </span>
                  </p>
                  <p className="font-bold text-xl">
                    JMR{" "}
                    <span className="font-extralight text-indigo-600 dark:text-indigo-300">
                      Web Studio
                    </span>
                  </p>
                </a>
                <button
                  type="button"
                  data-command="close"
                  data-commandfor="mobile-menu"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    data-slot="icon"
                    aria-hidden="true"
                    className="size-6"
                  >
                    <path
                      d="M6 18 18 6M6 6l12 12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10 dark:divide-white/10">
                  <div className="space-y-2 py-6">
                    <a
                      href="#about"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                    >
                      About
                    </a>
                    <a
                      href="#services"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                    >
                      Services
                    </a>
                    <a
                      href="#portfolio"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                    >
                      Portfolio
                    </a>
                    <a
                      href="#whychoose"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                    >
                      Why Choose JMR
                    </a>
                    {/* <a
                        href="#testimonials"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                      >
                        Testimonials
                      </a> */}
                  </div>
                  <div className="py-6">
                    <a
                      href="#contact"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                    >
                      Get Started
                      <ModeToggle />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      </header>
    </div>
  );
}
