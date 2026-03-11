const projects = [
  {
    title: "Hephaestus — Gesture-Based 3D Modelling System",
    description:
      "A gesture-controlled 3D modelling application that enables basic CAD operations using hand tracking from a webcam. Built with Python, Open3D, and PySide6, with gesture recognition powered by Google MediaPipe and communication between ML and UI subsystems handled through a custom TCP protocol.",
    tags: ["Python", "Open3D", "PySide6", "MediaPipe", "TCP"],
    github: "https://github.com/noahbetik/Hephaestus",
    video: "https://www.youtube.com/embed/exWLhkqOrlg?modestbranding=1&rel=0",
    demo: "https://www.youtube.com/watch?v=exWLhkqOrlg",
  },
  {
    title: "CryptoTrader",
    description:
      "An automated cryptocurrency trading system built during a hackathon. The platform analyzes market data and executes trades using algorithmic strategies while providing a real-time dashboard for monitoring performance.",
    tags: ["Python", "APIs", "Algorithmic Trading", "Finance"],
    github: "https://github.com/greendolph1n/CryptoTrader",
    video: "https://www.youtube.com/embed/S8L2iBN94BE?modestbranding=1&rel=0",
    demo: "https://www.youtube.com/watch?v=S8L2iBN94BE",
    devpost:
      "https://devpost.com/software/cryptotrader-4t8z5a?ref_content=user-portfolio&ref_feature=in_progress",
  },
  {
    title: "HobbyFinder",
    description:
      "A web application that connects users based on shared interests and recommends new hobbies using machine learning. Implemented a K-means clustering model to analyze user preferences and generate personalized hobby suggestions.",
    tags: ["React", "Bootstrap", "Machine Learning", "Firestore"],
    github: "https://github.com/minericpark/hobbyapp",
  },
];

export default function Projects() {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-12">
        <p className="mb-3 text-sm text-neutral-500">Selected Work</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Projects and technical work.
        </h2>
      </div>

      <div className="space-y-6">
        <div className="rounded-[28px] border border-black/10 bg-white p-8 sm:p-10">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm text-neutral-500">Featured Project</p>
              <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {featuredProject.title}
              </h3>
            </div>

            <div className="flex gap-4 text-sm text-neutral-600">
              {featuredProject.github && (
                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 transition hover:text-black"
                >
                  GitHub
                </a>
              )}

              {featuredProject.demo && (
                <a
                  href={featuredProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 transition hover:text-black"
                >
                  Demo
                </a>
              )}
            </div>
          </div>

          {featuredProject.video && (
            <div className="mb-8 overflow-hidden rounded-2xl border border-black/10">
              <div className="aspect-video w-full">
                <iframe
                  src={featuredProject.video}
                  title={featuredProject.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          <div className="max-w-3xl">
            <p className="text-base leading-8 text-neutral-600 sm:text-lg">
              {featuredProject.description}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {featuredProject.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-black/10 px-3 py-1 text-xs text-neutral-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="rounded-[28px] border border-black/10 bg-white p-8 transition-shadow hover:shadow-md"
            >
              <h3 className="text-2xl font-semibold tracking-tight">
                {project.title}
              </h3>

              {project.video && (
                <div className="mt-5 overflow-hidden rounded-2xl border border-black/10">
                  <div className="aspect-video w-full">
                    <iframe
                      src={project.video}
                      title={project.title}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              <p className="mt-5 max-w-xl text-sm leading-6 text-neutral-600">
                {project.description}
              </p>

              {(project.github || project.demo || project.devpost) && (
                <div className="mt-6 flex flex-wrap gap-4 text-sm text-neutral-600">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 hover:text-black"
                    >
                      GitHub
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 hover:text-black"
                    >
                      Demo
                    </a>
                  )}

                  {project.devpost && (
                    <a
                      href={project.devpost}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 hover:text-black"
                    >
                      Devpost
                    </a>
                  )}
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/10 px-3 py-1 text-xs text-neutral-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div> 
      </div>
    </section>
  );
}