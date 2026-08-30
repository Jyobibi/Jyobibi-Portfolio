"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import { projects } from "@/data/projects";

/* ========================================
   Skills Data
======================================== */

const skills = [
  {
    title: "Languages",
    items: ["Python", "C", "C#", "JavaScript"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["FastAPI", "React", "Next.js"],
  },
  {
    title: "AI / LLM",
    items: ["Gemini API", "LLM API", "Prompt Engineering"],
  },
  {
    title: "Development Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Visual Studio",
      "Notion",
      "Figma",
    ],
  },
];

/* ========================================
   Activities Data
======================================== */

const activities = [
  {
    period: "2026 - Present",
    title: "HCI Research Lab",
    role: "Undergraduate Researcher",
    description:
      "HCI 분야를 중심으로 연구 주제를 탐색하고 학술 활동을 준비하고 있습니다.",
  },
  {
    period: "2026",
    title: "컴퓨터소프트웨어전공 학생회",
    role: "정책부장",
    description:
      "학과 행사 기획 및 운영과 학생회 내부 일정 조율 및 커뮤니케이션을 담당했습니다.",
  },
  {
    period: "2026",
    title: "Python Study",
    role: "Team Leader",
    description:
      "Python 학습 스터디를 운영하며 학습 일정과 팀 활동을 관리했습니다.",
  },
];

/* ========================================
   Archive Data
======================================== */

const archives = [
  {
    date: "2026.08.27",
    title: "산업인공지능기술 세미나",
    description:
      "로봇 AI와 비전·로봇 AI 모델 경량화 기술에 대한 강연을 들었습니다.",
    image: "/archive/260827industrial-ai-seminar.jpg",
  }
];

