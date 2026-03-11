export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">

      <div className="absolute w-[600px] h-[600px] bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-3xl px-6 text-center">
        <h1 className="text-6xl font-bold mb-6">
          Derek Serrano
        </h1>

        <p className="text-xl text-neutral-400 mb-8">
          Software developer building scalable backend systems and
          thoughtful digital experiences.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition">
            View Projects
          </button>

          <button className="px-6 py-3 border border-neutral-700 rounded-lg hover:border-neutral-400 transition">
            Contact
          </button>
        </div>
      </div>

    </main>
  );
}