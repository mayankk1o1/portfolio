import React, { useState, useEffect, useCallback } from 'react';
import {
  Github, Linkedin, Mail, Download, ExternalLink,
  Menu, X, Moon, Sun, Send, CheckCircle, ChevronRight,
  Shield, Code, Terminal, Award, GraduationCap
} from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────
const ME = {
  name: 'Mayank Yadav',
  role: 'Cybersecurity Analyst',
  subtitle: 'Cloud Security · VAPT',
  about: [
    "I'm a cybersecurity enthusiast currently interning as a Cloud Support Engineer at Meridian Solutions in Gurugram, where I work on Microsoft 365 environments, security monitoring, and automation.",
    "My focus is Cloud Security. I also do VAPT on the side through bug bounty platforms and personal labs like Hack The Box.",
    "I'm in my final year at GLA University and actively looking for full-time roles in cybersecurity or cloud security.",
  ],
  email: 'yadavmayank1804@gmail.com',
  phone: '+91 82732 20099',
  github: 'https://github.com/mayankk1o1',
  linkedin: 'https://linkedin.com/in/mayank1o1',
  resumePDF: 'https://1drv.ms/w/c/183c32ec7e2c0401/IQD68k0aP-EbSbDgQkHLcVVeASSCS-zQjW8XnskA4ko1MeA?e=ocmHRj',
};

const SKILLS = [
  {
    label: 'Security Tools',
    icon: Terminal,
    items: ['Burp Suite', 'Kali Linux', 'MobSF', 'Nmap', 'Postman', 'Git'],
  },
  {
    label: 'Cloud & Enterprise',
    icon: Shield,
    items: ['Microsoft 365 Admin Centre', 'Exchange Online', 'OneDrive', 'Sharepoint', 'Security & Compliance', 'DLP & IAM'],
  },
  {
    label: 'Programming',
    icon: Code,
    items: ['Python', 'PowerShell', 'Bash', 'SQL'],
  },
];

const EXPERIENCE = [
  {
    role: 'Cloud Support Engineer — Intern',
    company: 'Meridian Solutions',
    period: 'Aug 2025 – Present',
    location: 'Gurugram',
    points: [
      'Troubleshoot Microsoft 365 apps: Outlook, Teams, Exchange Online.',
      'Validate web application workflows and flag security issues before deployment.',
      'Automate admin and validation tasks using Python and PowerShell.',
      'Support incident tracking, log analysis, and security-related troubleshooting.',
    ],
  },
  {
    role: 'Freelance Security Researcher',
    company: 'Bugcrowd / HackerOne',
    period: '2023 – Present',
    location: 'Remote',
    points: [
      'Hunt for vulnerabilities on web apps via coordinated disclosure programs.',
      'Write structured reports with reproduction steps and remediation guidance.',
    ],
  },
  {
    role: 'Security Research & VAPT Practice',
    company: 'Hack The Box',
    period: '2025 – Present',
    location: 'Remote',
    points: [
      'Solve machines covering Web, Linux, and Active Directory attack paths.',
      'Document findings and write technical walkthroughs published on GitHub.',
    ],
    link: 'https://github.com/mayankk1o1/HackTheBox',
  },
];

const PROJECTS = [
  {
    title: 'Web Application Security Assessment',
    desc: 'Tested OWASP Juice Shop and DVWA for SQL Injection, XSS, CSRF, and authentication flaws using Burp Suite and manual techniques. Documented findings with reproduction steps and fixes.',
    tags: ['Burp Suite', 'OWASP Top 10', 'VAPT', 'XSS', 'SQLi'],
    github: 'https://github.com/mayankk1o1',
  },
  {
    title: 'Security Automation Scripts',
    desc: 'Python and Bash scripts for automating monitoring, validation, and reporting workflows. PowerShell scripts for Microsoft 365 admin tasks. Postman collections for API security testing.',
    tags: ['Python', 'Bash', 'PowerShell', 'Postman'],
    github: 'https://github.com/mayankk1o1',
  },
  {
    title: 'HTML Learning Hub',
    desc: 'An interactive beginner-friendly platform for learning HTML with structured lessons and hands-on exercises.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/mayankk1o1/HTML-hub',
    live: 'https://mayankk1o1.github.io/HTML-hub/',
  },
];

