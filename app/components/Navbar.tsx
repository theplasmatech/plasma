"use client"

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' }
    ];

    return (
        <div className="w-full flex justify-center fixed top-4 z-50">
            <nav className="py-3 px-8 bg-opacity-10 backdrop-blur-md rounded-full border border-white border-opacity-20 shadow-lg">
                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-10">
                    {navItems.map((item) => (
                        <Link key={item.name} href={item.href}>
                            <span className="text-white hover:text-gray-300 font-medium transition duration-150 ease-in-out cursor-pointer">
                                {item.name}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Navigation Button */}
                <div className="md:hidden absolute top-14 right-0 bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-xl border border-white border-opacity-20 shadow-lg">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isOpen && (
                    <div className="md:hidden absolute top-14 right-0 bg-black bg-opacity-40 backdrop-blur-md p-4 rounded-xl border border-gray-700 border-opacity-40 shadow-lg">
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <Link key={item.name} href={item.href}>
                                    <span className="text-white hover:text-gray-300 block transition duration-150 ease-in-out cursor-pointer">
                                        {item.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;