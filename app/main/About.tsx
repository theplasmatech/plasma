"use client"
import Image from 'next/image';
import { useState } from 'react';

// ClientShowcase component displays a grid of client logos/rectangles
const ClientShowcase: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const images = [
        { normal: '/about/sql.png', hover: '/about/sql.png' },
        { normal: '/about/python.png', hover: '/about/python.png' },
        { normal: '/about/c.png', hover: '/about/c.png' },
        { normal: '/about/canva.png', hover: '/about/canva.png' },
        { normal: '/about/cpp.png', hover: '/about/cpp.png' },
        { normal: '/about/html.png', hover: '/about/html.png' },
        { normal: '/about/css.png', hover: '/about/css.png' },
        { normal: '/about/js.png', hover: '/about/js.png' },
        { normal: '/about/figma.png', hover: '/about/figma.png' },
        { normal: '/about/node.png', hover: '/about/node.png' },
        { normal: '/about/express.png', hover: '/about/express.png' },
        { normal: '/about/flutter.png', hover: '/about/flutter.png' },
        { normal: '/about/firebase.png', hover: '/about/firebase.png' },
        { normal: '/about/git.png', hover: '/about/git.png' },
        { normal: '/about/linux.png', hover: '/about/linux.png' },
        { normal: '/about/gsap.png', hover: '/about/gsap.png' },
        { normal: '/about/java.png', hover: '/about/java.png' },
        { normal: '/about/kali-linux.png', hover: '/about/kali-linux.png' },
        { normal: '/about/mysql.png', hover: '/about/mysql.png' },
        { normal: '/about/mongodb.png', hover: '/about/mongodb.png' },
        { normal: '/about/tailwind.png', hover: '/about/tailwind.png' },
        { normal: '/about/react.png', hover: '/about/react.png' },
        { normal: '/about/hardware.png', hover: '/about/hardware.png' },
        { normal: '/about/php.png', hover: '/about/php.png' },
        // ...and so on for all 24 rectangles
    ];


    // Generate 24 rectangles for the grid
    const renderRectangles = () => {
        return images.map((img, index) => (
            <div
                key={index}
                className={`relative border border-gray-600 flex items-center justify-center p-6 h-32 transition-all hover:border-white group overflow-hidden ${
                    hoveredIndex !== null && hoveredIndex !== index ? 'opacity-30' : 'opacity-100'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gray-400 opacity-60"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gray-400 opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gray-400 opacity-60"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gray-400 opacity-60"></div>

                {/* Images */}
                <div className="w-full h-full flex items-center justify-center relative">
                    {/* Normal image */}
                    <Image
                        src={img.normal}
                        alt={`Client ${index + 1}`}
                        fill
                        className="object-contain absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                    />

                    {/* Hover image */}
                    <Image
                        src={img.hover}
                        alt={`Client ${index + 1} hover`}
                        fill
                        className="object-contain absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    />

                </div>
            </div>
        ));
    };


    return (
        <div className="min-h-screen w-screen bg-black text-white flex flex-col">
            {/* Header text */}
            <div className="pt-16 pb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold">We Build Innovations</h1>
            </div>

            {/* Rectangle grid */}
            <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 md:px-8 lg:px-12 pb-12`}>
                {renderRectangles()}
            </div>
        </div>
    );
};

export default ClientShowcase;