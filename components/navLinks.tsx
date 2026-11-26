'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const navLinks = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Topics',
    href: '/topics',
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  const router = useRouter();

  // Mude para true para testar o visual de "Log out" (ou conecte à sua autenticação real)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogout() {
    setIsLoggedIn(false);
    // Aqui você limparia o token/cookie de sessão no futuro
    router.push('/');
  }

  return (
    <nav className="flex items-center gap-6">
      {/* Links de navegação padrão */}
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-colors pb-1 border-b-2 ${
              isActive
                ? 'border-[#FFC72C] text-neutral-900 font-semibold'
                : 'border-transparent text-neutral-600 hover:text-neutral-900 hover:border-[#FFC72C]/50'
            }`}
          >
            {link.label}
          </Link>
        );
      })}

      {/* Divisor vertical sutil */}
      <span className="h-4 w-px bg-neutral-200" />

      {/* Botão dinâmico: Log out se logado, Login se deslogado */}
      {isLoggedIn ? (
        <button
          type="button"
          onClick={handleLogout}
          className="px-4 py-1.5 rounded-lg border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-800 text-sm font-semibold transition-colors cursor-pointer"
        >
          Log out
        </button>
      ) : (
        <Link
          href="/login"
          className="px-4 py-1.5 rounded-lg bg-[#FFC72C] hover:bg-[#E5B020] text-neutral-900 text-sm font-semibold transition-colors shadow-sm"
        >
          Login
        </Link>
      )}
    </nav>
  );
}