const CERTS = [
  { short: 'SC-401', full: 'Microsoft Information Protection & Compliance Administrator', by: 'Microsoft' },
  { short: 'ISCP', full: 'Information Security Certified Professional', by: 'Kratikal' },
  { short: 'Bug Bounty', full: 'Bug Bounty Hunting Training', by: 'TMG Security' },
];

const EDU = [
  { degree: 'B.Tech — Computer Science', school: 'GLA University, Mathura', year: '2022–2026', grade: 'CPI 7.55' },
  { degree: '12th (PCM)', school: 'Army Public School, Mathura Cantt', year: '2022', grade: '90%' },
  { degree: '10th', school: 'Army Public School, Mathura Cantt', year: '2020', grade: '87.4%' },
];

// ─── Scroll reveal ────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.1 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ─── Contact form ─────────────────────────────────────────────
function ContactForm({ light }) {
  const [fields, setFields] = useState({ name: '', email: '', message: '' });
  const [done, setDone] = useState(false);
  const [err, setErr] = useState('');

  const set = e => setFields(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = e => {
    e.preventDefault();
    if (!fields.name || !fields.email || !fields.message) { setErr('All fields are required.'); return; }
    window.open(`mailto:${ME.email}?subject=Portfolio%20Enquiry&body=${encodeURIComponent(`Hi Mayank,\n\n${fields.message}\n\n— ${fields.name} (${fields.email})`)}`);
    setDone(true);
  };

  if (done) return (
    <div className="flex flex-col items-center gap-3 py-10 text-center">
      <CheckCircle size={36} className="text-green-400" />
      <p className={`font-medium ${light ? 'text-slate-700' : 'text-slate-200'}`}>Email client opened — thanks for reaching out!</p>
      <button onClick={() => { setDone(false); setFields({ name: '', email: '', message: '' }); }}
        className="text-sm text-blue-400 underline mt-1">Send another</button>
    </div>
  );

  return (
    <form onSubmit={submit} className="space-y-3" noValidate>
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs mb-1.5 text-slate-500">Name</label>
          <input name="name" value={fields.name} onChange={set} placeholder="Your name" className="field" />
        </div>
        <div>
          <label className="block text-xs mb-1.5 text-slate-500">Email</label>
          <input name="email" type="email" value={fields.email} onChange={set} placeholder="you@email.com" className="field" />
        </div>
      </div>
      <div>
        <label className="block text-xs mb-1.5 text-slate-500">Message</label>
        <textarea name="message" value={fields.message} onChange={set} rows={4}
          placeholder="Hey Mayank, I'd like to talk about..."
          className="field resize-none" />
      </div>
      {err && <p className="text-red-400 text-xs">{err}</p>}
      <button type="submit" className="btn-primary">
        <Send size={14} /> Send Message
      </button>
    </form>
  );
}

// ─── App ──────────────────────────────────────────────────────
export default function App() {
  const [light, setLight] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useReveal();

  useEffect(() => {
    document.body.classList.toggle('light', light);
  }, [light]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      for (const id of ['home', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact']) {
        const el = document.getElementById(id);
        if (!el) continue;
        const { top, bottom } = el.getBoundingClientRect();
        if (top <= 100 && bottom >= 100) { setActive(id); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = useCallback(id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  }, []);

  const L = light; // shorthand for conditional classes

  const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'];

  return (
    <div className={`min-h-screen ${L ? 'bg-slate-50 text-slate-600' : 'bg-[#0f172a] text-slate-400'}`}>

      {/* NAV */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled ? (L ? 'bg-white/90 backdrop-blur shadow-sm border-b border-slate-200' : 'bg-[#0f172a]/90 backdrop-blur border-b border-slate-800') : ''
      } py-4`}>
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">

          <button onClick={() => go('home')}
            className={`font-semibold tracking-tight ${L ? 'text-slate-800' : 'text-slate-100'}`}>
            Mayank Yadav
          </button>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(link => (
              <button key={link} onClick={() => go(link.toLowerCase())}
                className={`nav-item text-sm ${active === link.toLowerCase() ? 'active text-blue-400' : (L ? 'text-slate-500 hover:text-slate-800' : 'text-slate-500 hover:text-slate-200')}`}>
                {link}
              </button>
            ))}
            <div className="flex items-center gap-2 ml-1">
              <button onClick={() => setLight(l => !l)}
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-300 transition-colors ${L ? 'bg-slate-100' : 'bg-slate-800'}`}>
                {L ? <Moon size={15} /> : <Sun size={15} />}
              </button>
              <a href={ME.resumePDF} target="_blank" rel="noopener noreferrer"
                className={`flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                  L ? 'border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600' : 'border-slate-700 text-slate-400 hover:border-blue-500 hover:text-blue-400'
                }`}>
                <Download size={13} /> Resume
              </a>
            </div>
          </nav>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={() => setLight(l => !l)}
              className={`w-8 h-8 rounded flex items-center justify-center ${L ? 'bg-slate-100 text-slate-500' : 'bg-slate-800 text-slate-400'}`}>
              {L ? <Moon size={15} /> : <Sun size={15} />}
            </button>
            <button onClick={() => setOpen(o => !o)}
              className={`w-8 h-8 rounded flex items-center justify-center ${L ? 'bg-slate-100 text-slate-600' : 'bg-slate-800 text-slate-300'}`}>
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className={`md:hidden border-t ${L ? 'bg-white border-slate-200' : 'bg-[#0f172a] border-slate-800'} px-6 py-4 space-y-1`}>
            {navLinks.map(link => (
              <button key={link} onClick={() => go(link.toLowerCase())}
                className={`block w-full text-left py-2.5 text-sm border-b ${L ? 'border-slate-100 text-slate-600' : 'border-slate-800 text-slate-400'}`}>
                {link}
              </button>
            ))}
            <a href={ME.resumePDF} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 pt-3 text-sm text-blue-400">
              <Download size={14} /> Download Resume
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="min-h-screen flex flex-col justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto w-full">

          <div className="available mb-6 fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Open to opportunities
          </div>

          <h1 className={`fade-up text-4xl sm:text-5xl md:text-6xl font-bold mb-3 tracking-tight leading-tight ${L ? 'text-slate-900' : 'text-slate-100'}`}
            style={{ transitionDelay: '0.05s' }}>
            Mayank Yadav
          </h1>

          <h2 className={`fade-up text-xl sm:text-2xl font-medium mb-4 ${L ? 'text-slate-500' : 'text-slate-400'}`}
            style={{ transitionDelay: '0.1s' }}>
            {ME.role}
          </h2>

          <p className={`fade-up max-w-xl text-base mb-3 leading-relaxed ${L ? 'text-slate-500' : 'text-slate-500'}`}
            style={{ transitionDelay: '0.15s' }}>
            {ME.subtitle}
          </p>

          <p className={`fade-up max-w-xl text-sm mb-8 leading-relaxed ${L ? 'text-slate-400' : 'text-slate-500'}`}
            style={{ transitionDelay: '0.2s' }}>
            Final year CSE student at GLA University. Currently interning at Meridian Solutions as Cloud Support Engineer, Gurugram.
          </p>

          <div className="fade-up flex flex-wrap gap-3" style={{ transitionDelay: '0.25s' }}>
            <a href={ME.resumePDF} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Download size={14} /> Download Resume
            </a>
            <button onClick={() => go('contact')} className="btn-outline">
              Get in touch
            </button>
          </div>

          <div className="fade-up flex items-center gap-5 mt-8" style={{ transitionDelay: '0.3s' }}>
            <a href={ME.github} target="_blank" rel="noopener noreferrer"
              className={`flex items-center gap-1.5 text-sm transition-colors ${L ? 'text-slate-400 hover:text-slate-700' : 'text-slate-500 hover:text-slate-300'}`}>
              <Github size={16} /> GitHub
            </a>
            <a href={ME.linkedin} target="_blank" rel="noopener noreferrer"
              className={`flex items-center gap-1.5 text-sm transition-colors ${L ? 'text-slate-400 hover:text-slate-700' : 'text-slate-500 hover:text-slate-300'}`}>
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href={`mailto:${ME.email}`}
              className={`flex items-center gap-1.5 text-sm transition-colors ${L ? 'text-slate-400 hover:text-slate-700' : 'text-slate-500 hover:text-slate-300'}`}>
              <Mail size={16} /> {ME.email}
            </a>
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6">

        {/* ABOUT */}
        <section id="about" className="py-20">
          <p className="section-label mb-2 fade-up">01 / About</p>
          <h2 className={`text-2xl font-bold mb-8 fade-up ${L ? 'text-slate-800' : 'text-slate-100'}`}>About Me</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-4">
              {ME.about.map((p, i) => (
                <p key={i} className={`fade-up text-sm leading-relaxed ${L ? 'text-slate-600' : 'text-slate-400'}`}
                  style={{ transitionDelay: `${i * 0.07}s` }}>{p}</p>
              ))}
            </div>
            <div className="fade-up space-y-3">
              {[
                { k: 'Email', v: ME.email },
                { k: 'Phone', v: ME.phone },
                { k: 'Location', v: 'Gurugram, India' },
                { k: 'Degree', v: 'B.Tech CSE (2026)' },
                { k: 'Availability', v: 'Immediate' },
              ].map(({ k, v }) => (
                <div key={k}>
                  <p className="text-xs text-slate-500 mb-0.5">{k}</p>
                  <p className={`text-sm font-medium break-all ${L ? 'text-slate-700' : 'text-slate-300'}`}>{v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-20">
          <p className="section-label mb-2 fade-up">02 / Skills</p>
          <h2 className={`text-2xl font-bold mb-8 fade-up ${L ? 'text-slate-800' : 'text-slate-100'}`}>Technical Skills</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {SKILLS.map((group, i) => (
              <div key={group.label} className={`card p-5 fade-up`} style={{ transitionDelay: `${i * 0.07}s` }}>
                <p className={`text-sm font-semibold mb-3 ${L ? 'text-slate-700' : 'text-slate-300'}`}>{group.label}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(skill => <span key={skill} className="tag">{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
          {/* Tools row */}
          <div className="mt-5 card p-5 fade-up">
            <p className={`text-sm font-semibold mb-3 ${L ? 'text-slate-700' : 'text-slate-300'}`}>Also worked with</p>
            <div className="flex flex-wrap gap-2">
              {['Windows', 'Linux', 'Selenium', 'Shodan', 'Nessus', 'Workflow Automation', 'Incident Documentation'].map(s => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-20">
          <p className="section-label mb-2 fade-up">03 / Experience</p>
          <h2 className={`text-2xl font-bold mb-10 fade-up ${L ? 'text-slate-800' : 'text-slate-100'}`}>Where I've Worked</h2>
          <div className="space-y-8">
            {EXPERIENCE.map((job, i) => (
              <div key={i} className={`tl-item relative pl-8 fade-up`} style={{ transitionDelay: `${i * 0.08}s` }}>
                {i < EXPERIENCE.length - 1 && <div className="tl-line" />}
                <div className="flex items-start gap-3 absolute left-0 top-1">
                  <div className="tl-dot" />
                </div>
                <div className="card p-5">
                  <div className="flex flex-wrap gap-2 justify-between items-start mb-3">
                    <div>
                      <p className={`font-semibold ${L ? 'text-slate-800' : 'text-slate-200'}`}>{job.role}</p>
                      <p className="text-blue-400 text-sm">{job.company} · {job.location}</p>
                    </div>
                    <span className={`text-xs font-mono px-2 py-1 rounded ${L ? 'bg-slate-100 text-slate-500' : 'bg-slate-800 text-slate-400'}`}>
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {job.points.map((pt, pi) => (
                      <li key={pi} className={`flex items-start gap-2 text-sm ${L ? 'text-slate-600' : 'text-slate-400'}`}>
                        <ChevronRight size={13} className="text-blue-400 mt-0.5 shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  {job.link && (
                    <a href={job.link} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-xs text-blue-400 hover:text-blue-300 transition-colors">
                      <Github size={12} /> View write-ups
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-20">
          <p className="section-label mb-2 fade-up">04 / Projects</p>
          <h2 className={`text-2xl font-bold mb-8 fade-up ${L ? 'text-slate-800' : 'text-slate-100'}`}>Things I've Built</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((proj, i) => (
              <div key={i} className={`card p-5 flex flex-col fade-up`} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="flex justify-between items-start mb-3">
                  <Code size={18} className="text-blue-400" />
                  <div className="flex gap-3">
                    <a href={proj.github} target="_blank" rel="noopener noreferrer"
                      className={`transition-colors ${L ? 'text-slate-400 hover:text-slate-700' : 'text-slate-500 hover:text-slate-300'}`}>
                      <Github size={16} />
                    </a>
                    {proj.live && (
                      <a href={proj.live} target="_blank" rel="noopener noreferrer"
                        className={`transition-colors ${L ? 'text-slate-400 hover:text-slate-700' : 'text-slate-500 hover:text-slate-300'}`}>
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className={`font-semibold mb-2 text-sm ${L ? 'text-slate-800' : 'text-slate-200'}`}>{proj.title}</h3>
                <p className={`text-sm leading-relaxed flex-grow mb-4 ${L ? 'text-slate-500' : 'text-slate-500'}`}>{proj.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="py-20">
          <p className="section-label mb-2 fade-up">05 / Certifications</p>
          <h2 className={`text-2xl font-bold mb-8 fade-up ${L ? 'text-slate-800' : 'text-slate-100'}`}>Certifications</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {CERTS.map((c, i) => (
              <div key={i} className={`cert fade-up`} style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="text-3xl mb-3">{c.emoji}</div>
                <p className={`font-semibold mb-1 ${L ? 'text-slate-800' : 'text-slate-200'}`}>{c.short}</p>
                <p className={`text-xs mb-2 leading-relaxed ${L ? 'text-slate-500' : 'text-slate-400'}`}>{c.full}</p>
                <p className="text-xs text-blue-400">{c.by}</p>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-12">
            <p className="section-label mb-2 fade-up">Education</p>
            <div className="space-y-3 mt-4">
              {EDU.map((e, i) => (
                <div key={i} className={`card p-4 flex flex-wrap justify-between items-center gap-3 fade-up`}
                  style={{ transitionDelay: `${i * 0.06}s` }}>
                  <div>
                    <p className={`font-medium text-sm ${L ? 'text-slate-800' : 'text-slate-200'}`}>{e.degree}</p>
                    <p className={`text-xs mt-0.5 ${L ? 'text-slate-500' : 'text-slate-500'}`}>{e.school}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-green-400">{e.grade}</p>
                    <p className={`text-xs mt-0.5 font-mono ${L ? 'text-slate-400' : 'text-slate-500'}`}>{e.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20">
          <p className="section-label mb-2 fade-up">06 / Contact</p>
          <h2 className={`text-2xl font-bold mb-2 fade-up ${L ? 'text-slate-800' : 'text-slate-100'}`}>Get In Touch</h2>
          <p className={`text-sm mb-8 fade-up ${L ? 'text-slate-500' : 'text-slate-500'}`}>
            Looking for entry-level roles in cybersecurity, SOC, or cloud security. Feel free to reach out.
          </p>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="fade-up space-y-5">
              {[
                { icon: Mail, label: 'Email', val: ME.email, href: `mailto:${ME.email}` },
                { icon: Github, label: 'GitHub', val: 'github.com/mayankk1o1', href: ME.github },
                { icon: Linkedin, label: 'LinkedIn', val: 'linkedin.com/in/mayank1o1', href: ME.linkedin },
              ].map(({ icon: Icon, label, val, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${L ? 'bg-slate-100' : 'bg-slate-800'}`}>
                    <Icon size={16} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">{label}</p>
                    <a href={href} target="_blank" rel="noopener noreferrer"
                      className={`text-sm transition-colors ${L ? 'text-slate-700 hover:text-blue-600' : 'text-slate-300 hover:text-blue-400'}`}>
                      {val}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className={`card p-5 fade-up`}>
              <ContactForm light={L} />
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className={`border-t py-8 text-center text-xs ${L ? 'border-slate-200 text-slate-400' : 'border-slate-800 text-slate-600'}`}>
        <p>Designed & built by Mayank Yadav · {new Date().getFullYear()}</p>
      </footer>

    </div>
  );
}
