"use client"

import React, { useState } from "react";
import ClientShowcase from "../main/TechStacks";
import Footer from "../main/Footer";
import TechStacks from "../main/TechStacks";

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

  const jobs: Job[] = [
    {
      title: 'Business Development Executive',
      location: 'Ahmedabad, Gujarat, India',
      type: 'Full-Time',
      salary: '₹4,00,000 - ₹6,00,000 per annum',
      experience: '2+ years',
      vacancies: 2,
      skills: ['Sales', 'Marketing', 'Communication', 'Interpersonal Skills'],
      details: '', // Not used, see below
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
        'Educational Background: A bachelor’s degree in business, marketing, or a related field is preferred.',
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
    {
      title: 'Business Development Executive',
      location: 'Ahmedabad, Gujarat, India',
      type: 'Full-Time',
      salary: '₹4,00,000 - ₹6,00,000 per annum',
      experience: '2+ years',
      vacancies: 2,
      skills: ['Sales', 'Marketing', 'Communication', 'Interpersonal Skills'],
      details: '', // Not used, see below
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
        'Educational Background: A bachelor’s degree in business, marketing, or a related field is preferred.',
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
    {
      title: 'Business Development Executive',
      location: 'Ahmedabad, Gujarat, India',
      type: 'Full-Time',
      salary: '₹4,00,000 - ₹6,00,000 per annum',
      experience: '2+ years',
      vacancies: 2,
      skills: ['Sales', 'Marketing', 'Communication', 'Interpersonal Skills'],
      details: '', // Not used, see below
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
        'Educational Background: A bachelor’s degree in business, marketing, or a related field is preferred.',
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
    }
    // Add more jobs here as needed
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
    <div className="font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-black text-white">
        <h2 className="font-bold leading-tight" style={{ fontSize: '8vw' }}>
          Our People are our biggest inspiration <br /> and the secret to our Success
        </h2>
        <h3 className="text-lg md:text-xl  mt-6">
          Join the growing team at Plasma Tech
        </h3>
      </section>

      <section className="min-h-screen px-6 py-12 bg-white">
        <div className="mx-auto">
          <p className="text-black mb-8 text-[3vw] font-bold font-weight-600">Current Openings</p>
          <div className="grid grid-cols-1 gap-8 mx-[2vw]">
            {jobs.map((job, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-lg  p-8 border border-white/20 shadow-lg hover:shadow-xl hover:bg-white/20 transition-all duration-300 relative flex flex-col justify-between min-h-[220px] text-[#18181b] hover:scale-[1.02] ring-1 ring-white/10"
              >

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse shadow-lg"></span>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{job.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-2 font-medium">{job.location} • {job.type}</p>
                  <div className="mb-2 text-sm">
                    <span className="font-semibold">Salary:</span> {job.salary}<br />
                    <span className="font-semibold">Experience:</span> {job.experience}<br />
                    <span className="font-semibold">Vacancies:</span> {job.vacancies}<br />
                    <span className="font-semibold">Skills:</span> {job.skills.join(', ')}
                  </div>
                  <button
                    className="text-blue-700 underline text-sm mb-2 focus:outline-none"
                    onClick={() => setExpandedJobIdx(expandedJobIdx === idx ? null : idx)}
                  >
                    {expandedJobIdx === idx ? 'Hide Details' : 'Read More'}
                  </button>
                  {expandedJobIdx === idx && (
                    <div className="mt-2 p-4 bg-white/80 rounded text-[#18181b] text-sm shadow-inner border border-white/30">
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
                          {job.lifeLinks.map((l, i) => <li key={i}><a href={l.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">{l.label}</a></li>)}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <button
                  className="mt-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-[4px] shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 hover:shadow-xl transform hover:-translate-y-0.5"
                  onClick={() => openModal(job)}
                >
                  Apply Now
                </button>
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
            {/* Rest of modal content remains the same */}
          </div>
        </div>
      )}

      <TechStacks />
      <Footer />
    </div>
  );
}
