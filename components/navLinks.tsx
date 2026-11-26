'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

  return (
    <nav className="flex items-center gap-6">
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
    </nav>
  );
}