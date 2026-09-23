"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Briefcase,
  ShieldCheck,
  Building2,
  MapPin,
  ExternalLink,
  Mail,
  Send,
  CheckCircle2,
  Menu,
  X,
  Layers,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  Cpu,
  ChevronRight
} from "lucide-react";

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Create mailto link for direct sending without needing paid third-party backend
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoUrl;
    setContactSubmitted(true);
  };

  const experiences = [
    {
      role: "Senior Product Manager",
      company: "HSBC",
      type: "Full-time",
      period: "Aug 2017 – Present",
      duration: "9+ Years",
      location: "London, United Kingdom",
      tagline: "Global Digital Transformation, Financial Crime & Fraud Risk Mitigation",
      description:
        "Leading the Global Digital Transformation Program at HSBC, focusing on enhancing customer digital banking experience while fortifying defenses to reduce application and transaction fraud.",
      achievements: [
        "Architected and implemented groundbreaking Financial Crime and Threat Management technologies across digital channels.",
        "Synthesized digital fraud risk mitigation with intuitive customer journey design to preserve customer trust.",
        "Steered multi-disciplinary cross-functional squads across product, cybersecurity, compliance, and engineering."
      ],
      skills: ["Product Strategy", "Digital Transformation", "Financial Crime", "Digital Fraud", "Risk Management"]
    },
    {
      role: "Product Owner, BA - Digital",
      company: "Barclaycard",
      type: "Contract",
      period: "Feb 2017 – Aug 2017",
      duration: "7 Months",
      location: "Northampton, United Kingdom",
      tagline: "Cloud Modernization & Legacy Platform Replacement",
      description:
        "Led the Digital Transformation program at Barclaycard, replacing monolithic legacy banking systems with modern cloud-based solutions.",
      achievements: [
        "Spearheaded user stories, product backlogs, and cloud integration roadmap for digital credit services.",
        "Collaborated with risk and architecture committees to ensure regulatory compliance and high-availability operations."
      ],
      skills: ["Cloud Solutions", "Legacy Migration", "Agile Product Ownership", "Digital Banking"]
    },
    {
      role: "Business Analyst & Service Delivery Lead",
      company: "Datix Ltd",
      type: "Contract",
      period: "Apr 2016 – Dec 2016",
      duration: "9 Months",
      location: "London, United Kingdom",
      tagline: "Digital Mobile App Development & Identity Systems",
      description:
        "Led the Digital Mobile App Development Project, integrating core APIs with 3rd-party software, IAM (Identity & Access Management), and analytics solutions.",
      achievements: [
        "Delivered secure mobile application workflow with IAM integration for enterprise customers.",
        "Integrated robust analytics pipelines to monitor real-time user telemetry and application performance."
      ],
      skills: ["Mobile App Development", "API Integration", "IAM Security", "Analytics", "Service Delivery"]
    },
    {
      role: "Service Delivery Lead, Business Analyst",
      company: "Berkshire Healthcare NHS Foundation Trust",
      type: "Contract",
      period: "Jun 2014 – Mar 2016",
      duration: "1 Year 10 Months",
      location: "Bracknell South, Berkshire, United Kingdom",
      tagline: "Enterprise EPR Solution Deployment (4,500+ Clinical Users)",
      description:
        "Led the implementation of an Electronic Patient Record (EPR) enterprise solution for over 4,500 clinical users across Berkshire healthcare facilities.",
      achievements: [
        "Successfully delivered large-scale digital healthcare transition under tight clinical deadlines.",
        "Managed complex clinician, executive, and regulatory stakeholder relationships to ensure seamless clinical adoption."
      ],
      skills: ["EPR Solutions", "Healthcare IT", "Large-scale Rollouts", "Stakeholder Management"]
    },
    {
      role: "Business Analyst, System Specialist",
      company: "Birmingham Community Healthcare NHS Trust",
      type: "Contract",
      period: "Jan 2014 – Jun 2014",
      duration: "6 Months",
      location: "West Midlands, United Kingdom",
      tagline: "Clinical Records Migration Across 27 Services",
      description:
        "Led the rollout of the EPR application across 27 distinct clinical services, ensuring data integrity and seamless migration from legacy IPM PAS systems.",
      achievements: [
        "Orchestrated critical data migration with zero clinical downtime.",
        "Trained and supported healthcare personnel across multiple clinical divisions."
      ],
      skills: ["Data Migration", "System Specialty", "Clinical Workflow", "Change Management"]
    }
  ];

  const skillGroups = [
    {
      title: "Product & Strategic Leadership",
      icon: Briefcase,
      color: "from-blue-500/20 to-indigo-500/10",
      skills: [
        "Product Management",
        "Product Strategy",
        "Digital Transformation",
        "Stakeholder Management",
        "Service Delivery",
        "Roadmap Governance",
        "Cross-functional Squad Leadership"
      ]
    },
    {
      title: "Risk, Fraud & Security",
      icon: ShieldCheck,
      color: "from-emerald-500/20 to-teal-500/10",
      skills: [
        "Financial Crime Prevention",
        "Digital Fraud Risk Mitigation",
        "Threat Management",
        "Security Management",
        "Identity & Access Management (IAM)",
        "Compliance & Governance",
        "Transaction Fraud Detection"
      ]
    },
    {
      title: "Cloud, Systems & Architecture",
      icon: Cpu,
      color: "from-purple-500/20 to-pink-500/10",
      skills: [
        "Cloud-Based Solutions",
        "API Integration & Ecosystems",
        "Mobile App Development",
        "Legacy System Migration",
        "Enterprise Health Records (EPR)",
        "Telemetry & Analytics Solutions"
      ]
    }
  ];

  const featuredProjects = [
    {
      title: "Global Fraud Defense & Threat Modernization",
      organization: "HSBC",
      category: "Digital Banking & Cybersecurity",
      metrics: "Global Scale",
      description:
        "Architecting groundbreaking Financial Crime & Threat Management systems, safeguarding customer digital banking journeys and proactively neutralizing application & transaction fraud.",
      highlights: ["Threat mitigation", "Customer experience harmony", "Enterprise-wide rollout"]
    },
    {
      title: "Cloud Infrastructure Modernization",
      organization: "Barclaycard",
      category: "Fintech & Cloud Architecture",
      metrics: "Core Banking Systems",
      description:
        "Led the initiative to modernize legacy credit card backend architecture into scalable, resilient cloud-based solutions with zero disruption to consumer transaction velocity.",
      highlights: ["Legacy system decommission", "Cloud adoption", "Resilience engineering"]
    },
    {
      title: "Enterprise Mobile Experience & IAM Integration",
      organization: "Datix Ltd",
      category: "Enterprise Software & Security",
      metrics: "Multi-Platform App",
      description:
        "Guided end-to-end delivery of enterprise mobile solutions, connecting RESTful APIs with 3rd-party services, Identity & Access Management, and predictive analytics tools.",
      highlights: ["API orchestration", "IAM security protocols", "Analytics telemetry"]
    },
    {
      title: "Regional Clinical EPR Transformation",
      organization: "NHS Foundation Trust",
      category: "Healthcare Digital Transformation",
      metrics: "4,500+ Clinical Users",
      description:
        "Delivered unified Electronic Patient Record (EPR) platforms across multiple clinical departments, modernizing legacy systems and ensuring continuous clinical safety.",
      highlights: ["Zero clinical downtime", "4,500+ active users", "27 clinical departments"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[20%] w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[160px]" />
      </div>

      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#070b14]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              MS
            </div>
            <div>
              <span className="font-semibold text-slate-100 tracking-tight block text-sm sm:text-base">
                Manish Singhal
              </span>
              <span className="text-[11px] text-slate-400 block -mt-0.5">
                Senior Product Manager @ HSBC
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">
              Experience
            </a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">
              Featured Work
            </a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Social Links & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/manishsinghaluk/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900/80 hover:bg-blue-600/20 text-slate-300 hover:text-blue-400 border border-slate-800 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/manish07767"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow-sm shadow-blue-500/30 transition-all"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pt-3 pb-5 border-b border-slate-800 bg-[#070b14]/95 backdrop-blur-2xl space-y-3">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-md hover:bg-slate-900"
            >
              About
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-md hover:bg-slate-900"
            >
              Experience
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-md hover:bg-slate-900"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-md hover:bg-slate-900"
            >
              Featured Work
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-md hover:bg-slate-900"
            >
              Contact
            </a>
            <div className="flex items-center gap-3 pt-2 border-t border-slate-800/80">
              <a
                href="https://www.linkedin.com/in/manishsinghaluk/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-blue-400"
              >
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/manish07767"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-300 ml-4"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-28">
        {/* HERO SECTION */}
        <section id="hero" className="relative pt-4 sm:pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text & Accreditations */}
            <div className="lg:col-span-7 space-y-6">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-medium text-emerald-400 shadow-sm shadow-emerald-500/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Senior Product Manager · HSBC
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Manish Singhal
              </h1>

              <p className="text-xl sm:text-2xl font-medium text-blue-400">
                Digital Transformation & Financial Crime Product Leader
              </p>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Championing secure, seamless digital banking experiences. Specializing in{" "}
                <span className="text-white font-medium">Financial Crime & Threat Management</span>,{" "}
                <span className="text-white font-medium">Digital Fraud Mitigation</span>, and enterprise-scale{" "}
                <span className="text-white font-medium">Cloud and Core Systems Transformation</span>.
              </p>

              {/* Location & Quick Meta */}
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  Milton Keynes & London, UK
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-700" />
                <span className="inline-flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-slate-500" />
                  HSBC Banking Group
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-700" />
                <span className="inline-flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-slate-500" />
                  12+ Years Enterprise Delivery
                </span>
              </div>

              {/* Hero Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://www.linkedin.com/in/manishsinghaluk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 transition-all hover:translate-y-[-1px]"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  Connect on LinkedIn
                  <ArrowUpRight className="w-4 h-4 opacity-70" />
                </a>
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-800 hover:border-slate-700 transition-all hover:translate-y-[-1px]"
                >
                  <Briefcase className="w-4 h-4 text-slate-400" />
                  View Experience
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-950/60 hover:bg-slate-900 text-slate-300 font-medium text-sm border border-slate-800/80 transition-all"
                >
                  <Mail className="w-4 h-4 text-slate-400" />
                  Contact
                </a>
              </div>
            </div>

            {/* Right Column: Real Headshot + Executive Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group w-full max-w-[340px]">
                {/* Glow ring */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500" />

                <div className="relative bg-[#0d1322] border border-slate-800 rounded-2xl p-6 shadow-2xl">
                  {/* Photo Frame */}
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-5 bg-slate-900 border border-slate-800">
                    <Image
                      src="/profile.jpg"
                      alt="Manish Singhal"
                      fill
                      priority
                      className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-white text-lg">Manish Singhal</h3>
                        <p className="text-xs text-slate-400">Senior Product Manager</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-500/10 border border-blue-500/30 text-blue-400">
                        HSBC
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800 text-center text-xs">
                      <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/80">
                        <span className="block font-bold text-white text-base">9+ Yrs</span>
                        <span className="text-slate-400 text-[11px]">at HSBC</span>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/80">
                        <span className="block font-bold text-white text-base">4,500+</span>
                        <span className="text-slate-400 text-[11px]">Users Deployed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="scroll-mt-24">
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-slate-900/80 to-[#0d1424]/60 border border-slate-800/90 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-2.5 text-blue-400 font-semibold text-xs tracking-wider uppercase mb-3">
              <Sparkles className="w-4 h-4" />
              Executive Profile
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-6">
              About Manish Singhal
            </h2>

            {/* Direct quote from LinkedIn profile */}
            <div className="relative border-l-2 border-blue-500 pl-6 my-6 text-slate-200 text-base sm:text-lg italic leading-relaxed">
              &ldquo;At HSBC, my mission is to enhance and secure our digital banking experience, ensuring customer trust through the implementation of groundbreaking &apos;Financial Crime and Threat Management&apos; technologies. Weaving together a deep understanding of digital fraud risks with a strategic approach to product delivery and enterprise transformation.&rdquo;
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-sm text-slate-300">
              <div className="space-y-2 p-4 rounded-xl bg-slate-900/50 border border-slate-800/60">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Financial Crime Defense
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Expertise in mitigating complex digital fraud and transactional risks without sacrificing customer usability.
                </p>
              </div>

              <div className="space-y-2 p-4 rounded-xl bg-slate-900/50 border border-slate-800/60">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <TrendingUp className="w-4 h-4 text-blue-400" />
                  Strategic Product Leadership
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Leading multi-million pound digital transformations across tier-1 banks (HSBC, Barclaycard) and public health trusts.
                </p>
              </div>

              <div className="space-y-2 p-4 rounded-xl bg-slate-900/50 border border-slate-800/60">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Layers className="w-4 h-4 text-indigo-400" />
                  Enterprise Delivery
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Track record of deploying mission-critical systems for thousands of clinical and banking users with zero downtime.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE SECTION */}
        <section id="experience" className="scroll-mt-24 space-y-8">
          <div>
            <div className="flex items-center gap-2 text-blue-400 font-semibold text-xs tracking-wider uppercase mb-2">
              <Briefcase className="w-4 h-4" />
              Career Journey
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Work Experience
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Verified career history extracted directly from LinkedIn profile.
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative p-6 sm:p-8 rounded-2xl bg-[#0b101d] border border-slate-800/80 hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-blue-500/5"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {exp.company}
                      </span>
                      <span className="text-xs text-slate-500">({exp.type})</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-400 flex items-center gap-2 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </p>
                  </div>

                  <div className="text-left md:text-right">
                    <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-200">
                      {exp.period}
                    </span>
                    <span className="block text-[11px] text-slate-400 mt-1">{exp.duration}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <ul className="space-y-2 mb-5">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/60">
                  {exp.skills.map((s, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900/90 text-slate-300 border border-slate-800"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="scroll-mt-24 space-y-8">
          <div>
            <div className="flex items-center gap-2 text-blue-400 font-semibold text-xs tracking-wider uppercase mb-2">
              <ShieldCheck className="w-4 h-4" />
              Core Competencies
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Skills & Expertise
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Key domains honed across product management, risk governance, and enterprise systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-[#0b101d] border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 text-blue-400 shadow-inner">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-4">
                      {group.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 text-slate-200 border border-slate-800/80 hover:border-blue-500/40 hover:text-blue-300 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* FEATURED WORK / PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-24 space-y-8">
          <div>
            <div className="flex items-center gap-2 text-blue-400 font-semibold text-xs tracking-wider uppercase mb-2">
              <TrendingUp className="w-4 h-4" />
              Impact Highlights
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Featured Programs & Initiatives
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Notable projects and transformations delivered across banking and healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, idx) => (
              <div
                key={idx}
                className="group p-6 sm:p-7 rounded-2xl bg-[#0b101d] border border-slate-800/80 hover:border-blue-500/30 transition-all flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {project.organization}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {project.metrics}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-400 font-mono mb-3">
                    {project.category}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/80">
                  {project.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-400"
                    >
                      <ChevronRight className="w-3 h-3 text-blue-400" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#0e1628] to-[#090e1a] border border-slate-800 relative overflow-hidden">
            {/* Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-blue-400 font-semibold text-xs tracking-wider uppercase mb-2">
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Let&apos;s Connect
                </h2>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Open for strategic product leadership conversations, executive networking, and speaking opportunities in digital fraud and banking modernization.
                </p>
              </div>

              {/* Direct links */}
              <div className="space-y-3 pt-2">
                <a
                  href="https://www.linkedin.com/in/manishsinghaluk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="block text-xs text-slate-400">LinkedIn Profile</span>
                    <span className="text-sm font-medium">linkedin.com/in/manishsinghaluk</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                </a>

                <a
                  href="https://github.com/manish07767"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="block text-xs text-slate-400">GitHub Profile</span>
                    <span className="text-sm font-medium">github.com/manish07767</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors" />
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400">Location</span>
                    <span className="text-sm font-medium">Milton Keynes & London, United Kingdom</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Message Form (Client-Side, zero-cost, no DB required) */}
            <div className="lg:col-span-7 bg-[#080d18] p-6 sm:p-7 rounded-xl border border-slate-800/80">
              <h3 className="text-base font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs text-slate-400 mb-5">
                Fill out the details below to start an email conversation directly.
              </p>

              {contactSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="font-bold text-white text-base">Message Ready</h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Your email client has been prepared with your message. You can also reach out directly via LinkedIn anytime!
                  </p>
                  <button
                    onClick={() => setContactSubmitted(false)}
                    className="mt-3 px-4 py-2 rounded-lg bg-slate-900 text-xs font-semibold text-slate-300 hover:text-white border border-slate-800"
                  >
                    Send another note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Product Leadership / Inquiry"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your note here..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md shadow-blue-500/30 transition-all hover:translate-y-[-1px]"
                  >
                    <Send className="w-4 h-4" />
                    Send Note
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 bg-[#050810] py-10 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-200">Manish Singhal</span>
            <span>·</span>
            <span>Senior Product Manager @ HSBC</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/manishsinghaluk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/manish07767"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a href="#hero" className="hover:text-slate-200 transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
