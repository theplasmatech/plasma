"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

// Register GSAP plugins
gsap.registerPlugin(MotionPathPlugin);

const DataFlowDiagram = () => {
  // Refs for animation
  const dotRefs: {
    clientToRequest: React.MutableRefObject<SVGCircleElement | null>;
    requestToPlasma: React.MutableRefObject<SVGCircleElement | null>;
    plasmaToDesign: React.MutableRefObject<SVGCircleElement | null>;
    plasmaToDev: React.MutableRefObject<SVGCircleElement | null>;
    designToProcessing: React.MutableRefObject<SVGCircleElement | null>;
    devToProcessing: React.MutableRefObject<SVGCircleElement | null>;
    processingToClient: React.MutableRefObject<SVGCircleElement | null>;
  } = {
    clientToRequest: useRef<SVGCircleElement | null>(null),
    requestToPlasma: useRef<SVGCircleElement | null>(null),
    plasmaToDesign: useRef<SVGCircleElement | null>(null),
    plasmaToDev: useRef<SVGCircleElement | null>(null),
    designToProcessing: useRef<SVGCircleElement | null>(null),
    devToProcessing: useRef<SVGCircleElement | null>(null),
    processingToClient: useRef<SVGCircleElement | null>(null)
  };
  // Timeline ref
  const mainTl = useRef<ReturnType<typeof gsap.timeline> | null>(null);

  useEffect(() => {
    // Create main timeline
    const timeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5,
      onStart: () => {
        // Reset opacity for all dots at the start of each cycle
        Object.values(dotRefs).forEach(ref => {
          if (ref.current) {
            gsap.set(ref.current, { opacity: 0, motionPathOffset: 0 });
          }
        });
      }
    });
    mainTl.current = timeline;

    // Helper function to animate a dot along its path
    const animateDot = (
      dotRef: React.MutableRefObject<SVGCircleElement | null>,
      path: string,
      duration: number
    ): ReturnType<typeof gsap.timeline> => {
      if (!dotRef.current) return gsap.timeline();
      
      return gsap.timeline()
        .set(dotRef.current, { opacity: 0 })
        .to(dotRef.current, {
          opacity: 1,
          duration: 0.3
        })
        .to(dotRef.current, {
          motionPath: {
            path: path,
            align: path,
            alignOrigin: [0.5, 0.5],
            autoRotate: true
          },
          duration: duration,
          ease: "none"
        }, "<")
        .to(dotRef.current, {
          opacity: 0,
          duration: 0.3
        }, `-=${duration * 0.2}`);
    };

    // Sequential animation chain
    timeline
      // Client to Request
      .add(animateDot(
        dotRefs.clientToRequest, 
        "M 120,250 L 270,250", 
        0.8
      ))
      
      // Request to Plasma
      .add(animateDot(
        dotRefs.requestToPlasma, 
        "M 370,250 L 480,250", 
        0.8
      ), "-=0.1")
      
      // Split paths: Plasma to Design & Development (in parallel)
      .add("split")
      .add(animateDot(
        dotRefs.plasmaToDesign, 
        "M 580,250 Q 630,250 660,180 L 750,180", 
        0.7
      ), "split")
      .add(animateDot(
        dotRefs.plasmaToDev, 
        "M 580,250 Q 630,250 660,320 L 750,320", 
        0.7
      ), "split")
      
      // Converge: Design & Development to Processing (in parallel)
      .add("converge", "-=0.1")
      .add(animateDot(
        dotRefs.designToProcessing, 
        "M 850,180 Q 880,180 910,250 L 930,250", 
        0.7
      ), "converge")
      .add(animateDot(
        dotRefs.devToProcessing, 
        "M 850,320 Q 880,320 910,250 L 930,250", 
        0.7
      ), "converge")
      
      // Processing to Client (completing the loop)
      .add(animateDot(
        dotRefs.processingToClient, 
        "M 1030,250 Q 1060,250 1060,150 L 120,150 Q 90,150 90,220 L 120,250", 
        1.2
      ), "-=0.1");

    // Cleanup
    return () => {
      mainTl.current?.kill();
    };
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-screen bg-black">
      <div className="relative w-full max-w-4xl">
        <svg 
          viewBox="0 0 1000 400" 
          width="100%" 
          height="100%" 
          className="overflow-visible"
        >
          {/* Gradients and filters */}
          <defs>
            {/* Blue glow for paths */}
            <filter id="blueGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            {/* Intense blue glow for dots */}
            <filter id="intenseBlueDot" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            {/* Radial gradient for dots */}
            <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#00A3FF" stopOpacity="1" />
              <stop offset="40%" stopColor="#00A3FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00A3FF" stopOpacity="0" />
            </radialGradient>
            
            {/* Box background gradient */}
            <linearGradient id="boxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1A1A1A" />
              <stop offset="100%" stopColor="#0D0D0D" />
            </linearGradient>
          </defs>
          
          {/* Connection Paths */}
          <g>
            {/* Client to Your Request */}
            <path 
              d="M 120,250 L 270,250" 
              stroke="rgba(30, 30, 30, 0.6)" 
              strokeWidth="2" 
              fill="none"
            />
            
            {/* Your Request to Plasma */}
            <path 
              d="M 370,250 L 480,250" 
              stroke="rgba(30, 30, 30, 0.6)" 
              strokeWidth="2" 
              fill="none"
            />
            
            {/* Plasma to Design */}
            <path 
              d="M 580,250 Q 630,250 660,180 L 750,180" 
              stroke="rgba(30, 30, 30, 0.6)" 
              strokeWidth="2" 
              fill="none"
            />
            
            {/* Plasma to Development */}
            <path 
              d="M 580,250 Q 630,250 660,320 L 750,320" 
              stroke="rgba(30, 30, 30, 0.6)" 
              strokeWidth="2" 
              fill="none"
            />
            
            {/* Design to Processing */}
            <path 
              d="M 850,180 Q 880,180 910,250 L 930,250" 
              stroke="rgba(30, 30, 30, 0.6)" 
              strokeWidth="2" 
              fill="none"
            />
            
            {/* Development to Processing */}
            <path 
              d="M 850,320 Q 880,320 910,250 L 930,250" 
              stroke="rgba(30, 30, 30, 0.6)" 
              strokeWidth="2" 
              fill="none"
            />
            
            {/* Processing to Client final */}
            <path 
              d="M 1030,250 Q 1060,250 1060,150 L 120,150 Q 90,150 90,220 L 120,250" 
              stroke="rgba(30, 30, 30, 0.6)" 
              strokeWidth="2" 
              fill="none"
              strokeDasharray="4 4"
            />
          </g>
          
          {/* Nodes */}
          <g>
            {/* Client */}
            <g className="cursor-pointer hover:opacity-80 transition-opacity">
              <ellipse 
                cx="90" 
                cy="250" 
                rx="30" 
                ry="30" 
                fill="url(#boxGradient)" 
                stroke="#333" 
                strokeWidth="1"
              />
              <text 
                x="90" 
                y="255" 
                textAnchor="middle" 
                fill="#FFF" 
                fontSize="14"
                fontFamily="system-ui"
              >
                client
              </text>
            </g>
            
            {/* Your Request */}
            <g className="cursor-pointer hover:opacity-80 transition-opacity">
              <rect 
                x="270" 
                y="220" 
                width="100" 
                height="60" 
                rx="10" 
                ry="10" 
                fill="url(#boxGradient)" 
                stroke="#333" 
                strokeWidth="1"
              />
              <text 
                x="320" 
                y="255" 
                textAnchor="middle" 
                fill="#FFF" 
                fontSize="14"
                fontFamily="system-ui"
              >
                Your Request
              </text>
            </g>
            
            {/* Plasma */}
            <g className="cursor-pointer hover:opacity-80 transition-opacity">
              <rect 
                x="480" 
                y="220" 
                width="100" 
                height="60" 
                rx="10" 
                ry="10" 
                fill="url(#boxGradient)" 
                stroke="#333" 
                strokeWidth="1"
              />
              <text 
                x="530" 
                y="255" 
                textAnchor="middle" 
                fill="#FFF" 
                fontSize="14"
                fontFamily="system-ui"
              >
                Plasma
              </text>
            </g>
            
            {/* Design */}
            <g className="cursor-pointer hover:opacity-80 transition-opacity">
              <rect 
                x="750" 
                y="150" 
                width="100" 
                height="60" 
                rx="10" 
                ry="10" 
                fill="url(#boxGradient)" 
                stroke="#333" 
                strokeWidth="1"
              />
              <text 
                x="800" 
                y="185" 
                textAnchor="middle" 
                fill="#FFF" 
                fontSize="14"
                fontFamily="system-ui"
              >
                Design
              </text>
            </g>
            
            {/* Development */}
            <g className="cursor-pointer hover:opacity-80 transition-opacity">
              <rect 
                x="750" 
                y="290" 
                width="100" 
                height="60" 
                rx="10" 
                ry="10" 
                fill="url(#boxGradient)" 
                stroke="#333" 
                strokeWidth="1"
              />
              <g className="flex items-center">
                <text 
                  x="800" 
                  y="325" 
                  textAnchor="middle" 
                  fill="#FFF" 
                  fontSize="14"
                  fontFamily="system-ui"
                >
                  <tspan>&lt;/&gt;</tspan> LegionDev
                </text>
              </g>
            </g>
            
            {/* Processing */}
            <g className="cursor-pointer hover:opacity-80 transition-opacity">
              <rect 
                x="930" 
                y="220" 
                width="100" 
                height="60" 
                rx="10" 
                ry="10" 
                fill="url(#boxGradient)" 
                stroke="#333" 
                strokeWidth="1"
              />
              <text 
                x="980" 
                y="255" 
                textAnchor="middle" 
                fill="#FFF" 
                fontSize="14"
                fontFamily="system-ui"
              >
                Processing
              </text>
            </g>
            
            {/* Client (final) - positioned at the end of the loop */}
            <g className="cursor-pointer hover:opacity-80 transition-opacity">
              <ellipse 
                cx="1060" 
                cy="150" 
                rx="30" 
                ry="30" 
                fill="url(#boxGradient)" 
                stroke="#333" 
                strokeWidth="1"
              />
              <text 
                x="1060" 
                y="155" 
                textAnchor="middle" 
                fill="#FFF" 
                fontSize="14"
                fontFamily="system-ui"
              >
                client
              </text>
            </g>
          </g>
          
          {/* Animated Light Dots */}
          <g>
            {/* Client to Your Request */}
            <circle 
              ref={dotRefs.clientToRequest}
              r="10" 
              fill="url(#dotGlow)" 
              filter="url(#intenseBlueDot)" 
              opacity="0"
            />
            
            {/* Your Request to Plasma */}
            <circle 
              ref={dotRefs.requestToPlasma}
              r="10" 
              fill="url(#dotGlow)" 
              filter="url(#intenseBlueDot)" 
              opacity="0"
            />
            
            {/* Plasma to Design */}
            <circle 
              ref={dotRefs.plasmaToDesign}
              r="10" 
              fill="url(#dotGlow)" 
              filter="url(#intenseBlueDot)" 
              opacity="0"
            />
            
            {/* Plasma to Development */}
            <circle 
              ref={dotRefs.plasmaToDev}
              r="10" 
              fill="url(#dotGlow)" 
              filter="url(#intenseBlueDot)" 
              opacity="0"
            />
            
            {/* Design to Processing */}
            <circle 
              ref={dotRefs.designToProcessing}
              r="10" 
              fill="url(#dotGlow)" 
              filter="url(#intenseBlueDot)" 
              opacity="0"
            />
            
            {/* Development to Processing */}
            <circle 
              ref={dotRefs.devToProcessing}
              r="10" 
              fill="url(#dotGlow)" 
              filter="url(#intenseBlueDot)" 
              opacity="0"
            />
            
            {/* Processing to Client final */}
            <circle 
              ref={dotRefs.processingToClient}
              r="10" 
              fill="url(#dotGlow)" 
              filter="url(#intenseBlueDot)" 
              opacity="0"
            />
          </g>
          
          {/* Central marker - L logo */}
          <g className="opacity-80">
            <circle 
              cx="530" 
              cy="350" 
              r="20" 
              fill="transparent" 
              stroke="#00A3FF" 
              strokeWidth="1"
            />
            <text 
              x="530" 
              y="357" 
              textAnchor="middle" 
              fill="#00A3FF" 
              fontSize="18"
              fontWeight="bold"
              fontFamily="system-ui"
            >
              L
            </text>
          </g>
          
          {/* Title area */}
          <g>
            <rect
              x="400"
              y="50"
              width="260"
              height="60"
              rx="10"
              ry="10"
              fill="rgba(15, 15, 15, 0.7)"
              stroke="#333"
              strokeWidth="1"
            />
            <text
              x="530"
              y="85"
              textAnchor="middle"
              fill="#FFF"
              fontSize="16"
              fontFamily="system-ui"
            >
              <tspan x="450" dy="0" dx="65">
                <tspan fill="#00A3FF">&#9733;</tspan> Data exchange using customized REST API
              </tspan>
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default DataFlowDiagram;