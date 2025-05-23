import Image from 'next/image';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="relative bg-black">
      {/* Floating Card Section */}
      <div className="sticky top-1/2 -translate-y-1/2 z-10 transform hover:scale-105 transition-transform duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-lg shadow-2xl overflow-hidden max-w-md mx-auto bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm">
            <Image
              src="/card.png"
              alt="Plasma Business Card"
              width={600}
              height={100}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Main Footer Section */}
      <footer className="relative z-20 min-h-[120vh] bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Plasma</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building the future of decentralized technology. We are not just coding, we are crafting digital experiences.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-purple-400">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-purple-400 rounded-full mr-2 group-hover:w-2 transition-all duration-300"></span>
                  Our Story
                </a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-purple-400 rounded-full mr-2 group-hover:w-2 transition-all duration-300"></span>
                  Team
                </a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-purple-400 rounded-full mr-2 group-hover:w-2 transition-all duration-300"></span>
                  Careers
                </a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-purple-400">Resources</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-purple-400 rounded-full mr-2 group-hover:w-2 transition-all duration-300"></span>
                  Documentation
                </a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-purple-400 rounded-full mr-2 group-hover:w-2 transition-all duration-300"></span>
                  Blog
                </a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-purple-400 rounded-full mr-2 group-hover:w-2 transition-all duration-300"></span>
                  API Reference
                </a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-purple-400">Stay Updated</h3>
              <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest updates.</p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400 text-white"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Divider */}
          <div className="my-16 border-t border-gray-800 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border-2 border-purple-400 animate-spin-slow"></div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="text-sm font-semibold text-purple-400 mb-2">Contact</h4>
              <p className="text-gray-400 text-sm">hello@plasma.com</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-purple-400 mb-2">Location</h4>
              <p className="text-gray-400 text-sm">San Francisco, CA</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-purple-400 mb-2">Legal</h4>
              <p className="text-gray-400 text-sm">Privacy Policy • Terms of Service</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Plasma. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
