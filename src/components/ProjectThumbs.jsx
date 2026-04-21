import React from 'react';

export function SkillSiftSVG() {
  return (
    <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <rect width="400" height="225" fill="#0d0d18"/>
      <pattern id="dots1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="1" fill="rgba(124,110,255,0.15)"/>
      </pattern>
      <rect width="400" height="225" fill="url(#dots1)"/>
      <rect x="30" y="65" width="54" height="70" rx="4" fill="rgba(124,110,255,0.12)" stroke="rgba(124,110,255,0.4)" strokeWidth="1"/>
      <text x="57" y="105" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#7c6eff">PDF</text>
      <line x1="38" y1="88" x2="76" y2="88" stroke="rgba(124,110,255,0.3)" strokeWidth="1"/>
      <line x1="38" y1="96" x2="76" y2="96" stroke="rgba(124,110,255,0.3)" strokeWidth="1"/>
      <line x1="38" y1="104" x2="65" y2="104" stroke="rgba(124,110,255,0.3)" strokeWidth="1"/>
      <line x1="90" y1="100" x2="118" y2="100" stroke="rgba(124,110,255,0.6)" strokeWidth="1.5" strokeDasharray="4,3"/>
      <polygon points="118,96 126,100 118,104" fill="rgba(124,110,255,0.6)"/>
      <rect x="130" y="78" width="70" height="44" rx="4" fill="rgba(0,212,170,0.1)" stroke="rgba(0,212,170,0.4)" strokeWidth="1"/>
      <text x="165" y="97" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#00d4aa">BM25</text>
      <text x="165" y="110" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(0,212,170,0.6)">Retrieval</text>
      <line x1="205" y1="100" x2="233" y2="100" stroke="rgba(0,212,170,0.6)" strokeWidth="1.5" strokeDasharray="4,3"/>
      <polygon points="233,96 241,100 233,104" fill="rgba(0,212,170,0.6)"/>
      <rect x="245" y="78" width="60" height="44" rx="4" fill="rgba(124,110,255,0.15)" stroke="rgba(124,110,255,0.5)" strokeWidth="1"/>
      <text x="275" y="97" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#7c6eff">LLM</text>
      <text x="275" y="110" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(124,110,255,0.6)">Rank</text>
      <line x1="310" y1="100" x2="338" y2="100" stroke="rgba(124,110,255,0.6)" strokeWidth="1.5" strokeDasharray="4,3"/>
      <polygon points="338,96 346,100 338,104" fill="rgba(124,110,255,0.6)"/>
      <rect x="350" y="83" width="30" height="34" rx="3" fill="rgba(0,212,170,0.15)" stroke="rgba(0,212,170,0.5)" strokeWidth="1"/>
      <text x="365" y="104" textAnchor="middle" fontFamily="monospace" fontSize="16" fill="#00d4aa">✓</text>
      <text x="200" y="175" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="rgba(255,255,255,0.3)" letterSpacing="2">RAG · RESUME SCREENING</text>
    </svg>
  );
}

export function FinanceSVG() {
  return (
    <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <rect width="400" height="225" fill="#0a0f0d"/>
      <pattern id="dots2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="1" fill="rgba(0,212,170,0.12)"/>
      </pattern>
      <rect width="400" height="225" fill="url(#dots2)"/>
      <circle cx="200" cy="105" r="28" fill="rgba(0,212,170,0.1)" stroke="rgba(0,212,170,0.5)" strokeWidth="1.5"/>
      <text x="200" y="100" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#00d4aa">Orchestrator</text>
      <text x="200" y="113" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(0,212,170,0.7)">Agent</text>
      <rect x="60" y="55" width="62" height="32" rx="3" fill="rgba(124,110,255,0.1)" stroke="rgba(124,110,255,0.4)" strokeWidth="1"/>
      <text x="91" y="68" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="#7c6eff">Data Ingest</text>
      <text x="91" y="79" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="rgba(124,110,255,0.6)">Agent</text>
      <rect x="60" y="138" width="62" height="32" rx="3" fill="rgba(124,110,255,0.1)" stroke="rgba(124,110,255,0.4)" strokeWidth="1"/>
      <text x="91" y="151" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="#7c6eff">Analysis</text>
      <text x="91" y="162" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="rgba(124,110,255,0.6)">Agent</text>
      <rect x="280" y="55" width="62" height="32" rx="3" fill="rgba(124,110,255,0.1)" stroke="rgba(124,110,255,0.4)" strokeWidth="1"/>
      <text x="311" y="68" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="#7c6eff">Insight</text>
      <text x="311" y="79" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="rgba(124,110,255,0.6)">Agent</text>
      <rect x="280" y="138" width="62" height="32" rx="3" fill="rgba(124,110,255,0.1)" stroke="rgba(124,110,255,0.4)" strokeWidth="1"/>
      <text x="311" y="151" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="#7c6eff">Response</text>
      <text x="311" y="162" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="rgba(124,110,255,0.6)">Agent</text>
      <line x1="172" y1="86" x2="122" y2="75" stroke="rgba(0,212,170,0.3)" strokeWidth="1" strokeDasharray="3,3"/>
      <line x1="172" y1="122" x2="122" y2="148" stroke="rgba(0,212,170,0.3)" strokeWidth="1" strokeDasharray="3,3"/>
      <line x1="228" y1="86" x2="280" y2="75" stroke="rgba(0,212,170,0.3)" strokeWidth="1" strokeDasharray="3,3"/>
      <line x1="228" y1="122" x2="280" y2="148" stroke="rgba(0,212,170,0.3)" strokeWidth="1" strokeDasharray="3,3"/>
      <text x="200" y="175" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="rgba(255,255,255,0.2)" letterSpacing="2">GOOGLE ADK · GEMINI · MULTI-AGENT</text>
    </svg>
  );
}

