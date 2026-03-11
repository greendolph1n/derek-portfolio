export default function Navbar() {
  return (
    <header className="w-full border-b border-black/10">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="text-sm font-semibold tracking-tight">
          Derek Serrano
        </div>

        <nav className="flex items-center gap-6 text-sm text-neutral-600">
          <a href="#projects" className="transition hover:text-black">
            Projects
          </a>
          <a href="#experience" className="transition hover:text-black">
            Experience
          </a>
          <a href="#contact" className="transition hover:text-black">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}