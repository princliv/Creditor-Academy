import React from 'react';
import { motion } from 'framer-motion';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      
      {/* Left: Video with Motion */}
      <motion.div 
        className="about-video-container"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="video-wrapper">
          <iframe 
            width="100%" 
            height="315" 
            src="https://drive.google.com/file/d/1jUjnrebq_Z6jy64RWnIZqAHjD6JEfW9Y/preview" 
            allow="autoplay"
            title="Creditor Academy Video"
          ></iframe>
        </div>
      </motion.div>
      
      {/* Right: Text with Motion */}
      <motion.div 
        className="about-text-container"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="about-title">
          <span className="title-accent">About</span> 
          <span className="title-underline"></span>
        </h2>
        <p className="about-description">
          At Creditor Academy, we equip individuals and entrepreneurs with the knowledge to unlock the full power of the "Private" operating outside the public system, which means more control, more protection, and more opportunity. Our educational platform & Instructors empower you to structure your life and business for maximum privacy, asset protection, and true independence. This is where knowledge becomes sovereignty, because real freedom begins in the Private.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
