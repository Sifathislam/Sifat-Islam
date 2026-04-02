// SIFAT ISLAM — Complete Portfolio
// Sections: Hero, About, Skills, Projects, Contact
// Goal: Get a job / internship
// Stack: React / Next.js + Python / Django

import { useState, useEffect, useRef } from "react";
import heroPhoto from "../public/Moody portrait of a New York hero 2.png"
// then use: src={heroPhoto}
// ── DATA ──────────────────────────────────────────────
const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

const STACK_TICKER = [
  "REACT", "NEXT.JS", "PYTHON", "DJANGO", "JAVASCRIPT",
  "TAILWIND", "REST API", "POSTGRESQL", "GIT", "HTML/CSS",
];

const SKILLS = [
  {
    category: "Frontend",
    icon: "▲",
    items: [
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 78 },
      { name: "JavaScript", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    category: "Backend",
    icon: "◆",
    items: [
      { name: "Python", level: 85 },
      { name: "Django", level: 80 },
      { name: "Django REST", level: 75 },
      { name: "Node.js", level: 65 },
      { name: "REST APIs", level: 82 },
    ],
  },
  {
    category: "Tools & DB",
    icon: "●",
    items: [
      { name: "PostgreSQL", level: 72 },
      { name: "SQLite", level: 80 },
      { name: "Git / GitHub", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 60 },
    ],
  },
];

const PROJECTS = [
  {
    num: "01",
    title: "E-Commerce Platform",
    desc: "Full-stack online store with Django backend, React frontend, cart system, user auth, and payment integration.",
    stack: ["React", "Django", "PostgreSQL", "REST API"],
    status: "Live",
    year: "2024",
    link: "#",
  },
  {
    num: "02",
    title: "Task Management App",
    desc: "Kanban-style productivity app with real-time updates, drag-and-drop, and team collaboration features.",
    stack: ["Next.js", "Django REST", "Python", "Tailwind"],
    status: "Live",
    year: "2024",
    link: "#",
  },
  {
    num: "03",
    title: "Blog CMS",
    desc: "Custom content management system built with Django admin panel, rich text editor, and React frontend.",
    stack: ["React", "Django", "SQLite", "CSS"],
    status: "Open Source",
    year: "2023",
    link: "#",
  },
  {
    num: "04",
    title: "Portfolio Website",
    desc: "This very portfolio — designed and built from scratch with React, Tailwind CSS, and custom animations.",
    stack: ["React", "Tailwind", "Vite", "JavaScript"],
    status: "You're here",
    year: "2025",
    link: "#",
  },
];

// ── GRAIN OVERLAY ─────────────────────────────────────
const GrainOverlay = () => (
  <svg className="fixed inset-0 w-full h-full pointer-events-none opacity-[0.03] z-50" style={{ mixBlendMode: "overlay" }}>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#grain)" />
  </svg>
);

// ── SKILL BAR ──────────────────────────────────────────
function SkillBar({ name, level, delay = 0 }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTimeout(() => setWidth(level), delay); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="mono-font text-xs tracking-[0.1em] text-[#f0ece0]/55 group-hover:text-[#f0ece0] transition-colors">{name}</span>
        <span className="mono-font text-[10px] text-[#f5e642]/45">{level}%</span>
      </div>
      <div className="h-px bg-[#f0ece0]/8 relative overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-[#f5e642] transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

// ── SECTION WRAPPER ────────────────────────────────────
function Section({ id, children }) {
  return (
    <section id={id} className="py-24 md:py-32 px-6 md:px-10 max-w-[1400px] mx-auto">
      {children}
    </section>
  );
}

function SectionLabel({ num, title }) {
  return (
    <div className="flex items-center gap-4 mb-16">
      <span className="mono-font text-[10px] tracking-[0.3em] text-[#f5e642]/60">{num}</span>
      <div className="h-px flex-1 bg-[#f0ece0]/8" />
      <span className="mono-font text-[10px] tracking-[0.3em] uppercase text-[#f0ece0]/25">{title}</span>
    </div>
  );
}

// ── MAIN COMPONENT ─────────────────────────────────────
export default function SifatPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const [time, setTime] = useState("");
  const [activeSection, setActiveSection] = useState("hero");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = ["contact", "projects", "skills", "about", "hero"];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const triggerGlitch = () => {
    setGlitch(true);
    setTimeout(() => setGlitch(false), 600);
  };

  const handleForm = (e) => {
    e.preventDefault();
    setFormSent(true);
  };
  useEffect(() => {
    const titles = [
      "FULL STACK DEVELOPER",
      "BACKEND DEVELOPER",
      "DJANGO DEVELOPER",
      "REACT DEVELOPER",
    ];

    let idx = 0;
    const el = document.getElementById("rotWord");
    if (!el) return;

    const splitText = (text, className) => {
      return text
        .split("")
        .map(
          (char, i) =>
            `<span class="${className}" style="animation-delay:${i * 40}ms">${char}</span>`
        )
        .join("");
    };

    const animate = () => {
      const currentSpans = el.querySelectorAll("span");

      // OUT animation (to right)
      currentSpans.forEach((span, i) => {
        span.style.animation = `slideOutChar 0.3s forwards`;
        span.style.animationDelay = `${i * 30}ms`;
      });

      setTimeout(() => {
        idx = (idx + 1) % titles.length;

        // IN animation (from left)
        el.innerHTML = splitText(titles[idx], "char-in");
      }, 400);
    };

    // initial render
    el.innerHTML = splitText(titles[0], "char-in");

    const interval = setInterval(animate, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-[#0a0a0a] text-[#f0ece0] overflow-x-hidden relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:ital,wght@0,300;0,400;1,300&display=swap');
        .display-font { font-family: 'Bebas Neue', sans-serif; }
        .mono-font { font-family: 'DM Mono', monospace; }
        html { scroll-behavior: smooth; }

        @keyframes glitch-1 {
          0%,100% { transform:translate(0); clip-path:inset(0 0 100% 0); }
          20% { transform:translate(-4px,2px); clip-path:inset(20% 0 60% 0); }
          40% { transform:translate(4px,-2px); clip-path:inset(50% 0 30% 0); }
          60% { transform:translate(-2px,4px); clip-path:inset(70% 0 10% 0); }
          80% { transform:translate(2px,-4px); clip-path:inset(10% 0 80% 0); }
        }
        @keyframes glitch-2 {
          0%,100% { transform:translate(0); clip-path:inset(100% 0 0% 0); }
          20% { transform:translate(4px,-2px); clip-path:inset(60% 0 20% 0); }
          40% { transform:translate(-4px,2px); clip-path:inset(30% 0 50% 0); }
          60% { transform:translate(2px,-4px); clip-path:inset(10% 0 70% 0); }
          80% { transform:translate(-2px,4px); clip-path:inset(80% 0 10% 0); }
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes slide-up {
          from { transform:translateY(60px); opacity:0; }
          to { transform:translateY(0); opacity:1; }
        }
        @keyframes marquee {
          from { transform:translateX(0); }
          to { transform:translateX(-50%); }
        }
        @keyframes scanline {
          0% { transform:translateY(-100%); }
          100% { transform:translateY(100vh); }
        }
        @keyframes scroll-bounce {
          0%,100% { transform:translateY(0); opacity:0.4; }
          50% { transform:translateY(8px); opacity:0.8; }
        }

        .glitch-active .gl1 { animation: glitch-1 0.15s steps(1) 4; }
        .glitch-active .gl2 { animation: glitch-2 0.15s steps(1) 4; }
        .scanline {
          position:fixed; width:100%; height:2px;
          background:rgba(245,230,66,0.03);
          animation:scanline 6s linear infinite;
          pointer-events:none; z-index:1; top:0;
        }
        .cursor-blink { animation: blink 1s step-end infinite; }
        .marquee-track { animation: marquee 24s linear infinite; }
        .scroll-bounce { animation: scroll-bounce 2s ease-in-out infinite; }

        .hero-line { animation: slide-up 0.8s cubic-bezier(0.16,1,0.3,1) both; }
        .hl1{animation-delay:0.1s} .hl2{animation-delay:0.22s}
        .hl3{animation-delay:0.34s} .hl4{animation-delay:0.5s}
        .hl5{animation-delay:0.65s} .hl6{animation-delay:0.8s}

        .nav-link { position:relative; padding-bottom:2px; }
        .nav-link::after {
          content:''; display:block; height:1px;
          background:#f5e642; transform:scaleX(0);
          transition:transform 0.3s cubic-bezier(0.16,1,0.3,1);
          transform-origin:left;
        }
        .nav-link:hover::after, .nav-link.active-link::after { transform:scaleX(1); }
        .nav-link.active-link { color:rgba(240,236,224,1); }

        .yellow-btn { position:relative; overflow:hidden; transition:color 0.3s; }
        .yellow-btn::before {
          content:''; position:absolute; inset:0;
          background:#f5e642; transform:translateX(-101%);
          transition:transform 0.4s cubic-bezier(0.16,1,0.3,1); z-index:0;
        }
        .yellow-btn:hover::before { transform:translateX(0); }
        .yellow-btn:hover { color:#0a0a0a; }
        .yellow-btn span { position:relative; z-index:1; }

        .ghost-btn { position:relative; overflow:hidden; transition:color 0.3s; }
        .ghost-btn::before {
          content:''; position:absolute; inset:0;
          background:#f0ece0; transform:translateX(-101%);
          transition:transform 0.4s cubic-bezier(0.16,1,0.3,1); z-index:0;
        }
        .ghost-btn:hover::before { transform:translateX(0); }
        .ghost-btn:hover { color:#0a0a0a; }
        .ghost-btn span { position:relative; z-index:1; }

        .status-dot {
          width:7px; height:7px; border-radius:50%;
          background:#39ff7e; box-shadow:0 0 8px #39ff7e;
          animation:blink 2s ease-in-out infinite;
        }

        .project-card {
          border:1px solid rgba(240,236,224,0.06);
          transition:all 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .project-card:hover {
          border-color:rgba(245,230,66,0.25);
          background:rgba(245,230,66,0.02);
          transform:translateY(-4px);
        }
        .project-card:hover .project-num { color:#f5e642; }
        .project-card:hover .project-arrow { opacity:1; transform:translate(4px,-4px); }
        .project-num { transition:color 0.3s; }
        .project-arrow { opacity:0; transition:all 0.3s; }

        .contact-input {
          background:transparent;
          border:1px solid rgba(240,236,224,0.1);
          outline:none; width:100%;
          transition:border-color 0.3s;
        }
        .contact-input:focus { border-color:rgba(245,230,66,0.4); }
        .contact-input::placeholder { color:rgba(240,236,224,0.2); }

        .about-tag {
          border:1px solid rgba(240,236,224,0.1);
          transition:all 0.2s; cursor:default;
        }
        .about-tag:hover { border-color:rgba(245,230,66,0.3); color:#f5e642; }

        .service-card {
          border:1px solid rgba(240,236,224,0.06);
          transition:border-color 0.3s;
        }
        .service-card:hover { border-color:rgba(245,230,66,0.15); }


        #rotWord {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
        }

        #rotWord span {
          display: inline-block;
        }

        /* OUT → go right */
        @keyframes slideOutChar {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(40px);
            opacity: 0;
          }
        }

        /* IN → come from left */
        @keyframes slideInChar {
          0% {
            transform: translateX(-40px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .char-in {
          animation: slideInChar 0.4s forwards;
        }
          
      `}</style>

      <GrainOverlay />
      <div className="scanline" />

      {/* ════ NAVBAR ════ */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "border-b border-[#f0ece0]/8 bg-[#0a0a0a]/94 backdrop-blur-md" : ""}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-8 h-8 border border-[#f5e642] flex items-center justify-center group-hover:bg-[#f5e642] transition-all duration-300">
              <span className="display-font text-[#f5e642] text-sm group-hover:text-[#0a0a0a] transition-colors duration-300">SI</span>
            </div>
            <span className="mono-font text-[10px] tracking-[0.25em] text-[#f0ece0]/30 hidden sm:block">SIFAT ISLAM</span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                className={`nav-link mono-font text-xs tracking-[0.2em] uppercase text-[#f0ece0]/40 hover:text-[#f0ece0] transition-colors ${activeSection === l.toLowerCase() ? "active-link" : ""}`}>
                {l}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <div className="hidden md:flex items-center gap-2 border border-[#39ff7e]/15 bg-[#39ff7e]/5 rounded-full px-3 py-1.5">
              <div className="status-dot" />
              <span className="mono-font text-[10px] tracking-[0.15em] text-[#39ff7e]/60">OPEN TO WORK</span>
            </div>
            <span className="mono-font text-[10px] text-[#f0ece0]/30 hidden lg:block tracking-widest tabular-nums">{time}</span>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5">
              <span className={`block w-6 h-px bg-[#f0ece0] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-px bg-[#f5e642] transition-all duration-300 ${menuOpen ? "opacity-0 w-0" : "w-4"}`} />
              <span className={`block w-6 h-px bg-[#f0ece0] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-72" : "max-h-0"}`}>
          <div className="border-t border-[#f0ece0]/8 bg-[#0a0a0a]/96 backdrop-blur-md px-6 py-5 flex flex-col gap-5">
            {NAV_LINKS.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                className="mono-font text-xs tracking-[0.25em] uppercase text-[#f0ece0]/40 hover:text-[#f5e642] transition-colors">
                {l}
              </a>
            ))}
            <div className="pt-3 border-t border-[#f0ece0]/8 flex items-center gap-2">
              <div className="status-dot" />
              <span className="mono-font text-[10px] text-[#39ff7e]/50 tracking-widest">OPEN TO WORK</span>
            </div>
          </div>
        </div>
      </nav>
      {/* ════ HERO ════ */}
      <div id="hero" className="min-h-screen flex flex-col justify-between pt-16 relative overflow-hidden">
        
        {/* Background image — positioned right */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroPhoto}
            alt=""
            className="absolute h-full w-auto max-w-[65%] object-cover object-top"
            style={{ objectPosition: "top right", top:"70px",right:"-70px" }}
          />
          {/* Left fade so text is readable */}
          <div className="absolute inset-0" style={{
            background: "linear-gradient(to right, #0a0a0a 40%, #0a0a0a 55%, rgba(10,10,10,0.6) 72%, rgba(10,10,10,0.1) 100%)"
          }} />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-48" style={{
            background: "linear-gradient(to top, #0a0a0a 0%, transparent 100%)"
          }} />
        </div>

        {/* Top bar */}
        <div className="relative z-10 mono-font text-[10px] tracking-[0.3em] text-[#f0ece0]/30 px-6 md:px-10 pt-8 flex justify-between">
          <span className="hidden sm:block">DHAKA, BANGLADESH</span>
          <span>FULL STACK DEV</span>
        </div>

        {/* Main content */}
         
        <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center lg:items-end px-6 md:px-10 py-10 gap-10 max-w-[1400px] mx-auto w-full">
          <div className="flex-1 max-w-[640px]">
             
              <span className="mono-font text-[15px] tracking-[0.25em] text-[#f0ece0]/70 mb-3 ml-4 uppercase whitespace-nowrap">
                  I AM
                </span>
                <br />
            <div className={`relative inline-block cursor-pointer select-none ${glitch ? "glitch-active" : ""}`} onMouseEnter={triggerGlitch}>
              <div className="display-font text-[clamp(64px,13vw,180px)] leading-[0.88] tracking-tight text-[#f0ece0] hero-line hl1">SIFAT</div>
              <div className="gl1 absolute inset-0 display-font text-[clamp(64px,13vw,180px)] leading-[0.88] text-[#f5e642]">SIFAT</div>
              <div className="gl2 absolute inset-0 display-font text-[clamp(64px,13vw,180px)] leading-[0.88] text-[#ff3b3b]">SIFAT</div>
            </div>
            <div className="display-font text-[clamp(64px,13vw,180px)] leading-[0.88] tracking-tight hero-line hl2"
              style={{ WebkitTextStroke: "1px #f0ece0", color: "transparent" }}>ISLAM</div>
            {/* <div className="display-font text-[clamp(64px,13vw,180px)] leading-[0.88] tracking-tight text-[#f5e642] hero-line hl3">
              .DEV<span className="cursor-blink text-[#f0ece0]">_</span>
            </div> */}
            {/* Rotating title + slash stack */}
            <div className="mt-5 hero-line hl4">
              <div className="flex items-center gap-2 mb-4 min-h-[28px]">
                <span className="mono-font text-[15px] tracking-[0.25em] text-[#f0ece0]/70 uppercase whitespace-nowrap">
                  A
                </span>
                <span className="rotating-word display-font text-[33px] tracking-[0.1em] text-[#f5e642] overflow-hidden inline-block">
                  <span className="inner" id="rotWord">FULL STACK DEVELOPER</span>
                </span>
                <span className="cursor-blink inline-block w-[2px] h-[18px] bg-[#f5e642]" />
              </div>

              <div className="flex flex-wrap items-center">
                {[
                  { icon: "▲", label: "REACT" },
                  { icon: "◆", label: "PYTHON" },
                  { icon: "◆", label: "DJANGO" },
                  { icon: "◆", label: "REST API" },
                  { icon: "●", label: "POSTGRES" },
                  { icon: "●", label: "GIT" },
                ].map(({ icon, label }, i, arr) => (
                  <div key={label}
                    className={`mono-font text-[10px] tracking-[0.15em] text-[#f0ece0]/35 uppercase flex items-center gap-1.5 px-3
                      ${i === 0 ? "pl-0" : ""}
                      ${i < arr.length - 1 ? "border-r border-[#f0ece0]/10" : ""}`}>
                    <span className="text-[#f5e642]/70 text-[9px]">{icon}</span>
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 hero-line hl5">
              <p className="mono-font text-sm text-[#f0ece0]/35 max-w-sm leading-relaxed">
                I build end-to-end web applications — from sleek React UIs to powerful Django backends. Actively seeking my first professional role.
              </p>
              <div className="flex items-center gap-3 shrink-0">
                <a href="#projects" className="yellow-btn mono-font text-xs tracking-[0.15em] uppercase border border-[#f5e642] text-[#f5e642] px-6 py-3">
                  <span>See Work</span>
                </a>
                <a href="#contact" className="ghost-btn mono-font text-xs tracking-[0.15em] uppercase border border-[#f0ece0]/15 text-[#f0ece0]/35 px-5 py-3">
                  <span>Hire Me</span>
                </a>
              </div>
            </div>
          </div>

          {/* Stats — pushed far right, above the image */}
        {/* Stats — bottom right, floating over the image */}
        <div className="hidden lg:flex flex-col gap-10 pb-4 hero-line hl6 absolute bottom-16 right-10 z-10 text-right">
          {[["2+", "Years\nWorking"], ["15+", "Projects\nBuilt"], ["10+", "Technologies"]].map(([n, l]) => (
            <div key={l}>
              <div className="display-font text-[clamp(36px,4vw,58px)] leading-none text-[#f5e642]">{n}</div>
              <div className="mono-font text-[10px] tracking-[0.15em] uppercase text-[#f0ece0]/25 mt-1 whitespace-pre-line leading-relaxed">{l}</div>
            </div>
          ))}
        </div>

        {/* Mobile — show inline below text as before */}
        <div className="flex lg:hidden gap-8 hero-line hl6 mt-6">
          {[["2+", "Years\nWorking"], ["15+", "Projects\nBuilt"], ["10+", "Technologies"]].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="display-font text-[clamp(36px,4vw,58px)] leading-none text-[#f5e642]">{n}</div>
              <div className="mono-font text-[10px] tracking-[0.15em] uppercase text-[#f0ece0]/25 mt-1 whitespace-pre-line leading-relaxed">{l}</div>
            </div>
          ))}
        </div>
        </div>

        {/* Scroll indicator */}
        <div className="relative z-10 flex justify-center pb-6 hero-line hl6">
          <div className="flex flex-col items-center gap-2 scroll-bounce">
            <span className="mono-font text-[10px] tracking-[0.3em] text-[#f0ece0]/20">SCROLL</span>
            <div className="w-px h-8 bg-gradient-to-b from-[#f0ece0]/20 to-transparent" />
          </div>
        </div>
      </div>

      {/* ════ ABOUT ════ */}
      <div className="border-t border-[#f0ece0]/6">
        <Section id="about">
          <SectionLabel num="01" title="About Me" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <h2 className="display-font text-[clamp(42px,7vw,90px)] leading-[0.92] text-[#f0ece0] mb-8">
                BUILDING<br />
                <span style={{ WebkitTextStroke: "1px #f0ece0", color: "transparent" }}>THINGS</span><br />
                <span className="text-[#f5e642]">THAT WORK.</span>
              </h2>
              <p className="mono-font text-sm text-[#f0ece0]/45 leading-relaxed mb-5">
                Hi, I’m Sifat — a Full Stack Developer who focuses on solving real problems, not just writing code. I don’t just design interfaces; I bring ideas to life and turn them into fully functional products. My goal is to build scalable, high-quality solutions that drive real business impact. Want to see your product succeed? Let’s make it happen.
              </p>
              <p className="mono-font text-sm text-[#f0ece0]/45 leading-relaxed mb-10">
                My stack centers around <span className="text-[#f5e642]">React</span> on the frontend and <span className="text-[#f5e642]">Python / Django</span> on the backend. I enjoy working on the full picture — from crafting intuitive user interfaces to designing and building robust REST APIs. I can take your product from concept to production with a solid and reliable <span className="text-[#f5e642]">DevOps</span> architecture.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[["📍", "Location", "Dhaka, BD"], ["🎓", "Education", "CSE Graduate"], ["💼", "Status", "Open to Work"], ["🌐", "Languages", "Bengali, English"]].map(([icon, label, value]) => (
                  <div key={label} className="border border-[#f0ece0]/8 p-4 hover:border-[#f5e642]/20 transition-colors">
                    <div className="mono-font text-[10px] tracking-[0.15em] text-[#f0ece0]/25 mb-1">{icon} {label}</div>
                    <div className="mono-font text-xs text-[#f0ece0]/65">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-10">
                <div className="mono-font text-[10px] tracking-[0.3em] uppercase text-[#f5e642]/50 mb-6">What I Do</div>
                <div className="flex flex-col gap-4">
                  {[
                    { icon: "▲", title: "Frontend Development", desc: "Building responsive, accessible UIs with React and Next.js." },
                    { icon: "◆", title: "Backend Development", desc: "Designing robust REST APIs with Python and Django." },
                    { icon: "●", title: "Database Design", desc: "Structuring efficient databases with PostgreSQL and SQLite." },
                  ].map(({ icon, title, desc }) => (
                    <div key={title} className="service-card flex gap-4 p-5 group">
                      <span className="display-font text-xl text-[#f5e642]/40 group-hover:text-[#f5e642]/70 transition-colors mt-0.5 shrink-0">{icon}</span>
                      <div>
                        <div className="mono-font text-xs tracking-wider text-[#f0ece0]/65 mb-1.5">{title}</div>
                        <div className="mono-font text-xs text-[#f0ece0]/30 leading-relaxed">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="mono-font text-[10px] tracking-[0.3em] uppercase text-[#f5e642]/50 mb-4">Interests</div>
                <div className="flex flex-wrap gap-2">
                  {["Open Source", "System Design", "Clean Code", "UI/UX", "Problem Solving", "Algorithms", "DevOps", "AI/ML"].map(tag => (
                    <span key={tag} className="about-tag mono-font text-[10px] tracking-wider text-[#f0ece0]/35 px-3 py-1.5">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* ════ SKILLS ════ */}
      <div className="border-t border-[#f0ece0]/6">
        <Section id="skills">
          <SectionLabel num="02" title="Skills" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILLS.map(({ category, icon, items }) => (
              <div key={category} className="border border-[#f0ece0]/8 p-8 hover:border-[#f5e642]/20 transition-colors">
                <div className="flex items-center gap-3 mb-8">
                  <span className="display-font text-2xl text-[#f5e642]">{icon}</span>
                  <span className="mono-font text-xs tracking-[0.2em] uppercase text-[#f0ece0]/45">{category}</span>
                </div>
                <div className="flex flex-col gap-6">
                  {items.map((item, i) => (
                    <SkillBar key={item.name} name={item.name} level={item.level} delay={i * 100} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 border border-[#f5e642]/10 bg-[#f5e642]/[0.02] p-8">
            <div className="mono-font text-[10px] tracking-[0.3em] uppercase text-[#f5e642]/50 mb-4">Currently Learning</div>
            <div className="flex flex-wrap gap-3">
              {["Docker", "TypeScript", "GraphQL", "Redis", "AWS Basics"].map(t => (
                <span key={t} className="mono-font text-xs text-[#f5e642]/55 border border-[#f5e642]/20 px-4 py-2">{t}</span>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* ════ PROJECTS ════ */}
      <div className="border-t border-[#f0ece0]/6">
        <Section id="projects">
          <SectionLabel num="03" title="Projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PROJECTS.map((p) => (
              <a key={p.num} href={p.link} className="project-card block p-8 relative">
                <div className="flex justify-between items-start mb-8">
                  <span className="project-num display-font text-5xl text-[#f0ece0]/10 leading-none">{p.num}</span>
                  <div className="flex items-center gap-3">
                    <span className="mono-font text-[10px] tracking-[0.2em] text-[#f0ece0]/20">{p.year}</span>
                    <span className="mono-font text-[10px] tracking-[0.12em] border border-[#39ff7e]/20 text-[#39ff7e]/50 px-2 py-1">{p.status}</span>
                  </div>
                </div>
                <h3 className="display-font text-3xl text-[#f0ece0] mb-3 tracking-wide">{p.title}</h3>
                <p className="mono-font text-xs text-[#f0ece0]/35 leading-relaxed mb-6">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.stack.map(s => (
                    <span key={s} className="mono-font text-[10px] tracking-wider text-[#f0ece0]/25 border border-[#f0ece0]/8 px-3 py-1">{s}</span>
                  ))}
                </div>
                <div className="mono-font text-xs text-[#f5e642]/50 project-arrow">View Project →</div>
              </a>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
              className="ghost-btn mono-font text-xs tracking-[0.2em] uppercase border border-[#f0ece0]/15 text-[#f0ece0]/35 px-8 py-4 inline-block">
              <span>View All on GitHub →</span>
            </a>
          </div>
        </Section>
      </div>

      {/* ════ CONTACT ════ */}
      <div className="border-t border-[#f0ece0]/6">
        <Section id="contact">
          <SectionLabel num="04" title="Contact" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="display-font text-[clamp(42px,6vw,80px)] leading-[0.92] text-[#f0ece0] mb-6">
                LET'S<br />
                <span className="text-[#f5e642]">WORK</span><br />
                <span style={{ WebkitTextStroke: "1px #f0ece0", color: "transparent" }}>TOGETHER.</span>
              </h2>
              <p className="mono-font text-sm text-[#f0ece0]/40 leading-relaxed max-w-sm mb-10">
                I'm actively looking for full-time roles and internships. If you have an opportunity or just want to say hi — my inbox is always open.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Email", value: "sifat@email.com", href: "mailto:sifat@email.com" },
                  { label: "GitHub", value: "github.com/sifatislam", href: "https://github.com" },
                  { label: "LinkedIn", value: "linkedin.com/in/sifatislam", href: "https://linkedin.com" },
                ].map(({ label, value, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-4 group border border-[#f0ece0]/6 p-4 hover:border-[#f5e642]/20 transition-colors">
                    <span className="mono-font text-[10px] tracking-[0.2em] uppercase text-[#f0ece0]/25 w-14 shrink-0">{label}</span>
                    <div className="h-px flex-1 bg-[#f0ece0]/8" />
                    <span className="mono-font text-xs text-[#f0ece0]/40 group-hover:text-[#f5e642] transition-colors">{value}</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              {formSent ? (
                <div className="border border-[#39ff7e]/20 bg-[#39ff7e]/5 p-12 text-center">
                  <div className="display-font text-5xl text-[#39ff7e] mb-3">SENT!</div>
                  <p className="mono-font text-xs text-[#f0ece0]/40 leading-relaxed">Thanks for reaching out.<br />I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleForm} className="flex flex-col gap-5">
                  {[
                    { label: "Your Name", type: "text", key: "name", placeholder: "John Doe" },
                    { label: "Email Address", type: "email", key: "email", placeholder: "you@company.com" },
                  ].map(({ label, type, key, placeholder }) => (
                    <div key={key}>
                      <label className="mono-font text-[10px] tracking-[0.2em] uppercase text-[#f0ece0]/30 block mb-2">{label}</label>
                      <input type={type} required placeholder={placeholder}
                        value={formData[key]}
                        onChange={e => setFormData({ ...formData, [key]: e.target.value })}
                        className="contact-input mono-font text-sm text-[#f0ece0] px-4 py-3" />
                    </div>
                  ))}
                  <div>
                    <label className="mono-font text-[10px] tracking-[0.2em] uppercase text-[#f0ece0]/30 block mb-2">Message</label>
                    <textarea required rows={5} placeholder="Tell me about the opportunity..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="contact-input mono-font text-sm text-[#f0ece0] px-4 py-3 resize-none" />
                  </div>
                  <button type="submit"
                    className="yellow-btn mono-font text-xs tracking-[0.2em] uppercase border border-[#f5e642] text-[#f5e642] px-8 py-4 text-left">
                    <span>Send Message →</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </Section>
      </div>

      {/* ════ FOOTER ════ */}
      <footer className="border-t border-[#f0ece0]/8 px-6 md:px-10 py-8 max-w-[1400px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border border-[#f5e642]/40 flex items-center justify-center">
              <span className="display-font text-[#f5e642]/50 text-xs">SI</span>
            </div>
            <span className="mono-font text-[10px] tracking-[0.2em] text-[#f0ece0]/18">SIFAT ISLAM · 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="status-dot" style={{ width: 5, height: 5 }} />
            <span className="mono-font text-[10px] tracking-[0.2em] text-[#f0ece0]/18">OPEN TO WORK · DHAKA, BD</span>
          </div>
          <span className="mono-font text-[10px] tracking-[0.15em] text-[#f0ece0]/15">BUILT WITH REACT + TAILWIND</span>
        </div>
      </footer>
    </div>
  );
}
