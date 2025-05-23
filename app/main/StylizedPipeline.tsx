"use client";

import React from 'react';

function StylizedPipeline() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-8">
      <div className="relative w-full max-w-4xl h-[400px] mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 800 350"
          fill="none"
          className="pulsing-pipeline"
        >
          {/* Background hexagon */}
          <g className="animate-slow-pulse">
            <path
              fillRule="evenodd"
              d="M400 50L580 150L580 290L400 390L220 290L220 150L400 50Z"
              fill="#21356F"
              fillOpacity="0.2"
              clipRule="evenodd"
            />
            <path
              fill="url(#paint1_radial)"
              fillRule="evenodd"
              d="M400 50L580 150L580 290L400 390L220 290L220 150L400 50Z"
              clipRule="evenodd"
              opacity="0.8"
            />
            <path
              fill="url(#paint2_radial)"
              fillRule="evenodd"
              d="M400 50L580 150L580 290L400 390L220 290L220 150L400 50Z"
              clipRule="evenodd"
              opacity="0.6"
            />
          </g>

          {/* Inner star/pipeline pattern */}
          <g className="animate-slow-pulse">
            <path
              fillRule="evenodd"
              d="M400 100L520 175L520 270L400 350L280 270L280 175L400 100Z"
              fill="#21356F"
              fillOpacity="0.3"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M400 150L450 185L450 235L400 270L350 235L350 185L400 150Z"
              fill="#21356F"
              fillOpacity="0.5"
              clipRule="evenodd"
            />
          </g>          {/* Connection lines */}
          <g className="connection-lines">
            <path 
              d="M280 220L350 185" 
              stroke="rgba(100, 100, 100, 0.6)" 
              strokeWidth="2" 
              strokeDasharray="4 4"
            />
            <path 
              d="M450 185L520 220" 
              stroke="rgba(100, 100, 100, 0.6)" 
              strokeWidth="2" 
              strokeDasharray="4 4"
            />
            <path 
              d="M400 100L400 150" 
              stroke="rgba(100, 100, 100, 0.6)" 
              strokeWidth="2" 
              strokeDasharray="4 4"
            />
            <path 
              d="M400 270L400 350" 
              stroke="rgba(100, 100, 100, 0.6)" 
              strokeWidth="2" 
              strokeDasharray="4 4"
            />
            
            {/* Data flow points */}
            <circle className="data-flow-point flow-point-1" cx="315" cy="203" r="3" fill="#7AACF2" />
            <circle className="data-flow-point flow-point-2" cx="485" cy="203" r="3" fill="#7AACF2" />
            <circle className="data-flow-point flow-point-3" cx="400" cy="125" r="3" fill="#7AACF2" />
            <circle className="data-flow-point flow-point-4" cx="400" cy="310" r="3" fill="#7AACF2" />
          </g>

          {/* Nodes for labels */}
          <circle cx="400" cy="100" r="15" fill="#243259" className="node-pulse" />
          <circle cx="520" cy="220" r="15" fill="#243259" className="node-pulse" />
          <circle cx="280" cy="220" r="15" fill="#243259" className="node-pulse" />
          <circle cx="400" cy="350" r="15" fill="#243259" className="node-pulse" />          {/* Animated paths */}
          <g className="animate-glow">
            <path
              d="M400 100L480 150L480 250L400 300L320 250L320 150L400 100Z"
              stroke="url(#paint3_linear)"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M400 130L450 170L450 230L400 270L350 230L350 170L400 130Z"
              stroke="url(#paint4_linear)"
              strokeWidth="1.5"
              fill="none"
              className="animate-glow-delay"
            />
          </g>

          {/* Defs for gradients */}
          <defs>
            <radialGradient
              id="paint1_radial"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(-20 -100 120 -24 450 320)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7AACF2"></stop>
              <stop offset="1" stopColor="#82A5D8" stopOpacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="paint2_radial"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(60 0 0 60 400 220)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#243259"></stop>
              <stop offset="1" stopColor="#243259" stopOpacity="0"></stop>
            </radialGradient>            <linearGradient
              id="paint3_linear"
              x1="400"
              x2="400"
              y1="100"
              y2="300"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" stopOpacity="0.2"></stop>
              <stop offset="1" stopColor="#fff" stopOpacity="0.8"></stop>
            </linearGradient>
            <linearGradient
              id="paint4_linear"
              x1="400"
              x2="400"
              y1="130"
              y2="270"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7AACF2" stopOpacity="0.4"></stop>
              <stop offset="1" stopColor="#7AACF2" stopOpacity="0.9"></stop>
            </linearGradient>
          </defs>
        </svg>

        {/* Boxes - positioned on top of the SVG */}
        <div className="absolute top-[100px] left-1/2 -translate-x-1/2 -translate-y-[50px] bg-transparent border border-gray-600 text-white px-6 py-2 rounded-md text-center hover:border-blue-500 transition-colors z-10">
          Client
        </div>
        
        <div className="absolute top-[350px] left-1/2 -translate-x-1/2 translate-y-[10px] bg-transparent border border-gray-600 text-white px-6 py-2 rounded-md text-center hover:border-blue-500 transition-colors z-10">
          Development
        </div>
        
        <div className="absolute top-[220px] left-[280px] -translate-x-[120px] bg-transparent border border-gray-600 text-white px-6 py-2 rounded-md text-center hover:border-blue-500 transition-colors z-10">
          Design
        </div>
        
        <div className="absolute top-[220px] left-[520px] translate-x-[20px] bg-transparent border border-gray-600 text-white px-6 py-2 rounded-md flex items-center justify-center hover:border-blue-500 transition-colors z-10">
          <span className="mr-2">&lt;/&gt;</span> Legion
        </div>
      </div>
      
      {/* Introduction Text - centered and properly spaced */}
      <div className="mt-8 text-center text-white max-w-xl">
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

export default StylizedPipeline;
