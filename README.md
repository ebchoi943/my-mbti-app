# 내 성격에 딱 맞는 IT 부캐 찾기 (MBTI 테스트)

Next.js 15(App Router) + TypeScript + Tailwind CSS + Supabase로 구현한
IT 직무 페르소나 MBTI 테스트입니다. `docs/requirements.md`, `docs/design-guide.md` 명세를 기준으로 제작되었습니다.

## 실행 방법

```bash
npm install
npm run dev
```

`http://localhost:3000` 에서 확인합니다. `.env.local`에 이미 프로젝트의 Supabase URL/키가 설정되어 있습니다.

## Supabase 연동 (실시간 카운터 & 결과 저장)

`.env.local`은 `docs/supabase-info.md`에 기재된 프로젝트(`cgwxlsmenrmawumjnlvn`) 값으로 미리 채워져 있습니다. 아래 한 가지만 진행하면 됩니다.

1. 해당 Supabase 프로젝트의 SQL Editor에서 [`database/schema.sql`](database/schema.sql) 내용을 실행해 `results` 테이블, RLS 정책, 실시간(Realtime) 발행을 설정합니다.

다른 Supabase 프로젝트를 쓰고 싶다면 `.env.local`을 아래 형식으로 교체하세요(`.env.local.example` 참고).

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
```

환경변수가 없어도 앱은 정상 동작하며, 메인 화면의 참여자 수는 데모용 기본값으로 표시됩니다.

## 폴더 구조

```
src/
  app/
    page.tsx          # 메인 화면
    quiz/page.tsx      # 질문 화면 (8문항, 진행바, 분석 로딩)
    result/page.tsx    # 결과 화면 (페르소나, 케미, 공유)
    layout.tsx, globals.css
  components/          # ProgressBar, OptionButton, CounterBanner, ShareButtons 등
  lib/
    questions.ts        # 8개 질문 데이터
    scoring.ts           # MBTI 채점 로직
    personas.ts          # 16가지 IT 부캐 페르소나 데이터
    supabase.ts          # Supabase 클라이언트
database/schema.sql      # Supabase 테이블/정책/Realtime 설정
```

## 사용자 플로우

메인 화면 → 테스트 시작 → 8개 질문 응답 → 결과 분석 로딩 → 결과 화면(16종 중 1개) → 공유하기
