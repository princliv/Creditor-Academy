import React from 'react';
import { motion } from 'framer-motion';

const Senior_Testimonial = () => {
  const containerStyle = {
    background: 'linear-gradient(to bottom, #e0f2fe, #f8fafc)',
    padding: '100px 5%',
    fontFamily: "'Segoe UI', sans-serif",
    color: '#1e293b',
  };

  const testimonialGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '40px',
    maxWidth: '1200px',
    margin: 'auto',
  };

  const testimonialCard = {
    background: 'linear-gradient(to bottom right, #f0f9ff, #dbeafe)',
    borderRadius: '20px',
    padding: '30px',
    boxShadow: '0 10px 30px rgba(15, 23, 42, 0.12)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
  };

  const quoteIcon = {
    position: 'absolute',
    top: '-20px',
    left: '20px',
    width: '50px',
    height: '50px',
    fill: '#0ea5e9',
    opacity: 0.9,
  };

  const profileStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginTop: '20px',
  };

  const avatarStyle = {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid white',
  };

  const resultSection = {
    padding: '80px 10%',
    background: 'linear-gradient(to right, #f0f9ff, #e0f7fa)',
    fontFamily: "'Segoe UI', sans-serif",
    color: '#0f172a',
  };

  const resultList = {
    maxWidth: '1000px',
    margin: 'auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
  };

  const resultItem = {
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
  };

  const checkIconWrap = {
    background: '#0ea5e9',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  };

  const checkIcon = {
    fill: '#fff',
    width: '20px',
    height: '20px',
  };

  const testimonials = [
    {
      text: '“I secured $18,000 in Tier 2 credit — without using my SSN.”',
      name: 'Tyrell W., California',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      text: '“The website, structure, and binder made me bankable in 45 days.”',
      name: 'Lisa M., Texas',
      image: 'https://picsum.photos/id/64/100/100',
    },
    {
      text: '“No PG. No hard pull. Just results. This system WORKS.”',
      name: 'David R., Ohio',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
  ];

  const results = [
    'Have a private business foundation',
    'Own a bankable online presence',
    'Master the 5-Tier Credit System',
    'Secure your first funding lines',
    'Learn how to reinvest, stack, and scale',
  ];

  return (
    <>
      <section style={containerStyle}>
        <h2 style={{ textAlign: 'center', fontSize: '2.8em', marginBottom: '60px', color: '#0ea5e9' }}>
          <span style={{ color: 'rgb(0, 86, 179)' }}><strong>WHAT STUDENTS ARE SAYING</strong></span>
        </h2>
        <div style={testimonialGrid}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              style={{ ...testimonialCard, background: `linear-gradient(to bottom right, #e0f2fe, #dbeafe)` }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <svg viewBox="0 0 24 24" style={quoteIcon}>
                <path d="M9 11H7c0-2.8 1.2-4.2 4-4.9V4C6.3 4.7 4 7 4 11v6h5v-6zm10 0h-2c0-2.8 1.2-4.2 4-4.9V4c-4.7.7-7 3-7 7v6h5v-6z" />
              </svg>
              <p style={{ fontSize: '1.08rem', lineHeight: 1.6, marginTop: '30px', marginBottom: '30px' }}>{t.text}</p>
              <div style={profileStyle}>
                <img src={t.image} alt={`Photo of ${t.name}`} style={avatarStyle} />
                <p style={{ fontWeight: 600, color: '#0f172a', margin: 0 }}>— {t.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={resultSection}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '20px', color: '#0ea5e9' }}>
          <strong><span style={{ color: 'rgb(0, 86, 179)' }}>Final Result: Your Private Credit Engine</span></strong>
        </h2>
        <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#475569', maxWidth: '750px', margin: '0 auto 50px' }}>
          By the end of <strong>Unlimited Credit</strong>, you won’t just have knowledge — you’ll have the launchpad for your private financial freedom.
        </p>
        <div style={resultList}>
          {results.map((item, idx) => (
            <motion.div
              key={idx}
              style={resultItem}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div style={checkIconWrap}>
                <svg viewBox="0 0 24 24" style={checkIcon}>
                  <path d="M9 16.2 4.8 12l-1.4 1.4L9 19l12-12-1.4-1.4z" />
                </svg>
              </div>
              <p style={{ margin: 0, color: '#1e293b' }}>{item}</p>
            </motion.div>
          ))}
        </div>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#0f172a', fontWeight: 500, marginTop: '50px' }}>
          This isn’t a course. It’s your private business launchpad.
        </p>
      </section>
    </>
  );
};

export default Senior_Testimonial;
