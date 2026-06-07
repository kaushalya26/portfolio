import React, { useState } from 'react'

const contactInfo = [
  { icon: '📧', label: 'Email',    value: 'kaushalyakausi001@gmail.com' },
  { icon: '📞', label: 'Phone',    value: '+91 9363382336' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/kaushalya-tj' },
  { icon: '📍', label: 'Location', value: 'Madurai, Tamil Nadu, India' },
]

const inputClass =
  'w-full px-3.5 py-2.5 border border-border rounded bg-white text-[#1A1A2E] ' +
  'font-body text-[0.9rem] outline-none focus:border-accent focus:ring-2 ' +
  'focus:ring-accent/15 transition-all'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="bg-white py-[90px] px-[8%]">
      <p className="reveal text-[0.7rem] font-bold tracking-[0.18em] uppercase text-accent mb-1">Let's Connect</p>
      <h2 className="reveal font-display text-[clamp(1.8rem,3vw,2.4rem)] font-bold text-navy mb-12">
        Get In <span className="text-accent">Touch</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
        <div className="reveal flex flex-col gap-4">
          {contactInfo.map(({ icon, label, value }) => (
            <div key={label} className="flex gap-4 items-start bg-card border border-border rounded px-4 py-3.5">
              <div className="w-9 h-9 flex-shrink-0 bg-navy rounded flex items-center justify-center text-base">{icon}</div>
              <div>
                <p className="text-[0.7rem] text-muted uppercase tracking-wider">{label}</p>
                <p className="text-[0.9rem] font-medium text-navy break-all">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <form className="reveal flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.76rem] font-semibold text-navy tracking-wide">Your Name</label>
              <input name="name" value={form.name} onChange={handleChange}
                placeholder="John Smith" required className={inputClass} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.76rem] font-semibold text-navy tracking-wide">Your Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange}
                placeholder="john@company.com" required className={inputClass} />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.76rem] font-semibold text-navy tracking-wide">Subject</label>
            <input name="subject" value={form.subject} onChange={handleChange}
              placeholder="Job Opportunity / Collaboration" className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.76rem] font-semibold text-navy tracking-wide">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange}
              rows={5} placeholder="Hi Kaushalya, I'd love to connect about..."
              required className={inputClass + ' resize-none'} />
          </div>
          <button type="submit"
            className="self-start bg-navy text-white px-9 py-3 rounded text-[0.82rem] font-bold
              tracking-widest uppercase hover:bg-mid hover:-translate-y-0.5 transition-all duration-200">
            Send Message
          </button>
          {sent && (
            <p className="text-[0.82rem] text-accent font-medium italic">
              ✓ Thank you! Kaushalya will get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}