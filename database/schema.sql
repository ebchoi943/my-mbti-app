-- =============================================================
-- IT 부캐 찾기 MBTI 테스트 - Supabase 스키마
-- Supabase 프로젝트의 SQL Editor 에서 그대로 실행하세요.
-- =============================================================

-- 1. 결과 저장 테이블
create table if not exists public.results (
  id uuid primary key default gen_random_uuid(),
  mbti_type text not null check (char_length(mbti_type) = 4),
  answers jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

-- 2. Row Level Security 활성화
alter table public.results enable row level security;

-- 3. 익명 사용자도 결과를 저장(INSERT)할 수 있도록 허용
create policy "Anyone can insert a result"
  on public.results
  for insert
  to anon
  with check (true);

-- 4. 익명 사용자가 전체 참여자 수를 집계(SELECT)할 수 있도록 허용
--    (개인 식별 정보가 없는 통계용 카운팅 목적)
create policy "Anyone can read results for counting"
  on public.results
  for select
  to anon
  using (true);

-- 5. 실시간(Realtime) 구독을 위해 publication 에 테이블 추가
--    메인 화면의 실시간 참여자 수 배너 갱신에 사용됩니다.
alter publication supabase_realtime add table public.results;

-- 6. 조회 성능을 위한 인덱스
create index if not exists results_mbti_type_idx on public.results (mbti_type);
create index if not exists results_created_at_idx on public.results (created_at desc);
