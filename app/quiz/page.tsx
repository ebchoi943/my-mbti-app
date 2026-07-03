"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProgressBar from "@/components/ProgressBar";
import { questions } from "@/lib/questions";
import { calculateMbti } from "@/lib/mbti";
import { saveResult } from "@/lib/supabase";
import type { MbtiLetter } from "@/types";

const TRANSITION_MS = 280;
const LOADING_MS = 1500;

export default function QuizPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<MbtiLetter[]>([]);
  const [visible, setVisible] = useState(true);
  const [isFinishing, setIsFinishing] = useState(false);

  const totalQuestions = questions.length;
  const currentQuestion = questions[step];

  const handleSelect = (letter: MbtiLetter) => {
    if (!visible || isFinishing) return;

    setVisible(false);

    setTimeout(() => {
      const nextAnswers = [...answers, letter];
      setAnswers(nextAnswers);

      if (step + 1 < totalQuestions) {
        setStep((prev) => prev + 1);
        setVisible(true);
      } else {
        finishQuiz(nextAnswers);
      }
    }, TRANSITION_MS);
  };

  const finishQuiz = (finalAnswers: MbtiLetter[]) => {
    setIsFinishing(true);
    const mbtiType = calculateMbti(finalAnswers);

    saveResult(mbtiType, finalAnswers).catch((error) =>
      console.error("Failed to save result:", error)
    );

    setTimeout(() => {
      router.push(`/result/${mbtiType}`);
    }, LOADING_MS);
  };

  if (isFinishing) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-indigo-50 via-white to-cyan-50 px-4">
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="h-14 w-14 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600" />
          <p className="text-lg font-bold text-gray-800">
            당신의 IT 부캐를 분석하고 있어요...
          </p>
          <p className="text-sm text-gray-400">잠시만 기다려 주세요 ✨</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-indigo-50 via-white to-cyan-50 px-4 py-16">
      <div className="flex w-full max-w-md flex-col gap-8">
        <ProgressBar current={step + 1} total={totalQuestions} />

        <div
          key={currentQuestion.id}
          className={`flex flex-col gap-8 transition-opacity duration-300 ease-out ${
            visible ? "animate-fadeIn opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-center text-xl font-extrabold leading-relaxed text-gray-900 sm:text-2xl">
            {currentQuestion.text}
          </h2>

          <div className="flex flex-col gap-4">
            {currentQuestion.options.map((option) => (
              <button
                key={option.label}
                type="button"
                onClick={() => handleSelect(option.letter)}
                className="w-full rounded-2xl border-2 border-indigo-100 bg-white px-5 py-4 text-left text-sm font-medium text-gray-700 shadow-xl shadow-indigo-100/50 transition-all hover:scale-105 hover:border-indigo-400 hover:bg-indigo-50 active:scale-95 sm:text-base"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
