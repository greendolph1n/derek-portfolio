import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Piano from "@/components/Piano";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-white to-neutral-100 text-black">
      {" "}
      <Navbar />
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm text-neutral-500">Software Engineer</p>
          <h1 className="text-5xl font-semibold tracking-tight leading-[1.05] sm:text-7xl">
            Building thoughtful software and reliable systems.{" "}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            I’m Derek Serrano, a software engineer and pianist with a passion
            for building thoughtful systems and exploring creative ideas through
            technology. I enjoy solving complex problems, writing clean code,
            and continuously improving both as an engineer and a person.
          </p>

          <div className="mt-12 flex gap-4">
            <a
              href="#projects"
              className="flex items-center gap-1 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition duration-200 hover:-translate-y-[1px] hover:shadow-md active:translate-y-0"
            >
              View Projects
            </a>
            <a
              href="/serrano_resume_2026.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 rounded-full border border-black/15 px-6 py-3 text-sm font-medium text-black transition duration-200 hover:-translate-y-[1px] hover:bg-black/5 hover:shadow-sm"
            >
              Resume
            </a>
          </div>
          <div className="mt-20 h-px w-full bg-black/5" />
          
        </div>
      </section>
      <Projects />
      <Piano />
      <Contact />
    </main>
  );
}
