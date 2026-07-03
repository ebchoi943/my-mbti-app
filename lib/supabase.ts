import { createClient } from "@supabase/supabase-js";
import type { MbtiLetter } from "@/types";

// docs/supabase-info.md 에 기재된 프로젝트 자격 증명 (docs/github-info.md 프로젝트 전용).
// publishable key는 클라이언트에 노출되어도 안전하도록 설계된 공개용 키입니다.
const SUPABASE_PROJECT_ID = "cgwxlsmenrmawumjnlvn";
const SUPABASE_URL = `https://${SUPABASE_PROJECT_ID}.supabase.co`;
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_ZbEOmya-DoUK7TbEggDVrQ_B_Fi8R7K";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

export const RESULTS_TABLE = "results";

/** 유저의 최종 MBTI 결과와 답변 리스트를 DB에 적재한다. */
export async function saveResult(mbtiType: string, answers: MbtiLetter[]) {
  const { error } = await supabase
    .from(RESULTS_TABLE)
    .insert({ mbti_type: mbtiType, answers });

  if (error) {
    console.error("Failed to save result:", error.message);
  }
}

/** 지금까지 부캐를 찾은 전체 참여자 수를 가져온다. */
export async function getParticipantCount(): Promise<number> {
  const { count, error } = await supabase
    .from(RESULTS_TABLE)
    .select("*", { count: "exact", head: true });

  if (error) {
    console.error("Failed to fetch participant count:", error.message);
    return 0;
  }

  return count ?? 0;
}
