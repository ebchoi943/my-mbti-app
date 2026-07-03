import type { MbtiType, Persona } from "@/types";

export const personas: Record<MbtiType, Persona> = {
  INTJ: {
    type: "INTJ",
    title: "독고다이 아키텍트 마스터",
    tagline: "계획 없는 배포는 재앙이다. 시스템 설계의 신",
    traits: [
      "완벽한 시스템 설계도 없이는 코드 한 줄도 작성하지 않는다",
      "회의보다 문서화, 잡담보다 아키텍처 다이어그램을 선호한다",
      "비효율적인 프로세스를 보면 참지 못하고 갈아엎는다",
    ],
    bestMatch: {
      type: "ENFP",
      title: "아이디어 폭발 스파크 기획자",
      reason: "즉흥적인 아이디어에 견고한 구조라는 날개를 달아주는 최고의 브레인스토밍 파트너예요.",
    },
    worstMatch: {
      type: "ESFJ",
      title: "네트워킹 만렙 분위기 메이커",
      reason: "매일 티타임과 회식을 제안하는 통에 몰입하던 흐름이 자꾸 끊겨요.",
    },
  },
  INTP: {
    type: "INTP",
    title: "밤샘 분석 AI 연구원",
    tagline: "왜 대답을 못 하니... 알고리즘과 디버깅의 신",
    traits: [
      "궁금한 알고리즘 논문은 새벽 3시에도 정독한다",
      "정답이 나올 때까지 같은 문제를 파고드는 집요함이 있다",
      "사람보다 데이터와 로그가 더 정직하다고 믿는다",
    ],
    bestMatch: {
      type: "ENFJ",
      title: "팀의 성장을 이끄는 스크럼 마스터",
      reason: "혼자 파고드는 연구를 팀 전체의 성과로 잘 연결해주는 든든한 조력자예요.",
    },
    worstMatch: {
      type: "ESTJ",
      title: "폭풍 추진력의 PM 리더",
      reason: "결론부터 빨리 내놓으라는 압박에 숨이 턱 막혀요.",
    },
  },
  ENTJ: {
    type: "ENTJ",
    title: "거침없는 빌드업 CPO",
    tagline: "방향성은 내가 정한다. 무결점 비즈니스 리더",
    traits: [
      "목표가 정해지면 팀 전체를 그 방향으로 진두지휘한다",
      "비효율은 용납 못하고, 즉시 프로세스를 갈아엎는다",
      "\"안 될 이유\"보다 \"되게 만드는 방법\"을 먼저 찾는다",
    ],
    bestMatch: {
      type: "INFP",
      title: "유저 빙의 감성 UI 디자이너",
      reason: "강한 추진력에 섬세한 감성을 더해 완성도를 높여주는 환상의 짝꿍이에요.",
    },
    worstMatch: {
      type: "ISFP",
      title: "자유로운 영혼의 프론트엔드 아티스트",
      reason: "정해진 일정보다 영감을 우선하는 속도에 답답함을 느껴요.",
    },
  },
  ENTP: {
    type: "ENTP",
    title: "아이디어 뱅크 그로스 해커",
    tagline: "이거 바꾸면 대박 날 듯? 프로 불편러 혁신가",
    traits: [
      "\"이거 왜 이렇게 만들었어요?\"라는 말을 입에 달고 산다",
      "새로운 실험과 A/B 테스트라면 언제든 환영이다",
      "토론에서 지는 걸 극도로 싫어한다 (그래도 웃으면서 진다)",
    ],
    bestMatch: {
      type: "INFJ",
      title: "비전 제시형 프로덕트 전략가",
      reason: "번뜩이는 아이디어에 깊이와 철학을 더해주는 최고의 지적 단짝이에요.",
    },
    worstMatch: {
      type: "ISFJ",
      title: "든든한 백업 요정 서비스 운영자",
      reason: "안정적인 루틴을 깨는 돌발 제안에 매번 마음을 졸이게 만들어요.",
    },
  },
  INFJ: {
    type: "INFJ",
    title: "비전 제시형 프로덕트 전략가",
    tagline: "프로덕트의 철학을 만듭니다. 숨은 멘토",
    traits: [
      "팀원 한 명 한 명의 강점을 조용히 관찰하고 기억한다",
      "5년 뒤 프로덕트의 모습을 그리며 로드맵을 그린다",
      "갈등 상황에서는 조용히 중재안을 들고 나타난다",
    ],
    bestMatch: {
      type: "ENTP",
      title: "아이디어 뱅크 그로스 해커",
      reason: "머릿속 이상을 현실적인 실험으로 빠르게 검증해주는 최고의 케미예요.",
    },
    worstMatch: {
      type: "ESTP",
      title: "위기 탈출 넘버원 소방수 개발자",
      reason: "장기적 비전보다 당장의 임기응변을 우선시해 방향이 자주 흔들려요.",
    },
  },
  INFP: {
    type: "INFP",
    title: "유저 빙의 감성 UI 디자이너",
    tagline: "한 픽셀의 UI에도 유저의 마음을 담습니다",
    traits: [
      "버튼 하나의 그림자 값까지 고민하는 디테일 장인이다",
      "유저의 감정을 먼저 상상한 뒤에 화면을 그린다",
      "비판보다 공감으로 시작하는 피드백을 선호한다",
    ],
    bestMatch: {
      type: "ENTJ",
      title: "거침없는 빌드업 CPO",
      reason: "몽글몽글한 감성을 강력한 추진력으로 세상에 내보내주는 파트너예요.",
    },
    worstMatch: {
      type: "ESTJ",
      title: "폭풍 추진력의 PM 리더",
      reason: "감정보다 숫자와 마감을 앞세우는 태도에 위축되곤 해요.",
    },
  },
  ENFJ: {
    type: "ENFJ",
    title: "팀의 성장을 이끄는 스크럼 마스터",
    tagline: "모두 할 수 있어요! 팀의 사기를 책임지는 치어리더",
    traits: [
      "데일리 스크럼에서 가장 먼저 팀원들의 컨디션을 챙긴다",
      "누군가 지쳐 보이면 귀신같이 알아채고 커피를 건넨다",
      "팀 전체가 함께 성장하는 방향을 늘 고민한다",
    ],
    bestMatch: {
      type: "INTP",
      title: "밤샘 분석 AI 연구원",
      reason: "혼자만의 세계에 빠진 연구원을 팀의 스포트라이트로 이끌어주는 찰떡 짝꿍이에요.",
    },
    worstMatch: {
      type: "ISTP",
      title: "조용한 백엔드 버그 킬러",
      reason: "속마음을 잘 나누지 않는 담백한 반응에 은근히 서운함을 느껴요.",
    },
  },
  ENFP: {
    type: "ENFP",
    title: "아이디어 폭발 스파크 기획자",
    tagline: "재미없는 서비스는 안 만들어요! 트렌드 세터",
    traits: [
      "샤워하다가도 새 서비스 아이디어가 떠올라 메모한다",
      "재미없는 회의는 못 참고 분위기를 띄운다",
      "사람들과의 네트워킹에서 에너지를 얻는다",
    ],
    bestMatch: {
      type: "INTJ",
      title: "독고다이 아키텍트 마스터",
      reason: "쏟아지는 아이디어를 견고한 구조로 완성해주는 최고의 파트너예요.",
    },
    worstMatch: {
      type: "ISTJ",
      title: "팩트 체크 중심 QA 마스터",
      reason: "즉흥적인 방향 전환마다 꼼꼼한 태클이 들어와 의기소침해져요.",
    },
  },
  ISTJ: {
    type: "ISTJ",
    title: "팩트 체크 중심 QA 마스터",
    tagline: "제 눈에 버그가 걸렸습니다. 철두철미한 수문장",
    traits: [
      "체크리스트 없이는 배포 승인을 절대 하지 않는다",
      "한번 정한 규칙과 컨벤션은 끝까지 지킨다",
      "예외 케이스와 엣지 케이스를 찾아내는 데 진심이다",
    ],
    bestMatch: {
      type: "ESFP",
      title: "퍼포먼스 만렙 스타 마케터",
      reason: "딱딱한 원칙에 유쾌한 텐션을 더해주는 활력소 같은 파트너예요.",
    },
    worstMatch: {
      type: "ENFP",
      title: "아이디어 폭발 스파크 기획자",
      reason: "매번 바뀌는 요구사항에 QA 시나리오를 다시 짜야 해서 피로가 쌓여요.",
    },
  },
  ISFJ: {
    type: "ISFJ",
    title: "든든한 백업 요정 서비스 운영자",
    tagline: "이슈 발생? 제가 다 처리해 둘게요. 보이지 않는 영웅",
    traits: [
      "장애 발생 시 매뉴얼과 히스토리를 가장 먼저 찾아본다",
      "동료가 놓친 디테일을 조용히 챙겨서 메꿔준다",
      "새로운 시도보다 검증된 방식의 안정감을 선호한다",
    ],
    bestMatch: {
      type: "ESTP",
      title: "위기 탈출 넘버원 소방수 개발자",
      reason: "돌발 이슈를 시원하게 해결해주는 믿음직한 해결사 콤비예요.",
    },
    worstMatch: {
      type: "ENTP",
      title: "아이디어 뱅크 그로스 해커",
      reason: "예고 없이 판을 뒤집는 제안에 매번 심장이 철렁해요.",
    },
  },
  ESTJ: {
    type: "ESTJ",
    title: "폭풍 추진력의 PM 리더",
    tagline: "스프린트 지연은 없다. 철저한 일정과 실행력",
    traits: [
      "스프린트 계획표는 분 단위로 촘촘하게 짠다",
      "회의는 정시 시작, 정시 종료가 국룰이다",
      "결과와 숫자로 증명하는 것을 가장 중요하게 생각한다",
    ],
    bestMatch: {
      type: "ISFP",
      title: "자유로운 영혼의 프론트엔드 아티스트",
      reason: "빡빡한 일정 관리에 감각적인 완성도를 더해주는 밸런스 파트너예요.",
    },
    worstMatch: {
      type: "INFP",
      title: "유저 빙의 감성 UI 디자이너",
      reason: "마감보다 완벽한 감성을 우선시하는 속도에 답답함을 느껴요.",
    },
  },
  ESFJ: {
    type: "ESFJ",
    title: "네트워킹 만렙 분위기 메이커",
    tagline: "팀원 간 불화 제로! 모두를 챙기는 마당발 올라운더",
    traits: [
      "팀원 생일과 기념일을 가장 먼저 챙기는 사람이다",
      "갈등이 생기기 전에 미리 분위기를 살피고 조율한다",
      "다 같이 잘 되는 방향을 늘 우선순위에 둔다",
    ],
    bestMatch: {
      type: "ISTP",
      title: "조용한 백엔드 버그 킬러",
      reason: "묵묵히 실력으로 증명하는 상대에게 안정감을 느끼는 찰떡궁합이에요.",
    },
    worstMatch: {
      type: "INTJ",
      title: "독고다이 아키텍트 마스터",
      reason: "혼자 조용히 몰입하고 싶어하는 상대에게 자꾸 말을 걸어 부담을 줘요.",
    },
  },
  ISTP: {
    type: "ISTP",
    title: "조용한 백엔드 버그 킬러",
    tagline: "말은 필요 없다. 코드로 증명하는 실력파 엔지니어",
    traits: [
      "말보다 커밋(commit)으로 증명하는 게 편하다",
      "원인 모를 버그를 추적할 때 가장 큰 희열을 느낀다",
      "불필요한 회의는 최소화하고 싶어한다",
    ],
    bestMatch: {
      type: "ESFJ",
      title: "네트워킹 만렙 분위기 메이커",
      reason: "무뚝뚝해 보이는 실력파를 살갑게 챙겨주는 찰떡 콤비예요.",
    },
    worstMatch: {
      type: "ENFJ",
      title: "팀의 성장을 이끄는 스크럼 마스터",
      reason: "감정 공유와 팀 빌딩 활동을 자꾸 권유받아 조금 부담스러워요.",
    },
  },
  ISFP: {
    type: "ISFP",
    title: "자유로운 영혼의 프론트엔드 아티스트",
    tagline: "화면 인터랙션은 예술이죠. 감각적인 개발자",
    traits: [
      "인터랙션 애니메이션 타이밍 하나에 며칠을 고민한다",
      "정해진 틀보다 그때그때의 영감을 따라 작업한다",
      "조용히 자신만의 감각으로 화면을 완성해나간다",
    ],
    bestMatch: {
      type: "ESTJ",
      title: "폭풍 추진력의 PM 리더",
      reason: "자유로운 감각에 확실한 방향과 일정을 잡아주는 든든한 파트너예요.",
    },
    worstMatch: {
      type: "ENTJ",
      title: "거침없는 빌드업 CPO",
      reason: "결과를 빨리 내놓으라는 압박에 창작의 리듬이 깨져 버려요.",
    },
  },
  ESTP: {
    type: "ESTP",
    title: "위기 탈출 넘버원 소방수 개발자",
    tagline: "라이브 서버 터졌다고요? 지금 당장 고칩니다",
    traits: [
      "장애 알림이 뜨면 오히려 눈이 반짝인다",
      "이론보다 일단 되게 만드는 실전 감각을 믿는다",
      "상황 판단이 빠르고 실행에 망설임이 없다",
    ],
    bestMatch: {
      type: "ISFJ",
      title: "든든한 백업 요정 서비스 운영자",
      reason: "사고 수습 후 뒷정리까지 완벽하게 챙겨주는 환상의 팀워크예요.",
    },
    worstMatch: {
      type: "INFJ",
      title: "비전 제시형 프로덕트 전략가",
      reason: "먼 미래 비전을 논하는 사이 눈앞의 불부터 꺼야 한다고 생각해요.",
    },
  },
  ESFP: {
    type: "ESFP",
    title: "퍼포먼스 만렙 스타 마케터",
    tagline: "우리 서비스 모르는 사람 없게 해 주세요. 바이럴 장인",
    traits: [
      "새로운 캠페인 아이디어만 보면 텐션이 급상승한다",
      "사람들 앞에서 발표하고 홍보하는 순간을 즐긴다",
      "딱딱한 보고서보다 재미있는 콘텐츠로 승부한다",
    ],
    bestMatch: {
      type: "ISTJ",
      title: "팩트 체크 중심 QA 마스터",
      reason: "화려한 아이디어를 꼼꼼하게 검증해 완성도를 높여주는 파트너예요.",
    },
    worstMatch: {
      type: "INTP",
      title: "밤샘 분석 AI 연구원",
      reason: "즉흥적인 텐션에 맞장구쳐주지 않는 담백한 반응에 김이 새요.",
    },
  },
};

export const mbtiTypes = Object.keys(personas) as MbtiType[];

export function getPersona(type: string): Persona | undefined {
  return personas[type.toUpperCase() as MbtiType];
}