export default function Home() {
  /* ========================================
     Project Modal State
  ======================================== */

  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);
  const archiveScrollRef = useRef<HTMLDivElement>(null);

  const [showArchiveModal, setShowArchiveModal] =
    useState(false);

  return (
    <main className="min-h-screen bg-white text-zinc-900">

      {/* ========================================
          Navigation
      ======================================== */}

      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#" className="text-xl font-bold">
          SUBIN JO
        </a>

        <div className="hidden gap-8 text-sm md:flex">
          <a
            href="#about"
            className="transition-colors hover:text-zinc-500"
          >
            About
          </a>

          <a
            href="#skills"
            className="transition-colors hover:text-zinc-500"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="transition-colors hover:text-zinc-500"
          >
            Projects
          </a>

          <a
            href="#activities"
            className="transition-colors hover:text-zinc-500"
          >
            Activities
          </a>

          <a
            href="#archive"
            className="transition-colors hover:text-zinc-500"
          >
            Archive
          </a>

          <a
            href="#contact"
            className="transition-colors hover:text-zinc-500"
          >
            Contact
          </a>

        </div>
      </nav>

      {/* ========================================
          Hero
      ======================================== */}

      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col items-start justify-center gap-12 px-6 py-16 md:flex-row md:items-center md:justify-between">

        {/* 왼쪽 소개 */}
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
            사용자에게 필요한 기능을 안정적인 구조로 구현하는 Backend
            Developer를 목표로 성장하고 있습니다.
          </p>

          <p className="mt-4 text-sm text-zinc-500">
            Computer Software Student · Backend · AI / LLM
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
            >
              View Projects
            </a>

            <a
              href="https://github.com/Jyobibi"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-zinc-300 px-5 py-3 text-sm font-medium transition-colors hover:bg-zinc-100"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        {/* 오른쪽 프로필 사진 */}
        <div className="w-full max-w-[320px] shrink-0">
          <Image
            src="/SUBINJO.JPG"
            alt="조수빈 프로필 사진"
            width={320}
            height={400}
            priority
            className="h-auto w-full rounded-2xl border border-zinc-200 object-cover shadow-sm"
          />
        </div>
      </section>

      {/* ========================================
          About
      ======================================== */}

      <section
        id="about"
        className="border-t border-zinc-200 bg-zinc-50 py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-500">
            About
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            About Me
          </h2>

          <div className="mt-12 grid gap-12 md:grid-cols-2">

            {/* 자기소개 */}
            <div>
              <p className="text-xl font-medium leading-9">
                백엔드 개발을 중심으로 다양한 기술을 배우고 있는
                컴퓨터소프트웨어전공 학생입니다.
              </p>

              <p className="mt-6 leading-8 text-zinc-600">
                웹 서비스의 데이터 흐름과 서버 구조에 관심을 가지고 있으며,
                프로젝트를 통해 직접 구현하고 이해하는 경험을 쌓아가고
                있습니다. 최근에는 LLM 기반 서비스와 AI 엔진 설계에도
                관심을 가지고 개발과 연구를 진행하고 있습니다.
              </p>
            </div>

            {/* 기본 정보 */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
              <div>
                <p className="text-sm text-zinc-500">
                  Name
                </p>

                <p className="mt-2 font-medium">
                  조수빈
                </p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Major
                </p>

                <p className="mt-2 font-medium">
                  컴퓨터소프트웨어전공
                </p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Education
                </p>

                <p className="mt-2 font-medium">
                  Undergraduate · 2nd Year
                </p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Interest
                </p>

                <p className="mt-2 font-medium">
                  Backend · AI / LLM
                </p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  GitHub
                </p>

                <a
                  href="https://github.com/Jyobibi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block font-medium hover:underline"
                >
                  github.com/Jyobibi ↗
                </a>
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Email
                </p>

                <p className="mt-2 font-medium">
                  이메일 입력 예정
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          Skills
      ======================================== */}

      <section
        id="skills"
        className="py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-500">
            Skills
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Skills & Tools
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-zinc-600">
            프로젝트와 학습 과정에서 사용해 본 기술과 개발 도구입니다.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {skills.map((skill) => (
              <article
                key={skill.title}
                className="rounded-2xl border border-zinc-200 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-xl font-semibold">
                  {skill.title}
                </h3>

                <div className="mt-6 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-zinc-100 px-3 py-2 text-sm text-zinc-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          Projects
      ======================================== */}

      <section
        id="projects"
        className="border-t border-zinc-200 bg-zinc-50 py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-500">
            Projects
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Selected Projects
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-zinc-600">
            직접 참여하고 개발한 프로젝트와 담당 역할을 소개합니다.
          </p>

          {/* Project List */}
          <div className="mt-14 space-y-12">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="grid overflow-hidden rounded-3xl border border-zinc-200 bg-white lg:grid-cols-[0.9fr_1.1fr]"
              >

                {/* 프로젝트 설명 */}
                <div className="flex flex-col p-8 md:p-10">
                  <div>
                    <p className="text-sm font-medium text-zinc-500">
                      {project.category}
                    </p>

                    <h3 className="mt-4 text-3xl font-bold">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm text-zinc-500">
                      {project.period}
                    </p>
                  </div>

                  <p className="mt-8 text-lg leading-8 text-zinc-600">
                    {project.description}
                  </p>

                  <div className="mt-6">
                    <p className="text-sm text-zinc-500">
                      Role
                    </p>

                    <p className="mt-1 font-medium">
                      {project.role}
                    </p>
                  </div>

                  {/* 기술스택 */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-zinc-100 px-3 py-2 text-sm text-zinc-600"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* 버튼 */}
                  <div className="mt-auto flex flex-wrap gap-3 pt-10">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="rounded-lg bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
                    >
                      View Project →
                    </button>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-zinc-300 px-5 py-3 text-sm font-medium transition-colors hover:bg-zinc-100"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>

                {/* 프로젝트 대표 이미지 */}
                <div className="relative min-h-[320px] bg-zinc-100 lg:min-h-[480px]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} 프로젝트 대표 이미지`}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full min-h-[320px] items-center justify-center text-sm text-zinc-400 lg:min-h-[480px]">
                      Project Image
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          Activities
      ======================================== */}

      <section
        id="activities"
        className="border-t border-zinc-200 bg-white py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-500">
            Activities
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Activities & Experience
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-zinc-600">
            대학 생활 동안 참여한 연구, 학생회, 스터디 등의 활동입니다.
          </p>

          <div className="mt-14">
            {activities.map((activity) => (
              <article
                key={`${activity.title}-${activity.period}`}
                className="grid gap-6 border-t border-zinc-200 py-10 md:grid-cols-[180px_1fr]"
              >

                {/* 기간 */}
                <div>
                  <p className="text-sm text-zinc-500">
                    {activity.period}
                  </p>
                </div>

                {/* 활동 내용 */}
                <div className="grid gap-4 md:grid-cols-[1fr_180px]">
                  <div>
                    <h3 className="text-xl font-semibold">
                      {activity.title}
                    </h3>

                    <p className="mt-2 leading-7 text-zinc-600">
                      {activity.description}
                    </p>
                  </div>

                  <div className="md:text-right">
                    <p className="text-sm font-medium text-zinc-600">
                      {activity.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          Archive
      ======================================== */}

      <section
        id="archive"
        className="border-t border-zinc-200 bg-zinc-50 py-24"
      >
        <div className="mx-auto max-w-6xl px-6">

          {/* Archive Header */}
          <div className="flex items-end justify-between gap-6">

            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-500">
                Archive
              </p>

              <h2 className="text-3xl font-bold md:text-4xl">
                My History
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-zinc-600">
                세미나, 학회, 프로젝트와 교내 활동의 순간들을 기록합니다.
              </p>
            </div>


            {/* 전체보기 */}
            <button
              onClick={() => setShowArchiveModal(true)}
              className="shrink-0 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
            >
              전체보기 ↗
            </button>

          </div>



          {/* Archive Slider */}
          <div className="relative mt-12">

            <div
              ref={archiveScrollRef}
              className="flex snap-x snap-mandatory gap-6 overflow-x-hidden"
            >

              {archives.map((archive) => (

                  <article
                    key={`${archive.date}-${archive.title}`}
                    className="w-[85%] shrink-0 snap-start sm:w-[48%] lg:w-[31%]"
                  >

                  {/* 사진 */}
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-200">

                    {archive.image ? (

                      <Image
                        src={archive.image}
                        alt={`${archive.title} 활동 사진`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />

                    ) : (

                      <div className="flex h-full items-center justify-center text-sm text-zinc-400">
                        Activity Photo
                      </div>

                    )}

                  </div>


                  {/* 날짜 */}
                  <p className="mt-5 text-sm text-zinc-500">
                    {archive.date}
                  </p>


                  {/* 제목 */}
                  <h3 className="mt-2 text-xl font-semibold">
                    {archive.title}
                  </h3>


                  {/* 설명 */}
                  <p className="mt-3 leading-7 text-zinc-600">
                    {archive.description}
                  </p>

                </article>

              ))}

            </div>



            {/* 이전 / 다음 버튼 */}
            <div className="mt-8 flex justify-end gap-3">

              <button
                onClick={() =>
                  archiveScrollRef.current?.scrollBy({
                    left: -360,
                    behavior: "smooth",
                  })
                }
                className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 bg-white text-xl transition-colors hover:bg-zinc-100"
                aria-label="이전 활동"
              >
                ‹
              </button>


              <button
                onClick={() =>
                  archiveScrollRef.current?.scrollBy({
                    left: 360,
                    behavior: "smooth",
                  })
                }
                className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 bg-white text-xl transition-colors hover:bg-zinc-100"
                aria-label="다음 활동"
              >
                ›
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================
          Contact
      ======================================== */}

      <section
        id="contact"
        className="border-t border-zinc-200 bg-white py-24"
      >
        <div className="mx-auto max-w-6xl px-6">

          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-500">
            Contact
          </p>

          <div className="grid gap-12 md:grid-cols-2 md:items-end">

            {/* 왼쪽 */}
            <div>
              <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                함께 이야기하고
                <br />
                만들어가고 싶습니다.
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-zinc-600">
                백엔드와 AI를 중심으로 다양한 개발 경험을 쌓아가고 있습니다.
                프로젝트, 연구, 협업에 관한 연락은 언제든지 환영합니다.
              </p>
            </div>


            {/* 오른쪽 */}
            <div className="space-y-6 md:text-right">

              {/* Email */}
              <div>
                <p className="text-sm text-zinc-500">
                  Email
                </p>

                <a
                  href="mailto:이메일주소"
                  className="mt-2 inline-block text-lg font-medium hover:underline"
                >
                  이메일주소
                </a>
              </div>


              {/* GitHub */}
              <div>
                <p className="text-sm text-zinc-500">
                  GitHub
                </p>

                <a
                  href="https://github.com/Jyobibi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-lg font-medium hover:underline"
                >
                  github.com/Jyobibi ↗
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================
          Footer
      ======================================== */}

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 SUBIN JO
          </p>

          <p>
            Backend Developer Portfolio
          </p>

        </div>
      </footer>

      {/* ========================================
          Archive All Modal
      ======================================== */}

      {showArchiveModal && (

        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setShowArchiveModal(false)}
        >

          <div
            className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-3xl bg-white p-8 md:p-12"
            onClick={(event) => event.stopPropagation()}
          >

            {/* 닫기 */}
            <button
              onClick={() => setShowArchiveModal(false)}
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-xl transition-colors hover:bg-zinc-200"
              aria-label="히스토리 전체보기 닫기"
            >
              ×
            </button>


            {/* Header */}
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
                Archive
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                My History
              </h2>

              <p className="mt-4 text-zinc-600">
                지금까지의 활동 기록을 한눈에 확인할 수 있습니다.
              </p>
            </div>


            {/* Album */}
            <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">

              {archives.map((archive) => (

                <article
                  key={`modal-${archive.date}-${archive.title}`}
                >

                  {/* 사진 */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-200">

                    {archive.image ? (

                      <Image
                        src={archive.image}
                        alt={`${archive.title} 활동 사진`}
                        fill
                        className="object-cover"
                      />

                    ) : (

                      <div className="flex h-full items-center justify-center text-sm text-zinc-400">
                        Activity Photo
                      </div>

                    )}

                  </div>


                  {/* 날짜 */}
                  <p className="mt-5 text-sm text-zinc-500">
                    {archive.date}
                  </p>


                  {/* 큰 제목 */}
                  <h3 className="mt-2 text-xl font-semibold">
                    {archive.title}
                  </h3>

                </article>

              ))}

            </div>

          </div>

        </div>

      )}
      

      {/* ========================================
          Project Detail Modal
      ======================================== */}

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white"
            onClick={(event) => event.stopPropagation()}
          >

            {/* 닫기 */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow-sm transition-colors hover:bg-zinc-100"
              aria-label="프로젝트 상세 닫기"
            >
              ×
            </button>

            {/* 이미지 */}
            <div className="relative min-h-[280px] bg-zinc-100 md:min-h-[420px]">
              {selectedProject.image ? (
                <Image
                  src={selectedProject.image}
                  alt={`${selectedProject.title} 프로젝트 대표 이미지`}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex min-h-[280px] items-center justify-center text-zinc-400 md:min-h-[420px]">
                  Project Image
                </div>
              )}
            </div>

            {/* 상세 내용 */}
            <div className="p-8 md:p-12">
              <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
                {selectedProject.category}
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                {selectedProject.title}
              </h2>

              <p className="mt-3 text-sm text-zinc-500">
                {selectedProject.period}
              </p>

              {/* Overview */}
              <div className="mt-10">
                <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
                  Overview
                </p>

                <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">
                  {selectedProject.overview}
                </p>
              </div>

              {/* My Role */}
              <div className="mt-10 border-t border-zinc-200 pt-8">
                <p className="text-sm text-zinc-500">
                  My Role
                </p>

                <p className="mt-2 text-xl font-semibold">
                  {selectedProject.role}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mt-8">
                <p className="text-sm text-zinc-500">
                  Tech Stack
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedProject.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-600"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub */}
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-block rounded-lg bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}

    </main>
  );
}