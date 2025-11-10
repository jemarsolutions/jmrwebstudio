import { Heart, Lightbulb, Palette, TrendingUp } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <div id="whychoose">
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
            Why Choose
          </h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl dark:text-white">
            JMR Web Studio
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8 dark:text-gray-400">
          We&lsquo;re not just about websites — we&lsquo;re about helping
          businesses of all sizes achieve their digital goals.
        </p>
        <div className="max-w-240 px-4 mt-10 sm:px-6 lg:px-8 lg:mt-15 mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 items-center gap-6 md:gap-10">
            <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900">
              <div className="flex items-center gap-x-4 mb-3">
                <div className="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                  <Lightbulb className="shrink-0 size-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="shrink-0">
                  <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                    Modern Minimal Design
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 dark:text-neutral-400">
                Clean and timeless design focused on user experience.
              </p>
            </div>

            <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900">
              <div className="flex items-center gap-x-4 mb-3">
                <div className="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                  <Palette className="shrink-0 size-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="shrink-0">
                  <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                    Tailored to You
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 dark:text-neutral-400">
                Every website is custom-made to fit your brand and audience.
              </p>
            </div>

            <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900">
              <div className="flex items-center gap-x-4 mb-3">
                <div className="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                  <TrendingUp className="shrink-0 size-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="shrink-0">
                  <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                    Optimized for Growth
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 dark:text-neutral-400">
                Fast, responsive, and SEO-friendly to help your business perform
                online.
              </p>
            </div>

            <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900">
              <div className="flex items-center gap-x-4 mb-3">
                <div className="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                  <Heart className="shrink-0 size-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="shrink-0">
                  <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                    Personal Approach
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 dark:text-neutral-400">
                You work directly with a small, dedicated team that truly cares
                about your success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
