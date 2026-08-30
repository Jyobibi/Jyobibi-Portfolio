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
      "Prompt Engineering",
    ],

    slug: "gitgoing",

    /* 대표 이미지 */
    image: "",

    /* 시스템 아키텍처 이미지 */
    architectureImage: "",

    /* GitHub Repository */
    github: "",

    overview:
      "GitHub Repository를 처음 접한 사용자가 긴 README를 직접 분석하지 않아도 프로젝트의 목적, 기술 스택, 실행 방법 등을 쉽게 이해할 수 있도록 돕는 Chrome Extension 기반 프로젝트입니다. Repository의 README를 주요 맥락으로 활용하여 추천 질문과 자유 질문에 답변하는 AI 챗봇 기능을 제공합니다.",

    details: {
      contributions: [
        "LLM 기반 AI 엔진의 입력·출력 구조 설계",
        "질문 유형에 따른 Intent 분류 및 프롬프트 선택 구조 설계",
        "README를 근거로 답변하도록 Prompt Engineering 적용",
        "AI 응답 JSON 형식 정의 및 응답 검증 구조 설계",
        "README 없음, AI 요청 실패, 응답 형식 오류 등의 예외 처리 구조 설계",
        "직전 대화를 활용한 후속 질문 처리 구조 구현",
      ],

      architecture:
        "Chrome Extension에서 Repository 이름, 설명, README 등의 Context를 수집하여 FastAPI Backend로 전달합니다. Backend의 Rule Base에서 입력 검증, README 상태 확인, 질문 유형 분류 및 프롬프트 선택을 처리한 뒤 Gemini API에 요청합니다. 생성된 응답은 지정된 JSON 구조에 맞는지 검증한 후 Chrome Extension UI로 전달됩니다.",

      problemSolving: [
        "README에 존재하지 않는 정보를 LLM이 임의로 생성할 가능성을 줄이기 위해 답변의 근거를 README로 제한하고, 확인되지 않는 정보는 명시적으로 구분하도록 프롬프트 규칙을 설계했습니다.",

        "LLM이 매번 다른 형식으로 답변하는 문제를 줄이기 위해 출력 JSON Schema를 정의하고, 응답을 사용자에게 전달하기 전에 형식을 검증하는 단계를 추가했습니다.",

        "README가 존재하지 않거나 수집에 실패한 경우 불필요한 LLM 호출이 발생하지 않도록 Rule Base에서 먼저 입력 상태를 확인하고 오류 응답을 반환하도록 구성했습니다.",
      ],

      result:
        "단순히 LLM API를 호출하는 방식에서 벗어나 입력 검증, 질문 유형 처리, 프롬프트 선택, AI 호출, 응답 검증, 오류 처리로 이어지는 AI Backend의 전체 흐름을 설계했습니다. 이를 통해 LLM 서비스에서 프롬프트뿐 아니라 입력 데이터의 신뢰성과 응답 검증 구조가 중요하다는 점을 경험했습니다.",
    },
  },


  /* ========================================
     UX-Lens
  ======================================== */

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
      "웹 또는 앱 화면 스크린샷을 입력받아 사용자 유형별로 UI 경험을 분석하고 개선 방향을 제안하는 프로젝트입니다. 초보 사용자, 고령 사용자, 빠른 소비형 사용자, 집중형 사용자 등 서로 다른 사용자 관점에서 화면을 분석할 수 있도록 구성했습니다.",

    details: {
      contributions: [
        "프로젝트 내 담당 기능 상세 작성 예정",
        "구현 기능 및 협업 내용 상세 작성 예정",
      ],

      architecture:
        "UX-Lens의 전체 서비스 구조와 데이터 처리 흐름을 프로젝트 구현 내용을 기준으로 추후 정리할 예정입니다.",

      problemSolving: [
        "개발 과정에서 발생했던 주요 문제와 해결 과정을 추후 정리할 예정입니다.",
      ],

      result:
        "사용자 유형에 따라 동일한 UI도 다르게 평가될 수 있다는 관점에서 서비스를 설계하고, 팀 프로젝트를 통해 웹 기반 서비스 구현과 협업 과정을 경험했습니다.",
    },
  },


  /* ========================================
     Lost Data
  ======================================== */

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
      "대학교 컴퓨터게임기초 프로젝트로 제작한 Unity 2D 게임입니다. 기억을 잃어가는 캐릭터가 여러 스테이지를 지나며 기억의 조각을 되찾는 흐름을 중심으로 스토리와 게임 플레이를 구성했습니다.",

    details: {
      contributions: [
        "Unity 2D 기반 스테이지 기능 구현",
        "캐릭터 이동 및 점프 관련 기능 구현",
        "기억 조각 획득 및 연출 기능 구현",
        "대사 및 게임 진행 연출 구현",
        "효과음과 게임 이벤트 연동",
      ],

      architecture:
        "Unity Scene을 기반으로 각 스테이지를 구성하고 Player, Game Object, Trigger 및 C# Script를 연결하여 게임 진행 로직을 구현했습니다. 프로젝트의 상세 Scene 및 Script 구조는 추후 정리할 예정입니다.",

      problemSolving: [
        "게임 오브젝트와 UI의 표시 순서가 의도와 다르게 나타나는 문제를 Canvas 및 Layer 구조를 확인하며 수정했습니다.",

        "캐릭터 동작과 기억 조각 획득 연출이 자연스럽게 이어지도록 Coroutine을 사용하여 위치, 크기, 투명도 등의 변화를 시간에 따라 처리했습니다.",
      ],

      result:
        "Unity에서 단순 기능 구현뿐 아니라 캐릭터, UI, 효과음, 연출을 하나의 게임 흐름으로 연결하는 경험을 했으며 C# Script와 Unity Component 간의 관계를 이해하는 계기가 되었습니다.",
    },
  },
];