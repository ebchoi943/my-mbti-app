export type MbtiLetter = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";

export type MbtiType =
  | "INTJ"
  | "INTP"
  | "ENTJ"
  | "ENTP"
  | "INFJ"
  | "INFP"
  | "ENFJ"
  | "ENFP"
  | "ISTJ"
  | "ISFJ"
  | "ESTJ"
  | "ESFJ"
  | "ISTP"
  | "ISFP"
  | "ESTP"
  | "ESFP";

export type Dimension = "EI" | "SN" | "TF" | "JP";

export interface QuestionOption {
  label: "A" | "B";
  text: string;
  letter: MbtiLetter;
}

export interface Question {
  id: number;
  dimension: Dimension;
  text: string;
  options: [QuestionOption, QuestionOption];
}

export interface MatchInfo {
  type: MbtiType;
  title: string;
  reason: string;
}

export interface Persona {
  type: MbtiType;
  title: string;
  tagline: string;
  traits: [string, string, string];
  bestMatch: MatchInfo;
  worstMatch: MatchInfo;
}
