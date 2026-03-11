export default function Piano() {
  return (
    <section id="piano" className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Beyond engineering.
        </h2>
      </div>

      <div className="group rounded-[28px] border border-black/10 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
        <div className="grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-center">
          <div className="max-w-lg">
            <p className="text-lg font-medium text-neutral-700">
              Piano performance and improvisation.
            </p>

            <p className="mt-6 text-base leading-8 text-neutral-600">
              Outside of software, I’m also a pianist with a strong focus on
              improvisation and expression. Music has long been one of my most
              meaningful creative outlets, and it continues to shape the way I
              think about discipline, refinement, and artistry.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-[240px] rounded-[32px] border border-black/10 bg-neutral-100 p-3 shadow-sm transition duration-300 group-hover:border-black/20">
              <div className="overflow-hidden rounded-[24px] bg-black">
                <video
                  className="block h-auto w-full transition duration-500 group-hover:scale-[1.01]"
                  controls
                  preload="metadata"
                  playsInline
                  poster="/piano-poster.png"
                >
                  <source src="/piano.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}