export default function Piano() {
  return (
    <section id="piano" className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-12">
        <p className="mb-3 text-sm text-neutral-500">Beyond Engineering</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Piano and creative work.
        </h2>
      </div>

      <div className="rounded-[28px] border border-black/10 bg-white p-8 sm:p-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Piano Performance & Improvisation
            </h3>

            <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-600">
              Outside of software, I’m also a pianist with a strong focus on
              improvisation, expression, and musical interpretation. Piano has
              been one of the most consistent creative disciplines in my life,
              and it continues to shape how I think about refinement, patience,
              and long-term growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Piano", "Improvisation", "Performance", "Creative Work"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/10 px-3 py-1 text-xs text-neutral-700"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-black/10 bg-neutral-50 p-6">
            <p className="text-sm text-neutral-500">Featured Clip</p>

            <h4 className="mt-2 text-lg font-semibold tracking-tight">
              Instagram Performance
            </h4>

            <p className="mt-3 text-sm leading-7 text-neutral-600">
              A short performance clip from my piano page.
            </p>

            <a
              href="https://www.instagram.com/p/DD0lsxBpyy7/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-85"
            >
              View on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}