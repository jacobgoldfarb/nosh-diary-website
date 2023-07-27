import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Image from 'next/image';
import appImage from '../public/nosh-diary-mockup-clay.png';
import appStoreIcon from '../public/download_on_app_store.svg'; 

// Text constants
const TAGLINE = 'Your health odyssey begins today. Try Nosh for free.';
const APP_DESCRIPTION = `With Nosh you can easily keep an eye on what you eat. Just tell it what you're having or jot it down in the journal - it's as simple as that. The app will track your macros and use AI to give you insights based on your fitness goals. It's a practical, user-friendly tool that helps you manage your nutrition effectively. No fuss, just you moving closer to your health goals, one day at a time.`;
const APP_STORE_URL = 'https://www.apple.com/app-store/';
const APP_STORE_ALT = 'Download on App Store';

const Home = () => {
  return (
    <Layout>
      <div className="relative container mx-auto md:px-0">
        <div className="flex flex-col md:flex-row-reverse items-center md:space-x-20 z-10">
          <div className="w-full md:w-1/2">
            <Image src={appImage} className="md:-ml-32 md:min-w-max" alt="Nosh Diary App" />
          </div>
          <div className="flex flex-col items-center md:items-start md:w-1/2 mt-10 md:mt-0 ">
            <div className="text-5xl md:text-7xl text-center md:text-left font-bold mb-6">
                {TAGLINE}
            </div>
            <p className="text-lg md:text-xl mb-6 text-center md:text-left">
              {APP_DESCRIPTION}
            </p>
            <Link href={APP_STORE_URL}>
              <Image src={appStoreIcon} alt={APP_STORE_ALT} width={140} height={42} />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
