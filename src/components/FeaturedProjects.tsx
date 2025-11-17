import Image from "next/image";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Luna Café",
      description:
        "A warm and inviting website for a local coffee shop. We focused on storytelling, modern layout, and a simple menu section that enhances customer engagement.",
      imgSrc: "/featured_projects/the_cafe.jpg",
      url: "#",
    },
    {
      title: "PureGlow Skincare",
      description:
        "An elegant online store for a skincare brand. Minimalist design and pastel tones reflect purity and trust while ensuring an easy shopping experience.",
      imgSrc: "/featured_projects/skincare.jpg",
      url: "#",
    },
    {
      title: "Flow Marketing Agency",
      description:
        "A bold one-page site for a creative marketing firm. Designed to convert visitors with clean typography, subtle animations, and effective CTAs.",
      imgSrc: "/featured_projects/marketing.jpg",
      url: "#",
    },
  ];

  return (
    <div id="portfolio">
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        {/* Background Image */}
        <Image
          src="/featured_projects/office.jpg"
          alt=""
          className="absolute inset-0 -z-10 w-full h-full object-cover object-right md:object-center opacity-10"
          width={2000}
          height={2000}
        />

        {/* Background Shapes */}
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-1097/845 w-[274.25px] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          ></div>
        </div>

        {/* Header */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
              Featured Projects
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-gray-300">
              A glimpse into our clean and minimal design style — built for
              impact and clarity.
            </p>
          </div>

          <p className="mt-30 italic text-red-300">Projects coming soon...</p>

          {/* Projects Grid
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
              >
                <a href={project.url}>
                  <Image
                    className="rounded-t-lg"
                    width={2000}
                    height={2000}
                    src={project.imgSrc}
                    alt={project.title}
                  />
                </a>
                <div className="p-5">
                  <a href={project.url}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {project.title}
                    </h5>
                  </a>
                  <p className="mb-3 text-gray-700 dark:text-gray-400">
                    {project.description}
                  </p>
                  <a
                    href={project.url}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
