"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { projects } from "@/data/projects";


/* ========================================
   Navigation Data
======================================== */

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "activities", label: "Activities" },
  { id: "archive", label: "Archive" },
  { id: "contact", label: "Contact" },
];

const sectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "activities",
  "archive",
  "contact",
];


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
  },
];


/* ========================================
   Section Header Component
======================================== */

function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
        {label}
      </p>

      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>

      <p className="mt-4 max-w-2xl leading-7 text-zinc-600">
        {description}
      </p>
    </div>
  );
}


export default function Home() {
  /* ========================================
     States
  ======================================== */

  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  const [showArchiveModal, setShowArchiveModal] =
    useState(false);

  const [showMobileMenu, setShowMobileMenu] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("home");

  const archiveScrollRef =
    useRef<HTMLDivElement>(null);


  /* ========================================
     현재 보고 있는 Section 감지
  ======================================== */

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);


  /* ========================================
     Modal 열릴 때 Background Scroll 방지
  ======================================== */

  useEffect(() => {
    if (selectedProject || showArchiveModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject, showArchiveModal]);


  /* ========================================
     ESC 키로 Modal 닫기
  ======================================== */

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
        setShowArchiveModal(false);
        setShowMobileMenu(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);


  return (
    <main className="min-h-screen bg-white text-zinc-900">

      {/* ========================================
          Navigation
      ======================================== */}

      <nav className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/90 backdrop-blur">

        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">

          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold"
          >
            SUBIN JO
          </a>


          {/* Desktop Menu */}
          <div className="hidden gap-8 text-sm lg:flex">

            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`transition-colors ${
                  activeSection === item.id
                    ? "font-semibold text-[var(--accent)]"
                    : "text-zinc-700 hover:text-[var(--accent)]"
                }`}
              >
                {item.label}
              </a>
            ))}

          </div>


          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() =>
              setShowMobileMenu(!showMobileMenu)
            }
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-xl lg:hidden"
            aria-label="메뉴 열기"
          >
            {showMobileMenu ? "×" : "☰"}
          </button>

        </div>


        {/* Mobile Menu */}
        {showMobileMenu && (

          <div className="border-t border-zinc-200 bg-white px-6 py-6 lg:hidden">

            <div className="mx-auto flex max-w-6xl flex-col gap-5">

              {navItems.map((item) => (

                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() =>
                    setShowMobileMenu(false)
                  }
                  className={`font-medium ${
                    activeSection === item.id
                      ? "text-[var(--accent)]"
                      : "text-zinc-700"
                  }`}
                >
                  {item.label}
                </a>

              ))}

            </div>

          </div>

        )}

      </nav>


      {/* ========================================
          Section Indicator
      ======================================== */}

      <div className="fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 lg:flex">

        {sectionIds.map((section) => (

          <button
            key={section}
            type="button"
            onClick={() =>
              document
                .getElementById(section)
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
            className={`h-8 w-1.5 rounded-full transition-all duration-300 ${
              activeSection === section
                ? "bg-zinc-700"
                : "bg-zinc-200 hover:bg-zinc-400"
            }`}
            aria-label={`${section} 섹션으로 이동`}
          />

        ))}

      </div>


      {/* ========================================
          Hero
      ======================================== */}

      <section
        id="home"
        className="relative scroll-mt-20 overflow-hidden"
      >

        {/* Background */}
        <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-zinc-50 to-white" />


        <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr]">

          {/* 왼쪽 */}
          <div className="max-w-2xl">

            <div className="inline-flex rounded-full border border-blue-100 bg-[var(--accent-soft)] px-4 py-2 text-sm font-medium text-[var(--accent)]">
              Backend · AI / LLM
            </div>


            <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Backend Developer Portfolio
            </p>


            <h1 className="mt-5 text-5xl font-bold leading-[1.15] tracking-tight md:text-6xl">
              안녕하세요,
              <br />
              조수빈입니다.
            </h1>


            <p className="mt-7 max-w-xl text-xl font-medium leading-9 text-zinc-800">
              사용자에게 필요한 기능을
              <br className="hidden sm:block" />
              안정적인 구조로 구현하는 개발자를
              지향합니다.
            </p>


            <p className="mt-5 max-w-xl leading-8 text-zinc-600">
              컴퓨터소프트웨어를 전공하며 백엔드
              개발을 중심으로 공부하고 있습니다.
              최근에는 AI와 LLM을 활용한 서비스
              구조와 엔진 설계에도 관심을 가지고
              프로젝트와 연구 경험을 쌓아가고
              있습니다.
            </p>


            <div className="mt-9 flex flex-wrap gap-3">

              <a
                href="#projects"
                className="rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[var(--accent-dark)]"
              >
                View Projects
              </a>


              <a
                href="https://github.com/Jyobibi"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-zinc-300 bg-white px-6 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-zinc-100"
              >
                GitHub ↗
              </a>

            </div>

          </div>


          {/* 오른쪽 프로필 */}
          <div className="mx-auto w-full max-w-[340px] lg:mx-0 lg:ml-auto">

            <div className="rounded-[2rem] border border-zinc-200 bg-white p-3 shadow-lg shadow-zinc-200/60">

              <div className="overflow-hidden rounded-[1.5rem]">

                <Image
                  src="/arcive/subinjo.jpg"
                  alt="조수빈 프로필 사진"
                  width={340}
                  height={430}
                  priority
                  className="h-auto w-full object-cover"
                />

              </div>


              <div className="px-2 pb-2 pt-4">

                <p className="font-semibold">
                  JO SUBIN
                </p>

                <p className="mt-1 text-sm text-zinc-500">
                  Computer Software Student
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ========================================
          About
      ======================================== */}

      <section
        id="about"
        className="scroll-mt-20 border-t border-zinc-200 bg-zinc-50 py-24"
      >

        <div className="mx-auto max-w-6xl px-6">

          <SectionHeader
            label="About"
            title="About Me"
            description="개발자로 성장해가는 과정과 관심 분야를 소개합니다."
          />


          <div className="mt-12 grid gap-12 md:grid-cols-2">

            {/* 자기소개 */}
            <div>

              <p className="text-xl font-medium leading-9">
                백엔드 개발을 중심으로 다양한 기술을
                배우고 있는 컴퓨터소프트웨어전공
                학생입니다.
              </p>


              <p className="mt-6 leading-8 text-zinc-600">
                웹 서비스의 데이터 흐름과 서버 구조에
                관심을 가지고 있으며, 프로젝트를 통해
                직접 구현하고 이해하는 경험을 쌓아가고
                있습니다. 최근에는 LLM 기반 서비스와
                AI 엔진 설계에도 관심을 가지고 개발과
                연구를 진행하고 있습니다.
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
        className="scroll-mt-20 py-24"
      >

        <div className="mx-auto max-w-6xl px-6">

          <SectionHeader
            label="Skills"
            title="Skills & Tools"
            description="프로젝트와 학습 과정에서 사용해 본 기술과 개발 도구입니다."
          />


          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {skills.map((skill) => (

              <article
                key={skill.title}
                className="rounded-2xl border border-zinc-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
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
        className="scroll-mt-20 border-t border-zinc-200 bg-zinc-50 py-24"
      >

        <div className="mx-auto max-w-6xl px-6">

          <SectionHeader
            label="Projects"
            title="Selected Projects"
            description="직접 참여하고 개발한 프로젝트와 담당 역할을 소개합니다."
          />


          <div className="mt-14 grid gap-7 md:grid-cols-2">

            {projects.map((project) => (

              <article
                key={project.slug}
                className="group flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                {/* 대표 이미지 */}
                <button
                  type="button"
                  onClick={() =>
                    setSelectedProject(project)
                  }
                  className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100 text-left"
                >

                  {project.image ? (

                    <Image
                      src={project.image}
                      alt={`${project.title} 프로젝트 대표 이미지`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />

                  ) : (

                    <div className="flex h-full items-center justify-center text-sm text-zinc-400">
                      Project Image
                    </div>

                  )}

                </button>


                {/* 정보 */}
                <div className="flex flex-1 flex-col p-7">

                  <div className="flex items-center justify-between gap-4">

                    <p className="text-sm font-medium text-[var(--accent)]">
                      {project.category}
                    </p>

                    <p className="text-sm text-zinc-400">
                      {project.period}
                    </p>

                  </div>


                  <h3 className="mt-4 text-2xl font-bold tracking-tight">
                    {project.title}
                  </h3>


                  <p className="mt-4 line-clamp-2 leading-7 text-zinc-600">
                    {project.description}
                  </p>


                  <p className="mt-5 text-sm text-zinc-500">
                    {project.role}
                  </p>


                  <div className="mt-6 flex flex-wrap gap-2">

                    {project.tech.map((technology) => (

                      <span
                        key={technology}
                        className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs text-zinc-600"
                      >
                        {technology}
                      </span>

                    ))}

                  </div>


                  <div className="mt-auto pt-8">

                    <button
                      type="button"
                      onClick={() =>
                        setSelectedProject(project)
                      }
                      className="text-sm font-semibold text-[var(--accent)] transition-colors hover:text-[var(--accent-dark)]"
                    >
                      View Project →
                    </button>

                  </div>

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
        className="scroll-mt-20 border-t border-zinc-200 bg-white py-24"
      >

        <div className="mx-auto max-w-6xl px-6">

          <SectionHeader
            label="Activities"
            title="Activities & Experience"
            description="대학 생활 동안 참여한 연구, 학생회, 스터디 등의 활동입니다."
          />


          <div className="mt-14">

            {activities.map((activity) => (

              <article
                key={`${activity.title}-${activity.period}`}
                className="grid gap-6 border-t border-zinc-200 py-10 md:grid-cols-[180px_1fr]"
              >

                <div>
                  <p className="text-sm text-zinc-500">
                    {activity.period}
                  </p>
                </div>


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
        className="scroll-mt-20 border-t border-zinc-200 bg-zinc-50 py-24"
      >

        <div className="mx-auto max-w-6xl px-6">

          {/* Header */}
          <div className="flex items-end justify-between gap-6">

            <SectionHeader
              label="Archive"
              title="My History"
              description="세미나, 학회, 프로젝트와 교내 활동의 순간들을 기록합니다."
            />


            <button
              onClick={() =>
                setShowArchiveModal(true)
              }
              className="shrink-0 text-sm font-medium text-zinc-600 transition-colors hover:text-[var(--accent)]"
            >
              전체보기 ↗
            </button>

          </div>


          {/* Slider */}
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


                  <p className="mt-5 text-sm text-zinc-500">
                    {archive.date}
                  </p>


                  <h3 className="mt-2 text-xl font-semibold">
                    {archive.title}
                  </h3>


                  <p className="mt-3 leading-7 text-zinc-600">
                    {archive.description}
                  </p>

                </article>

              ))}

            </div>


            {/* 이전 / 다음 */}
            {archives.length > 1 && (

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

            )}

          </div>

        </div>

      </section>


      {/* ========================================
          Contact
      ======================================== */}

      <section
        id="contact"
        className="scroll-mt-20 border-t border-zinc-200 bg-white py-24"
      >

        <div className="mx-auto max-w-6xl px-6">

          <SectionHeader
            label="Contact"
            title="Let's Connect"
            description="프로젝트, 연구, 협업에 관한 연락은 언제든지 환영합니다."
          />


          <div className="mt-14 grid gap-12 md:grid-cols-2 md:items-end">

            <div>

              <h3 className="text-3xl font-bold leading-tight md:text-4xl">
                함께 이야기하고
                <br />
                만들어가고 싶습니다.
              </h3>


              <p className="mt-6 max-w-xl leading-8 text-zinc-600">
                백엔드와 AI를 중심으로 다양한 개발
                경험을 쌓아가고 있습니다.
              </p>

            </div>


            <div className="space-y-6 md:text-right">

              <div>

                <p className="text-sm text-zinc-500">
                  Email
                </p>

                <a
                  href="mailto:이메일주소"
                  className="mt-2 inline-block text-lg font-medium hover:text-[var(--accent)]"
                >
                  이메일주소
                </a>

              </div>


              <div>

                <p className="text-sm text-zinc-500">
                  GitHub
                </p>

                <a
                  href="https://github.com/Jyobibi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-lg font-medium hover:text-[var(--accent)]"
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
          onClick={() =>
            setShowArchiveModal(false)
          }
        >

          <div
            className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white p-6 sm:p-8 md:rounded-3xl md:p-12"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* 닫기 */}
            <button
              onClick={() =>
                setShowArchiveModal(false)
              }
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-xl transition-colors hover:bg-zinc-200"
              aria-label="히스토리 전체보기 닫기"
            >
              ×
            </button>


            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Archive
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                My History
              </h2>

              <p className="mt-4 text-zinc-600">
                지금까지의 활동 기록을 한눈에
                확인할 수 있습니다.
              </p>

            </div>


            <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">

              {archives.map((archive) => (

                <article
                  key={`modal-${archive.date}-${archive.title}`}
                >

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


                  <p className="mt-5 text-sm text-zinc-500">
                    {archive.date}
                  </p>


                  <h3 className="mt-2 text-xl font-semibold">
                    {archive.title}
                  </h3>


                  <p className="mt-3 leading-7 text-zinc-600">
                    {archive.description}
                  </p>

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
          onClick={() =>
            setSelectedProject(null)
          }
        >

          <div
            className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white md:rounded-3xl"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* 닫기 */}
            <button
              onClick={() =>
                setSelectedProject(null)
              }
              className="absolute right-6 top-6 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow-md transition-colors hover:bg-zinc-100"
              aria-label="프로젝트 상세 닫기"
            >
              ×
            </button>


            {/* 대표 이미지 */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100 md:aspect-[16/7]">

              {selectedProject.image ? (

                <Image
                  src={selectedProject.image}
                  alt={`${selectedProject.title} 프로젝트 대표 이미지`}
                  fill
                  className="object-cover"
                />

              ) : (

                <div className="flex h-full items-center justify-center text-zinc-400">
                  Project Image
                </div>

              )}

            </div>


            {/* 상세 내용 */}
            <div className="p-6 sm:p-8 md:p-12">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                {selectedProject.category}
              </p>


              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                {selectedProject.title}
              </h2>


              <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">
                {selectedProject.description}
              </p>


              {/* 기본 정보 */}
              <div className="mt-8 flex flex-wrap gap-10">

                <div>

                  <p className="text-sm text-zinc-500">
                    Period
                  </p>

                  <p className="mt-1 font-medium">
                    {selectedProject.period}
                  </p>

                </div>


                <div>

                  <p className="text-sm text-zinc-500">
                    Role
                  </p>

                  <p className="mt-1 font-medium">
                    {selectedProject.role}
                  </p>

                </div>

              </div>


              {/* Overview */}
              <section className="mt-14 border-t border-zinc-200 pt-10">

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  01 · Overview
                </p>

                <p className="mt-5 max-w-3xl text-lg leading-9 text-zinc-600">
                  {selectedProject.overview}
                </p>

              </section>


              {/* My Role */}
              <section className="mt-12 border-t border-zinc-200 pt-10">

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  02 · My Role
                </p>


                <h3 className="mt-5 text-2xl font-bold">
                  {selectedProject.role}
                </h3>


                <div className="mt-6 space-y-3">

                  {selectedProject.details.contributions.map(
                    (contribution) => (

                      <div
                        key={contribution}
                        className="flex gap-3 text-zinc-600"
                      >

                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />

                        <p className="leading-7">
                          {contribution}
                        </p>

                      </div>

                    )
                  )}

                </div>

              </section>


              {/* Architecture */}
              <section className="mt-12 border-t border-zinc-200 pt-10">

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  03 · Architecture
                </p>


                <p className="mt-5 max-w-3xl leading-8 text-zinc-600">
                  {
                    selectedProject.details
                      .architecture
                  }
                </p>


                <div className="relative mt-8 min-h-[240px] overflow-hidden rounded-2xl bg-zinc-50">

                  {selectedProject.architectureImage ? (

                    <Image
                      src={
                        selectedProject.architectureImage
                      }
                      alt={`${selectedProject.title} 시스템 아키텍처`}
                      fill
                      className="object-contain p-6"
                    />

                  ) : (

                    <div className="flex min-h-[240px] items-center justify-center border border-dashed border-zinc-300 text-sm text-zinc-400">
                      Architecture Diagram
                    </div>

                  )}

                </div>

              </section>


              {/* Problem Solving */}
              <section className="mt-12 border-t border-zinc-200 pt-10">

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  04 · Problem Solving
                </p>


                <div className="mt-6 space-y-5">

                  {selectedProject.details.problemSolving.map(
                    (problem, index) => (

                      <div
                        key={problem}
                        className="rounded-2xl bg-zinc-50 p-6"
                      >

                        <p className="text-sm font-medium text-zinc-400">
                          Problem{" "}
                          {String(index + 1).padStart(
                            2,
                            "0"
                          )}
                        </p>


                        <p className="mt-3 leading-8 text-zinc-600">
                          {problem}
                        </p>

                      </div>

                    )
                  )}

                </div>

              </section>


              {/* Result */}
              <section className="mt-12 border-t border-zinc-200 pt-10">

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  05 · Result & Learned
                </p>


                <p className="mt-5 max-w-3xl leading-8 text-zinc-600">
                  {selectedProject.details.result}
                </p>

              </section>


              {/* Tech Stack */}
              <section className="mt-12 border-t border-zinc-200 pt-10">

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  Tech Stack
                </p>


                <div className="mt-5 flex flex-wrap gap-2">

                  {selectedProject.tech.map(
                    (technology) => (

                      <span
                        key={technology}
                        className="rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-600"
                      >
                        {technology}
                      </span>

                    )
                  )}

                </div>

              </section>


              {/* GitHub */}
              {selectedProject.github && (

                <div className="mt-12 border-t border-zinc-200 pt-10">

                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-dark)]"
                  >
                    View on GitHub ↗
                  </a>

                </div>

              )}

            </div>

          </div>

        </div>

      )}

    </main>
  );
}