import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="p-4">
      <ul className="flex space-x-4 justify-end p-10">
        <li>
          <Link href="/" legacyBehavior>
            <a className="text-gray-600 hover:text-gray-900">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/About" legacyBehavior>
            <a className="text-gray-600 hover:text-gray-900">About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
