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
}

export default function Careers() {
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", resume: "" });
  const [submitted, setSubmitted] = useState(false);

  const jobs: Job[] = [
    { title: 'Frontend Developer', location: 'Remote', type: 'Full-Time' },
    { title: 'Backend Developer', location: 'Bangalore, India', type: 'Full-Time' },
    { title: 'Product Designer', location: 'Remote', type: 'Contract' },
    { title: 'Marketing Intern', location: 'Mumbai, India', type: 'Internship' }
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
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h2 className="font-bold leading-tight" style={{ fontSize: '8vw' }}>
          Our People are our biggest inspiration <br /> and the secret to our Success
        </h2>
        <h3 className="text-lg md:text-xl  mt-6">
          Join the growing team at Plasma Tech
        </h3>
      </section>

      <section className="min-h-screen px-6 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-red-600 mb-8 text-lg font-medium">Current Openings</p>
          <div className="grid md:grid-cols-2 gap-8">
            {jobs.map((job, idx) => (
              <div
                key={idx}
                className="bg-white/20 backdrop-blur-md shadow-2xl rounded-sm p-8 border border-white/30 hover:bg-white/30 hover:shadow-3xl transition-all duration-300 relative flex flex-col justify-between min-h-[220px] text-[#18181b] hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)'
                }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse shadow-lg"></span>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{job.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 font-medium">{job.location} • {job.type}</p>
                </div>
                <button
                  className="mt-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-sm shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 hover:shadow-xl transform hover:-translate-y-0.5"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20">
          <div className="bg-white/95 backdrop-blur-xl rounded-sm shadow-2xl p-8 w-full max-w-md relative animate-fade-in text-[#18181b] border border-white/20"
               style={{
                 backdropFilter: 'blur(25px)',
                 boxShadow: '0 25px 50px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.3)'
               }}>
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
      <Footer/>
    </div>
  );
}
  