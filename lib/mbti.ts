import type { MbtiLetter, MbtiType } from "@/types";

/**
 * 8개 문항의 응답 알파벳을 받아 최종 MBTI 4자리를 계산한다.
 * 동점일 경우 I, N, T, P 를 우선시한다. (docs/requirements.md 4장 알고리즘 가이드)
 */
export function calculateMbti(letters: MbtiLetter[]): MbtiType {
  const count = (letter: MbtiLetter) =>
    letters.filter((item) => item === letter).length;

  const pick = (a: MbtiLetter, b: MbtiLetter, tieWinner: MbtiLetter) => {
    const countA = count(a);
    const countB = count(b);
    if (countA > countB) return a;
    if (countB > countA) return b;
    return tieWinner;
  };

  const ei = pick("E", "I", "I");
  const sn = pick("S", "N", "N");
  const tf = pick("T", "F", "T");
  const jp = pick("J", "P", "P");

  return `${ei}${sn}${tf}${jp}` as MbtiType;
}
