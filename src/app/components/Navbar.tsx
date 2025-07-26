import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-10 left-0 w-full z-50 flex items-center justify-between px-8 py-4 text-white" style={{top: '2vh'}}>
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <img src="/PlasmaName.png" alt="Logo" className="h-[44px] w-auto mr-2" style={{ maxWidth: '160px', height: '44px' }} />
      </Link>
      
      {/* Center Navigation Links */}
      <ul className="flex space-x-6 text-lg">
        <Link href="#About" className="hover:opacity-75 transition-opacity">About</Link>
        <Link href="/services" className="hover:opacity-75 transition-opacity">Services</Link>
        <Link href="/careers" className="hover:opacity-75 transition-opacity">Careers</Link>
        <Link href="/contact" className="hover:opacity-75 transition-opacity">Contact</Link>
      </ul>
      
      {/* Book a Call Button */}
      <button className="">
        Book a Call
      </button>
    </nav>
  );
}