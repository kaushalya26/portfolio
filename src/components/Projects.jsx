import React from 'react'

const projects = [
  {
    type: 'Mobile Development · Firebase',
    title: 'Timetable Scheduling Application',
    desc: 'An Android app that auto-generates conflict-free class timetables for colleges. Features admin, student, and teacher modules with dynamic scheduling constraints and Firebase integration.',
    stack: ['React Native', 'JavaScript', 'Firebase'],
    gradient: 'from-blue to-accent',
  },
  {
    type: 'Machine Learning · Full Stack',
    title: 'Diabetes Prediction Web Application',
    desc: 'A full-stack ML web app that predicts diabetes risk from user health inputs. Includes user authentication, real-time predictions, and personalised health recommendations.',
    stack: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'React'],
    gradient: 'from-navy to-accent',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-cream py-[90px] px-[8%]">
      <p className="reveal text-[0.7rem] font-bold tracking-[0.18em] uppercase text-accent mb-1">What I've Built</p>
      <h2 className="reveal font-display text-[clamp(1.8rem,3vw,2.4rem)] font-bold text-navy mb-12">
        Featured <span className="text-accent">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {projects.map(({ type, title, desc, stack, gradient }) => (
          <div key={title}
            className="reveal bg-white border border-border rounded-xl overflow-hidden flex flex-col
              hover:shadow-[0_16px_48px_rgba(10,22,40,0.12)] hover:-translate-y-1.5 transition-all duration-300">
            <div className={`h-2 bg-gradient-to-r ${gradient}`} />
            <div className="p-7 flex flex-col flex-1">
              <p className="text-[0.68rem] font-bold tracking-[0.14em] uppercase text-accent mb-2">{type}</p>
              <h3 className="font-display text-[1.15rem] font-semibold text-navy leading-snug mb-3">{title}</h3>
              <p className="text-[0.87rem] text-muted leading-[1.75] mb-5 flex-1">{desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {stack.map((s) => (
                  <span key={s}
                    className="font-mono text-[0.67rem] px-2.5 py-1 bg-cream border border-border rounded-sm text-blue">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}