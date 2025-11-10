import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <footer className="mt-auto w-full py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-white dark:bg-gray-900">
        <div className="text-center">
          <div>
            <a
              className="flex-none text-xl font-semibold text-black dark:text-white"
              href="#"
              aria-label="Brand"
            >
              <p className="font-bold text-xl">
                JMR{" "}
                <span className="font-extralight text-indigo-600 dark:text-indigo-300">
                  Web Studio
                </span>
              </p>
            </a>
          </div>

          <div className="mt-3">
            <p className="text-gray-500 dark:text-neutral-500">
              Clean. Fast. Designed to Convert.
            </p>
            <p className="text-gray-500 dark:text-neutral-500">
              © 2025 JMR Web Studio.
            </p>
          </div>

          <div className="mt-3 space-x-2">
            <a
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              href="#"
            >
              <Instagram className="shrink-0 size-3.5" />
            </a>
            <a
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              href="#"
            >
              <Facebook className="shrink-0 size-3.5" />
            </a>
            <a
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              href="#"
            >
              <Linkedin className="shrink-0 size-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
