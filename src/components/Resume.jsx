import React from 'react';
import './Resume.css';

export default function Resume() {
  return (
    <div id="resume-download" className="resume-section">
      <div className="section-label">documents</div>
      <h2>Download Resume</h2>
      <p className="section-sub">AI Backend Developer — Python, FastAPI, RAG, LLMs, Agents, MongoDB.</p>
      <div className="resume-card">
        <div className="resume-card-icon">⚙</div>
        <h3> Resume</h3>
        <p>FastAPI · RAG · LLM · Multi-Agent · MongoDB · JWT — focused on AI and backend engineering roles.</p>
        <a
          href="/resume.pdf"
          download="Sharmela_S_AI_Backend_Resume.pdf"
          className="btn btn-primary"
        >
          ↓ Download Resume
        </a>
      </div>
    </div>
  );
}
