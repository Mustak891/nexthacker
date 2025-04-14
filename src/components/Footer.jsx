import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa';

const Footer = () => {
  return (
    /* 
      Add margin-top (mt-10) so there's space between the main content 
      and the footer, then padding-top (pt-8) inside the footer.
    */
    <footer className="mt-10 bg-gray-100 border-t border-gray-200 text-gray-700 text-sm pt-8">
      {/* Top Section: Brand & Basic Info */}
      <div className="max-w-7xl mx-auto px-4 grid gap-8 md:grid-cols-3 md:gap-6">
        {/* Brand & Mission */}
        <div>
          <Link to="/" className="inline-flex items-center border-2 border-black px-2 py-1 space-x-1 mb-4">
            <span className="font-bold text-green-600 text-xl">NEXT</span>
            <span className="font-bold text-xl">HACKER</span>
          </Link>
          <p className="leading-relaxed">
            Lifehacker has been a go-to source of tech help and life advice since 2005. 
            Our mission is to deliver reliable tech help and credible, practical, 
            science-based advice to help you live better.
          </p>
        </div>

        {/* Category Links */}
        <div className="flex flex-col space-y-2">
          <span className="font-semibold text-gray-800">Categories</span>
          <Link to="/category/Latest" className="hover:text-green-600">Latest</Link>
          <Link to="/category/Tech" className="hover:text-green-600">Tech</Link>
          <Link to="/category/Entertainment" className="hover:text-green-600">Entertainment</Link>
          <Link to="/category/Food" className="hover:text-green-600">Food</Link>
          <Link to="/category/Health" className="hover:text-green-600">Health</Link>
          <Link to="/category/Money" className="hover:text-green-600">Money</Link>
          <Link to="/category/Home%20%26%20Garden" className="hover:text-green-600">Home & Garden</Link>
          <Link to="/category/Deals" className="hover:text-green-600">Deals</Link>
          <Link to="/category/Hacks" className="hover:text-green-600">Hacks</Link>
          <Link to="/featured" className="text-green-600 font-semibold hover:text-green-500">
            #FEATURED: How to Browse the Dark Web
          </Link>
        </div>

        {/* Additional Links / Social */}
        <div className="flex flex-col space-y-2">
          <span className="font-semibold text-gray-800">More</span>
          <Link to="#" className="hover:text-green-600">Our Mission</Link>
          <Link to="#" className="hover:text-green-600">Try Our Newsletter</Link>
          <div className="mt-2 flex space-x-4">
            <Link to="#" className="hover:text-green-600" aria-label="Twitter">
              <FaTwitter size={20} />
            </Link>
            <Link to="#" className="hover:text-green-600" aria-label="Facebook">
              <FaFacebookF size={20} />
            </Link>
            <Link to="#" className="hover:text-green-600" aria-label="Instagram">
              <FaInstagram size={20} />
            </Link>
            <Link to="#" className="hover:text-green-600" aria-label="YouTube">
              <FaYoutube size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section: Legal / Partners / Copyright */}
      <div className="max-w-7xl mx-auto px-4 mt-8 border-t border-gray-200 pt-6 text-xs text-gray-500">
        <p className="mb-4">
          © 2025 Ziff Davis, LLC, a Ziff Davis company. All rights reserved.
        </p>
        <p className="mb-4">
          Lifehacker is a registered trademark of Ziff Davis and may not be used by third parties without explicit permission.
          The display of third-party trademarks and trade names on this site does not necessarily indicate any affiliation or endorsement 
          of Lifehacker. If you click a link and buy a product or service, we may be paid a fee by that merchant.
        </p>
        {/* Partner / Sponsor Logos (with consistent image sizing) */}
        <div className="flex flex-wrap items-center space-x-6 space-y-2 mb-4">
          <img
            src="https://1000logos.net/wp-content/uploads/2021/05/IGN-Logo.png"
            alt="IGN"
            className="h-5 object-contain"
          />
          <img
            src="https://techstory.in/wp-content/uploads/2015/11/mashable.png"
            alt="Mashable"
            className="h-5 object-contain"
          />
          <img
            src="https://download.logo.wine/logo/PCMag/PCMag-Logo.wine.png"
            alt="PCMag"
            className="h-5 object-contain"
          />
          <img
            src="https://logodix.com/logo/1817507.png"
            alt="AskMen"
            className="h-5 object-contain"
          />
          <img
            src="https://th.bing.com/th/id/OIP.uOZFEAd9DSFMFTtg97NGCQHaCx?w=319&h=131&c=7&r=0&o=5&pid=1.7"
            alt="Ziff Davis"
            className="h-5 object-contain"
          />
        </div>

        {/* Additional Links */}
        <div className="flex flex-wrap items-center space-x-4">
          <Link to="#" className="hover:text-green-600">Privacy Policy</Link>
          <Link to="#" className="hover:text-green-600">Terms of Use</Link>
          <Link to="#" className="hover:text-green-600">Accessibility</Link>
          <Link to="#" className="hover:text-green-600">AdChoices</Link>
          <Link to="#" className="hover:text-green-600">Do Not Sell My Personal Info</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
