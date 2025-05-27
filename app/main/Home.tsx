// app/main/Home.tsx
"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

function HomeP() {
  const container = useRef(null);
  const videoRef = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      // Initial PLASMA text animation
      gsap.set(".hero-text", { y: -200, opacity: 0 });
      gsap.to(".hero-text", {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "bounce.out"
      });

      // Mouse movement parallax effect
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        // Calculate mouse position relative to center (values from -1 to 1)
        const x = (clientX / innerWidth - 0.5) * 2;
        const y = (clientY / innerHeight - 0.5) * 2;

        // Apply parallax effect to video
        gsap.to(videoRef.current, {
          x: x * 30,
          y: y * 30,
          duration: 1,
          ease: "power2.out"
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    },
    { scope: container }
  );

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black" ref={container}>
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="hero-video absolute z-0 object-cover max-w-[200vw] max-h-[200vh] md:max-w-[80vw] md:max-h-[80vh]
 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-lg"
      >
        <source src="/mac.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Container */}
      <div className="absolute inset-0 z-20">
        {/* Logo */}
        <div className="fixed top-4 left-4">
          <Image
            src="/logo.png"
            alt="Logo"
            width={48}
            height={48}
            className="h-12 w-auto"
          />
        </div>

        {/* Navbar */}
        <div className="flex justify-center w-full">
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default HomeP;
