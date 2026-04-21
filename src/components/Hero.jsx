import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" />

      <div className="hero-tag fade-up">
        Available for opportunities
      </div>

      <div className="hero-name fade-up">
        <span className="name-single">Sharmela. S</span>
      </div>

      <div className="hero-role fade-up">
        AI Backend Developer (Agentic Systems)
      </div>

      <p className="hero-tagline fade-up">
        <strong>
          I build AI-powered backend systems using LLMs, RAG, and FastAPI.
        </strong>
      </p>

      <div className="hero-btns fade-up">
        <a href="#projects" className="btn btn-primary">
          View Projects →
        </a>
        <a href="#contact" className="btn btn-outline">
          Hire Me
        </a>
        <a href="#resume-download" className="btn btn-outline">
          ↓ Resume
        </a>
      </div>

      <div className="hero-stats fade-up">
        <div>
          <div className="stat-num">5+</div>
          <div className="stat-label">AI & Backend Projects</div>
        </div>
        <div>
          <div className="stat-num">MCA</div>
          <div className="stat-label">8.4 CGPA</div>
        </div>
        <div>
          <div className="stat-num">RAG</div>
          <div className="stat-label">Core Expertise</div>
        </div>
        <div>
          <div className="stat-num">FastAPI</div>
          <div className="stat-label">Backend Stack</div>
        </div>
      </div>
    </section>
  );
}