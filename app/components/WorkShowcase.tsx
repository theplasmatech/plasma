"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Projects data with the 5 specified work examples
const projects = [
  {
    id: 1,
    title: "VYRA",
    description: "AI-powered design automation platform",
    videoUrl: "/videos/vyra.mp4",
    category: "Platform",
    size: 'featured',
    color: "from-purple-500/20 to-indigo-500/20"
  },
  {
    id: 2,
    title: "VYRA AI",
    description: "Intelligent design assistant experience",
    videoUrl: "/videos/gym.mp4",
    category: "AI",
    size: 'portrait',
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 3,
    title: "InternLink",
    description: "Connecting students with industry opportunities",
    videoUrl: "/videos/internlink.mp4",
    category: "Web App",
    size: 'landscape',
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    id: 4,
    title: "Project Layers",
    description: "Interactive layer-based design system",
    videoUrl: "/videos/layers.webm",
    category: "Design Tool",
    size: 'landscape',
    color: "from-amber-500/20 to-yellow-500/20"
  },
  {
    id: 5,
    title: "PrintVenue",
    description: "Custom print merchandise platform",
    videoUrl: "/videos/printvenue.webm",
    category: "E-commerce",
    size: 'portrait',
    color: "from-rose-500/20 to-red-500/20"
  }
];

const WorkShowcase = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  // Container variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // Item variants for individual card animations
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-rose-600/20 rounded-full blur-3xl opacity-20"></div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLnJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2Utb3BhY2l0eT0iLjAyIiBzdHJva2U9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTAgMzBoMzB2MzBIMHoiIHN0cm9rZS1vcGFjaXR5PSIuMDIiIHN0cm9rZT0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDIiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMCAwaDMwdjMwSDB6IiBzdHJva2Utb3BhY2l0eT0iLjAyIiBzdHJva2U9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTMwIDBoMzB2MzBIMzB6IiBzdHJva2Utb3BhY2l0eT0iLjAyIiBzdHJva2U9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==')] opacity-5"></div>

      <div className="container mx-auto relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-3 px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <span className="text-sm font-medium text-cyan-200">Featured Projects</span>
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white"
          >
            Our Best Work
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            Discover our most innovative projects and creative solutions
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(250px,auto)]"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03, 
                  transition: { duration: 0.3 }
                }}
                className={`
                  relative overflow-hidden rounded-2xl backdrop-blur-sm
                  ${project.size === 'featured' ? 'md:col-span-8 md:row-span-2' : 
                    project.size === 'landscape' ? 'md:col-span-6 md:row-span-1' : 
                    'md:col-span-4 md:row-span-2'}
                  group cursor-pointer
                `}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`}></div>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
                
                {/* Double border effect */}
                <div className="absolute inset-[1px] rounded-2xl border border-white/10"></div>
                <div className="absolute inset-[2px] rounded-2xl border border-white/5"></div>
                
                {/* Video background */}
                <div className="absolute inset-0 opacity-70 group-hover:opacity-90 transition-opacity duration-700">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={project.videoUrl} />
                  </video>
                </div>
                
                {/* Content */}
                <div className="relative h-full z-10 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out mb-4">
                    <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-cyan-200 mb-4">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-2 transform group-hover:translate-y-0 translate-y-4 transition-transform duration-500 ease-out">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    {project.description}
                  </p>
                  
                  <div className="mt-6 transform translate-y-16 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <span className="inline-flex items-center text-sm font-medium text-cyan-200 group-hover:text-white">
                      View Project
                      <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase; 