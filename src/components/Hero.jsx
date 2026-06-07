import React from 'react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-navy flex items-center px-[8%] overflow-hidden">

      {/* Grid bg */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#C8973A 1px,transparent 1px),linear-gradient(90deg,#C8973A 1px,transparent 1px)', backgroundSize: '50px 50px' }} />

      {/* Glow */}
      <div className="absolute -top-48 -right-48 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(200,151,58,0.13) 0%,transparent 70%)' }} />

      <div className="relative z-10 max-w-2xl">
        <span className="inline-block border border-accent text-accent text-[0.7rem] font-bold
          tracking-[0.14em] uppercase px-4 py-1.5 rounded-sm mb-6 animate-fade-up">
          Available for Opportunities
        </span>

        <h1 className="font-display text-[clamp(2.8rem,5vw,4.2rem)] font-bold text-white
          leading-[1.08] mb-4 animate-fade-up-1">
          Kaushalya<br />
          <span className="text-accent">Thimma Jeyaprakash</span>
        </h1>

        <p className="text-white/50 font-light tracking-wide mb-5 animate-fade-up-2 text-sm">
          <strong className="text-white/85 font-semibold">Entry-Level Software Developer</strong>
          &nbsp;·&nbsp;
          <strong className="text-white/85 font-semibold">React.js</strong>
          &nbsp;·&nbsp;
          <strong className="text-white/85 font-semibold">Java</strong>
          &nbsp;·&nbsp;
          <strong className="text-white/85 font-semibold">Python</strong>
          &nbsp;·&nbsp;
          <strong className="text-white/85 font-semibold">ML</strong>
        </p>

        <p className="text-white/45 text-[0.95rem] leading-[1.85] max-w-[560px] mb-9 animate-fade-up-3">
          MCA graduate from Fatima College, Madurai. I build real-world web and mobile
          applications, integrate ML models into production, and love solving complex
          problems with clean, scalable code.
        </p>

        {/* ✅ 3 buttons — all properly closed */}
        <div className="flex flex-wrap gap-4 animate-fade-up-4">

          <a href="#projects"
            className="bg-accent text-navy px-8 py-3 rounded-sm text-[0.82rem] font-bold
              tracking-widest uppercase hover:bg-gold transition-all duration-200 hover:-translate-y-0.5">
            View My Work
          </a>

          <a href="#contact"
            className="border border-white/20 text-white/75 px-8 py-3 rounded-sm text-[0.82rem]
              font-medium tracking-widest uppercase hover:border-accent hover:text-accent
              transition-all duration-200 hover:-translate-y-0.5">
            Get In Touch
          </a>

          <a
            href="/Kaushalya_TJ_Resume.pdf"
            download="Kaushalya_TJ_Resume.pdf"
            className="flex items-center gap-2 border border-accent/50 text-accent px-8 py-3
              rounded-sm text-[0.82rem] font-semibold tracking-widest uppercase
              hover:bg-accent hover:text-navy transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download CV
          </a>

        </div>
      </div>

      {/* Stats */}
      <div className="hidden lg:flex absolute right-[8%] bottom-[12%] flex-col gap-6 animate-fade-up-5">
        {[
          { num: '2',  label: 'Internships' },
          { num: '2+', label: 'Projects' },
          { num: '2',  label: 'Certifications' },
        ].map(({ num, label }) => (
          <div key={label} className="text-right">
            <div className="font-display text-[2.2rem] text-accent font-bold leading-none">{num}</div>
            <div className="text-[0.7rem] text-white/35 uppercase tracking-[0.12em] mt-1">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}