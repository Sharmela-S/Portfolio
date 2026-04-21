import React, { useEffect, useRef } from 'react';
import { SKILLS } from '../data/projects';
import './Skills.css';

function SkillCard({ skill }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('revealed'); obs.disconnect(); } },
      { threshold: 0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={`skill-card scroll-reveal${skill.dim ? ' dim-card' : ''}`} ref={ref}>
      <h3>{skill.title}</h3>
      <div className="skill-cat-label">{skill.label}</div>
      {skill.items.map((item, i) => (
        <div className="skill-item" key={i}>
          <span>{item}</span>
          <span className={`skill-dot${skill.dim ? ' dim' : ''}`} />
        </div>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-label">capabilities</div>
      <h2>Technical Toolkit</h2>
      <p className="section-sub">AI engineering is the primary focus — backend is the delivery layer.</p>
      <div className="skills-grid">
        {SKILLS.map((s, i) => <SkillCard key={i} skill={s} />)}
      </div>
    </section>
  );
}
