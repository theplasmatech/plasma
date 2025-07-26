import Link from 'next/link';

export default function Hero() {
    return (
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/plasma.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Center Text */}
        <div className="relative z-20 flex items-center justify-center h-full text-center px-4">
          <div className="flex flex-col items-center justify-center w-full h-full">
            <h1 className="font-semibold text-white text-5xl md:text-7xl mb-4 leading-none tracking-normal text-center" style={{ fontWeight: 600, fontStyle: 'normal', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center', verticalAlign: 'middle' }}>
              Empowering Your Business with Innovative Software Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white text-center">
              Custom-built digital solutions designed to scale your business, enhance user experience, and future-proof your tech
            </p>
          </div>
        </div>
      </div>
    );
  }