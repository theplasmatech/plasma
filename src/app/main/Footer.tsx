"use client"

import React from 'react';

const socialLinks = [
  {
    href: "https://github.com",
    label: "GitHub",
    svg: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
    ),
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    svg: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.49 2.014-4.49 4.5 0 .353.04.697.116 1.025C7.728 9.39 4.1 7.6 1.67 4.905c-.388.67-.61 1.45-.61 2.28 0 1.573.8 2.96 2.02 3.77-.74-.023-1.44-.227-2.05-.567v.057c0 2.197 1.56 4.03 3.63 4.45-.38.104-.78.16-1.19.16-.29 0-.57-.027-.84-.08.57 1.78 2.23 3.08 4.2 3.12A9.01 9.01 0 0 1 2 19.54a12.73 12.73 0 0 0 6.92 2.03c8.3 0 12.84-6.87 12.84-12.83 0-.2-.01-.4-.02-.6.88-.64 1.64-1.44 2.24-2.35z"/></svg>
    ),
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    svg: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z"/></svg>
    ),
  },
  {
    href: "mailto:contact@theplasma.tech",
    label: "Email",
    svg: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm-16 12V8.99l8 6.99 8-6.99V18H4z"/></svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white border-t border-white/10 pt-10 pb-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left: Logo and tagline */}
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-bold tracking-tight">Plasma</span>
          <span className="text-sm text-white/60">Crafting digital experiences</span>
        </div>
        {/* Center: Contact Info */}
        <div className="flex flex-col gap-2">
          <a href="tel:+919619132050" className="text-white/80 hover:text-white transition-colors text-sm">📞 +91 9619132050</a>
          <a href="mailto:contact@theplasma.tech" className="text-white/80 hover:text-white transition-colors text-sm">✉️ contact@theplasma.tech</a>
          <span className="text-xs text-red-400 mt-1">⚠️ Why wait for email reply, direct call.</span>
        </div>
        {/* Right: Social Links */}
        <div className="flex flex-col gap-2 items-start">
          <span className="text-sm font-medium mb-1">Connect with us</span>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-white/60 hover:text-white transition-colors"
              >
                {link.svg}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 border-t border-white/10 pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/40 text-xs">© {new Date().getFullYear()} Plasma. All rights reserved.</p>
        <span className="text-white/40 text-xs">Made with <span className="text-red-400">♥</span> by the Plasma team</span>
      </div>
    </footer>
  );
};

export default Footer;
