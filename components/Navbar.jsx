import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-semibold">
          T20 WC Analysis
        </Link>
        <div className="space-x-4">
          <Link href="#criteria" className="text-gray-300 hover:text-white">
            Selection Criteria
          </Link>
          <Link href="#results" className="text-gray-300 hover:text-white">
            Power BI Results
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
