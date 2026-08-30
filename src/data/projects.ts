export const projects = [
  {
    category: "Main Project",
    title: "GitGoing",

    description:
      "GitHub Repository의 README를 기반으로 초보 개발자의 프로젝트 이해를 돕는 AI Assistant입니다.",

    role: "AI Engine / Backend",

    period: "2026.06 - Present",

    tech: [
      "Python",
      "FastAPI",
      "Gemini API",
      "LLM",
    ],

    slug: "gitgoing",

    image: "",

    architectureImage: "",

    github: "",

    overview:
      "GitHub Repository를 처음 접한 사용자가 긴 README를 직접 분석하지 않아도 프로젝트의 목적, 기술 스택, 실행 방법 등을 쉽게 이해할 수 있도록 돕는 Chrome Extension 기반 프로젝트입니다.",

    details: {
      contributions: [
        "LLM 기반 AI 엔진의 입력·출력 구조 설계",
        "질문 유형에 따른 Intent 분류 및 프롬프트 선택 구조 구현",
        "README를 근거로 답변하도록 Prompt Engineering 적용",
        "AI 응답 JSON 검증 및 오류 처리 구조 설계",
        "이전 대화를 활용한 후속 질문 처리 구조 구현",
      ],

      architecture:
        "Chrome Extension에서 Repository 정보와 README를 수집한 뒤 FastAPI Backend로 전달하고, Rule Base에서 입력 검증과 질문 유형을 처리한 후 LLM에 요청합니다. 생성된 응답은 다시 형식 검증을 거쳐 Chrome Extension UI에 전달됩니다.",

      problemSolving: [
        "README에 없는 정보를 LLM이 임의로 생성하는 문제를 줄이기 위해 답변 근거를 README로 제한했습니다.",
        "LLM 응답 형식이 일정하지 않은 문제를 해결하기 위해 JSON 출력 형식과 응답 검증 단계를 추가했습니다.",
      ],

      result:
        "LLM을 단순 호출하는 방식이 아니라 입력 검증, Prompt 선택, 응답 검증, 오류 처리를 포함하는 Rule Base + LLM 구조를 설계하며 AI 기반 백엔드의 전체 데이터 흐름을 경험했습니다.",
    },
  },

  {
    category: "Team Project",
    title: "UX-Lens",

    description:
      "사용자 유형에 따라 UI 경험을 분석하고 개선 방향을 제안하는 UX 웹 프로젝트입니다.",

    role: "Development",

    period: "2026",

    tech: [
      "React",
      "Python",
      "AI",
    ],

    slug: "ux-lens",

    image: "",

    architectureImage: "",

    github:
      "https://github.com/ivory0312/2026-1-UX_Lens",

    overview:
      "웹 또는 앱 화면을 바탕으로 사용자 유형에 따른 UI 경험을 분석하고 개선 방향을 제안하는 프로젝트입니다.",

    details: {
      contributions: [
        "상세 역할 작성 예정",
      ],

      architecture:
        "프로젝트 구조에 대한 상세 설명을 작성할 예정입니다.",

      problemSolving: [
        "개발 과정에서의 문제 해결 경험을 작성할 예정입니다.",
      ],

      result:
        "프로젝트를 통해 얻은 결과와 학습 내용을 작성할 예정입니다.",
    },
  },

  {
    category: "Team Project",
    title: "Lost Data",

    description:
      "기억을 주제로 제작한 Unity 기반의 2D 횡스크롤 게임 프로젝트입니다.",

    role: "Game Development",

    period: "2026",

    tech: [
      "Unity",
      "C#",
    ],

    slug: "lost-data",

    image: "",

    architectureImage: "",

    github: "",

    overview:
      "기억을 소재로 한 스토리와 스테이지 진행을 결합하여 제작한 Unity 2D 횡스크롤 게임 프로젝트입니다.",

    details: {
      contributions: [
        "상세 역할 작성 예정",
      ],

      architecture:
        "프로젝트 구조에 대한 상세 설명을 작성할 예정입니다.",

      problemSolving: [
        "개발 과정에서의 문제 해결 경험을 작성할 예정입니다.",
      ],

      result:
        "프로젝트를 통해 얻은 결과와 학습 내용을 작성할 예정입니다.",
    },
  },
];