import Link from "next/link";
import ParticipantBanner from "@/components/ParticipantBanner";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-indigo-50 via-white to-cyan-50 px-4 py-16">
      <div className="flex w-full max-w-md flex-col items-center gap-6 text-center">
        <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-600">
          IT 부캐 발견 테스트
        </span>

        <h1 className="text-3xl font-extrabold leading-snug text-gray-900 sm:text-4xl">
          출근길 내 모습으로 알아보는
          <br />
          <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
            &ldquo;IT 부캐&rdquo;
          </span>{" "}
          테스트
        </h1>

        <p className="leading-relaxed text-gray-500">
          협업 스타일부터 위기 대처법까지,
          <br />
          내 MBTI 유형에 맞는 IT 직무 페르소나는?
        </p>

        <ParticipantBanner />

        <div className="my-4 select-none text-7xl animate-floatSlow">🧑‍💻</div>

        <Link
          href="/quiz"
          className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 py-4 text-lg font-bold text-white shadow-xl shadow-indigo-200 transition-all hover:scale-105 hover:bg-indigo-500 active:scale-95"
        >
          내 IT 부캐 확인하러 가기
          <span className="inline-block animate-pulseArrow">➔</span>
        </Link>

        <p className="text-xs text-gray-400">
          8개의 질문 · 약 1분 소요 · 결과는 링크로 공유할 수 있어요
        </p>
      </div>
    </main>
  );
}
