import { Globe, Target, TrendingUp, Wrench } from "lucide-react";

export default function About() {
  return (
    <div id="about">
      <div className="bg-gray-100 py-24 sm:py-32 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-[#7B61FF] dark:text-[#7B61FF]">
              About
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance dark:text-white">
              JMR{" "}
              <span className="font-extralight text-indigo-600 dark:text-indigo-300">
                Web Studio
              </span>
            </p>
            <p className="mt-6 text-lg/8 text-gray-700 dark:text-gray-300">
              At JMR Web Studio, we believe that simplicity drives results. We
              create modern, minimal, and fully responsive websites tailored to
              your brand&lsquo;s story — no clutter, no confusion, just clean
              design that connects with your audience.
            </p>
            <p className="mt-6 text-lg/8 text-gray-700 dark:text-gray-300">
              Whether you&lsquo;re a startup finding your footing, a growing
              business scaling up, or an established enterprise refreshing your
              digital presence — we&lsquo;re here to help you look your best
              online.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900 dark:text-white">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-500">
                    <Globe className="size-6 text-white" />
                  </div>
                  Based in the Philippines
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600 dark:text-gray-400">
                  We are based in the Philippines, but with our skills and
                  expertise, we are fully capable of serving businesses from
                  around the world.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900 dark:text-white">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-500">
                    <Wrench className="size-6 text-white" />
                  </div>
                  WordPress + Elementor Expert
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600 dark:text-gray-400">
                  We craft custom, responsive WordPress websites using Elementor
                  or any preferred tools to match each client&lsquo;s vision.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900 dark:text-white">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-500">
                    <Target className="size-6 text-white" />
                  </div>
                  Serving All Business Sizes
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600 dark:text-gray-400">
                  We provide tailored web solutions for businesses of all sizes
                  — from startups to established enterprises.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900 dark:text-white">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-500">
                    <TrendingUp className="size-6 text-white" />
                  </div>
                  Delivering Quality and Results
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600 dark:text-gray-400">
                  We focus on excellence in every project, ensuring top-quality
                  output and meaningful results for our clients.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
