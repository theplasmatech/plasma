"use client"

import React from 'react';
import { Globe, Smartphone, Brain, Palette, Cpu, Code, Server, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'web',
      title: 'Web Development',
      description: 'Custom web applications, e-commerce solutions, and progressive web apps built with cutting-edge technologies.',
      icon: <Globe className="w-8 h-8 text-white/90" />,
      span: 'md:col-span-2',
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
      icon: <Smartphone className="w-8 h-8 text-white/90" />,
      span: '',
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by advanced AI algorithms, machine learning models, and predictive analytics.',
      icon: <Brain className="w-8 h-8 text-white/90" />,
      span: 'md:col-span-2',
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      description: 'User-centered design solutions that combine aesthetics with functionality for optimal user experiences.',
      icon: <Palette className="w-8 h-8 text-white/90" />,
      span: '',
    },
    {
      id: 'iot',
      title: 'IoT Solutions',
      description: 'Connected device ecosystems, smart home solutions, and industrial IoT implementations.',
      icon: <Cpu className="w-8 h-8 text-white/90" />,
      span: '',
    },
    {
      id: 'cloud',
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure, serverless architectures, and cloud migration solutions.',
      icon: <Server className="w-8 h-8 text-white/90" />,
      span: '',
    },
    {
      id: 'devops',
      title: 'DevOps',
      description: 'Automated deployment pipelines, containerization, and continuous integration/delivery solutions.',
      icon: <Zap className="w-8 h-8 text-white/90" />,
      span: '',
    }
  ];

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLnJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2Utb3BhY2l0eT0iLjAyIiBzdHJva2U9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTAgMzBoMzB2MzBIMHoiIHN0cm9rZS1vcGFjaXR5PSIuMDIiIHN0cm9rZT0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDIiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMCAwaDMwdjMwSDB6IiBzdHJva2Utb3BhY2l0eT0iLjAyIiBzdHJva2U9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTMwIDBoMzB2MzBIMzB6IiBzdHJva2Utb3BhY2l0eT0iLjAyIiBzdHJva2U9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==')] opacity-5"></div>

      <div className="container mx-auto relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-block mb-3 px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4 text-white/90" />
              <span className="text-sm font-medium text-white/90">Comprehensive Software Solutions</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/60">Our Services</h2>
          <p className="text-xl text-white/70 leading-relaxed">
            Empowering businesses with cutting-edge technology solutions across multiple domains.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`${service.span} group relative rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-500 ease-out hover:scale-[1.02] hover:z-20`}
              >
                {/* Glass effect background */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-md"></div>
                
                {/* Border effects */}
                <div className="absolute inset-[1px] rounded-2xl border border-white/10"></div>
                <div className="absolute inset-[2px] rounded-2xl border border-white/5"></div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Card content */}
                <div className="relative z-10 p-8 md:p-10 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 group-hover:bg-white/20 transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-white/90 transition-colors duration-300">{service.title}</h3>
                  <p className="text-white/70 group-hover:text-white/80 transition-colors duration-300">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default Services;