import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gradient-to-b from-indigo-50 via-white to-cyan-50 px-4 text-center">
      <p className="text-6xl">🧭</p>
      <h1 className="text-2xl font-extrabold text-gray-900">
        페이지를 찾을 수 없어요
      </h1>
      <p className="text-sm text-gray-500">
        요청하신 결과 또는 페이지가 존재하지 않아요.
      </p>
      <Link
        href="/"
        className="rounded-2xl bg-indigo-600 px-6 py-3 font-bold text-white shadow-xl transition-all hover:scale-105"
      >
        홈으로 돌아가기
      </Link>
    </main>
  );
}
