import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ShareButtons from "@/components/ShareButtons";
import { getPersona, mbtiTypes } from "@/lib/personas";

interface ResultPageProps {
  params: Promise<{ type: string }>;
}

export function generateStaticParams() {
  return mbtiTypes.map((type) => ({ type }));
}

export async function generateMetadata({
  params,
}: ResultPageProps): Promise<Metadata> {
  const { type } = await params;
  const persona = getPersona(type);

  if (!persona) {
    return { title: "결과를 찾을 수 없어요 | IT 부캐 찾기" };
  }

  return {
    title: `나의 IT 부캐는 '${persona.title}' (${persona.type}) | IT 부캐 찾기`,
    description: persona.tagline,
  };
}

export default async function ResultPage({ params }: ResultPageProps) {
  const { type } = await params;
  const persona = getPersona(type);

  if (!persona) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-indigo-50 via-white to-cyan-50 px-4 py-16">
      <div className="flex w-full max-w-md flex-col items-center gap-6">
        <span className="animate-popIn rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 px-5 py-1.5 text-sm font-extrabold tracking-widest text-white shadow-lg">
          {persona.type}
        </span>

        <h1 className="animate-fadeIn text-center text-3xl font-extrabold leading-snug text-gray-900 sm:text-4xl">
          {persona.title}
        </h1>

        <p className="text-center text-base font-medium text-indigo-600">
          &ldquo;{persona.tagline}&rdquo;
        </p>

        <section className="w-full rounded-2xl bg-white p-6 shadow-xl shadow-indigo-100/60">
          <h2 className="mb-4 text-sm font-bold text-gray-400">
            ✨ 나의 일상 속 특징
          </h2>
          <ul className="flex flex-col gap-3">
            {persona.traits.map((trait) => (
              <li
                key={trait}
                className="flex items-start gap-2 text-sm leading-relaxed text-gray-700 sm:text-base"
              >
                <span className="mt-0.5 text-indigo-500">●</span>
                <span>{trait}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <section className="rounded-2xl border-2 border-cyan-100 bg-cyan-50 p-5">
            <h2 className="mb-2 text-sm font-bold text-cyan-700">
              💚 최고의 협업 파트너
            </h2>
            <p className="mb-1 text-base font-extrabold text-gray-900">
              {persona.bestMatch.type} · {persona.bestMatch.title}
            </p>
            <p className="text-sm leading-relaxed text-gray-600">
              {persona.bestMatch.reason}
            </p>
          </section>

          <section className="rounded-2xl border-2 border-rose-100 bg-rose-50 p-5">
            <h2 className="mb-2 text-sm font-bold text-rose-700">
              ⚡ 최악의 협업 파트너
            </h2>
            <p className="mb-1 text-base font-extrabold text-gray-900">
              {persona.worstMatch.type} · {persona.worstMatch.title}
            </p>
            <p className="text-sm leading-relaxed text-gray-600">
              {persona.worstMatch.reason}
            </p>
          </section>
        </div>

        <div className="mt-2 w-full">
          <ShareButtons />
        </div>
      </div>
    </main>
  );
}
