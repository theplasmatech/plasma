"use client"

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ClientShowcase from "../main/TechStacks";
import Footer from "../main/Footer";
import TechStacks from "../main/TechStacks";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Define Job type
interface Job {
  title: string;
  location: string;
  type: string;
  salary: string;
  experience: string;
  vacancies: number;
  skills: string[];
  details: string;
  overview: string;
  companyBrief: string;
  responsibilities: string[];
  qualifications: string[];
  required: string[];
  lifeLinks: { label: string; url: string }[];
}

export default function Careers() {
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", resume: "" });
  const [submitted, setSubmitted] = useState(false);
  const [expandedJobIdx, setExpandedJobIdx] = useState<number | null>(null);
  
  const heroRef = useRef<HTMLElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const jobsSectionRef = useRef<HTMLElement>(null);
  const jobsContentRef = useRef<HTMLDivElement>(null);
  const mainContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainContainerRef.current && heroTextRef.current && jobsContentRef.current) {
      // Animate entire page background with faster transition
      gsap.to(mainContainerRef.current, {
        backgroundColor: "#ffffff",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "top -10%",
          scrub: false,
          toggleActions: "play none reverse none"
        }
      });

      // Animate hero text color with faster transition
      gsap.to(heroTextRef.current, {
        color: "#000000",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "top -10%",
          scrub: false,
          toggleActions: "play none reverse none"
        }
      });

      // Animate jobs content color with faster transition
      gsap.to(jobsContentRef.current, {
        color: "#000000",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "top -10%",
          scrub: false,
          toggleActions: "play none reverse none"
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const jobs: Job[] = [
    {
      title: 'Business Development Executive',
      location: 'Ahmedabad, Gujarat, India',
      type: 'Full-Time',
      salary: '₹4,00,000 - ₹6,00,000 per annum',
      experience: '2+ years',
      vacancies: 2,
      skills: ['Sales', 'Marketing', 'Communication', 'Interpersonal Skills'],
      details: '',
      overview: `We are looking for a motivated Business Development Executive with 2+ of experience to join our growing team. The ideal candidate should possess basic knowledge of sales and marketing principles and demonstrate strong communication and interpersonal skills. You will assist in identifying new business opportunities, building client relationships, and supporting the sales team in achieving revenue targets.`,
      companyBrief: `We have had an office in Ahmedabad Gujarat, India for the past 8 years.\nISO Registered company and work according to international standards.\nDevelopers are supposed to work with end clients (clients may be from the US, Europe, and Israel)\nWe have recently established a second office in the New Ranip area, Ahmedabad.\nWe provide a solution to Frontend, High-end custom development, Commercial WordPress, and mobile applications.`,
      responsibilities: [
        'Identify New Business Opportunities: Assist in researching and identifying potential clients and market trends to generate new business leads.',
        'Support Sales Team: Collaborate with the sales team to prepare proposals, presentations, and other sales materials to enhance client engagement.',
        'Build and Maintain Client Relationships: Establish and nurture relationships with potential clients through effective communication and follow-up.',
        'Assist in Market Analysis: Conduct market research to understand competitor offerings and identify areas for improvement in our services.',
        'Track and Report Sales Activities: Maintain accurate records of sales activities and client interactions in the CRM system, providing regular updates to management.',
        'Participate in Networking Events: Attend industry events, conferences, and networking functions to promote the company and establish valuable connections.'
      ],
      qualifications: [
        'Educational Background: A bachelor degree in business, marketing, or a related field is preferred.',
        'Basic Understanding of Sales Principles: Familiarity with sales techniques, lead generation, and customer relationship management processes.',
        'Strong Interpersonal Skills: Excellent communication and interpersonal abilities, with a willingness to learn and adapt in a fast-paced environment.'
      ],
      required: [
        'Work from office only',
        'At least 2+ years of experience',
        'Must have a bachelor\'s degree or Master\'s degree.',
        'Communication must be in fluent English'
      ],
      lifeLinks: [
        { label: 'Instagram', url: 'https://www.instagram.com/codeandcore/' },
        { label: 'LinkedIn', url: 'https://in.linkedin.com/company/code-and-core' },
        { label: 'Facebook', url: 'https://www.facebook.com/codeandcore.' }
      ]
    },
  ];

  const openModal = (job: Job) => {
    setSelectedJob(job);
    setShowModal(true);
    setSubmitted(false);
    setForm({ name: "", email: "", phone: "", resume: "" });
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedJob(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      closeModal();
    }, 1500);
  };

  return (
    <div ref={mainContainerRef} className="font-sans bg-black">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <div ref={heroTextRef} className="text-white">
          <h2 className="font-bold leading-tight px-[1vw]" style={{ fontSize: '7.5vw' }}>
            Our People are our biggest inspiration <br /> and the secret to our Success
          </h2>
          <h3 className="text-[4vw] md:text-xl mt-6">
            Join the growing team at Plasma Tech
          </h3>
          {/* Animated Down Arrow for scroll cue */}
          <div className="flex flex-col items-center mt-8">
            <svg className="animate-bounce" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      <section 
        ref={jobsSectionRef}
        className="min-h-screen px-6 py-12"
      >
        <div ref={jobsContentRef} className="mx-auto ">
          <p className="mb-8 text-[3vw] font-bold font-weight-600">Current Openings</p>
          <div className="grid grid-cols-1 gap-8 mx-[2vw]">
            {jobs.map((job, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-gray-600 p-8 flex flex-col min-h-[220px] justify-between"
                style={{ color: '#18181b' }}
              >
                {/* APPLY NOW top-right */}
                <button
                  className="absolute top-6 right-8 flex items-center gap-2 group focus:outline-none"
                  onClick={() => openModal(job)}
                  aria-label="Apply Now"
                  tabIndex={0}
                  style={{ zIndex: 10 }}
                >
                  <span className="uppercase font-semibold text-sm text-black group-hover:text-blue-700 tracking-wider">Apply Now</span>
                  <span className="w-7 h-7 flex items-center justify-center rounded-full bg-white border border-gray-300 shadow group-hover:bg-blue-100 transition-colors">
                    <svg width="18" height="18" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                  </span>
                </button>
                {/* Card Content */}
                <div className="flex flex-row items-start gap-4">
                  {/* Icon placeholder */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-2xl text-gray-500">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-2xl mb-1 leading-tight">{job.title}</div>
                    <div className="text-gray-500 text-base mb-4">Location: {job.location}</div>
                    <div className="mb-2 text-sm font-medium">
                      <span>Salary: </span>{job.salary}
                    </div>
                    <div className="mb-2 text-sm font-medium">
                      <span>Experience: </span>{job.experience}
                    </div>
                    <div className="mb-2 text-sm font-medium">
                      <span>Vacancies: </span>{job.vacancies}
                    </div>
                    <div className="mb-2 text-sm font-medium">
                      <span>Skills: </span>{job.skills.join(', ')}
                    </div>
                  </div>
                </div>
                {/* Read More button at bottom center */}
                <div className="flex justify-center mt-8">
                  <button
                    className="relative flex flex-col items-center group focus:outline-none"
                    onClick={() => setExpandedJobIdx(expandedJobIdx === idx ? null : idx)}
                  >
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-sm opacity-70 z-0"></span>
                    <span className="relative z-10 text-white font-semibold uppercase tracking-wide text-sm flex items-center gap-1">
                      {expandedJobIdx === idx ? 'Hide Details' : 'Read More'}
                      <svg className={expandedJobIdx === idx ? 'rotate-180 transition-transform' : 'transition-transform'} width="18" height="18" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
                    </span>
                  </button>
                </div>
                {/* Expanded Details */}
                {expandedJobIdx === idx && (
                  <div className="mt-6 p-4 bg-gray-50 rounded text-black text-sm shadow-inner border border-gray-200">
                    <div className="mb-2">
                      <span className="font-semibold">Job Overview:</span>
                      <div>{job.overview}</div>
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold">Company Brief:</span>
                      <div className="whitespace-pre-line">{job.companyBrief}</div>
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold">Responsibilities:</span>
                      <ul className="list-disc ml-5">
                        {job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                      </ul>
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold">Qualifications:</span>
                      <ul className="list-disc ml-5">
                        {job.qualifications.map((q, i) => <li key={i}>{q}</li>)}
                      </ul>
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold">Required Experience, Skills, and Qualifications:</span>
                      <ul className="list-disc ml-5">
                        {job.required.map((q, i) => <li key={i}>{q}</li>)}
                      </ul>
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold">Life @ codeandcore:</span>
                      <ul className="list-disc ml-5">
                        {job.lifeLinks.map((l, i) => <li key={i}><a href={l.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">{l.label}</a></li>)}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
          <div className="bg-white/80 backdrop-blur-2xl rounded-[6px] shadow-2xl p-8 w-full max-w-md relative animate-fade-in text-[#18181b] border border-white/30 ring-1 ring-inset ring-white/10">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold focus:outline-none transition-colors"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-2 text-center text-[#18181b]">Apply for {selectedJob?.title}</h3>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded bg-white/60 backdrop-blur border border-white/40 text-[#18181b] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded bg-white/60 backdrop-blur border border-white/40 text-[#18181b] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded bg-white/60 backdrop-blur border border-white/40 text-[#18181b] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent"
                  required
                />
                <input
                  type="url"
                  name="resume"
                  placeholder="Resume Link (Google Drive, etc.)"
                  value={form.resume}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded bg-white/60 backdrop-blur border border-white/40 text-[#18181b] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Submit Application
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="text-green-600 text-6xl mb-4">✓</div>
                <p className="text-lg font-semibold text-green-600">Application Submitted Successfully!</p>
              </div>
            )}
          </div>
        </div>
      )}

      <TechStacks />
      <Footer />
    </div>
  );
}