"use client";

import Image from 'next/image';
import Link from 'next/link';

interface Client {
  id: number;
  name: string;
  image: string;
  feedback: string;
  linkedin: string;
}

const clients: Client[] = [
  {
    id: 1,
    name: "Tanishq",
    image: "/testimonials/ankit.jpeg",
    feedback: "Customer oriented comprehensive service was provided.",
    linkedin: "https://linkedin.com/in/johndoe"
  },
  {
    id: 2,
    name: "Jatin Talreja",
    image: "/testimonials/parth.jpeg",
    feedback: "The team at Plasma is exceptional. They delivered beyond our expectations.",
    linkedin: "https://linkedin.com/in/janesmith"
  },
  {
    id: 3,
    name: "Mike Johnson",
    image: "/testimonials/parth.jpeg",
    feedback: "Working with Plasma has been a game-changer for our company.",
    linkedin: "https://linkedin.com/in/mikejohnson"
  },
  {
    id: 4,
    name: "Sarah Williams",
    image: "/testimonials/parth.jpeg",
    feedback: "Plasma's expertise and professionalism are unmatched.",
    linkedin: "https://linkedin.com/in/sarahwilliams"
  },
  {
    id: 5,
    name: "David Brown",
    image: "/testimonials/rahul.jpeg",
    feedback: "The results we've achieved with Plasma are outstanding.",
    linkedin: "https://linkedin.com/in/davidbrown"
  },
  {
    id: 6,
    name: "Emily Davis",
    image: "/testimonials/sanket.jpeg",
    feedback: "Plasma's team is incredibly talented and dedicated.",
    linkedin: "https://linkedin.com/in/emilydavis"
  }
];

const HappyClients = () => {
  return (
    <section className="h-[70vh] md:h-[60vh] bg-black overflow-hidden">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white/90 hover:text-white transition-colors duration-300 mb-8">
          Happy Clients
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
            {[...clients, ...clients].map((client, index) => (
              <Link
                key={`${index}-${client.id}`}
                href={client.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex flex-col items-center bg-transparent p-4 transition-transform duration-300 hover:scale-105 group"
                style={{
                  width: 'calc(50vw - 2rem)', // Mobile: 2 clients per screen
                }}
              >
                <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300">
                  <Image
                    src={client.image}
                    alt={client.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-white/90 group-hover:text-white text-center transition-colors duration-300">
                  {client.name}
                </h3>
                <p className="text-gray-400 text-sm md:text-base text-center group-hover:text-gray-300 transition-colors duration-300">
                  {client.feedback}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .flex-shrink-0 {
            width: calc(33.333vw - 2rem) !important; /* 3 clients per screen on desktop */
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

export default HappyClients;