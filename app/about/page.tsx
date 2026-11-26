export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-12">
      {/* Cabeçalho da página */}
      <div className="border-b border-neutral-200 pb-6">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-[#FFC72C]/20 text-neutral-900 rounded-full mb-3">
          About the Initiative
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
          Students Helping Students Succeed
        </h1>
      </div>

      {/* Bloco 1: Our Purpose */}
      <div className="bg-white border border-neutral-200 rounded-xl p-6 sm:p-8 shadow-sm border-l-4 border-l-[#FFC72C]">
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3">
          Our Purpose
        </h2>
        <p className="text-neutral-600 leading-relaxed">
          We connect experienced senior students with incoming freshmen to foster a collaborative, welcoming, and supportive learning environment. Our core mission is to bridge the gap between starting a new academic journey and mastering the coursework by ensuring every newcomer has accessible peer mentorship. Through one-on-one study sessions, practical academic guidance, and shared resources, we aim to remove early roadblocks and give freshmen the confidence they need to thrive from day one.
        </p>
      </div>

      {/* Bloco 2: The Beginning */}
      <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFC72C]" />
          The Beginning
        </h2>
        <p className="text-neutral-600 leading-relaxed">
          The initiative started from a simple classroom observation after we noticed that many new students struggled to get timely guidance and personalized support from teachers alone, who often have limited time outside of lectures. We realized it would be much more effective—and less intimidating—if experienced senior students stepped in to help freshmen get started and navigate their first semester. What began as an informal study group quickly grew into a structured peer-mentoring network built on a two-way street: freshmen receive practical advice and encouragement as they adapt to a new environment, while senior students reinforce their own foundational knowledge, build patience, and develop real leadership skills by teaching others.
        </p>
      </div>
    </section>
  );
}