import {
  Globe,
  MousePointer,
  Rocket,
  Search,
  Settings,
  ShoppingCart,
} from "lucide-react";

export default function WhatWeDo() {
  return (
    <div id="services" className="relative">
      <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 dark:opacity-20"
          ></div>
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
            Services
          </h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl dark:text-white">
            What We Do
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8 dark:text-gray-400">
          From design to launch, we craft websites that are not only beautiful
          but also functional and fast.
        </p>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-2 items-center gap-y-2 sm:mt-20 sm:gap-6 lg:max-w-6xl lg:grid-cols-3">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <Globe className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Website Design &<br />
              Development
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Create stunning, responsive website that reflects your
              brand&lsquo;s personality - from simple sites to complex
              enterprise solutions.
            </p>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <ShoppingCart className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              E-commerce
              <br />
              Website Setup
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Sell your products online with secure, scalable WooCommerce stores
              that grow with your business.
            </p>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <MousePointer className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Landing Page
              <br />
              Design
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Optimized for conversions — perfect for product launches,
              marketing campaigns, or enterprise promotions.
            </p>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <Settings className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Website Maintenance &<br />
              Great Support
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Keep your site updated, secure, and running smoothly with ongoing
              support packages tailored to your needs.
            </p>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <Search className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              SEO & Digital
              <br />
              Strategy
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Help your website get discovered on Google with comprehensive SEO
              strategies and optimized page structures.
            </p>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <Rocket className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Website Performance
              <br />
              Optimization
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              We enhance your website’s speed, security, and overall performance
              to ensure a smooth user experience and better search rankings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
