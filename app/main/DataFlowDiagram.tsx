"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

const DataFlowDiagram = () => {
  const dotsRef = useRef<SVGCircleElement[]>([]);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    timeline.current = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5, // Gap between full loops
      defaults: { duration: 2, ease: "none" },
      invalidateOnRepeat: true, // Crucial for resetting state on repeat
    });

    // Initial setup: dots are invisible and at the start of their paths
    dotsRef.current.forEach(dot => {
      if (dot) {
        const pathData = dot.getAttribute('data-path') || '';
        gsap.set(dot, {
          autoAlpha: 0, // Start invisible
          motionPath: {
            path: pathData,
            alignOrigin: [0.5, 0.5],
            start: 0,
            end: 0
          }
        });
      }
    });

    const getPathData = (element: SVGCircleElement): string => {
      return element.getAttribute('data-path') || '';
    };

    // Helper function for the onComplete callback
    const fadeOutOnComplete = function(this: gsap.core.Tween) {
      gsap.set(this.targets(), { autoAlpha: 0 });
    };

    // Define the animation sequence
    if (dotsRef.current[0]) {
      timeline.current.to(dotsRef.current[0], {
        autoAlpha: 1, // Fade in as it starts moving
        motionPath: {
          path: getPathData(dotsRef.current[0]),
          alignOrigin: [0.5, 0.5], start: 0, end: 1
        },
        onComplete: fadeOutOnComplete // Fade out when done
      });
    }

    if (dotsRef.current[1]) {
      timeline.current.to(dotsRef.current[1], {
        autoAlpha: 1,
        motionPath: {
          path: getPathData(dotsRef.current[1]),
          alignOrigin: [0.5, 0.5], start: 0, end: 1
        },
        onComplete: fadeOutOnComplete
      }, ">"); // Position parameter: start after previous tween ends
    }

    // Parallel paths need careful positioning
    const parallelStartTime = ">"; // Start after the previous (dot 1) finishes
    const parallelDots = dotsRef.current.slice(2, 4).filter(Boolean);
    if (parallelDots.length) {
      parallelDots.forEach((dot) => {
        timeline.current?.to(dot, {
          autoAlpha: 1,
          motionPath: {
            path: getPathData(dot),
            alignOrigin: [0.5, 0.5], start: 0, end: 1
          },
          onComplete: fadeOutOnComplete
        }, parallelStartTime); // Both start at the same time
      });
    }

    // Converging paths also need careful positioning
    // They should start *after* the parallel paths complete.
    // Since parallel paths have duration 0.8, start 0.8s after parallelStartTime
    const convergingStartTime = parallelStartTime + "+=0.8";
    const convergingDots = dotsRef.current.slice(4, 6).filter(Boolean);
    if (convergingDots.length) {
       convergingDots.forEach((dot) => {
        timeline.current?.to(dot, {
          autoAlpha: 1,
          motionPath: {
            path: getPathData(dot),
            alignOrigin: [0.5, 0.5], start: 0, end: 1
          },
          onComplete: fadeOutOnComplete
        }, convergingStartTime); // Both start at the same time
      });
    }

    // Final segment starts after converging paths complete
    const finalStartTime = convergingStartTime + "+=0.8";
    if (dotsRef.current[6]) {
      timeline.current.to(dotsRef.current[6], {
        autoAlpha: 1,
        motionPath: {
          path: getPathData(dotsRef.current[6]),
          alignOrigin: [0.5, 0.5], start: 0, end: 1
        },
        onComplete: fadeOutOnComplete
      }, finalStartTime);
    }

    return () => {
      if (timeline.current) { timeline.current.kill(); }
    };
  }, []);

  const addDotRef = (el: SVGCircleElement | null) => {
    if (el && !dotsRef.current.includes(el)) {
      dotsRef.current.push(el);
    }
  };

  // --- Styles and Paths (Unchanged from previous correction) ---
  const nodeFillColor = "#111";
  const nodeStrokeColor = "#282828";
  const pathColor = "rgba(180, 180, 180, 0.4)";
  const dotColor = "#00A3FF";
  const textColor = "#FFF";
  const accentColor = "#00A3FF";

  const path1 = "M 125,250 L 275,250"; // Client -> Req
  const path2 = "M 375,250 L 485,250"; // Req -> Plasma
  const path3 = "M 585,250 Q 630,250 660,180 L 755,180"; // Plasma -> Design
  const path4 = "M 585,250 Q 630,250 660,320 L 755,320"; // Plasma -> Dev
  const path5 = "M 855,180 Q 880,180 910,250 L 975,250"; // Design -> Proc
  const path6 = "M 855,320 Q 880,320 910,250 L 975,250"; // Dev -> Proc
  const path7 = "M 980,275 Q 980,350 900,350 L 150,350 Q 100,350 100,280 L 115,250"; // Proc -> Client Area

  return (
    <div className="flex justify-center items-center w-full h-screen bg-white dark:bg-black">
      <div className="relative w-full max-w-4xl">
        <svg
          viewBox="0 0 1100 500"
          width="100%"
          height="100%"
          className="overflow-visible pulsing-pipeline"
        >
         <defs>
           <filter id="blueGlow" x="-20%" y="-20%" width="140%" height="140%">
             <feGaussianBlur stdDeviation="4" result="blur" />
             <feComposite in="SourceGraphic" in2="blur" operator="over" />
           </filter>
           <filter id="intenseBlueDot" x="-100%" y="-100%" width="300%" height="300%">
             <feGaussianBlur stdDeviation="6" result="blur" />
             <feComposite in="SourceGraphic" in2="blur" operator="over" />
           </filter>
           <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
             <stop offset="0%" stopColor="#00A3FF" stopOpacity="1" />
             <stop offset="40%" stopColor="#00A3FF" stopOpacity="0.8" />
             <stop offset="100%" stopColor="#00A3FF" stopOpacity="0" />
           </radialGradient>
           <linearGradient id="boxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
             <stop offset="0%" stopColor="#1A1A1A" />
             <stop offset="100%" stopColor="#0D0D0D" />
           </linearGradient>
         </defs>
          {/* Connection Paths */}
          <g className="animate-glow" filter="url(#blueGlow)">
            <path d={path1} stroke={pathColor} strokeWidth="1.5" fill="none" />
            <path d={path2} stroke={pathColor} strokeWidth="1.5" fill="none" />
            <path d={path3} stroke={pathColor} strokeWidth="1.5" fill="none" />
            <path d={path4} stroke={pathColor} strokeWidth="1.5" fill="none" />
            <path d={path5} stroke={pathColor} strokeWidth="1.5" fill="none" />
            <path d={path6} stroke={pathColor} strokeWidth="1.5" fill="none" />
            <path d={path7} stroke={pathColor} strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
          </g>

          {/* Nodes */}
          <g>
             <g className="cursor-pointer hover:opacity-80 transition-opacity node-pulse">
              <ellipse cx="90" cy="250" rx="30" ry="30" fill={nodeFillColor} stroke={nodeStrokeColor} strokeWidth="1" />
              <text x="90" y="255" textAnchor="middle" fill={textColor} fontSize="14" fontFamily="system-ui">client</text>
            </g>
            <g className="cursor-pointer hover:opacity-80 transition-opacity node-pulse">
              <rect x="270" y="220" width="100" height="60" rx="10" ry="10" fill={nodeFillColor} stroke={nodeStrokeColor} strokeWidth="1"/>
              <text x="320" y="255" textAnchor="middle" fill={textColor} fontSize="14" fontFamily="system-ui">Your Request</text>
            </g>
            <g className="cursor-pointer hover:opacity-80 transition-opacity node-pulse">
              <rect x="480" y="220" width="100" height="60" rx="10" ry="10" fill={nodeFillColor} stroke={nodeStrokeColor} strokeWidth="1"/>
              <text x="530" y="255" textAnchor="middle" fill={textColor} fontSize="14" fontFamily="system-ui">Plasma</text>
            </g>
            <g className="cursor-pointer hover:opacity-80 transition-opacity node-pulse">
              <rect x="750" y="150" width="100" height="60" rx="10" ry="10" fill={nodeFillColor} stroke={nodeStrokeColor} strokeWidth="1"/>
              <text x="800" y="185" textAnchor="middle" fill={textColor} fontSize="14" fontFamily="system-ui">Design</text>
            </g>
            <g className="cursor-pointer hover:opacity-80 transition-opacity node-pulse">
              <rect x="750" y="290" width="100" height="60" rx="10" ry="10" fill={nodeFillColor} stroke={nodeStrokeColor} strokeWidth="1"/>
              <text x="800" y="325" textAnchor="middle" fill={textColor} fontSize="14" fontFamily="system-ui">Development</text>
            </g>
            <g className="cursor-pointer hover:opacity-80 transition-opacity node-pulse" transform="translate(980, 250)">
               <circle cx="0" cy="0" r="28" fill={nodeFillColor} stroke={nodeStrokeColor} strokeWidth="1"/>
               <circle cx="0" cy="0" r="22" fill="none" stroke="#333" strokeWidth="5"/>
               <path d="M 0 -22 A 22 22 0 1 1 -15.556 15.556" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
              <text x="0" y="45" textAnchor="middle" fill={textColor} fontSize="14" fontFamily="system-ui">Processing</text>
            </g>
          </g>

          {/* Animated Dots - data-path links to corrected paths */}
          <g>
            <circle ref={addDotRef} data-path={path1} r="5" fill={dotColor} filter="url(#intenseBlueDot)" className="data-flow-point" />
            <circle ref={addDotRef} data-path={path2} r="5" fill={dotColor} filter="url(#intenseBlueDot)" className="data-flow-point flow-point-2" />
            <circle ref={addDotRef} data-path={path3} r="5" fill={dotColor} filter="url(#intenseBlueDot)" className="data-flow-point flow-point-3" />
            <circle ref={addDotRef} data-path={path4} r="5" fill={dotColor} filter="url(#intenseBlueDot)" className="data-flow-point flow-point-4" />
            <circle ref={addDotRef} data-path={path5} r="5" fill={dotColor} filter="url(#intenseBlueDot)" className="data-flow-point flow-point-1" />
            <circle ref={addDotRef} data-path={path6} r="5" fill={dotColor} filter="url(#intenseBlueDot)" className="data-flow-point flow-point-2" />
            <circle ref={addDotRef} data-path={path7} r="5" fill={dotColor} filter="url(#intenseBlueDot)" className="data-flow-point flow-point-3" />
          </g>

          {/* Central marker
          <g className="opacity-70">
            <circle cx="530" cy="400" r="15" fill="transparent" stroke={accentColor} strokeWidth="1"/>
            <text x="530" y="405" textAnchor="middle" fill={accentColor} fontSize="14" fontWeight="bold" fontFamily="system-ui">L</text>
          </g> */}

          {/* Title area */}
          <g className="animate-slow-pulse">
            <rect x="400" y="50" width="260" height="60" rx="10" ry="10" fill="url(#boxGradient)" stroke={accentColor} strokeWidth="1"/>
            <text x="530" y="85" textAnchor="middle" fill={accentColor} fontSize="20" fontFamily="system-ui">Data Flow</text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default DataFlowDiagram;