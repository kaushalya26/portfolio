import React from 'react'

const highlights = [
  { icon: '🎓', title: 'Master of Computer Applications (MCA)', sub: 'Fatima College, Madurai — 2023 to 2025' },
  { icon: '🏛️', title: 'Bachelor of Commerce (B.Com)',          sub: 'Fatima College, Madurai — 2019 to 2022' },
  { icon: '📍', title: 'Location',                              sub: 'Madurai, Tamil Nadu, India' },
  { icon: '💡', title: 'Interests',                             sub: 'Full Stack Dev · UI/UX · Machine Learning · Data Analytics · Cloud & DevOps' },
  { icon: '🤝', title: 'Personal Attributes',                   sub: 'Quick learner · Strong problem-solver · Collaborative team mindset' },
]

export default function About() {
  return (
    <section id="about" className="bg-white py-[90px] px-[8%]">
      {/* Header */}
      <p className="reveal text-[0.7rem] font-bold tracking-[0.18em] uppercase text-accent mb-1">Who I Am</p>
      <h2 className="reveal font-display text-[clamp(1.8rem,3vw,2.4rem)] font-bold text-navy mb-12">
        About <span className="text-accent">Me</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Text */}
        <div className="reveal space-y-5 text-[0.95rem] leading-[1.9] text-[#3A3A4A]">
          <p>
            I'm a motivated MCA graduate with a passion for building things that work beautifully —
            whether that's a responsive React front end, a Flutter mobile app, or a machine learning
            model that predicts real-world outcomes.
          </p>
          <p>
            My journey spans the full technology stack: I've built Android apps with React Native,
            crafted responsive UIs with Flutter during my internship at Abservetech, and applied
            data science techniques on healthcare datasets during my internship at Embark Interactive Solution.
          </p>
          <p>
            I believe the best software sits at the intersection of good engineering and clear
            communication — which is why I'm equally comfortable writing Python preprocessing
            pipelines and presenting model results to non-technical stakeholders.
          </p>
        </div>

        {/* Highlight cards */}
        <div className="reveal flex flex-col gap-3">
          {highlights.map(({ icon, title, sub }) => (
            <div
              key={title}
              className="flex items-start gap-4 px-5 py-4 bg-card border border-border border-l-[3px] border-l-accent rounded"
            >
              <span className="text-xl flex-shrink-0">{icon}</span>
              <div>
                <p className="text-[0.9rem] font-semibold text-navy mb-0.5">{title}</p>
                <p className="text-[0.82rem] text-muted leading-relaxed">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
