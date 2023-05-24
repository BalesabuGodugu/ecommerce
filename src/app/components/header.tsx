import React from 'react';
import '../styles/tailwind.css'

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="text-xl font-bold">My Website</div>
        <ul className="hidden md:flex md:space-x-4">
          <li>
            <a className="hover:text-gray-300" href="/">Home</a>
          </li>
          <li>
            <a className="hover:text-gray-300" href="/courses">Courses</a>
          </li>
          <li>
            <a className="hover:text-gray-300" href="/about">About Us</a>
          </li>
          <li>
            <a className="hover:text-gray-300" href="/contact">Contact Us</a>
          </li>
          <li>
            <a className="hover:text-gray-300" href="/login">Login</a>
          </li>
        </ul>
        <div className="md:hidden">
          {/* Add mobile menu button or icon */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
