import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import website from '../assets/Website_banner_2(2).jpg';
import privateMerchant from '../assets/merchant (1).jpg';
import GameBanner from '../components/GameBanner.jsx';
import AboutSection from "../components/AboutSection";
import MasterclassBanner from '../components/MasterclassBanner';
import CoursesSection from '../components/CoursesSection';
import HeroCarousel from '../components/HeroCarousel.jsx';
import StatHighlights from '../components/stathighlight.jsx';
import ContactSection from '../components/ContactSection.jsx';


const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroCarousel />
      <StatHighlights />
      <AboutSection /> 
      <MasterclassBanner />
      <CoursesSection />
      <GameBanner />

        {/* Merged Remedy Section */}
        <section
          style={{
            width: '100%',
            margin: 0,
            padding: 0,
            background: 'white',
            fontFamily: 'Poppins, sans-serif',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '0 1rem',
              boxSizing: 'border-box',
            }}
          >
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
              style={{ width: '100%', overflow: 'hidden' }}
            >
              <img
                src="https://creditoracademy.com/wp-content/uploads/2025/05/i-want-remedy-now-.png"
                alt="Book a demo"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  border: 'none',
                  borderRadius: '10px',
                }}
              />
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
              style={{
                textAlign: 'center',
                padding: '30px 10px',
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              <p
                style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  lineHeight: 1.5,
                  marginBottom: '30px',
                  textAlign: 'center',
                  background: 'linear-gradient(to right, #1a66d9, #5fa8d3)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  animation: 'fadeSlideIn 1s ease-out forwards',
                  letterSpacing: '0.5px',
                }}
              >
                Book a session by clicking on the button
              </p>
              

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={() => navigate('/remedy')}
                style={{
                  padding: '14px 28px',
                  fontSize: '1rem',
                  color: 'white',
                  backgroundColor: '#5dade2',
                  border: 'none',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section style={{ padding: '60px 5%', background: '#f5f5f5', fontFamily: 'Poppins, sans-serif', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: '1200px', margin: 'auto', display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', boxSizing: 'border-box' }}>

            {/* Website Creation Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              whileHover={{ scale: 1.03, boxShadow: '0 12px 24px rgba(0,0,0,0.15)' }}
              style={{ flex: '1 1 300px', background: '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 6px 12px rgba(0,0,0,0.1)' }}
            >
              <div>
                <img src={website} alt="Website Creation Banner" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '10px' }}>Website Creation</h2>
                <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
                  Create sleek, responsive and stunning professional websites effortlessly—no coding needed. Empower your brand with a website that speaks volumes.!
                </p>
                <motion.button
                  onClick={() => navigate('/website')}
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.15)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  style={{ padding: '12px 24px', background: '#5DADE2', color: '#fff', border: 'none', borderRadius: '25px', cursor: 'pointer' }}
                >
                  Explore Now
                </motion.button>
              </div>
            </motion.div>

            {/* Live Class Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              whileHover={{ scale: 1.03, boxShadow: '0 12px 24px rgba(0,0,0,0.15)' }}
              style={{ flex: '1 1 300px', background: '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 6px 12px rgba(0,0,0,0.1)' }}
            >
              <div style={{ position: 'relative' }}>
                <img src="https://creditoracademy.com/wp-content/uploads/2025/04/Youtube-live-banner.png" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(255,255,255,0.8)', padding: '5px', borderRadius: '50%' }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YouTube" style={{ width: '40px', height: 'auto' }} />
                </div>
              </div>
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '10px' }}>Live Class</h2>
                <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
                  Join our interactive live classes every Tuesday & Thursday. Enjoy insights, Q&A and Live sessions featuring deep insights, and hands-on learning.!
                </p>
                <motion.button
                  onClick={() => navigate('/liveclass')}
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.15)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  style={{ padding: '12px 24px', background: '#ff0000', color: '#fff', border: 'none', borderRadius: '25px', cursor: 'pointer' }}
                >
                  Go to Live Class
                </motion.button>
              </div>
            </motion.div>

            {/* Private Merchant Processing Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              whileHover={{ scale: 1.03, boxShadow: '0 12px 24px rgba(0,0,0,0.15)' }}
              style={{ flex: '1 1 300px', background: '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 6px 12px rgba(0,0,0,0.1)' }}
            >
              <div>
                <img src={privateMerchant} alt="Private Merchant Processing Banner" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '10px' }}>Private Merchant Processing</h2>
                <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
                  Discover tailored payment solutions designed to empower your business with customized, seamless payment solutions.
                </p>
                <motion.button
                  onClick={() => navigate('/pmp')}
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.15)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  style={{ padding: '12px 24px', background: '#5DADE2', color: '#fff', border: 'none', borderRadius: '25px', cursor: 'pointer' }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>

          </div>
        </section>
      {/*<StatsSection />*/}
      {/* <Mascot/> */}
      
    </>
  );
};

export default LandingPage;
