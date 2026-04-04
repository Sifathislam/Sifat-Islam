// MOHAIMINUL ISLAM (SIFAT) — Complete Portfolio
// Updated with real resume info
import emailjs from "@emailjs/browser";
import { useState, useEffect, useRef } from "react";
import heroPhoto from "../public/Moody portrait of a New York hero 2.png";

// ── DATA ──────────────────────────────────────────────
const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

// ── DATA ──────────────────────────────────────────────
const PROJECTS = [
  {
    num: "01",
    title: "Fishlo",
    subtitle: "E-Commerce Platform",
    desc: "One of the most well-engineered projects I've worked on. Every line of code is written with solid principles and every file is organized to a world-class standard. I led backend development, building a bulletproof payment system, variation-based product selling, Google Geo Matrix integration to calculate estimated delivery times, and dedicated dashboards for users, vendors, and delivery personnel. The full deployment pipeline — Docker, CI/CD, GitHub automation, and Linode VPS — was set up and optimized entirely by me.",
    stack: [
      "Django DRF",
      "React.js",
      "wkhtmltopdf",
      "Celery",
      "Redis",
      "SMS OTP",
      "CI/CD",
      "Linode VPS",
    ],
    status: "Live",
    year: "2024–2025",
    date: "2024 – 2025",
    link: "https://fishlo.in/",
    featured: true,
  },

  {
    num: "02",
    title: "Tech With Rathan",
    subtitle: "Learning Management System",
    desc: "A production LMS platform with thousands of active students learning daily. Built end-to-end with a React.js frontend and Django REST Framework backend. Features a subscription-based model, live class sessions, a robust payment system, and a full content management flow. Entirely managed on the DevOps side — Docker containerization, CI/CD GitHub automation pipelines, and Linode VPS deployment — all handled and maintained by me.",
    stack: [
      "Django DRF",
      "React.js",
      "Linode VPS",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Django Jinja",
    ],
    status: "Live",
    year: "2024–Ongoing",
    date: "Jul 2024 – Present",
    link: "https://techwithrathan.com/",
  },
  {
    num: "03",
    title: "FlickBasket",
    subtitle: "Multi-Vendor E-Commerce",
    desc: "A full-featured, production-grade multi-vendor e-commerce platform currently running a live business. Supports vendor accounts, admin management, and customer shopping in one unified system. Key features include CSV-based bulk product import from any platform, AI-powered automatic image generation from product names, a fully functional POS system suitable for supermarkets and retail stores, detailed sales reports, PDF invoice generation, and seamless role switching between user types. The platform is actively generating revenue for its owner.",
    stack: [
      "Django",
      "Bootstrap 5",
      "ReportLab",
      "Google Geo API",
      "Google Image API",
      "PyJWT",
      "PostgreSQL",
    ],
    status: "Live",
    year: "2024–2025",
    date: "Jun 2024 – Dec 2025",
    link: "https://flickbasket.com/",
  },
  {
    num: "04",
    title: "Rio Solution",
    subtitle: "Flood Map Sales Platform",
    desc: "A product sales website for a Canadian client, selling flood maps and related services. The site earns thousands of dollars for the client and is entirely built by me — from frontend to backend. The most complex part was the custom calculation engine for map pricing and the automated PDF generation system that delivers professional flood map reports to customers.",
    stack: ["Django", "Bootstrap", "ReportLab", "xhtml2pdf"],
    status: "Live",
    year: "2024–2025",
    date: "Aug 2024 – Mar 2025",
    link: "https://rioltd.ca/",
  },
  {
    num: "05",
    title: "Vonnit Mall",
    subtitle: "Multi-Vendor E-Commerce (Nigeria)",
    desc: "A full-scale multi-vendor e-commerce platform built for a Nigerian client's active business. I handled development from A to Z, including the complete payout system, payment gateway integrations, a comprehensive employee management system, multi-role dashboards (vendor, customer, admin), and all e-commerce management features. Everything from vendor payouts to customer purchases is managed from a single, unified interface.",
    stack: ["Django", "Bootstrap", "Celery", "Redis", "HoneyPot", "PostgreSQL"],
    status: "Live",
    year: "2024–2025",
    date: "Jul 2024 – Apr 2025",
    link: null,
    github: "https://github.com/dev-rathankumar/vonnit",
    privateNote:
      "This is a private repository. The code is available upon request.",
  },
  {
    num: "06",
    title: "Project Syncfy",
    subtitle: "Project Management Tool",
    desc: "A team project management application — similar to Jira and Asana — built as a 4-person group project where I served as the backend developer. Responsible for the Django REST Framework API, JWT authentication, Google OAuth integration, and PDF report generation. Users can create accounts, set up projects, and manage tasks collaboratively.",
    stack: [
      "Django DRF",
      "React.js",
      "ReportLab",
      "PyJWT",
      "Google Auth",
      "SQLite",
    ],
    status: "Team Project",
    year: "2024",
    date: "May 2024 – Jun 2024",
    link: "https://project-syncify.netlify.app/",
  },
  {
    num: "07",
    title: "Stock Predictor",
    subtitle: "ML / Data Science",
    desc: "A machine learning portal that predicts stock price movements. The LSTM model was trained on 10 years of historical data using TensorFlow, Scikit-learn, Matplotlib, and Pandas for the ML pipeline, with a Django + React frontend for visualization and user interaction.",
    stack: [
      "TensorFlow",
      "Scikit-learn",
      "LSTM",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Django",
      "React",
    ],
    status: "Completed",
    year: "2024–2025",
    date: "Dec 2024 – Feb 2025",
    link: null,
    github: "https://github.com/Mohaiminul-Islam-AppzoneIT/Stock_Visual_Portal",
  },
  {
    num: "08",
    title: "Great Kart",
    subtitle: "E-Commerce Platform",
    desc: "An e-commerce project featuring variation-based product selling (size, color, etc.) added by vendors, a properly integrated payment system, and full site optimization. A well-structured project demonstrating solid Django development fundamentals.",
    stack: ["Django", "HTML", "CSS", "Bootstrap"],
    status: "Completed",
    year: "2024–2025",
    date: "Aug 2024 – Jun 2025",
    link: null,
    github: "https://github.com/Sifathislam/Great_kart-Project",
  },
  {
    num: "09",
    title: "Automation Toolkit",
    subtitle: "Python Automation & Scraping",
    desc: "A multi-feature automation project with five distinct tools: Custom Django Management Commands, a Bulk Email System, Web Scraping Tools using BeautifulSoup, Stock Market Analysis with Yahoo Finance, and a Data Import/Export pipeline using Django and Celery.",
    stack: [
      "Django",
      "Celery",
      "Redis",
      "BeautifulSoup",
      "yfinance",
      "Bootstrap",
    ],
    status: "Completed",
    year: "2025",
    date: "Aug 2025 – Dec 2025",
    link: null,
  },
  {
    num: "10",
    title: "Food Online",
    subtitle: "Multi-Vendor Food Marketplace",
    desc: "A multi-vendor food ordering platform where vendors can register and list their products, and customers can browse, order, and pay in one place. Features multiple payment method integrations and advanced Django patterns for order flow, vendor management, and customer accounts.",
    stack: ["Django", "HTML", "CSS", "Bootstrap"],
    status: "Completed",
    year: "2024",
    date: "Jun 2024 - Mar 2025",
    link: null,
  },
  {
    num: "11",
    title: "Car Shop",
    subtitle: "Car Selling Platform",
    desc: "A basic car selling platform where users can list their cars for sale and customers can browse available listings with filtering options. Built end-to-end with Django.",
    stack: ["Django", "HTML", "CSS", "Bootstrap"],
    status: "Completed",
    year: "2024",
    date: "Jun 2024 – Aug 2024",
    link: null,
  },
  {
    num: "12",
    title: "Blog Project",
    subtitle: "Learning Project",
    desc: "A foundational blog project built to understand Python and Django fundamentals — demonstrating how Python can be used to build powerful, structured web applications from scratch.",
    stack: ["Python", "Django", "HTML", "CSS"],
    status: "Completed",
    year: "2024",
    date: "Jun 2024",
    link: null,
  },
];
// ── GRAIN OVERLAY ─────────────────────────────────────
const GrainOverlay = () => (
  <svg
    className="fixed inset-0 w-full h-full pointer-events-none opacity-[0.03] z-50"
    style={{ mixBlendMode: "overlay" }}
  >
    <filter id="grain">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.65"
        numOctaves="3"
        stitchTiles="stitch"
      />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#grain)" />
  </svg>
);

