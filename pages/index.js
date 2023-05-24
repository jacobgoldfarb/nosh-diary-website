import React from 'react';
import Layout from './Layout';
import Image from 'next/image';
import appImage from '../public/Nosh_Diary_dashboard_mock.png';

const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto py-10">
        <div className="flex justify-center items-center">
          <div className="flex flex-col max-w-md">
            <h1 className="text-4xl font-bold mb-6">Welcome to Nosh Diary</h1>
            <h2 className="text-2xl font-semibold mb-4">Unlock the Power of AI for Personalized Nutrition</h2>
            <p className="text-lg mb-6">
              Redefine the way you nourish your body and mind with Nosh Diary's AI-powered nutrition app.
            </p>
            <p className="text-lg">
              Experience the future of nutrition with our cutting-edge technology that combines artificial intelligence and personalized insights. Tailored to your unique needs and goals, our app provides you with customized nutrition plans, intelligent recommendations, and real-time tracking to help you achieve optimal health and well-being.
            </p>
          </div>
          <div className="mx-auto rounded-lg w-96">
            <Image src={appImage} alt="Nosh Diary App" width={500} height={300} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
