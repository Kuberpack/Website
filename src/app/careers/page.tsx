import React from 'react';

const jobs = [
  {
    id: 'j1',
    title: 'Production Supervisor',
    location: 'Kami, Sonipat (Works)',
    type: 'Full-Time',
    description: 'Manage automated corrugating line operations, monitor employee safety, and enforce standard machine setup compliance.',
  },
  {
    id: 'j2',
    title: 'Quality Lab Inspector',
    location: 'Kami, Sonipat (Works)',
    type: 'Full-Time',
    description: 'Conduct Bursting Factor (BF), GSM checks, ring crush, and moisture tests on raw materials and finished lots.',
  },
  {
    id: 'j3',
    title: 'Sales & Corporate Key Accounts Manager',
    location: 'Pitampura, Delhi (Head Office)',
    type: 'Full-Time',
    description: 'Interface with procurement heads in FMCG, Pharma, and Ecommerce sectors to secure long-term packaging supply contracts.',
  },
];

export default function CareersPage() {
  return (
    <div className="relative min-h-screen bg-black pt-32 pb-20 px-6 sm:px-12 bg-cyber-grid overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-secondary-kraft/10 rounded-full blur-[120px] pointer-events-none" />

      <main className="max-w-6xl mx-auto relative z-10">
        <header className="mb-16">
          <span className="text-accent-cyber uppercase tracking-widest text-xs font-mono font-bold block mb-4 border-l-2 border-accent-cyber pl-3">
            Join The Crew
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 uppercase">
            Build the Future of <span className="animate-gradient-text">Industrial Pack</span>
          </h1>
          <p className="max-w-3xl text-zinc-400 text-lg leading-relaxed font-sans">
            We value high integrity, technical precision, and a proactive safety culture. Join our team at Sonipat or Delhi.
          </p>
        </header>

        <section className="space-y-6 mb-16">
          <h2 className="font-display text-2xl font-bold text-white mb-8 border-b border-white/15 pb-4">
            Current Openings
          </h2>
          {jobs.map((j) => (
            <div 
              key={j.id} 
              className="glass-morphic p-8 rounded-3xl border border-white/5 hover:border-accent-cyber/20 transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
            >
              <div className="max-w-2xl">
                <div className="flex gap-3 mb-2 flex-wrap">
                  <span className="text-xs font-mono text-accent-cyber bg-accent-cyber/5 border border-accent-cyber/15 px-2 py-0.5 rounded">
                    {j.location}
                  </span>
                  <span className="text-xs font-mono text-zinc-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                    {j.type}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {j.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {j.description}
                </p>
              </div>
              <a 
                href={`mailto:kuberpack@gmail.com?subject=Application for ${j.title}`}
                className="glass-morphic px-6 py-3 rounded-full text-sm font-semibold text-white border border-white/10 hover:border-accent-cyber hover:bg-accent-cyber hover:text-black transition-all duration-300 w-full md:w-auto text-center"
              >
                Apply Now
              </a>
            </div>
          ))}
        </section>

        <section className="glass-morphic p-8 sm:p-12 rounded-3xl border border-white/5 text-center">
          <h3 className="font-display text-2xl font-bold text-white mb-3">
            Don&apos;t see a perfect match?
          </h3>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto mb-6">
            We are always looking for talented engineers, designers, and operators. Send your resume and a short cover letter explaining your expertise.
          </p>
          <a 
            href="mailto:kuberpack@gmail.com" 
            className="text-accent-cyber border-b border-accent-cyber/30 hover:border-accent-cyber transition-all duration-200"
          >
            kuberpack@gmail.com
          </a>
        </section>
      </main>
    </div>
  );
}
