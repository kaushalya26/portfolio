import React from 'react'

const skillGroups = [
  { icon: '💻', title: 'Languages',        tags: ['Python', 'JavaScript', 'Java'] },
  { icon: '⚛️', title: 'Frontend',         tags: ['React.js', 'React Native', 'HTML5', 'CSS3'] },
  { icon: '📱', title: 'Mobile',           tags: ['Flutter', 'React Native', 'Android'] },
  { icon: '🔧', title: 'Backend & APIs',   tags: ['Flask', 'REST APIs', 'Firebase'] },
  { icon: '🗄️', title: 'Databases',        tags: ['MongoDB', 'PostgreSQL', 'MySQL'] },
  { icon: '🤖', title: 'Machine Learning', tags: ['Pandas', 'NumPy', 'Scikit-learn', 'Data Preprocessing', 'Model Evaluation'] },
  { icon: '🛠️', title: 'Tools',            tags: ['Git', 'GitHub', 'VS Code'] },
  { icon: '☁️', title: 'Cloud & Platforms',tags: ['AWS Basics', 'Firebase'] },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-cream py-[90px] px-[8%]">
      <p className="reveal text-[0.7rem] font-bold tracking-[0.18em] uppercase text-accent mb-1">What I Know</p>
      <h2 className="reveal font-display text-[clamp(1.8rem,3vw,2.4rem)] font-bold text-navy mb-12">
        Technical <span className="text-accent">Skills</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {skillGroups.map(({ icon, title, tags }) => (
          <div key={title}
            className="reveal bg-white border border-border rounded-lg p-5
              hover:shadow-[0_8px_32px_rgba(10,22,40,0.1)] hover:-translate-y-1 transition-all duration-250">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-md bg-gradient-to-br from-navy to-mid
                flex items-center justify-center text-base">{icon}</div>
              <span className="text-[0.78rem] font-bold tracking-widest uppercase text-navy">{title}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {tags.map((t) => (
                <span key={t}
                  className="font-mono text-[0.67rem] px-2.5 py-1 bg-cream border border-border rounded-sm text-blue">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}