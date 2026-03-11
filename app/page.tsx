import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm text-neutral-500">Software Developer</p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Building thoughtful software with a focus on backend systems and clean user experiences.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            I’m Derek Serrano, a software developer with experience working on
            Java Spring Boot services and modern web applications. I care about
            building reliable systems, writing clean code, and growing into a
            stronger engineer over time.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="#projects"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-85"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-black/15 px-6 py-3 text-sm font-medium text-black transition hover:bg-black/5"
            >
              Contact
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}