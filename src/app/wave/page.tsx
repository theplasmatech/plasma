"use client"

import React from 'react';

export default function PlasmaWave() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Main plasma beam */}
      <div className="relative">
        {/* Core bright beam */}
        <div className="absolute left-1/2 top-0 w-1 h-screen bg-white transform -translate-x-1/2 animate-pulse shadow-[0_0_20px_#ffffff,0_0_40px_#ffffff,0_0_60px_#ffffff]"></div>
        
        {/* Inner blue glow */}
        <div className="absolute left-1/2 top-0 w-2 h-screen bg-blue-300 transform -translate-x-1/2 opacity-80 shadow-[0_0_30px_#60a5fa,0_0_60px_#60a5fa] animate-pulse"></div>
        
        {/* Outer blue glow */}
        <div className="absolute left-1/2 top-0 w-4 h-screen bg-blue-500 transform -translate-x-1/2 opacity-60 shadow-[0_0_50px_#3b82f6,0_0_100px_#3b82f6] animate-pulse"></div>
        
        {/* Expanding plasma field */}
        <div className="absolute left-1/2 top-0 w-8 h-screen bg-gradient-to-r from-transparent via-blue-600 to-transparent transform -translate-x-1/2 opacity-40 animate-pulse"></div>
        
        {/* Wider energy field */}
        <div className="absolute left-1/2 top-0 w-16 h-screen bg-gradient-to-r from-transparent via-blue-800 to-transparent transform -translate-x-1/2 opacity-20 animate-pulse"></div>
        
        {/* Animated particles flowing upward */}
        <div className="absolute left-1/2 top-0 w-0.5 h-4 bg-white transform -translate-x-1/2 animate-bounce shadow-[0_0_10px_#ffffff]" style={{animationDelay: '0s', animationDuration: '1.5s'}}></div>
        <div className="absolute left-1/2 top-20 w-0.5 h-3 bg-blue-200 transform -translate-x-1/2 animate-bounce shadow-[0_0_8px_#bfdbfe]" style={{animationDelay: '0.3s', animationDuration: '1.8s'}}></div>
        <div className="absolute left-1/2 top-40 w-0.5 h-2 bg-white transform -translate-x-1/2 animate-bounce shadow-[0_0_6px_#ffffff]" style={{animationDelay: '0.6s', animationDuration: '1.2s'}}></div>
        <div className="absolute left-1/2 top-60 w-0.5 h-4 bg-blue-300 transform -translate-x-1/2 animate-bounce shadow-[0_0_10px_#93c5fd]" style={{animationDelay: '0.9s', animationDuration: '1.6s'}}></div>
        <div className="absolute left-1/2 top-80 w-0.5 h-3 bg-white transform -translate-x-1/2 animate-bounce shadow-[0_0_8px_#ffffff]" style={{animationDelay: '1.2s', animationDuration: '1.4s'}}></div>
        
        {/* Side particles */}
        <div className="absolute left-1/2 top-32 w-0.5 h-2 bg-blue-200 transform -translate-x-2 animate-ping shadow-[0_0_6px_#bfdbfe]" style={{animationDelay: '0.2s'}}></div>
        <div className="absolute left-1/2 top-48 w-0.5 h-2 bg-white transform translate-x-1 animate-ping shadow-[0_0_6px_#ffffff]" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute left-1/2 top-64 w-0.5 h-2 bg-blue-300 transform -translate-x-1.5 animate-ping shadow-[0_0_6px_#93c5fd]" style={{animationDelay: '1.1s'}}></div>
        <div className="absolute left-1/2 top-16 w-0.5 h-2 bg-white transform translate-x-2 animate-ping shadow-[0_0_6px_#ffffff]" style={{animationDelay: '0.5s'}}></div>
        
        {/* Additional flowing particles */}
        <div className="absolute left-1/2 top-96 w-0.5 h-3 bg-blue-200 transform -translate-x-1 animate-bounce shadow-[0_0_8px_#bfdbfe]" style={{animationDelay: '1.5s', animationDuration: '1.3s'}}></div>
        <div className="absolute left-1/2 top-12 w-0.5 h-2 bg-white transform translate-x-0.5 animate-bounce shadow-[0_0_6px_#ffffff]" style={{animationDelay: '1.8s', animationDuration: '1.7s'}}></div>
      </div>
      
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-blue-950/10 to-transparent"></div>
      
      <style jsx>{`
        @keyframes flow-up {
          0% {
            transform: translateY(100vh) translateX(-50%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(-50%);
            opacity: 0;
          }
        }
        
        .animate-flow {
          animation: flow-up 3s linear infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}