"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
    const [isOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '/', icon: '/icons/home.png' },
        { name: 'About', href: '/about', icon: '/icons/tech.png' },
        { name: 'Work', href: '/services', icon: '/icons/work.png' },
        { name: 'Testimonials', href: '/projects', icon: '/icons/testimonial.png' },
        { name: 'Contact', href: '/contact', icon: '/icons/contact.png' }
    ];

    return (
        <div className="w-full flex justify-center md:justify-center justify-end pr-4 fixed top-4 z-50">
            <nav className="py-3 px-6 bg-opacity-10 backdrop-blur-md rounded-full border border-white border-opacity-20 shadow-lg">
                <div className="hidden md:flex space-x-10">
                    {navItems.map((item) => (
                        <Link key={item.name} href={item.href}>
                            <span className="text-white hover:text-gray-300 font-medium transition duration-150 ease-in-out cursor-pointer">
                                {item.name}
                            </span>
                        </Link>
                    ))}
                </div>

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

                <div className="flex md:hidden space-x-6">
                    {navItems.map((item) => (
                        <Link key={item.name} href={item.href}>
                            <div className="w-6 h-6 relative">
                                <Image
                                    src={item.icon}
                                    alt={item.name}
                                    fill
                                    className="object-contain hover:opacity-80 transition-opacity duration-150"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;