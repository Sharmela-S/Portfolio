import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../data/projects';
import { THUMB_MAP } from './ProjectThumbs';
import './Projects.css';

function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); obs.disconnect(); } },
      { threshold: 0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function ProjectCard({ project }) {
  const ref = useScrollReveal();
  const Thumb = THUMB_MAP[project.id];
  return (
    <div className="project-card scroll-reveal" ref={ref}>
      <div className="project-thumb">
        <Thumb />
        <span className={`project-cat-badge ${project.badgeClass}`}>{project.badge}</span>
      </div>
      <div className="project-body">
        <div className="project-num">{project.num}</div>
        <h3>{project.title}</h3>
        <div className="project-section-label">Problem</div>
        <div className="project-problem">{project.problem}</div>
        <div className="project-section-label">Solution</div>
        <div className="project-solution">{project.solution}</div>
        <div className="tags">
          {project.tags.map((t, i) => (
            <span key={i} className={`tag ${t.cls}`}>{t.label}</span>
          ))}
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className={`github-link${project.githubPlaceholder ? ' placeholder' : ''}`}
        >
          ⬡ {project.githubPlaceholder ? ' repo link' : 'GitHub'}
        </a>
      </div>
    </div>
  );
}

const FILTERS = ['all', 'ai', 'backend', 'frontend'];

export default function Projects() {
  const [active, setActive] = useState('all');
  const visible = active === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === active);

  return (
    <section id="projects" className="projects-section">
      <div className="section-label">featured work</div>
      <h2>Projects I've Built</h2>
      <p className="section-sub">AI pipelines, backend APIs, and intelligent systems built to solve real problems.</p>

      <div className="filter-tabs">
        {FILTERS.map(f => (
          <button
            key={f}
            className={`filter-tab${active === f ? ' active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f === 'all' ? 'All' : f === 'ai' ? 'AI / ML' : f === 'backend' ? 'Backend' : 'Frontend'}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {visible.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  );
}
