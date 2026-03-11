export default function Contact() {
  return (
<footer id="contact" className="border-t border-black/10 scroll-mt-24">
  <div className="mx-auto flex min-h-[40vh] max-w-5xl flex-col justify-center gap-6 px-6 py-20 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            Let&apos;s connect.
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Open to software opportunities, interesting projects, and thoughtful
            conversations about engineering.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-neutral-600">
          <a href="https://github.com/greendolph1n" className="hover:text-black">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/derek-serrano/" className="hover:text-black">
            LinkedIn
          </a>
          <a href="mailto:derek.joab@icloud.com" className="hover:text-black">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}