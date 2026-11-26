import Link from 'next/link';
import NavLinks from './navLinks';

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-neutral-200 sticky top-0 z-50">
      {/* Faixa fina amarela no topo para reforçar a identidade visual */}
      <div className="h-1.5 w-full bg-[#FFC72C]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo / Nome do Projeto */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded bg-[#FFC72C] flex items-center justify-center font-bold text-neutral-900 text-sm transition-transform group-hover:scale-105">
            SW
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-neutral-900 leading-none tracking-tight">
              Skill-Swap
            </span>
            <span className="text-[11px] font-medium text-neutral-500 uppercase tracking-wider mt-0.5">
              Student Initiative
            </span>
          </div>
        </Link>

        {/* Links de navegação */}
        <NavLinks />
      </div>
    </header>
  );
}