"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { href: '#About', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ];
  // Fan out in a 90deg arc from 0deg (right) to 90deg (down)
  const arcStart = 0; // degrees (right)
  const arcEnd = 90; // degrees (down)
  const arcSpan = arcEnd - arcStart;
  const radius = 90; // px, reduced to keep within screen
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 text-white" style={{top: '2vh'}}>
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <img src="/PlasmaName.png" alt="Logo" className="h-[44px] w-auto mr-2" style={{ maxWidth: '160px', height: '44px' }} />
      </Link>
      {/* Hamburger Icon for Mobile - now in top right */}
      <div className="fixed top-6 right-6 md:hidden z-50">
        <button
          className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>
      {/* Center Navigation Links (Desktop) */}
      <ul className="hidden md:flex space-x-6 text-lg">
        {navLinks.map(link => (
          <Link key={link.href} href={link.href} className="hover:opacity-75 transition-opacity">{link.label}</Link>
        ))}
      </ul>
      {/* Book a Call Button (Desktop) */}
      <button className="hidden md:inline-block bg-white text-black rounded-sm px-4 py-2 font-semibold hover:bg-gray-100 transition-colors">
        Book a Call
      </button>
      {/* Fan-out Mobile Menu */}
      <div className="md:hidden">
        <div className={`fixed top-5 right-0 w-60 h-60 pointer-events-none z-40 transition-all duration-500 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          style={{
            transitionProperty: 'opacity',
          }}
        >
          {navLinks.map((link, i) => {
            // Evenly space links in the arc
            const angle = arcStart + (i * (arcSpan / (navLinks.length - 1)));
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`absolute text-lg font-semibold bg-black/80 px-4 py-2 rounded shadow-lg transition-all duration-500 hover:bg-black/60 ${menuOpen ? 'pointer-events-auto opacity-100' : 'opacity-0'}`}
                style={{
                  right: 0 + x,
                  top: 0 + y,
                  transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
                  transform: `rotate(${-angle}deg)`
                }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          {/* Book a Call Button in fan, at the end of the arc */}
          {/* <button
            className={`absolute text-black bg-white rounded-sm px-4 py-2 font-semibold shadow-lg transition-all duration-500 hover:bg-gray-100 ${menuOpen ? 'pointer-events-auto opacity-100' : 'opacity-0'}`}
            style={{
              right: 0 + radius * Math.cos((arcEnd * Math.PI) / 180),
              top: 0 + radius * Math.sin((arcEnd * Math.PI) / 180),
              transitionDelay: menuOpen ? `${navLinks.length * 60}ms` : '0ms',
            }}
            onClick={() => setMenuOpen(false)}
          >
            Book a Call
          </button> */}
        </div>
      </div>
    </nav>
  );
}