import React from 'react';
import { FaGamepad, FaMedal, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';
import GBanner from '../assets/game_banner.png';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const GameBanner = () => {
  return (
    <section>
      {/* ✅ Gamified Sovereignty Academy Section */}
      <motion.section
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        style={{
          padding: '80px 6%',
          background: 'linear-gradient(to bottom right, #eef5ff, #ffffff)',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#0056b3', fontWeight: 'bold', marginBottom: '10px' }}>
            <span style={{ color: 'rgb(35, 111, 161)' }}>
              The First-Ever Gamified Sovereignty Academy
            </span>
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#000',
              maxWidth: '750px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}
          >
            No more boring slideshows — just real simulation games, XP, documents,
            badges, and fun learning through action!
          </p>
        </div>

        {/* Grid Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            marginBottom: '60px',
          }}
        >
          {[
            {
              title: 'Real Simulation Games',
              desc: 'Experience learning by playing with engaging, real-world legal scenarios.',
              icon: <FaGamepad size={40} color="#0056b3" />,
            },
            {
              title: 'Earn XP & Unlock Badges',
              desc: 'Answer questions to unlock badges, contracts, docs & exclusive templates.',
              icon: <FaMedal size={40} color="#0056b3" />,
            },
            {
              title: 'Interactive Experience',
              desc: 'Engage with sound, effects, leaderboards, and multiplayer challenges.',
              icon: <FaUsers size={40} color="#0056b3" />,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              style={{
                background: '#fff',
                padding: '25px',
                borderRadius: '14px',
                boxShadow: '0 6px 18px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                textAlign: 'center',
              }}
              whileHover={{ y: -5, boxShadow: '0 12px 24px rgba(0,0,0,0.08)' }}
            >
              <div style={{ marginBottom: '15px' }}>{item.icon}</div>
              <h3 style={{ color: '#0056b3', fontSize: '1.2rem', marginBottom: '10px' }}>{item.title}</h3>
              <p style={{ color: '#000', fontSize: '0.95rem' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ✅ Game of the Month */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        style={{
          textAlign: 'center',
          fontFamily: 'Poppins, sans-serif',
          marginBottom: '20px'
        }}
      >
        <h2 style={{ color: '#0056b3', fontSize: '2rem', marginBottom: '10px' }}>
          <strong>
            <span style={{ color: 'rgb(0, 0, 0)' }}>Game of the Month:</span>{' '}
            <span style={{ color: 'rgb(35, 111, 161)' }}>Creditor Football</span>
          </strong>
        </h2>
        <p style={{ color: 'rgb(126, 140, 141)', fontSize: '1rem' }}>
          Play your way to private power with football-themed quizzes and XP boosts.
        </p>
      </motion.div>

      {/* ✅ Hero Promo */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        style={{
          position: 'relative',
          background: `url(${GBanner}) center center / cover no-repeat`,
          padding: '100px 5%',
          fontFamily: 'Poppins, sans-serif',
          color: 'white',
          textAlign: 'left',
          overflow: 'hidden',
          boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
        }}
      >
        {/* Left Dots */}
        <div style={{ position: 'absolute', top: '40px', left: '30px', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 8px)', gap: '8px' }}>
            {[...Array(4)].map((_, idx) => (
              <div key={`left-dot-${idx}`} style={{ width: '8px', height: '8px', background: '#a8b1c1', borderRadius: '50%' }} />
            ))}
          </div>
        </div>

        {/* Right Dots */}
        <div style={{ position: 'absolute', top: '40px', right: '20px', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 8px)', gap: '8px' }}>
            {[...Array(6)].map((_, idx) => (
              <div key={`right-dot-${idx}`} style={{ width: '8px', height: '8px', background: '#00baff', borderRadius: '50%' }} />
            ))}
          </div>
        </div>

        {/* Overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%', height: '100%',
          background: 'linear-gradient(to right, rgba(10,20,40,0.88), rgba(10,20,40,0.65), rgba(10,20,40,0.3))',
          zIndex: 1,
        }} />

        {/* Text Content */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '600px' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '15px' }}>
            CREDITOR<br />FOOTBALL
          </h4>
          <h2 style={{ fontSize: '3.2rem', fontWeight: 900, lineHeight: '1.1', marginBottom: '25px' }}>
            <span style={{ color: '#00baff' }}>PLAY.</span><br />
            <span style={{ color: '#ffffff' }}>LEARN.</span><br />
            <span style={{ color: '#00baff' }}>POWER UP.</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#e2e8f0', marginBottom: '40px' }}>
            Master private concepts through the excitement of football. Build your private
            literacy while having fun in this immersive learning experience.
          </p>
          <a href="#"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'linear-gradient(to right, #00baff, #007bff)',
              padding: '12px 24px',
              fontSize: '1rem',
              fontWeight: 600,
              color: 'white',
              borderRadius: '50px',
              textDecoration: 'none',
              transition: 'transform 0.3s ease',
            }}>
            <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Play
          </a>
        </div>
      </motion.div>

      {/* ✅ Feature Buttons */}
      <motion.section
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        style={{
          padding: '20px 6%',
          background: 'linear-gradient(to bottom right, #eef5ff, #ffffff)',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          {[
            '2D Interactive Field',
            'Football + Law Quizzes',
            'XP System & Leaderboard',
            'Sound & Effects',
            'Solo or Multiplayer',
            'Monthly Updates',
          ].map((text, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{
                padding: '10px 18px',
                background: '#dbeeff',
                color: '#0056b3',
                borderRadius: '25px',
                fontSize: '0.95rem',
              }}
            >
              {text}
            </motion.div>
          ))}
        </div>
      </motion.section>
    </section>
  );
};

export default GameBanner;
