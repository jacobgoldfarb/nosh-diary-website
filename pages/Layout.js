import React from 'react';
import Navbar from './Navbar';
import { useSpring, animated } from 'react-spring';

const Layout = ({ children }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 } // configure the duration as you want
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-grow">
        <animated.div style={props}>{children}</animated.div>
      </main>
    </div>
  );
};

export default Layout;
