import Link from 'next/link';

interface Topic {
  id: string;
  category: string;
  title: string;
  description: string;
  mentorName: string;
  level: 'Beginner' | 'Intermediate';
}

const sampleTopics: Topic[] = [
  {
    id: 'html-css-basics',
    category: 'Web Fundamentals',
    title: 'HTML5 & Modern CSS Layouts',
    description:
      'Learn how to structure semantic web pages and build responsive layouts using Flexbox, Grid, and utility classes.',
    mentorName: 'Lucas M. (Senior)',
    level: 'Beginner',
  },
  {
    id: 'javascript-logic',
    category: 'Programming',
    title: 'JavaScript Logic & DOM Manipulation',
    description:
      'Understand variables, functions, array methods (.map, .filter), and how to make static pages interactive.',
    mentorName: 'Sarah K. (Senior)',
    level: 'Beginner',
  },
  {
    id: 'react-nextjs-intro',
    category: 'Frameworks',
    title: 'Getting Started with React & Next.js',
    description:
      'Master components, props, state management with useState, and file-based routing in the Next.js App Router.',
    mentorName: 'Daniel R. (Senior)',
    level: 'Intermediate',
  },
  {
    id: 'git-github-workflow',
    category: 'Collaboration',
    title: 'Git Branches & Pull Requests on GitHub',
    description:
      'Practice creating feature branches, writing clean commits, and opening Pull Requests for peer code review.',
    mentorName: 'Ana P. (Senior)',
    level: 'Beginner',
  },
];

export default function TopicsPage() {
  return (
    <section className="space-y-10">
      {/* Cabeçalho da Página */}
      <div className="border-b border-neutral-200 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-[#FFC72C]/25 text-neutral-900 rounded-full mb-3">
            Study Guides &amp; Mentorship
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Available Study Topics
          </h1>
          <p className="text-neutral-600 mt-2 max-w-2xl text-sm sm:text-base">
            Browse the subjects led by senior students. Pick a topic to review
            starter materials or connect with a peer mentor.
          </p>
        </div>

        <Link
          href="/signup"
          className="self-start sm:self-auto px-4 py-2.5 rounded-lg bg-[#FFC72C] hover:bg-[#E5B020] text-neutral-900 font-semibold text-sm transition-colors shadow-sm"
        >
          Request a Topic
        </Link>
      </div>

      {/* Grid de Cards dos Tópicos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sampleTopics.map((topic) => (
          <article
            key={topic.id}
            className="flex flex-col justify-between bg-white border border-neutral-200 rounded-xl p-6 shadow-sm hover:border-[#FFC72C] transition-colors"
          >
            <div className="space-y-3">
              {/* Linha superior: Categoria e Nível */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  {topic.category}
                </span>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    topic.level === 'Beginner'
                      ? 'bg-[#FFC72C]/25 text-neutral-900'
                      : 'bg-neutral-100 text-neutral-700'
                  }`}
                >
                  {topic.level}
                </span>
              </div>

              {/* Título e Descrição */}
              <h2 className="text-xl font-bold text-neutral-900">
                {topic.title}
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {topic.description}
              </p>
            </div>

            {/* Rodapé do Card: Mentor e Ação */}
            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFC72C]" />
                <span className="text-xs font-medium text-neutral-600">
                  Mentor: <strong className="text-neutral-900">{topic.mentorName}</strong>
                </span>
              </div>

              <Link
                href={`/topics/${topic.id}`}
                className="text-sm font-semibold text-neutral-900 underline decoration-[#FFC72C] decoration-2 underline-offset-4 hover:text-neutral-700"
              >
                View details →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}