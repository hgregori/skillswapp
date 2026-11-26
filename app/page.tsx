import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Seção Principal (Hero) */}
      <section className="text-center max-w-3xl mx-auto pt-4 sm:pt-8 space-y-6">
        <span className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-wider bg-[#FFC72C]/25 text-neutral-900 rounded-full">
          Skill-Swap
        </span>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
          Learn Together, Grow Faster, and{' '}
          <span className="underline decoration-[#FFC72C] decoration-4 underline-offset-4">
            Never Study Alone
          </span>
        </h1>

        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
          Welcome to our student mentorship hub. Here, incoming freshmen connect
          with experienced senior students for practical guidance, study
          support, and real academic confidence.
        </p>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/topics"
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#FFC72C] hover:bg-[#E5B020] text-neutral-900 font-semibold text-sm transition-colors shadow-sm"
          >
            Explore Study Topics
          </Link>

          <Link
            href="/about"
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white hover:bg-neutral-50 text-neutral-900 font-semibold text-sm border border-neutral-300 transition-colors"
          >
            Learn About Us
          </Link>
        </div>
      </section>

      {/* Breve resumo do que fazer na página */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="p-6 rounded-xl border border-neutral-200 bg-white space-y-2">
          <div className="w-8 h-8 rounded-lg bg-[#FFC72C] flex items-center justify-center font-bold text-neutral-900 text-sm mb-3">
            1
          </div>
          <h2 className="text-lg font-bold text-neutral-900">
            Understand Our Mission
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed">
            Visit the <strong>About</strong> page to see how this classroom
            idea started and how the two-way mentorship helps both freshmen and
            seniors.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-neutral-200 bg-white space-y-2">
          <div className="w-8 h-8 rounded-lg bg-[#FFC72C] flex items-center justify-center font-bold text-neutral-900 text-sm mb-3">
            2
          </div>
          <h2 className="text-lg font-bold text-neutral-900">
            Browse Key Topics
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed">
            Check the <strong>Topics</strong> section to find the subjects,
            study guides, and starter resources available for your first
            semester.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-neutral-200 bg-white space-y-2">
          <div className="w-8 h-8 rounded-lg bg-[#FFC72C] flex items-center justify-center font-bold text-neutral-900 text-sm mb-3">
            3
          </div>
          <h2 className="text-lg font-bold text-neutral-900">
            Connect &amp; Practice
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed">
            Use peer support to clear doubts early, build strong study habits,
            and gain confidence to later mentor new students yourself.
          </p>
        </div>
      </section>
    </div>
  );
}