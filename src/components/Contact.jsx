import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', type: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name) { alert('Please enter your name.'); return; }
    if (!form.email || !form.email.includes('@')) { alert('Please enter a valid email.'); return; }
    if (!form.message) { alert('Please write a message.'); return; }

    const subject = encodeURIComponent(
      '[Hire Me] ' + (form.type || 'Opportunity') + ' — ' + form.name +
      (form.company ? ' from ' + form.company : '')
    );
    const body = encodeURIComponent(
      'Hi Sharmela,\n\n' +
      'My name is ' + form.name + (form.company ? ' from ' + form.company : '') + '.\n' +
      'My email: ' + form.email + '\n' +
      (form.type ? 'Opportunity: ' + form.type + '\n' : '') +
      '\nMessage:\n' + form.message + '\n\n' +
      'Looking forward to connecting!'
    );

    setLoading(true);
    window.location.href = 'mailto:sharme2608@gmail.com?subject=' + subject + '&body=' + body;
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-label">get in touch</div>
      <h2>Let's Work Together</h2>
      <p className="section-sub">Open to full-time roles and internships in AI engineering and backend development.</p>

      <div className="contact-wrapper">
        <div className="contact-info">
          <p>Actively looking for roles in AI backend engineering — building systems with LLMs, RAG, and FastAPI.</p>
          <p style={{ marginTop: '.5rem' }}>Reach me directly or fill the form — I'll respond within 24 hours.</p>
          <div className="contact-links">
            <a href="mailto:sharme2608@gmail.com" className="contact-link">
              <div className="contact-link-icon">✉</div>
              <div><div className="contact-link-label">Email</div><div className="contact-link-text">sharme2608@gmail.com</div></div>
            </a>
            <a href="https://linkedin.com/in/sharmela-s" target="_blank" rel="noreferrer" className="contact-link">
              <div className="contact-link-icon">in</div>
              <div><div className="contact-link-label">LinkedIn</div><div className="contact-link-text">linkedin.com/in/sharmela-s</div></div>
            </a>
            <a href="https://github.com/sharmela-s" target="_blank" rel="noreferrer" className="contact-link">
              <div className="contact-link-icon">⬡</div>
              <div><div className="contact-link-label">GitHub</div><div className="contact-link-text">github.com/sharmela-s</div></div>
            </a>
          </div>
        </div>

        <div className="hire-form">
          <h3>Hire Me</h3>
          <p className="hire-form-sub">Fill this and I'll get back to you personally — message goes straight to my inbox.</p>

          {sent ? (
            <div className="form-success">
              <div className="check">✓</div>
              <p>Your mail app is opening with the message pre-filled.<br />Just hit Send!</p>
            </div>
          ) : (
            <>
              <div className="form-group">
                <label>Your Name *</label>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Jane Smith" />
              </div>
              <div className="form-group">
                <label>Company</label>
                <input name="company" value={form.company} onChange={handleChange} placeholder="Acme Corp" />
              </div>
              <div className="form-group">
                <label>Your Email *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@company.com" />
              </div>
              <div className="form-group">
                <label>Opportunity Type</label>
                <select name="type" value={form.type} onChange={handleChange}>
                  <option value="">Select...</option>
                  <option>Full-time Role</option>
                  <option>Internship</option>
                  <option>Freelance / Contract</option>
                  <option>Collaboration</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message *</label>
                <textarea name="message" rows="4" value={form.message} onChange={handleChange} placeholder="Tell me about the role or project..." />
              </div>
              <button className="submit-btn" onClick={handleSubmit} disabled={loading}>
                {loading ? 'Opening your mail app...' : 'Send to Sharmela →'}
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