export function PathPilotSVG() {
  return (
    <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <rect width="400" height="225" fill="#0a0a10"/>
      <pattern id="dots3" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="1" fill="rgba(124,110,255,0.1)"/>
      </pattern>
      <rect width="400" height="225" fill="url(#dots3)"/>
      <rect x="25" y="80" width="75" height="45" rx="3" fill="rgba(124,110,255,0.08)" stroke="rgba(124,110,255,0.35)" strokeWidth="1"/>
      <text x="62" y="100" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(124,110,255,0.8)">User Skills</text>
      <text x="62" y="113" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(124,110,255,0.5)">+ Goals</text>
      <line x1="103" y1="103" x2="128" y2="103" stroke="rgba(124,110,255,0.5)" strokeWidth="1.5" strokeDasharray="4,3"/>
      <polygon points="128,99 136,103 128,107" fill="rgba(124,110,255,0.5)"/>
      <rect x="140" y="72" width="80" height="60" rx="4" fill="rgba(0,212,170,0.08)" stroke="rgba(0,212,170,0.45)" strokeWidth="1.5"/>
      <text x="180" y="96" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#00d4aa">LLM</text>
      <text x="180" y="109" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="rgba(0,212,170,0.6)">Career Analysis</text>
      <text x="180" y="122" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="rgba(0,212,170,0.5)">&amp; Roadmap Gen</text>
      <line x1="223" y1="103" x2="248" y2="103" stroke="rgba(0,212,170,0.5)" strokeWidth="1.5" strokeDasharray="4,3"/>
      <polygon points="248,99 256,103 248,107" fill="rgba(0,212,170,0.5)"/>
      <rect x="260" y="75" width="55" height="56" rx="3" fill="rgba(124,110,255,0.1)" stroke="rgba(124,110,255,0.4)" strokeWidth="1"/>
      <text x="287" y="96" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#7c6eff">PDF</text>
      <text x="287" y="109" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(124,110,255,0.6)">Report</text>
      <text x="287" y="122" textAnchor="middle" fontFamily="monospace" fontSize="20" fill="rgba(124,110,255,0.4)">↓</text>
      <rect x="325" y="85" width="50" height="36" rx="3" fill="rgba(0,212,170,0.07)" stroke="rgba(0,212,170,0.3)" strokeWidth="1"/>
      <text x="350" y="100" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="rgba(0,212,170,0.7)">FastAPI</text>
      <text x="350" y="113" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="rgba(0,212,170,0.45)">endpoint</text>
      <line x1="315" y1="103" x2="325" y2="103" stroke="rgba(0,212,170,0.3)" strokeWidth="1" strokeDasharray="3,2"/>
      <text x="200" y="175" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="rgba(255,255,255,0.2)" letterSpacing="2">LLM · FASTAPI · PDF GENERATION</text>
    </svg>
  );
}

