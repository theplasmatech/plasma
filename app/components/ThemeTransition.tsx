"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// This component will manage the theme transition globally
const ThemeTransition = () => {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Create a timeline for the color transition
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#happyClientsSection", // Target the HappyClients section
        start: "top 80%", // Start the animation when the top of the section is 80% from the top of the viewport
        end: "top 20%", // End the animation when the top of the section is 20% from the top of the viewport
        scrub: true, // Smooth animation that ties to the scroll position
        markers: false, // Set to true for debugging
      }
    });

    // Animate the background color of the body
    tl.to("body", {
      backgroundColor: "#ffffff",
      color: "#111111",
      duration: 1,
      ease: "power2.inOut",
    });

    // Clean up ScrollTrigger when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ThemeTransition;