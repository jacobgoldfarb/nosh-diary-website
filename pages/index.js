import React from 'react';
import Link from 'next/link';
import Layout from '../src/Layout';
import Image from 'next/image';
import appImage from '../public/nosh-diary-mockup.png';
import appStoreIcon from '../public/download_on_app_store.svg'; // import the SVG

const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="flex flex-col max-w-lg">
            <div className="text-8xl text-left font-bold text-tagline">
                Discover self-gratification in your health through Nosh.
            </div>
            <p className="text-xl mb-6 mt-16">
            {"With Nosh you can easily keep an eye on what you eat. Just tell it what you're having or jot it down in the journal - it's as simple as that. The app will track your macros and use AI to give you insights based on your fitness goals. It's a practical, user-friendly tool that helps you manage your nutrition effectively. No fuss, just you moving closer to your health goals, one day at a time."}
            </p>
            <Link href={'https://www.apple.com/app-store/'}>
              <Image src={appStoreIcon} alt="Download on App Store" width={200} height={60} /> {/* Render the SVG */}
            </Link>
          </div>
          <div className="rounded-lg w-100">
            <Image src={appImage} alt="Nosh Diary App" width={1400} height={800} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
