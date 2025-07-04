import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-3 bg-gray-900 shadow-md text-white">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <Image
          src="/squareImage.jpeg"
          width={50}
          height={50}
          alt="Logo"
          className="rounded-full"
        />
        <span className="text-3xl font-mono tracking-wide">
          {process.env.SQLname || "SQL Explorer"}
        </span>
      </div>

      {/* Navigation Links */}
      <div className="space-x-6 text-lg">
        <Link href="/" className="hover:text-gray-300 transition duration-200">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-300 transition duration-200">
          About
        </Link>
        <Link href="/contact" className="hover:text-gray-300 transition duration-200">
          Contact
        </Link>
      </div>
    </nav>
  );
}
