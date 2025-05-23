"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function BeamLightDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<SVGPathElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !lightRef.current) return;
    
    const animateBeam = (path: SVGPathElement) => {
      // Get the total length of the path
      const pathLength = path.getTotalLength();
      
      // Set up the starting position
      lightRef.current!.style.strokeDasharray = `${pathLength} ${pathLength}`;
      lightRef.current!.style.strokeDashoffset = `${pathLength}`;
      lightRef.current!.style.opacity = '1';
      
      // Set the path to follow
      lightRef.current!.setAttribute('d', path.getAttribute('d') || '');
      
      // Animate the beam along the path
      return gsap.to(lightRef.current, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "power2.inOut"
      });
    };
    
    // Create the animation timeline
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5
    });
    
    // Get all path elements
    const paths = container.querySelectorAll<SVGPathElement>('.connection-path');
    
    // Add animations for each path
    paths.forEach((path) => {
      tl.add(animateBeam(path));
      tl.to(lightRef.current, { 
        opacity: 0,
        duration: 0.3
      });
    });
    
    // Clean up
    return () => {
      tl.kill();
    };
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-black p-8">
      {/* Top section with boxes and connections */}
      <div ref={containerRef} className="relative w-full max-w-4xl h-48">
        {/* SVG for connections and light beam */}
        <svg className="absolute top-0 left-0 w-full h-full">
          {/* Static connection lines - updated coordinates based on the image */}
          <path 
            className="connection-path" 
            d="M100,90 L300,70" 
            stroke="rgba(100, 100, 100, 0.6)" 
            strokeWidth="1" 
            fill="none" 
          />
          <path 
            className="connection-path" 
            d="M300,70 L505,90" 
            stroke="rgba(100, 100, 100, 0.6)" 
            strokeWidth="1" 
            fill="none" 
          />
          <path 
            className="connection-path" 
            d="M300,70 L530,154" 
            stroke="rgba(100, 100, 100, 0.6)" 
            strokeWidth="1" 
            fill="none" 
          />
          
          {/* Animated light beam */}
          <path
            ref={lightRef}
            d=""
            stroke="rgb(145, 232, 242)"
            strokeWidth="2"
            fill="none"
            opacity="0"
            filter="drop-shadow(0 0 5px rgb(145, 232, 242))"
          />
        </svg>
        
        {/* Boxes - positioned according to the image */}
        <div className="absolute top-16 left-16 bg-transparent border border-gray-600 text-white px-6 py-2 rounded-md text-center hover:border-blue-500 transition-colors">
          Client
        </div>
        
        <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-transparent border border-gray-600 text-white px-6 py-2 rounded-md text-center hover:border-blue-500 transition-colors">
          Design
        </div>
        
        <div className="absolute top-32 left-1/2 bg-transparent border border-gray-600 text-white px-6 py-2 rounded-md text-center hover:border-blue-500 transition-colors">
          Development
        </div>
        
        <div className="absolute top-24 right-16 bg-transparent border border-gray-600 text-white px-6 py-2 rounded-md flex items-center justify-center hover:border-blue-500 transition-colors">
          <span className="mr-2">&lt;/&gt;</span> Legion
        </div>
        
        {/* Processing Circle */}
        <div className="absolute top-16 left-1/3 -translate-x-1/2 bg-transparent border border-gray-600 rounded-full w-12 h-12 flex items-center justify-center">
          <div className="animate-spin">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Introduction Text - centered and properly spaced */}
      <div className="mt-32 text-center text-white max-w-xl">
        <p className="mb-8">I love both <span className="text-white font-bold">Development</span> and <span className="text-white font-bold">Design</span> so, That means I can create beautiful and functional websites. I am always looking for new opportunities to learn and grow.</p>
        
        <div className="flex justify-center gap-4 mb-16">
          <button className="bg-transparent border border-gray-600 text-white px-6 py-2 rounded-md hover:border-blue-500 transition-colors">
            Available for Hire
          </button>
          <button className="bg-transparent border border-gray-600 text-white px-6 py-2 rounded-md hover:border-blue-500 transition-colors">
            Email Me
          </button>
        </div>
        
        <div className="flex items-center justify-end gap-4">
          <span className="text-gray-400">Your Request</span>
          <div className="w-8 h-8 bg-transparent border border-gray-600 rounded-md flex items-center justify-center hover:border-blue-500 transition-colors">
            <span>+</span>
          </div>
          <button className="bg-transparent border border-gray-600 text-white px-6 py-2 rounded-md hover:border-blue-500 transition-colors">
            Request
          </button>
        </div>
      </div>
    </div>
  );
}