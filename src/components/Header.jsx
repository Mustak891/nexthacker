import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaEnvelope
} from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Include categories and featured link
  const menuItems = [
    'Latest',
    'Tech',
    'Food',
    'Entertainment',
    'Health',
    'Money',
    'Home & Garden',
    'Deals',
    'Hacks',
    "#FEATURED: How to Browse the Dark Web"
  ];

  // Helper function to return the route for each link.
  const getRoute = (item) => {
    if (item.startsWith("#FEATURED")) {
      return "/featured";
    }
    return `/category/${encodeURIComponent(item)}`;
  };

  return (
    <header className="w-full bg-white shadow z-50">
      {/* Top Row */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center border-2 border-black px-3 py-1 space-x-1">
          <span className="font-bold text-green-600">NEXT</span>
          <span className="font-bold text-black">HACKER</span>
        </Link>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="#" aria-label="X" className="text-gray-700 hover:text-green-500 transition-colors">
            <FaTwitter size={20} />
          </Link>
          <Link to="#" aria-label="Instagram" className="text-gray-700 hover:text-green-500 transition-colors">
            <FaInstagram size={20} />
          </Link>
          <Link to="#" aria-label="Facebook" className="text-gray-700 hover:text-green-500 transition-colors">
            <FaFacebookF size={20} />
          </Link>
          <Link to="#" aria-label="Mail" className="text-gray-700 hover:text-green-500 transition-colors">
            <FaEnvelope size={20} />
          </Link>
        </div>

        {/* Mobile Icons */}
        <div className="flex items-center space-x-4 md:hidden">
          <Link to="#" aria-label="Mail" className="text-gray-700 hover:text-green-500 transition-colors">
            <FaEnvelope size={20} />
          </Link>
          <button onClick={() => setIsMenuOpen(true)} aria-label="Open Menu" className="text-gray-700 hover:text-green-500 transition-colors">
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:block border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-around">
          {menuItems.map((item) => (
            <Link
              key={item}
              to={getRoute(item)}
              className="text-gray-700 hover:text-green-500 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 ${isMenuOpen ? 'block' : 'hidden'}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>
      <div
        className={`fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-white z-50 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)} aria-label="Close Menu" className="text-gray-700 hover:text-green-500 transition-colors">
            <FaTimes size={24} />
          </button>
        </div>
        <div className="px-4 mb-4 relative">
          <FaSearch className="absolute top-1/2 left-6 transform -translate-y-1/2 text-gray-500" size={16} />
          <input
            type="text"
            placeholder="Search Lifehacker"
            className="w-full border rounded pl-10 pr-2 py-1 text-gray-700 focus:outline-none"
          />
        </div>
        <ul className="px-4 space-y-3">
          {menuItems.map((item) => (
            <li key={item}>
              <Link
                to={getRoute(item)}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-800 hover:text-green-500 transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <div className="absolute bottom-0 right-0 p-4 flex items-center space-x-4">
          <Link to="#" aria-label="X" className="text-gray-700 hover:text-green-500 transition-colors">
            <FaTwitter size={24} />
          </Link>
          <Link to="#" aria-label="Instagram" className="text-gray-700 hover:text-green-500 transition-colors">
            <FaInstagram size={24} />
          </Link>
          <Link to="#" aria-label="Facebook" className="text-gray-700 hover:text-green-500 transition-colors">
            <FaFacebookF size={24} />
          </Link>
          <Link to="#" aria-label="Mail" className="text-gray-700 hover:text-green-500 transition-colors">
            <FaEnvelope size={24} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
