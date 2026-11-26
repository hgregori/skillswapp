'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email || !password) {
      setStatusMessage('Please fill in both email and password.');
      return;
    }

    // Simulação de login para demonstração
    setStatusMessage(`Welcome back! Signing in as ${email}...`);
  }

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        {/* Cabeçalho do Card */}
        <div className="text-center mb-8">
          <div className="w-10 h-10 rounded-lg bg-[#FFC72C] flex items-center justify-center font-bold text-neutral-900 text-base mx-auto mb-3">
            PW
          </div>
          <h1 className="text-2xl font-bold text-neutral-900 tracking-tight">
            Welcome Back
          </h1>
          <p className="text-sm text-neutral-500 mt-1">
            Sign in to access your mentorship dashboard
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Campo de E-mail */}
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

          {/* Campo de Senha */}
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
              placeholder="••••••••"
              className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#FFC72C] focus:border-transparent transition"
            />
          </div>

          {/* Feedback visual ao enviar */}
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
            Sign In
          </button>
        </form>

        {/* Link para a página de cadastro (próximo passo) */}
        <p className="mt-6 text-center text-sm text-neutral-600">
          Don&apos;t have an account yet?{' '}
          <Link
            href="/signup"
            className="font-semibold text-neutral-900 underline decoration-[#FFC72C] decoration-2 underline-offset-4 hover:text-neutral-700"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}