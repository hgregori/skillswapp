'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignUpPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'freshman' | 'mentor'>('freshman');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!fullName || !email || !password) {
      setStatusMessage('Please fill in all required fields.');
      return;
    }

    if (password.length < 6) {
      setStatusMessage('Password must be at least 6 characters long.');
      return;
    }

    // Simulação de cadastro para demonstração
    setStatusMessage(
      `Account created for ${fullName} as a ${
        role === 'freshman' ? 'Freshman' : 'Senior Mentor'
      }!`
    );
  }

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-md bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        {/* Cabeçalho do Card */}
        <div className="text-center mb-8">
          <div className="w-10 h-10 rounded-lg bg-[#FFC72C] flex items-center justify-center font-bold text-neutral-900 text-base mx-auto mb-3">
            PW
          </div>
          <h1 className="text-2xl font-bold text-neutral-900 tracking-tight">
            Create Your Account
          </h1>
          <p className="text-sm text-neutral-500 mt-1">
            Join the BYU-Pathway peer mentorship community
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Nome Completo */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-neutral-800 mb-1.5"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your full name"
              className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#FFC72C] focus:border-transparent transition"
            />
          </div>

          {/* E-mail */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neutral-800 mb-1.5"
            >
              Student Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@byupathway.edu"
              className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#FFC72C] focus:border-transparent transition"
            />
          </div>

          {/* Seletor de Papel (Freshman ou Senior Mentor) */}
          <div>
            <span className="block text-sm font-medium text-neutral-800 mb-1.5">
              I am joining as a:
            </span>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRole('freshman')}
                className={`py-2.5 px-3 rounded-lg border text-sm font-medium transition cursor-pointer ${
                  role === 'freshman'
                    ? 'border-[#FFC72C] bg-[#FFC72C]/20 text-neutral-900 font-semibold'
                    : 'border-neutral-300 bg-white text-neutral-600 hover:bg-neutral-50'
                }`}
              >
                Freshman
              </button>

              <button
                type="button"
                onClick={() => setRole('mentor')}
                className={`py-2.5 px-3 rounded-lg border text-sm font-medium transition cursor-pointer ${
                  role === 'mentor'
                    ? 'border-[#FFC72C] bg-[#FFC72C]/20 text-neutral-900 font-semibold'
                    : 'border-neutral-300 bg-white text-neutral-600 hover:bg-neutral-50'
                }`}
              >
                Senior Mentor
              </button>
            </div>
          </div>

          {/* Senha */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-neutral-800"
              >
                Password
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-xs font-medium text-neutral-500 hover:text-neutral-900"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 6 characters"
              className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#FFC72C] focus:border-transparent transition"
            />
          </div>

          {/* Feedback visual */}
          {statusMessage && (
            <div className="p-3 rounded-lg bg-[#FFC72C]/20 border border-[#FFC72C] text-xs font-medium text-neutral-900">
              {statusMessage}
            </div>
          )}

          {/* Botão Principal */}
          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-lg bg-[#FFC72C] hover:bg-[#E5B020] text-neutral-900 font-semibold text-sm transition-colors shadow-sm cursor-pointer"
          >
            Create Account
          </button>
        </form>

        {/* Link de volta para o Login */}
        <p className="mt-6 text-center text-sm text-neutral-600">
          Already have an account?{' '}
          <Link
            href="/login"
            className="font-semibold text-neutral-900 underline decoration-[#FFC72C] decoration-2 underline-offset-4 hover:text-neutral-700"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}