export function InstantServeSVG() {
  return (
    <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <rect width="400" height="225" fill="#050f0d"/>
      <pattern id="dots4" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="1" fill="rgba(0,212,170,0.1)"/>
      </pattern>
      <rect width="400" height="225" fill="url(#dots4)"/>
      <rect x="20" y="50" width="58" height="28" rx="3" fill="rgba(0,212,170,0.1)" stroke="rgba(0,212,170,0.4)" strokeWidth="1"/>
      <text x="49" y="69" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#00d4aa">Customer</text>
      <rect x="20" y="98" width="58" height="28" rx="3" fill="rgba(0,212,170,0.1)" stroke="rgba(0,212,170,0.4)" strokeWidth="1"/>
      <text x="49" y="117" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#00d4aa">Provider</text>
      <rect x="20" y="146" width="58" height="28" rx="3" fill="rgba(0,212,170,0.1)" stroke="rgba(0,212,170,0.4)" strokeWidth="1"/>
      <text x="49" y="165" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#00d4aa">Admin</text>
      <line x1="79" y1="64" x2="140" y2="90" stroke="rgba(0,212,170,0.25)" strokeWidth="1" strokeDasharray="4,3"/>
      <line x1="79" y1="112" x2="140" y2="112" stroke="rgba(0,212,170,0.25)" strokeWidth="1" strokeDasharray="4,3"/>
      <line x1="79" y1="160" x2="140" y2="134" stroke="rgba(0,212,170,0.25)" strokeWidth="1" strokeDasharray="4,3"/>
      <rect x="142" y="75" width="76" height="74" rx="4" fill="rgba(0,212,170,0.08)" stroke="rgba(0,212,170,0.5)" strokeWidth="1.5"/>
      <text x="180" y="100" textAnchor="middle" fontFamily="monospace" fontSize="9.5" fill="#00d4aa">FastAPI</text>
      <text x="180" y="114" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="rgba(0,212,170,0.6)">JWT Auth</text>
      <text x="180" y="126" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="rgba(0,212,170,0.6)">RBAC</text>
      <text x="180" y="138" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="rgba(0,212,170,0.5)">REST APIs</text>
      <line x1="220" y1="112" x2="248" y2="112" stroke="rgba(124,110,255,0.5)" strokeWidth="1.5" strokeDasharray="4,3"/>
      <polygon points="248,108 256,112 248,116" fill="rgba(124,110,255,0.5)"/>
      <rect x="260" y="82" width="70" height="60" rx="4" fill="rgba(124,110,255,0.08)" stroke="rgba(124,110,255,0.4)" strokeWidth="1"/>
      <text x="295" y="107" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#7c6eff">MongoDB</text>
      <line x1="270" y1="116" x2="320" y2="116" stroke="rgba(124,110,255,0.2)" strokeWidth="1"/>
      <text x="295" y="130" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="rgba(124,110,255,0.5)">Bookings DB</text>
      <text x="200" y="175" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="rgba(255,255,255,0.2)" letterSpacing="2">FASTAPI · JWT · RBAC · MONGODB</text>
    </svg>
  );
}

export function NaviNestSVG() {
  return (
    <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <rect width="400" height="225" fill="#080d0a"/>
      <pattern id="dots5" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="1" fill="rgba(0,212,170,0.1)"/>
      </pattern>
      <rect width="400" height="225" fill="url(#dots5)"/>
      <rect x="50" y="60" width="300" height="30" rx="3" fill="rgba(124,110,255,0.08)" stroke="rgba(124,110,255,0.3)" strokeWidth="1"/>
      <text x="200" y="80" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="rgba(124,110,255,0.7)">React.js Frontend (API Consumer)</text>
      <rect x="50" y="100" width="300" height="30" rx="3" fill="rgba(0,212,170,0.1)" stroke="rgba(0,212,170,0.45)" strokeWidth="1.5"/>
      <text x="200" y="120" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#00d4aa">Node.js / Express REST API</text>
      <rect x="50" y="140" width="90" height="28" rx="3" fill="rgba(0,212,170,0.07)" stroke="rgba(0,212,170,0.3)" strokeWidth="1"/>
      <text x="95" y="159" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(0,212,170,0.7)">MongoDB</text>
      <rect x="155" y="140" width="90" height="28" rx="3" fill="rgba(0,212,170,0.07)" stroke="rgba(0,212,170,0.3)" strokeWidth="1"/>
      <text x="200" y="159" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(0,212,170,0.7)">Razorpay</text>
      <rect x="260" y="140" width="90" height="28" rx="3" fill="rgba(0,212,170,0.07)" stroke="rgba(0,212,170,0.3)" strokeWidth="1"/>
      <text x="305" y="159" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(0,212,170,0.7)">Cloudinary</text>
      <line x1="200" y1="130" x2="95" y2="140" stroke="rgba(0,212,170,0.2)" strokeWidth="1"/>
      <line x1="200" y1="130" x2="200" y2="140" stroke="rgba(0,212,170,0.2)" strokeWidth="1"/>
      <line x1="200" y1="130" x2="305" y2="140" stroke="rgba(0,212,170,0.2)" strokeWidth="1"/>
      <text x="200" y="200" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="rgba(255,255,255,0.2)" letterSpacing="2">NODE.JS · MONGODB · RAZORPAY</text>
    </svg>
  );
}

