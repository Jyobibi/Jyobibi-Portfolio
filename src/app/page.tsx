import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Navigation */}
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#" className="text-xl font-bold">
          SUBIN JO
        </a>

        <div className="hidden gap-8 text-sm md:flex">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#activities">Activities</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col items-start justify-center gap-12 px-6 py-16 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-4 text-lg text-zinc-500">
            Backend Developer Portfolio
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            안녕하세요,
            <br />
            조수빈입니다.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
            사용자에게 필요한 기능을 안정적인 구조로 구현하는
            Backend Developer를 목표로 성장하고 있습니다.
          </p>

          <p className="mt-4 text-sm text-zinc-500">
            Computer Software Student · Backend · AI / LLM
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-zinc-900 px-5 py-3 text-sm font-medium text-white"
            >
              View Projects
            </a>

            <a
              href="https://github.com/Jyobibi"
              target="_blank"
              className="rounded-lg border border-zinc-300 px-5 py-3 text-sm font-medium"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="w-full max-w-[320px] shrink-0">
          <Image
            src="/subinjo.jpg"
            alt="조수빈 프로필 사진"
            width={320}
            height={400}
            className="h-auto w-full rounded-2xl border border-zinc-200 object-cover shadow-sm"
          />
        </div>

      </section>
    </main>
  );
}