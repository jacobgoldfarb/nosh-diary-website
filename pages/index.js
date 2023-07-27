import React from 'react';
import Link from 'next/link';
import Layout from '../src/Layout';
import Image from 'next/image';
import appImage from '../public/nosh-diary-mockup.png';
import appStoreIcon from '../public/download_on_app_store.svg'; // import the SVG

const Home = () => {
  return (
    <Layout>
      <div className="container px-4 mx-auto md:px-0">
        <div className="flex flex-col-reverse md:flex-row items-center md:space-x-10">
          <div className="flex flex-col items-center md:items-start md:w-1/2">
            <div className="text-4xl md:text-tagline text-8xl text-center md:text-left font-bold mb-6">
                Your health odyssey begins today. Try Nosh for free.
            </div>
            <p className="text-lg md:text-xl mb-6 text-center md:text-left">
            {"With Nosh you can easily keep an eye on what you eat. Just tell it what you're having or jot it down in the journal - it's as simple as that. The app will track your macros and use AI to give you insights based on your fitness goals. It's a practical, user-friendly tool that helps you manage your nutrition effectively. No fuss, just you moving closer to your health goals, one day at a time."}
            </p>
            <Link href={'https://www.apple.com/app-store/'}>
              <Image src={appStoreIcon} alt="Download on App Store" width={140} height={42} /> {/* Render the SVG */}
            </Link>
          </div>
          <div className="-mt-8 md:mt-0 w-full md:w-1/2">
            <Image src={appImage} alt="Nosh Diary App" width={800} height={342}  />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
