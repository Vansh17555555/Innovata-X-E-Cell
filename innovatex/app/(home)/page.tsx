"use client"
import  { useState,  } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import backgroundImage from "/assets/Default_tech_startup_black_themed_background_0(1).jpg";
import { TypewriterEffectDemo } from '@/components/GridBackGround';
import AboutUs from '@/components/AboutUs';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
import ContactUs from '@/components/Contact';

const TypewriterEffect = () => {
  //const [showFirstTypewriter, setShowFirstTypewriter] = useState(true);
  // eslint-disable-next-line no-unused-vars
  
  const [showSecondTypewriter, setShowSecondTypewriter] = useState(true);
  //setShowSecondTypewriter(true)
 

  return (
    <div>
      <TypewriterEffectDemo/>
      <AboutUs/>
      <Team/>
      <Footer/>
    </div>

  );
};

export default TypewriterEffect;