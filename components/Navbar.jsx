import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logoImage from '../public/nosh-diary-white-logo-white.png';

const Navbar = () => {
  const navbarItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="px-10 py-4 z-20">
      <ul className="flex items-center space-x-4 text-md md:text-xl">
        <div className="ml-30 rounded-lg w-100">
          <Link href={'/'}>
            <Image src={logoImage} className="min-w-60" alt="NoshDiary" width={300} height={200}/>
          </Link>
        </div>
        <div className="flex">
          {navbarItems.map((item, index) => (
            <li key={index} className="px-6">
              <Link href={item.path} legacyBehavior>
                <a className="text-white hover:text-gray-900">{item.name}</a>
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;