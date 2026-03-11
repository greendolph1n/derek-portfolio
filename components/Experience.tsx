export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-12">
        <p className="mb-3 text-sm text-neutral-500">Experience</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Professional background.
        </h2>
      </div>

      <div className="rounded-2xl border border-black/10 p-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
          <div>
            <h3 className="text-xl font-semibold">Software Developer</h3>
            <p className="mt-1 text-neutral-600">Intact</p>
          </div>

          <p className="text-sm text-neutral-500">2024 — Present</p>
        </div>

        <div className="mt-6 space-y-4 text-sm leading-7 text-neutral-600">
          <p>
            Contributed to backend development in a large-scale enterprise
            environment, working with Java and Spring Boot services across a
            distributed system.
          </p>

          <p>
            Investigated defects, implemented fixes, and supported business
            workflows by improving service reliability and maintainability.
          </p>

          <p>
            Worked across backend and web application layers while building a
            stronger foundation in modern software engineering practices.
          </p>
        </div>
      </div>
    </section>
  );
}