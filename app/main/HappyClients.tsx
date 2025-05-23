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
    name: "John Doe",
    image: "/testimonials/ankit.jpeg",
    feedback: "Plasma has transformed our business with their innovative solutions.",
    linkedin: "https://linkedin.com/in/johndoe"
  },
  {
    id: 2,
    name: "Jane Smith",
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
    <section className="py-16 bg-black overflow-hidden">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-white/90 hover:text-white transition-colors duration-300">Happy Clients</h2>
        <div className="relative overflow-hidden">
          <div className="marquee-container">
            <div className="marquee-content">
              {/* First set of clients */}
              {clients.map((client) => (
                <Link
                  key={client.id}
                  href={client.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center min-w-[250px] md:min-w-[300px] p-4 hover:scale-105 transition-all duration-300 flex-shrink-0 group"
                >
                  <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300">
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white/90 group-hover:text-white transition-colors duration-300">{client.name}</h3>
                  <p className="text-gray-400 text-center text-sm md:text-base group-hover:text-gray-300 transition-colors duration-300">
                    {client.feedback}
                  </p>
                </Link>
              ))}
              {/* Second set of clients for seamless loop */}
              {clients.map((client) => (
                <Link
                  key={`clone-${client.id}`}
                  href={client.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center min-w-[250px] md:min-w-[300px] p-4 hover:scale-105 transition-all duration-300 flex-shrink-0 group"
                >
                  <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300">
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white/90 group-hover:text-white transition-colors duration-300">{client.name}</h3>
                  <p className="text-gray-400 text-center text-sm md:text-base group-hover:text-gray-300 transition-colors duration-300">
                    {client.feedback}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
          position: relative;
        }

        .marquee-container::before,
        .marquee-container::after {
          content: '';
          position: absolute;
          top: 0;
          width: 100px;
          height: 100%;
          z-index: 2;
        }

        .marquee-container::before {
          left: 0;
          background: linear-gradient(to right, black, transparent);
        }

        .marquee-container::after {
          right: 0;
          background: linear-gradient(to left, black, transparent);
        }

        .marquee-content {
          display: flex;
          animation: marquee 30s linear infinite;
          will-change: transform;
        }

        .marquee-content:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .marquee-content {
            animation-duration: 25s;
          }
        }
      `}</style>
    </section>
  );
};

export default HappyClients;