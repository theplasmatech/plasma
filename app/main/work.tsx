"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  videoUrl: string;
  size: 'featured' | 'landscape' | 'portrait';
}

const projects: Project[] = [
  {
    id: 1,
    title: "VYRA",
    videoUrl: "/videos/vyra.mp4",
    size: 'featured'
  },
  {
    id: 2,
    title: "VYRA AI",
    videoUrl: "/videos/gym.mp4",
    size: 'portrait'
  },
  {
    id: 3,
    title: "InternLink",
    videoUrl: "/videos/internlink.mp4",
    size: 'landscape'
  },
  {
    id: 4,
    title: "Project Layers",
    videoUrl: "/videos/layers.webm",
    size: 'landscape'
  },
  {
    id: 5,
    title: "PrintVenue",
    videoUrl: "/videos/printvenue.webm",
    size: 'landscape'
  },
  {
    id: 6,
    title: "VYRA AI",
    videoUrl: "/videos/how.mp4",
    size: 'landscape'
  },
];

const Work: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-black py-20 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-12 text-center"
        >
          Our Work
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(200px,auto)]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`
                relative overflow-hidden rounded-2xl
                ${project.size === 'featured' ? 'md:col-span-12 md:row-span-2' : 
                  project.size === 'landscape' ? 'md:col-span-6 md:row-span-1' : 
                  'md:col-span-4 md:row-span-2'}
                group cursor-pointer
                ${index % 2 === 0 ? 'md:translate-y-4' : ''}
                ${index % 3 === 0 ? 'md:translate-x-4' : ''}
                hover:z-10
              `}
            >
              <video
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={project.videoUrl} type="video/mp4" />
              </video>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-white text-3xl font-bold mb-2">{project.title}</h3>
                  <div className="h-1 w-20 bg-white/50 rounded-full"></div>
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-black/50 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm">View Project</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
