"use client";

import { useEffect, useState } from "react";
import { supabase, getParticipantCount } from "@/lib/supabase";

export default function ParticipantBanner() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let mounted = true;

    getParticipantCount().then((value) => {
      if (mounted) setCount(value);
    });

    const channel = supabase
      .channel("results-realtime-count")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "results" },
        () => {
          setCount((prev) => (prev === null ? 1 : prev + 1));
        }
      )
      .subscribe();

    return () => {
      mounted = false;
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="w-full animate-fadeIn rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-5 py-3.5 shadow-lg shadow-indigo-200">
      <p className="text-center text-sm font-semibold text-white sm:text-base">
        👥 이미{" "}
        <span className="text-base font-extrabold tabular-nums sm:text-lg">
          {count === null ? "···" : count.toLocaleString()}
        </span>
        명의 동료들이 자신의 부캐를 확인했어요!
      </p>
    </div>
  );
}
