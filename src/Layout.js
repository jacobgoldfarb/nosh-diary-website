import React from 'react';
import Navbar from './Navbar';
import { useSpring, animated } from 'react-spring';
import Footer from './Footer';

const Layout = ({ children }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 } // configure the duration as you want
  });

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <div 
        className="absolute top-0 left-0 w-full h-2/5 transform -rotate-6 origin-bottom-left scale-150 bg-gradient-to-r from-teal-400 via-purple-500 to-blue-600 z-0"
      />
      <Navbar />
      <main className="mt-10 ml-20 flex flex-col items-center flex-grow relative z-10">
        <animated.div style={props}>{children}</animated.div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
