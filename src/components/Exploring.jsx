import React from 'react'

const topics = [
  { icon: '🔌', label: 'REST API',                  sub: 'Building & consuming APIs' },
  { icon: '🧩', label: 'Data Structures & Problem Solving', sub: 'LeetCode & DSA practice' },
  { icon: '🍃', label: 'Spring Boot',               sub: 'Java backend framework' },
  { icon: '📊', label: 'Data Analytics & Visualization', sub: 'Charts, dashboards & insights' },
  { icon: '☁️', label: 'Cloud Computing',           sub: 'AWS fundamentals & services' },
]

export default function Exploring() {
  return (
    <section id="exploring" className="bg-cream py-[90px] px-[8%]">
      <p className="reveal text-[0.7rem] font-bold tracking-[0.18em] uppercase text-accent mb-1">
        What's Next
      </p>
      <h2 className="reveal font-display text-[clamp(1.8rem,3vw,2.4rem)] font-bold text-navy mb-4">
        Currently <span className="text-accent">Exploring</span>
      </h2>
      <p className="reveal text-[0.9rem] text-muted mb-10 max-w-xl">
        Always learning — here's what I'm actively upskilling in right now.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {topics.map(({ icon, label, sub }) => (
          <div key={label}
            className="reveal bg-white border border-border rounded-xl p-5 text-center
              hover:border-accent/40 hover:shadow-[0_8px_24px_rgba(200,151,58,0.1)]
              hover:-translate-y-1 transition-all duration-250">
            <div className="text-3xl mb-3">{icon}</div>
            <p className="text-[0.85rem] font-semibold text-navy mb-1 leading-snug">{label}</p>
            <p className="text-[0.75rem] text-muted leading-relaxed">{sub}</p>
          </div>
        ))}
      </div>
    </section>
  )
}