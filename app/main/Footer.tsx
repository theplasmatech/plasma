"use client"

import React from 'react';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative w-full py-8 mt-20 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-transparent"></div>
      
      {/* Animated border line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                Plasma
              </span>
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
            </div>
            <p className="text-white/60 text-sm">Crafting digital experiences</p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="text-white/60 hover:text-white transition-colors group">
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="text-white/60 hover:text-white transition-colors group">
              <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-white/60 hover:text-white transition-colors group">
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="mailto:contact@theplasma.tech" 
               className="text-white/60 hover:text-white transition-colors group">
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 text-white/60">
            <a href="tel:+1234567890" className="hover:text-white transition-colors">
              📞 +91 9619132050
            </a>
            <a href="mailto:contact@theplasma.tech" className="hover:text-white transition-colors">
              ✉️ contact@theplasma.tech
            </a>
          </div>
          <p className="mt-2 text-red-400 text-sm font-medium">
            ⚠️ Why wait for email reply, direct call.
          </p>
        </div>

        {/* Copyright and made with love */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Plasma. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>by the Plasma team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
