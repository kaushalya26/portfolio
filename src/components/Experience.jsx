import React from 'react'



const jobs = [
  {
    title:   'Data Science Intern',
    company: 'Embark Interactive Solution',
    duration: '3 Months',
    bullets: [
      'Performed exploratory data analysis (EDA) on real-world healthcare datasets, uncovering key trends and data quality issues.',
      'Built end-to-end data preprocessing pipelines — handled missing values, encoded features, and normalised distributions.',
      'Trained and evaluated supervised classification models using scikit-learn; visualised metrics with Matplotlib and Seaborn.',
      'Presented model results and data insights to stakeholders through structured visual reports.',
    ],
  },
  {
    title:   'Mobile App Development Intern (Flutter UI)',
    company: 'Abservetech Pvt. Ltd., Madurai',
    duration: '1 Month',
    bullets: [
      'Built responsive, multi-screen UIs using Flutter widgets and implemented smooth app navigation flows.',
      'Collaborated with design stakeholders to translate wireframes and prototypes into pixel-perfect interfaces.',
      'Improved UI/UX consistency across all screens by standardising design tokens and component patterns.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-[90px] px-[8%]">
      <p className="reveal text-[0.7rem] font-bold tracking-[0.18em] uppercase text-accent mb-1">
        Where I've Worked
      </p>
      <h2 className="reveal font-display text-[clamp(1.8rem,3vw,2.4rem)] font-bold text-navy mb-12">
        Internship <span className="text-accent">Experience</span>
      </h2>

      {/* Timeline */}
      <div className="relative pl-8 border-l-2 border-l-accent/30">
        {jobs.map(({ title, company, duration, bullets }) => (
          <div key={title} className="reveal relative mb-12 last:mb-0">
            {/* Dot */}
            <div className="absolute -left-[2.35rem] top-1.5 w-3.5 h-3.5 rounded-full bg-accent border-2 border-white shadow-[0_0_0_3px_rgba(200,151,58,0.2)]" />

            <div className="bg-card border border-border rounded-lg px-7 py-6 hover:shadow-[0_6px_24px_rgba(10,22,40,0.08)] transition-shadow">
              {/* Top row */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                <h3 className="text-[1rem] font-semibold text-navy">{title}</h3>
                <span className="text-[0.7rem] font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/25 tracking-wide">
                  {duration}
                </span>
              </div>
              <p className="text-[0.85rem] font-medium text-mid mb-5">{company}</p>

              <ul className="space-y-2">
                {bullets.map((b) => (
                  <li key={b} className="relative pl-5 text-[0.88rem] text-[#4A4A5A] leading-[1.75]">
                    <span className="absolute left-0 top-0.5 text-accent text-[0.78rem]">→</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
