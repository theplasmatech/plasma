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
        
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
        
        {/* Navbar */}
        <nav className="absolute top-6 left-0 w-full z-20 flex items-center justify-between px-8 py-4 text-white">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/plasma_logo.png" alt="Logo" className="h-[44px] w-auto mr-2" style={{ maxWidth: '160px', height: '44px' }} />
          </div>
          
          {/* Center Navigation Links */}
          <ul className="flex space-x-6 text-lg">
            <li><a href="#home" className="hover:opacity-75 transition-opacity">Home</a></li>
            <li><a href="#about" className="hover:opacity-75 transition-opacity">About</a></li>
            <li><a href="#service" className="hover:opacity-75 transition-opacity">Service</a></li>
            <li><a href="#contact" className="hover:opacity-75 transition-opacity">Contact</a></li>
          </ul>
          
          {/* Book a Call Button */}
          <button className="bg-white border-2 px-6 py-2 rounded-md text-lg font-semibold text-black hover:bg-gray-100 transition-all duration-300">
            Book a Call
          </button>
        </nav>
        
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