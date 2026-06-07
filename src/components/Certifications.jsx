import React from 'react'

const certs = [
  {
    icon: '🏆',
    title: 'Young Professional',
    issuer: 'TCS iON',
    detail: 'Professional skills & data-driven decision making',
  },
  {
    icon: '🎨',
    title: 'Google UX Design Certification',
    issuer: 'Coursera — Google',
    detail: 'Wireframing, prototyping, empathy mapping & user-centered design',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="bg-navy py-[90px] px-[8%]">
      <p className="reveal text-[0.7rem] font-bold tracking-[0.18em] uppercase text-gold mb-1">Credentials</p>
      <h2 className="reveal font-display text-[clamp(1.8rem,3vw,2.4rem)] font-bold text-white mb-12">
        Certifications & <span className="text-gold">Training</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
        {certs.map(({ icon, title, issuer, detail }) => (
          <div key={title}
            className="reveal flex gap-4 items-start p-6 bg-white/5 border border-accent/20 rounded-lg
              hover:bg-accent/7 hover:-translate-y-1 transition-all duration-200">
            <div className="w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center text-2xl
              bg-gradient-to-br from-accent to-gold">{icon}</div>
            <div>
              <p className="text-[0.92rem] font-semibold text-white leading-snug mb-1">{title}</p>
              <p className="text-[0.75rem] text-gold/80 font-medium mb-2">{issuer}</p>
              <p className="text-[0.75rem] text-white/40 leading-relaxed">{detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}