// ── SECTION WRAPPER ────────────────────────────────────
function Section({ id, children }) {
  return (
    <section
      id={id}
      className="py-24 md:py-32 px-6 md:px-10 max-w-[1400px] mx-auto"
    >
      {children}
    </section>
  );
}

function SectionLabel({ num, title }) {
  return (
    <div className="flex items-center gap-4 mb-16">
      <span className="mono-font text-[10px] tracking-[0.3em] text-[#f5e642]/60">
        {num}
      </span>
      <div className="h-px flex-1 bg-[#f0ece0]/8" />
      <span className="mono-font text-[10px] tracking-[0.3em] uppercase text-[#f0ece0]/50">
        {title}
      </span>
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
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

  const [formSending, setFormSending] = useState(false);
  const [formError, setFormError] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    setFormSending(true);
    setFormError("");

    emailjs
      .send(
        "service_hj08svy", // paste your Service ID
        "template_t8201zn", // paste your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "vf18QyRIMR8iw2Au9", // paste your Public Key
      )
      .then(() => {
        setFormSent(true);
        setFormSending(false);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setFormError("Something went wrong. Please try again.");
        setFormSending(false);
      });
  };
  useEffect(() => {
    const titles = [
      "FULL STACK DEVELOPER",
      "DJANGO DEVELOPER",
      "BACKEND DEVELOPER",
      "REACT DEVELOPER",
    ];

    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const el = document.getElementById("rotWord");
    if (!el) return;

    const type = () => {
      const currentText = titles[titleIndex];

      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      el.textContent = currentText.substring(0, charIndex);

      let speed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentText.length) {
        speed = 1500;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        speed = 500;
      }

      setTimeout(type, speed);
    };

    type();
  }, []);
  const [modalProject, setModalProject] = useState(null);

  const getStatusClass = (status) => {
    if (status.includes("Live") || status.includes("Ongoing"))
      return "status-live";
    if (status.includes("Team") || status.includes("Private"))
      return "status-private";
    return "status-production";
  };
  return (
    <div className="bg-[#0a0a0a] text-[#f0ece0] overflow-x-hidden relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:ital,wght@0,300;0,400;1,300&display=swap');
        .display-font { font-family: 'Bebas Neue', sans-serif; }
        .mono-font { font-family: 'DM Mono', monospace; }
        html { scroll-behavior: smooth; }
        *{
        border-color:#fdfdfd47 !important;
        }
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

        #rotWord::after {
          content: "|";
          margin-left: 5px;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
      `}</style>

      <GrainOverlay />
      <div className="scanline" />

      {/* ════ NAVBAR ════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "border-b border-[#f0ece0]/8 bg-[#0a0a0a]/94 backdrop-blur-md" : ""}`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-8 h-8 border border-[#f5e642] flex items-center justify-center group-hover:bg-[#f5e642] transition-all duration-300">
              <span className="display-font text-[#f5e642] text-sm group-hover:text-[#0a0a0a] transition-colors duration-300">
                SI
              </span>
            </div>
            <span className="mono-font text-[10px] tracking-[0.25em] text-[#f0ece0]/70 hidden sm:block">
              SIFAT ISLAM
            </span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className={`nav-link mono-font text-xs tracking-[0.2em] uppercase text-[#f0ece0]/40 hover:text-[#f0ece0] transition-colors ${activeSection === l.toLowerCase() ? "active-link" : ""}`}
              >
                {l}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <div className="hidden md:flex items-center gap-2 border border-[#39ff7e]/15 bg-[#39ff7e]/5 rounded-full px-3 py-1.5">
              <div className="status-dot" />
              <span className="mono-font text-[10px] tracking-[0.15em] text-[#39ff7e]/60">
                OPEN TO WORK
              </span>
            </div>
            <span className="mono-font text-[10px] text-[#f0ece0]/60 hidden lg:block tracking-widest tabular-nums">
              {time}
            </span>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5"
            >
              <span
                className={`block w-6 h-px bg-[#f0ece0] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-px bg-[#f5e642] transition-all duration-300 ${menuOpen ? "opacity-0 w-0" : "w-4"}`}
              />
              <span
                className={`block w-6 h-px bg-[#f0ece0] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-72" : "max-h-0"}`}
        >
          <div className="border-t border-[#f0ece0]/8 bg-[#0a0a0a]/96 backdrop-blur-md px-6 py-5 flex flex-col gap-5">
            {NAV_LINKS.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="mono-font text-xs tracking-[0.25em] uppercase text-[#f0ece0]/60 hover:text-[#f5e642] transition-colors"
              >
                {l}
              </a>
            ))}
            <div className="pt-3 border-t border-[#f0ece0]/8 flex items-center gap-2">
              <div className="status-dot" />
              <span className="mono-font text-[10px] text-[#39ff7e]/50 tracking-widest">
                OPEN TO WORK
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* ════ HERO ════ */}
      <div
        id="hero"
        className="min-h-screen flex flex-col justify-between pt-16 relative overflow-hidden group/hero"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={heroPhoto}
            alt=""
            className="absolute h-full w-auto max-w-[65%] object-cover object-top transition-all duration-700 ease-out group-hover/hero:brightness-125"
            style={{
              objectPosition: "top right",
              top: "70px",
              right: "-70px",
              transformOrigin: "center top",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #0a0a0a 40%, #0a0a0a 55%, rgba(10,10,10,0.6) 72%, rgba(10,10,10,0.1) 100%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-48"
            style={{
              background:
                "linear-gradient(to top, #0a0a0a 0%, transparent 100%)",
            }}
          />
        </div>

        <div className="relative z-10 mono-font text-[10px] tracking-[0.3em] text-[#f0ece0]/60 px-6 md:px-10 pt-8 flex justify-between">
          <span className="hidden sm:block">DHAKA, BANGLADESH</span>
          <span>FULL STACK DEV</span>
        </div>

        <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center lg:items-end px-6 md:px-10 py-10 gap-10 max-w-[1400px] mx-auto w-full">
          <div className="flex-1 max-w-[640px]">
            <span className="mono-font text-[15px] tracking-[0.25em] text-[#f0ece0]/60 mb-3 ml-4 uppercase whitespace-nowrap">
              I AM
            </span>
            <br />
            <div
              className={`relative inline-block cursor-pointer select-none ${glitch ? "glitch-active" : ""}`}
              onMouseEnter={triggerGlitch}
            >
              <div className="display-font text-[clamp(64px,13vw,180px)] leading-[0.88] tracking-tight text-[#f0ece0] hero-line hl1">
                SIFAT
              </div>
              <div className="gl1 absolute inset-0 display-font text-[clamp(64px,13vw,180px)] leading-[0.88] text-[#f5e642]">
                SIFAT
              </div>
              <div className="gl2 absolute inset-0 display-font text-[clamp(64px,13vw,180px)] leading-[0.88] text-[#ff3b3b]">
                SIFAT
              </div>
            </div>
            <div
              className="display-font text-[clamp(64px,13vw,180px)] leading-[0.88] tracking-tight hero-line hl2"
              style={{ WebkitTextStroke: "1px #f0ece0", color: "transparent" }}
            >
              ISLAM
            </div>

            <div className="mt-5 hero-line hl4">
              <div className="flex items-center gap-2 mb-4 min-h-[28px]">
                <span className="mono-font text-[14px] tracking-[0.25em] text-[#f0ece0]/70 uppercase whitespace-nowrap">
                  A
                </span>
                <span className="rotating-word display-font text-[33px] tracking-[0.1em] text-[#f5e642] overflow-hidden inline-block">
                  <span className="inner" id="rotWord">
                    FULL STACK DEVELOPER
                  </span>
                </span>
              </div>

              <div className="flex flex-wrap items-center">
                {[
                  { icon: "◆", label: "PYTHON" },
                  { icon: "◆", label: "DJANGO" },
                  { icon: "▲", label: "REACT" },
                  { icon: "◆", label: "FASTAPI" },
                  { icon: "●", label: "POSTGRES" },
                  { icon: "●", label: "DEVOPS" },
                ].map(({ icon, label }, i, arr) => (
                  <div
                    key={label}
                    className={`mono-font text-[10px] tracking-[0.15em] text-[#f0ece0]/35 uppercase flex items-center gap-1.5 px-3
                      ${i === 0 ? "pl-0" : ""}
                      ${i < arr.length - 1 ? "border-r border-[#f0ece0]/10" : ""}`}
                  >
                    <span className="text-[#f5e642]/70 text-[9px]">{icon}</span>
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 hero-line hl5">
              <p className="mono-font text-sm text-[#f0ece0]/35 max-w-sm leading-relaxed">
                Full Stack Developer with 3+ years of experience building
                production-grade web applications. Currently open to work and
                want to shipping real products that real people use every day.
              </p>
             <div className="flex items-center gap-3 shrink-0">                
                  <a href="#projects"
                    className="yellow-btn mono-font text-xs tracking-[0.15em] uppercase border border-[#f5e642] text-[#f5e642] px-6 py-3"
                  >
                    <span>See Work</span>
                  </a>
                  
                  <a
                    href="/public/MohaiminulIslamFullStackDeveloperCV.pdf"
                    download="SifatIslamCV.pdf"
                    className="ghost-btn mono-font text-xs tracking-[0.15em] uppercase border border-[#f0ece0]/15 text-[#f0ece0]/35 px-5 py-3">
                    <span>Download CV</span>
                  </a>
                </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-10 pb-4 hero-line hl6 absolute bottom-16 right-10 z-10 text-right">
            {[
              ["3+", "Years\nExperience"],
              ["20+", "Worked\nProjects"],
              ["250+", "Problem\nSolved"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="display-font text-[clamp(36px,4vw,58px)] leading-none text-[#f5e642]">
                  {n}
                </div>
                <div className="mono-font text-[10px] tracking-[0.15em] uppercase text-[#f0ece0]/60 mt-1 whitespace-pre-line leading-relaxed">
                  {l}
                </div>
              </div>
            ))}
          </div>

          <div className="flex lg:hidden gap-8 hero-line hl6 mt-6">
            {[
              ["3+", "Years\nExperience"],
              ["20+", "Worked\nProjects"],
              ["250+", "Problem\nSolved"],
            ].map(([n, l]) => (
              <div key={l} className="text-center">
                <div className="display-font text-[clamp(36px,4vw,58px)] leading-none text-[#f5e642]">
                  {n}
                </div>
                <div className="mono-font text-[10px] tracking-[0.15em] uppercase text-[#f0ece0]/60 mt-1 whitespace-pre-line leading-relaxed">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex justify-center pb-6 hero-line hl6">
          <div className="flex flex-col items-center gap-2 scroll-bounce">
            <span className="mono-font text-[10px] tracking-[0.3em] text-[#f0ece0]/20">
              SCROLL
            </span>
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
                BUILDING
                <br />
                <span
                  style={{
                    WebkitTextStroke: "1px #f0ece0",
                    color: "transparent",
                  }}
                >
                  THINGS
                </span>
                <br />
                <span className="text-[#f5e642]">THAT WORK.</span>
              </h2>
              <p className="mono-font text-sm text-[#f0ece0]/45 leading-relaxed mb-5">
                I'm Sifat — a Full Stack Developer. I don’t just write code; I
                build production-ready products that generate real value. I have
                developed multiple live products that real people use to run
                their businesses.
              </p>

              <p className="mono-font text-sm text-[#f0ece0]/45 leading-relaxed mb-10">
                My stack includes{" "}
                <span className="text-[#f5e642]">
                  Python / Django / FastAPI
                </span>{" "}
                on the backend and{" "}
                <span className="text-[#f5e642]">React.js</span> on the
                frontend. I have experience working with{" "}
                <span className="text-[#f5e642]">
                  AWS, Docker, CI/CD pipelines, LangChain, payment integrations,
                  and Linode server deployments
                </span>
                . I take ownership of features from concept to production.
              </p>

              {/* Work Experience Timeline */}
              <div className="mb-8">
                <div className="mono-font text-[10px] tracking-[0.3em] uppercase text-[#f5e642]/50 mb-5">
                  Experience
                </div>
                <div className="flex flex-col gap-4">
                  <div className="border border-[#f0ece0]/8 p-4 hover:border-[#fdfdfd2b]/20 transition-colors">
                    <div className="flex justify-between items-start mb-1">
                      <span className="mono-font text-xs text-[#f0ece0]/80">
                        Django Developer
                      </span>
                      <span className="mono-font text-[10px] text-[#f5e642]/50">
                        Jun 2024 – Present
                      </span>
                    </div>
                    <div className="mono-font text-[10px] text-[#f0ece0]/35">
                      AppzoneIT · Full-time
                    </div>
                  </div>
                  <div className="border border-[#fdfdfd2b]/8 p-4 hover:border-[#f5e642]/20 transition-colors">
                    <div className="flex justify-between items-start mb-1">
                      <span className="mono-font text-xs text-[#f0ece0]/80">
                        Python Developer
                      </span>
                      <span className="mono-font text-[10px] text-[#f5e642]/50">
                        Apr – Jun 2024
                      </span>
                    </div>
                    <div className="mono-font text-[10px] text-[#f0ece0]/35">
                      Yafa Cloud Services LLC · Internship
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  ["📍", "Location", "DHAKA, BD"],
                  ["🎓", "Education", "Diploma in CSE"],
                  ["💼", "Status", "Open"],
                  ["🌐", "Languages", "Bengali, English, Hindi"],
                ].map(([icon, label, value]) => (
                  <div
                    key={label}
                    className="border border-[#fdfdfd2b]/8 p-4 hover:border-[#f5e642]/20 transition-colors"
                  >
                    <div className="mono-font text-[10px] tracking-[0.15em] text-[#f0ece0]/25 mb-1">
                      {icon} {label}
                    </div>
                    <div className="mono-font text-xs text-[#f0ece0]/65">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-10">
                <div className="mono-font text-[10px] tracking-[0.3em] uppercase text-[#f5e642]/50 mb-6">
                  What I Do
                </div>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      icon: "◆",
                      title: "Backend Development",
                      desc: "Django REST APIs, FastAPI microservices, LangChain AI integrations, and payment systems.",
                    },
                    {
                      icon: "▲",
                      title: "Frontend Development",
                      desc: "React.js UIs, Bootstrap and Tailwind layouts, responsive and accessible interfaces.",
                    },
                    {
                      icon: "●",
                      title: "DevOps & Deployment",
                      desc: "Docker, CI/CD pipelines, AWS Lambda, Linode server management, and production deployments.",
                    },
                  ].map(({ icon, title, desc }) => (
                    <div
                      key={title}
                      className="service-card flex gap-4 p-5 group"
                    >
                      <span className="display-font text-xl text-[#f5e642]/40 group-hover:text-[#f5e642]/70 transition-colors mt-0.5 shrink-0">
                        {icon}
                      </span>
                      <div>
                        <div className="mono-font text-xs tracking-wider text-[#f0ece0]/65 mb-1.5">
                          {title}
                        </div>
                        <div className="mono-font text-xs text-[#f0ece0]/30 leading-relaxed">
                          {desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="mono-font text-[10px] tracking-[0.3em] uppercase text-[#f5e642]/50 mb-4">
                  Interests
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Machine Learning",
                    "Automation",
                    "Web Scraping",
                    "System Design",
                    "Clean Code",
                    "DSA",
                    "DevOps",
                    "AI/LLMs",
                    "Open Source",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="about-tag mono-font text-[10px] tracking-wider text-[#f0ece0]/35 px-3 py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {/* Problem Solving */}
              <div className="mt-6">
                <div className="flex items-center justify-between px-8 py-5 border-b border-[#fdfdfd2b]/8">
                  <div className="flex items-center gap-3">
                    <span className="display-font text-lg text-[#f5e642]/50">
                      ◈
                    </span>
                    <span className="mono-font text-[10px] tracking-[0.3em] uppercase text-[#f5e642]/50">
                      Problem Solving
                    </span>
                  </div>
                  <span className="mono-font text-[10px] tracking-[0.2em] text-[#f5e642]/50">
                    250+ Problems Solved
                  </span>
                </div>
                <div
                  className="grid"
                  style={{ gridTemplateColumns: "1fr 1px 1fr 1px 1fr" }}
                >
                 {[
                    { platform: "CodeChef", handle: "@sifathislam790", href: "https://www.codechef.com/users/sifathislam790" },
                    { platform: "Codeforces", handle: "@sifathislam790", href: "https://codeforces.com/profile/sifathislam790" },
                    { platform: "LeetCode", handle: "@sifathislam790", href: "https://leetcode.com/u/sifathislam790/" },
                  ].map(({ platform, handle, href }, i, arr) => (
                    <>
                      <a
                        key={platform}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col gap-1 px-8 py-6 group cursor-pointer hover:bg-[#f5e642]/[0.03] transition-colors"
                      >
                        <span className="mono-font text-[13px] tracking-[0.04em] text-[#f5e642]/60 group-hover:text-[#f5e642] transition-colors">
                          {platform}
                        </span>
                        <span className="mono-font text-[10px] tracking-[0.1em] text-[#f5e642]/25">
                          {handle}
                        </span>
                      </a>
                      {i < arr.length - 1 && (
                        <div key={platform + "-div"} className="bg-[#f5e642]/8" />
                      )}
                    </>
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

          {/* Newspaper columns */}
          <div
            className="grid gap-0"
            style={{ gridTemplateColumns: "1fr 1px 1fr 1px 1fr" }}
          >
            {/* Frontend */}
            <div className="pr-8 md:pr-12">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#f0ece0]/8">
                <span className="display-font text-lg text-[#f5e642]">▲</span>
                <span className="mono-font text-[10px] tracking-[0.25em] uppercase text-[#f0ece0]/30">
                  Frontend
                </span>
              </div>
              {[
                "React.js",
                "JavaScript",
                "Tailwind CSS",
                "Bootstrap 5",
                "HTML / CSS",
              ].map((skill) => (
                <div
                  key={skill}
                  className="mono-font text-[13px] tracking-[0.04em] text-[#f0ece0]/60 py-[10px] border-b border-[#f0ece0]/[0.04] flex items-center gap-3 hover:text-[#ada554] transition-colors group cursor-default"
                >
                  <span className="w-[3px] h-[3px] rounded-full bg-[#f5e642]/40 shrink-0 group-hover:bg-[#f5e642] transition-colors" />
                  {skill}
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="bg-[#f0ece0]/6" />

            {/* Backend */}
            <div className="px-8 md:px-12">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#f0ece0]/8">
                <span className="display-font text-lg text-[#f5e642]">◆</span>
                <span className="mono-font text-[10px] tracking-[0.25em] uppercase text-[#f0ece0]/30">
                  Backend
                </span>
              </div>
              {["Python", "Django", "FastAPI", "REST APIs", "LangChain"].map(
                (skill) => (
                  <div
                    key={skill}
                    className="mono-font text-[13px] tracking-[0.04em] text-[#f0ece0]/60 py-[10px] border-b border-[#f0ece0]/[0.04] flex items-center gap-3 hover:text-[#ada554] transition-colors group cursor-default"
                  >
                    <span className="w-[3px] h-[3px] rounded-full bg-[#f5e642]/40 shrink-0 group-hover:bg-[#f5e642] transition-colors" />
                    {skill}
                  </div>
                ),
              )}
            </div>

            {/* Divider */}
            <div className="bg-[#f0ece0]/6" />

            {/* Tools & DB */}
            <div className="pl-8 md:pl-12">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#f0ece0]/8">
                <span className="display-font text-lg text-[#f5e642]">●</span>
                <span className="mono-font text-[10px] tracking-[0.25em] uppercase text-[#f0ece0]/30">
                  Tools & DB
                </span>
              </div>
              {[
                "PostgreSQL",
                "Docker / CI-CD",
                "AWS Lambda",
                "DynamoDB",
                "MongoDB",
              ].map((skill) => (
                <div
                  key={skill}
                  className="mono-font text-[13px] tracking-[0.04em] text-[#f0ece0]/60 py-[10px] border-b border-[#f0ece0]/[0.04] flex items-center gap-3 hover:text-[#ada554] transition-colors group cursor-default"
                >
                  <span className="w-[3px] h-[3px] rounded-full bg-[#f5e642]/40 shrink-0 group-hover:bg-[#f5e642] transition-colors" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
          {/* Also Proficient In */}
          <div
            className="mt-6"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1px 1fr 1px 1fr",
              gap: 0,
            }}
          >
            {/* Col 1 */}
            <div className="pr-8 md:pr-12">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#f0ece0]/8">
                <span className="display-font text-lg text-[#f0ece0]/20">
                  ◇
                </span>
                <span className="mono-font text-[10px] tracking-[0.25em] uppercase text-[#f0ece0]/25">
                  Languages
                </span>
              </div>
              {["C", "C++", "MySQL"].map((skill) => (
                <div
                  key={skill}
                  className="mono-font text-[13px] tracking-[0.04em] text-[#f0ece0]/60 py-[10px] border-b border-[#f0ece0]/[0.04] flex items-center gap-3 hover:text-[#ada554] transition-colors group cursor-default"
                >
                  <span className="w-[3px] h-[3px] rounded-full bg-[#f5e642]/40 shrink-0 group-hover:bg-[#f5e642] transition-colors" />
                  {skill}
                </div>
              ))}
            </div>

            <div className="bg-[#f0ece0]/6" />

            {/* Col 2 */}
            <div className="px-8 md:px-12">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#f0ece0]/8">
                <span className="display-font text-lg text-[#f0ece0]/20">
                  ◇
                </span>
                <span className="mono-font text-[10px] tracking-[0.25em] uppercase text-[#f0ece0]/25">
                  Libraries
                </span>
              </div>
              {["SQLAlchemy", "Redis / Celery", "Git"].map((skill) => (
                <div
                  key={skill}
                  className="mono-font text-[13px] tracking-[0.04em] text-[#f0ece0]/60 py-[10px] border-b border-[#f0ece0]/[0.04] flex items-center gap-3 hover:text-[#ada554] transition-colors group cursor-default"
                >
                  <span className="w-[3px] h-[3px] rounded-full bg-[#f5e642]/40 shrink-0 group-hover:bg-[#f5e642] transition-colors" />
                  {skill}
                </div>
              ))}
            </div>

            <div className="bg-[#f0ece0]/6" />

            {/* Col 3 */}
            <div className="pl-8 md:pl-12">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#f0ece0]/8">
                <span className="display-font text-lg text-[#f0ece0]/20">
                  ◇
                </span>
                <span className="mono-font text-[10px] tracking-[0.25em] uppercase text-[#f0ece0]/25">
                  Workflow
                </span>
              </div>
              {["Jira", "Asana", "Bitbucket"].map((skill) => (
                <div
                  key={skill}
                  className="mono-font text-[13px] tracking-[0.04em] text-[#f0ece0]/60 py-[10px] border-b border-[#f0ece0]/[0.04] flex items-center gap-3 hover:text-[#ada554] transition-colors group cursor-default"
                >
                  <span className="w-[3px] h-[3px] rounded-full bg-[#f5e642]/40 shrink-0 group-hover:bg-[#f5e642] transition-colors" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>
      {/* ════ PROJECTS ════ */}
      <div className="border-t border-[#f0ece0]/6">
        <Section id="projects">
          <SectionLabel num="03" title="Projects" />
          {(() => {
            const [visibleCount, setVisibleCount] = useState(3);
            const visibleProjects = PROJECTS.slice(0, visibleCount);
            const allVisible = visibleCount >= PROJECTS.length;

            return (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {visibleProjects.map((p) => (
                    <button
                      key={p.num}
                      onClick={() => setModalProject(p)}
                      className={`project-card text-left p-8 relative ${p.featured ? "md:col-span-2" : ""}`}
                    >
                      <div
                        className={
                          p.featured ? "grid grid-cols-[auto_1fr] gap-8" : ""
                        }
                      >
                        {p.featured && (
                          <span className="project-num display-font text-[80px] text-[#f0ece0]/08 leading-none">
                            {p.num}
                          </span>
                        )}
                        <div>
                          <div className="flex justify-between items-start mb-6">
                            {!p.featured && (
                              <span className="project-num display-font text-5xl text-[#f0ece0]/08 leading-none">
                                {p.num}
                              </span>
                            )}
                            <div
                              className={`flex flex-col items-end gap-1 ${!p.featured ? "" : "ml-auto"}`}
                            >
                              <span className="mono-font text-[10px] tracking-[0.2em] text-[#f0ece0]/20">
                                {p.year}
                              </span>
                              <span
                                className={`mono-font text-[10px] tracking-[0.12em] border px-2 py-1 ${getStatusClass(p.status)}`}
                              >
                                {p.status}
                              </span>
                            </div>
                          </div>
                          <h3
                            className={`display-font text-[#f0ece0] tracking-wide mb-1 ${p.featured ? "text-[42px]" : "text-3xl"}`}
                          >
                            {p.title}
                          </h3>
                          <div className="mono-font text-[10px] tracking-[0.2em] text-[#f5e642]/40 uppercase mb-3">
                            {p.subtitle}
                          </div>
                          <p className="mono-font text-xs text-[#f0ece0]/35 leading-relaxed mb-5">
                            {p.desc.substring(0, p.featured ? 220 : 140)}…
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {p.stack.slice(0, p.featured ? 7 : 4).map((s) => (
                              <span
                                key={s}
                                className="mono-font text-[10px] tracking-wider text-[#f0ece0]/25 border border-[#f0ece0]/8 px-3 py-1"
                              >
                                {s}
                              </span>
                            ))}
                            {p.stack.length > (p.featured ? 7 : 4) && (
                              <span className="mono-font text-[10px] tracking-wider text-[#f0ece0]/25 border border-[#f0ece0]/8 px-3 py-1">
                                +{p.stack.length - (p.featured ? 7 : 4)} more
                              </span>
                            )}
                          </div>
                          <div className="mono-font text-xs text-[#f5e642]/50 project-arrow">
                            {p.link ? "Visit Live →" : "View Details →"}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-8 text-center flex flex-col items-center gap-4">
                  {!allVisible && (
                    <button
                      onClick={() =>
                        setVisibleCount((c) => Math.min(c + 3, PROJECTS.length))
                      }
                      className="ghost-btn mono-font text-xs tracking-[0.2em] uppercase border border-[#f0ece0]/15 text-[#f0ece0]/35 px-8 py-4 inline-block"
                    >
                      <span>Show More Projects ↓</span>
                    </button>
                  )}
                  {allVisible && (
                    <a
                      href="https://github.com/Sifathislam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ghost-btn mono-font text-xs tracking-[0.2em] uppercase border border-[#f0ece0]/15 text-[#f0ece0]/35 px-8 py-4 inline-block"
                    >
                      <span>View All on GitHub →</span>
                    </a>
                  )}
                </div>
              </>
            );
          })()}
        </Section>
      </div>
      {/* ════ PROJECT MODAL ════ */}
      {modalProject && (
        <div
          className="fixed inset-0 bg-[#0a0a0a]/92 backdrop-blur-xl z-50 flex items-center justify-center p-5"
          onClick={() => setModalProject(null)}
        >
          <div
            className="bg-[#111] border border-[#f0ece0]/10 max-w-[680px] w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="border-b border-[#f0ece0]/08 p-8 flex justify-between items-start gap-4">
              <div className="flex items-start gap-5 flex-1 min-w-0">
                <span className="display-font text-[64px] text-[#f5e642]/15 leading-none shrink-0">
                  {modalProject.num}
                </span>
                <div className="min-w-0">
                  <h3 className="display-font text-[36px] text-[#f0ece0] leading-tight mb-2">
                    {modalProject.title}
                  </h3>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span
                      className={`mono-font text-[10px] tracking-[0.12em] border px-2 py-1 ${getStatusClass(modalProject.status)}`}
                    >
                      {modalProject.status}
                    </span>
                    <span className="mono-font text-[10px] tracking-[0.2em] text-[#f5e642]/40 uppercase">
                      {modalProject.subtitle}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setModalProject(null)}
                className="mono-font text-[10px] tracking-[0.1em] border border-[#f0ece0]/10 text-[#f0ece0]/40 px-3 py-2 hover:border-[#f0ece0]/30 hover:text-[#f0ece0] transition-colors shrink-0 mt-2"
              >
                ✕ CLOSE
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              <p className="mono-font text-xs text-[#f0ece0]/50 leading-relaxed mb-8">
                {modalProject.desc}
              </p>

              {/* Timeline */}
              <div className="mb-7">
                <div className="mono-font text-[10px] tracking-[0.3em] uppercase text-[#f5e642]/50 mb-3">
                  Timeline
                </div>
                <div className="flex gap-4">
                  <div className="border border-[#f0ece0]/06 p-4 flex-1">
                    <div className="mono-font text-[9px] tracking-[0.25em] uppercase text-[#f0ece0]/20 mb-1">
                      Period
                    </div>
                    <div className="mono-font text-xs text-[#f0ece0]/60">
                      {modalProject.date}
                    </div>
                  </div>
                  <div className="border border-[#f0ece0]/06 p-4 flex-1">
                    <div className="mono-font text-[9px] tracking-[0.25em] uppercase text-[#f0ece0]/20 mb-1">
                      Status
                    </div>
                    <div className="mono-font text-xs text-[#f0ece0]/60">
                      {modalProject.status}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stack */}
              <div className="mb-8">
                <div className="mono-font text-[10px] tracking-[0.3em] uppercase text-[#f5e642]/50 mb-3">
                  Tech Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {modalProject.stack.map((s) => (
                    <span
                      key={s}
                      className="mono-font text-[11px] tracking-[0.1em] text-[#f0ece0]/50 border border-[#f0ece0]/12 px-3 py-1.5 hover:border-[#f5e642]/30 hover:text-[#f5e642] transition-all"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="flex items-center gap-3 flex-wrap">
                {modalProject.link ? (
                  <a
                    href={modalProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="yellow-btn mono-font text-xs tracking-[0.2em] uppercase border border-[#f5e642] text-[#f5e642] px-6 py-3 flex items-center gap-2"
                  >
                    <span>Visit Live Site →</span>
                  </a>
                ) : null}
                {modalProject.github ? (
                  <a
                    href={modalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ghost-btn mono-font text-xs tracking-[0.2em] uppercase border border-[#f0ece0]/15 text-[#f0ece0]/35 px-6 py-3 inline-block"
                  >
                    <span>GitHub →</span>
                  </a>
                ) : null}
                {!modalProject.link && !modalProject.github && (
                  <div className="flex items-center gap-3 border border-[#f5e642]/12 bg-[#f5e642]/03 px-4 py-3 mono-font text-xs text-[#f5e642]/50">
                    🔒 Private — code samples available on request
                  </div>
                )}
                {modalProject.privateNote && (
                  <div className="w-full mt-2 mono-font text-[11px] text-[#f5e642]/40 border border-[#f5e642]/10 bg-[#f5e642]/02 px-4 py-3">
                    🔒 {modalProject.privateNote}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* ════ CONTACT ════ */}
      <div className="border-t border-[#f0ece0]/6">
        <Section id="contact">
          <SectionLabel num="04" title="Contact" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="display-font text-[clamp(42px,6vw,80px)] leading-[0.92] text-[#f0ece0] mb-6">
                LET'S
                <br />
                <span className="text-[#f5e642]">WORK</span>
                <br />
                <span
                  style={{
                    WebkitTextStroke: "1px #f0ece0",
                    color: "transparent",
                  }}
                >
                  TOGETHER.
                </span>
              </h2>
              <p className="mono-font text-sm text-[#f0ece0]/40 leading-relaxed max-w-sm mb-10">
                Open to new opportunities, freelance projects, and
                collaborations. My inbox is always open — let's build something
                great.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  {
                    label: "Email",
                    value: "sifathislam790@gmail.com",
                    href: null,
                  },
                  {
                    label: "Phone",
                    value: "+880 1858-527075",
                    href: null,
                  },
                  {
                    label: "GitHub",
                    value: "github.com/sifathislam",
                    href: "https://github.com/Sifathislam",
                  },
                  {
                    label: "LinkedIn",
                    value: "linkedin.com/in/mohaiminul-islam",
                    href: "https://www.linkedin.com/in/mohaiminulislam1/",
                  },        {
                    label: "Facebook",
                    value: "facebook.com/in/sifathislam790",
                    href: "https://www.facebook.com/sifathislam790",
                  },
                ].map(({ label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group border border-[#f0ece0]/6 p-4 hover:border-[#f5e642]/20 transition-colors"
                  >
                    <span className="mono-font text-[10px] tracking-[0.2em] uppercase text-[#f0ece0]/25 w-16 shrink-0">
                      {label}
                    </span>
                    <div className="h-px flex-1 bg-[#f0ece0]/8" />
                    <span className="mono-font text-xs text-[#f0ece0]/40 group-hover:text-[#f5e642] transition-colors">
                      {value}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              {formSent ? (
                <div className="border border-[#39ff7e]/20 bg-[#39ff7e]/5 p-12 text-center">
                  <div className="display-font text-5xl text-[#39ff7e] mb-3">
                    SENT!
                  </div>
                  <p className="mono-font text-xs text-[#f0ece0]/40 leading-relaxed">
                    Thanks for reaching out.
                    <br />
                    I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleForm} className="flex flex-col gap-5">
                  {[
                    {
                      label: "Your Name",
                      type: "text",
                      key: "name",
                      placeholder: "John Doe",
                    },
                    {
                      label: "Email Address",
                      type: "email",
                      key: "email",
                      placeholder: "you@company.com",
                    },
                  ].map(({ label, type, key, placeholder }) => (
                    <div key={key}>
                      <label className="mono-font text-[10px] tracking-[0.2em] uppercase text-[#f0ece0]/30 block mb-2">
                        {label}
                      </label>
                      <input
                        type={type}
                        required
                        placeholder={placeholder}
                        value={formData[key]}
                        onChange={(e) =>
                          setFormData({ ...formData, [key]: e.target.value })
                        }
                        className="contact-input mono-font text-sm text-[#f0ece0] px-4 py-3"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="mono-font text-[10px] tracking-[0.2em] uppercase text-[#f0ece0]/30 block mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about the opportunity..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="contact-input mono-font text-sm text-[#f0ece0] px-4 py-3 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formSending}
                    className="yellow-btn mono-font text-xs tracking-[0.2em] uppercase border border-[#f5e642] text-[#f5e642] px-8 py-4 text-left disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <span>{formSending ? "Sending..." : "Send Message →"}</span>
                  </button>

                  {formError && (
                    <p className="mono-font text-[11px] text-red-400/70">
                      {formError}
                    </p>
                  )}
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
            <span className="mono-font text-[10px] tracking-[0.2em] text-[#f0ece0]/18">
              SIFAT ISLAM · 2026
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="status-dot" style={{ width: 5, height: 5 }} />
            <span className="mono-font text-[10px] tracking-[0.2em] text-[#f0ece0]/18">
              OPEN TO WORK · DHAKA, BD
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