export function DineDiscoverSVG() {
  return (
    <svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <rect width="400" height="225" fill="#0a0807"/>
      <pattern id="dots6" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="1" fill="rgba(255,180,100,0.1)"/>
      </pattern>
      <rect width="400" height="225" fill="url(#dots6)"/>
      <rect x="40" y="40" width="320" height="148" rx="5" fill="rgba(255,180,100,0.05)" stroke="rgba(255,180,100,0.25)" strokeWidth="1"/>
      <rect x="40" y="40" width="320" height="22" rx="5" fill="rgba(255,180,100,0.1)"/>
      <circle cx="60" cy="51" r="4" fill="rgba(255,100,100,0.5)"/>
      <circle cx="76" cy="51" r="4" fill="rgba(255,180,100,0.5)"/>
      <circle cx="92" cy="51" r="4" fill="rgba(100,200,100,0.5)"/>
      <rect x="110" y="44" width="200" height="14" rx="7" fill="rgba(255,255,255,0.06)"/>
      <text x="210" y="55" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="rgba(255,180,100,0.5)">dine-discover.app</text>
      <rect x="60" y="76" width="270" height="22" rx="3" fill="rgba(255,180,100,0.06)" stroke="rgba(255,180,100,0.3)" strokeWidth="1"/>
      <text x="82" y="91" fontFamily="monospace" fontSize="8" fill="rgba(255,180,100,0.6)">🔍  Search restaurants near you...</text>
      <rect x="55" y="108" width="80" height="60" rx="3" fill="rgba(255,180,100,0.07)" stroke="rgba(255,180,100,0.2)" strokeWidth="1"/>
      <rect x="55" y="108" width="80" height="28" rx="3" fill="rgba(255,180,100,0.1)"/>
      <text x="95" y="132" textAnchor="middle" fontFamily="monospace" fontSize="18" fill="rgba(255,180,100,0.5)">🍜</text>
      <text x="95" y="153" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="rgba(255,180,100,0.7)">Spice Garden</text>
      <text x="95" y="163" textAnchor="middle" fontFamily="monospace" fontSize="6.5" fill="rgba(255,180,100,0.4)">★★★★☆</text>
      <rect x="148" y="108" width="80" height="60" rx="3" fill="rgba(255,180,100,0.07)" stroke="rgba(255,180,100,0.2)" strokeWidth="1"/>
      <rect x="148" y="108" width="80" height="28" rx="3" fill="rgba(255,180,100,0.1)"/>
      <text x="188" y="132" textAnchor="middle" fontFamily="monospace" fontSize="18" fill="rgba(255,180,100,0.5)">🍕</text>
      <text x="188" y="153" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="rgba(255,180,100,0.7)">Pizza Place</text>
      <text x="188" y="163" textAnchor="middle" fontFamily="monospace" fontSize="6.5" fill="rgba(255,180,100,0.4)">★★★★★</text>
      <rect x="241" y="108" width="80" height="60" rx="3" fill="rgba(255,180,100,0.07)" stroke="rgba(255,180,100,0.2)" strokeWidth="1"/>
      <rect x="241" y="108" width="80" height="28" rx="3" fill="rgba(255,180,100,0.1)"/>
      <text x="281" y="132" textAnchor="middle" fontFamily="monospace" fontSize="18" fill="rgba(255,180,100,0.5)">☕</text>
      <text x="281" y="153" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="rgba(255,180,100,0.7)">Brew &amp; Bean</text>
      <text x="281" y="163" textAnchor="middle" fontFamily="monospace" fontSize="6.5" fill="rgba(255,180,100,0.4)">★★★★☆</text>
      <text x="200" y="208" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="rgba(255,255,255,0.2)" letterSpacing="2">HTML5 · CSS3 · JAVASCRIPT</text>
    </svg>
  );
}

export const THUMB_MAP = {
  skillsift: SkillSiftSVG,
  finance: FinanceSVG,
  pathpilot: PathPilotSVG,
  instantserve: InstantServeSVG,
  navinest: NaviNestSVG,
  dinediscover: DineDiscoverSVG,
};
