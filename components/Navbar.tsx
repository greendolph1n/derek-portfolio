export default function Navbar() {
  return (
    <header className="w-full border-b border-black/10">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
<div className="text-base font-semibold tracking-tight text-neutral-900">
  Derek Serrano
</div>

        <nav className="flex items-center gap-6 text-sm text-neutral-600">
          <a href="#projects" className="transition hover:text-black">
            Projects
          </a>
          <a
            href="/serrano_resume_2026.pdf"
            className="transition hover:text-black"
          >
            Resume
          </a>
          <a href="#contact" className="transition hover:text-black">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
