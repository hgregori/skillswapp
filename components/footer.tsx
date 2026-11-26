import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-neutral-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Identidade do Projeto */}
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded bg-[#FFC72C] flex items-center justify-center font-bold text-neutral-900 text-xs">
              SW
            </div>
            <span className="text-sm font-semibold text-neutral-900">
              Skill-Swap
            </span>
            <span className="text-neutral-300">|</span>
            <span className="text-xs text-neutral-500">
              Student Initiative Example
            </span>
          </div>

          {/* Links rápidos */}
          <div className="flex items-center gap-6 text-sm text-neutral-600">
            <Link
              href="/"
              className="hover:text-neutral-900 hover:underline decoration-[#FFC72C] decoration-2 underline-offset-4 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-neutral-900 hover:underline decoration-[#FFC72C] decoration-2 underline-offset-4 transition-colors"
            >
              About
            </Link>
            <Link
              href="/topics"
              className="hover:text-neutral-900 hover:underline decoration-[#FFC72C] decoration-2 underline-offset-4 transition-colors"
            >
              Topics
            </Link>
          </div>
        </div>

        {/* Linha inferior com aviso e ano dinâmico */}
        <div className="mt-6 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-500">
          <p>
            © {currentYear} Skill Swap Project. Built for educational demonstration.
          </p>
          <p className="flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-[#FFC72C]" />
            Inspired by BYU-Pathway Worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}