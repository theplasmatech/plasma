"use client";

import Image from 'next/image';
import Link from 'next/link';

interface OurDevelopers {
  id: number;
  name: string;
  image: string;
  feedback: string;
  linkedin: string;
}

const developers: OurDevelopers[] = [
  {
    id: 1,
    name: "Ankit",
    image: "/testimonials/ankit.jpeg",
    feedback: "DevOps",
    linkedin: "https://linkedin.com/in/johndoe"
  },
  {
    id: 2,
    name: "Sanket",
    image: "/testimonials/sanket.jpeg",
    feedback: "Full Stack",
    linkedin: "https://linkedin.com/in/janesmith"
  },
  {
    id: 3,
    name: "Parth",
    image: "/testimonials/parth.jpeg",
    feedback: "AI ML Integration",
    linkedin: "https://linkedin.com/in/mikejohnson"
  },
//   {
//     id: 4,
//     name: "Karan",
//     image: "/testimonials/parth.jpeg",
//     feedback: "UI/UX",
//     linkedin: "https://linkedin.com/in/sarahwilliams"
//   },
  {
    id: 5,
    name: "Rahul",
    image: "/testimonials/rahul.jpg",
    feedback: "Backend",
    linkedin: "https://linkedin.com/in/davidbrown"
  },
  {
    id: 6,
    name: "Sanket",
    image: "/testimonials/sanket2.jpeg",
    feedback: "Nothing",
    linkedin: "https://linkedin.com/in/emilydavis"
  }
];

const OurDevelopers = () => {
  return (
    <section className="h-[70vh] md:h-[60vh] bg-black overflow-hidden">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white/90 hover:text-white transition-colors duration-300 mb-8">
          We build innovation
        </h2>
        <div className="relative overflow-hidden flex items-center h-full">
          {/* Fade gradients */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          {/* Marquee container */}
          <div
            className="flex gap-8 animate-marquee hover:animate-none"
            style={{
              width: 'fit-content',
              animationDuration: '30s'
            }}
          >
            {[...developers, ...developers].map((developer, index) => (
              <Link
                key={`${index}-${developer.id}`}
                href={developer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex flex-col items-center bg-transparent p-4 transition-transform duration-300 hover:scale-105 group developer-card"
              >
                <div className="relative w-24 h-24 md:w-40 md:h-40 mb-4 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300">
                  <Image
                    src={developer.image}
                    alt={developer.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-white/90 group-hover:text-white text-center transition-colors duration-300">
                  {developer.name}
                </h3>
                <p className="text-gray-400 text-sm md:text-base text-center group-hover:text-gray-300 transition-colors duration-300">
                  {developer.feedback}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .developer-card {
            width: calc(25vw - 2rem) !important; /* 4 developers per screen */
          }
        }

        @media (max-width: 767px) {
          .developer-card {
            width: calc(50vw - 2rem) !important; /* 2 developers per screen */
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default OurDevelopers;
