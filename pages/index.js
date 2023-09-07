import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Image from 'next/image';
import appImage from '../public/dual-mockups.png';
import appStoreIcon from '../public/download_on_app_store.svg'; 

// Text constants
const TAGLINE = 'Discover Instant Health Boosts.';
const APP_DESCRIPTION = `Nosh Diary will keep an eye on what you eat and generate insights. Just speak to it and tell it what you've eaten or jot it down - it's as simple as that.`;
const APP_STORE_URL = 'https://apps.apple.com/us/app/nosh-diary/id6448931123';
const APP_STORE_ALT = 'Download on App Store';

const Home = () => {
  return (
    <Layout
      title={TAGLINE} 
      description={APP_DESCRIPTION} 
      keywords="nutrition, health, diet, AI, goals"
    >
      <div className="relative container mx-auto md:px-0">
        <div className="flex flex-col md:flex-row-reverse items-center md:space-x-20 z-10">
          <div className="w-full md:w-1/2">
            <Image src={appImage} width={900} height={1950} className="md:-ml-20 md:min-w-max md:max-w-none" alt="Nosh Diary App" />
          </div>
          <div className="flex flex-col items-center md:items-start md:w-1/2 md:mt-10 md:mt-0 ">
            <div className="text-5xl md:text-7xl text-center md:text-left font-bold mb-6">
                {TAGLINE}
            </div>
            <p className="text-lg md:text-xl mb-6 text-center md:text-left">
              {APP_DESCRIPTION}
            </p>
            <Link href={APP_STORE_URL} legacyBehavior>
              <a aria-label={APP_STORE_ALT}>
                <Image src={appStoreIcon} alt={APP_STORE_ALT} width={140} height={42} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
