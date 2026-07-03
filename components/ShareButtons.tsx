"use client";

import Link from "next/link";
import { useState } from "react";

export default function ShareButtons() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  return (
    <div className="flex w-full flex-col gap-3">
      <button
        type="button"
        onClick={handleCopy}
        className="w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-6 py-4 font-bold text-white shadow-xl transition-all hover:scale-105 active:scale-95"
      >
        {copied ? "링크가 복사되었어요! ✅" : "결과 링크 복사하기 🔗"}
      </button>
      <Link
        href="/quiz"
        className="w-full rounded-2xl border-2 border-indigo-200 bg-white px-6 py-4 text-center font-bold text-indigo-600 shadow transition-all hover:scale-105 hover:bg-indigo-50 active:scale-95"
      >
        테스트 다시 하기 🔄
      </Link>
    </div>
  );
}
