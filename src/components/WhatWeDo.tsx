import {
  Globe,
  MousePointer,
  Rocket,
  Search,
  Settings,
  ShoppingCart,
} from "lucide-react";

export default function WhatWeDo() {
  const services = [
    {
      Icon: Globe,
      title: "Website Design & Development",
      description:
        "Create stunning, responsive websites that reflect your brand’s personality—from simple sites to complex enterprise solutions.",
    },
    {
      Icon: ShoppingCart,
      title: "E-commerce Website Setup",
      description:
        "Sell your products online with secure, scalable WooCommerce stores that grow with your business.",
    },
    {
      Icon: MousePointer,
      title: "Landing Page Design",
      description:
        "Optimized for conversions — perfect for product launches, marketing campaigns, or enterprise promotions.",
    },
    {
      Icon: Settings,
      title: "Website Maintenance & Support",
      description:
        "Keep your site updated, secure, and running smoothly with ongoing support packages tailored to your needs.",
    },
    {
      Icon: Search,
      title: "SEO & Digital Strategy",
      description:
        "Help your website get discovered on Google with comprehensive SEO strategies and optimized page structures.",
    },
    {
      Icon: Rocket,
      title: "Website Performance Optimization",
      description:
        "We enhance your website’s speed, security, and overall performance to ensure a smooth user experience and better search rankings.",
    },
  ];

  return (
    <div id="services" className="relative">
      <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900">
        {/* Background Blur */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 dark:opacity-10"
          ></div>
        </div>

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-base font-semibold text-indigo-600 dark:text-indigo-400">
            Services
          </h2>
          <p className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">
            What We Do
          </p>
        </div>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-600 sm:text-xl dark:text-gray-400">
          From design to launch, we craft websites that are not only beautiful
          but also functional and fast.
        </p>

        {/* Services Grid */}
        <div className="mx-auto mt-16 grid max-w-full grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:max-w-6xl">
          {services.map(({ Icon, title, description }, idx) => (
            <div
              key={idx}
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
            >
              <Icon className="w-10 h-10 text-gray-500 dark:text-gray-400 mb-4" />
              <h5 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                {title}
              </h5>
              <p className="text-base text-gray-500 dark:text-gray-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
