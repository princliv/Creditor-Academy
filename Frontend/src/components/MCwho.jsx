import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import anyone from '../assets/anyone.jpg';
import businessOwner from '../assets/businessOwners.jpg';
import entrepreneurs from '../assets/entrepreneurs.jpg';
import sovereignty from '../assets/sovereignty.jpg';
import you from '../assets/you.jpg';
import MasterTnc from '../page/MasterTnc';
import { useNavigate } from 'react-router-dom';

export const MCwho = () => {
  const navigate = useNavigate();
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cards = [
    { img: sovereignty, text: 'Sovereignty Seekers ready to go private — the right way' },
    { img: entrepreneurs, text: 'Entrepreneurs looking to operate outside the system' },
    { img: businessOwner, text: 'Business Owners needing trust-backed websites, EINs, and asset control' },
    { img: anyone, text: 'Anyone serious about credit power and private wealth' },
    { img: you, text: 'You — if you’re done with control and ready for ownership' },
  ];

  const testimonials = [
    {
      name: 'Derrick M., Georgia',
      quote: 'I secured $22,000 in business credit within 3 months.',
      img: 'https://randomuser.me/api/portraits/men/44.jpg'
    },
    {
      name: 'Tina L., Texas',
      quote: 'I finally understood trusts. My private site launched without setup fees.',
      img: 'https://randomuser.me/api/portraits/women/32.jpg'
    },
    {
      name: 'Justin A., Nevada',
      quote: 'I unlocked 5 courses just from playing. This is a training ground, not a school.',
      img: 'https://randomuser.me/api/portraits/men/75.jpg'
    }
  ];

  return (
    <>
      {/* WHO IS THIS FOR */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: false, amount: 0.2 }}
        style={{
          padding: '50px 5%',
          background: '#0f172a',
          fontFamily: "'Poppins', sans-serif",
          color: 'white'
        }}
      >
        <motion.h2
          variants={fadeUp}
          style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '40px',
            color: '#00b4d8'
          }}
        >
          <strong>Who Is This For?</strong>
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '25px',
            maxWidth: '1100px',
            margin: '0 auto'
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{
                scale: 1.05,
                rotateY: 4,
                boxShadow: '0 10px 30px rgba(0,255,255,0.15)'
              }}
              transition={{ type: 'spring', stiffness: 200 }}
              style={{
                background: '#1e293b',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                cursor: 'pointer'
              }}
            >
              <img src={card.img} alt={`card-${i}`} style={{ width: '100%', borderRadius: '8px' }} />
              <p style={{ fontSize: '1.1rem', color: '#e2e8f0', marginTop: '15px' }}>{card.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* TESTIMONIALS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        viewport={{ once: false, amount: 0.2 }}
        style={{ background: '#e6f0ff', padding: '80px 5%', textAlign: 'center' }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ fontSize: '2.5rem', marginBottom: '40px', color: '#2c3e50' }}
        >
          <strong>What Our Members Say</strong>
        </motion.h2>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'center'
          }}
        >
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
              whileHover={{
                scale: 1.06,
                rotate: 1,
                boxShadow: '0 12px 25px rgba(52, 152, 219, 0.3)'
              }}
              style={{
                background: 'white',
                padding: '30px',
                borderRadius: '15px',
                maxWidth: '320px',
                border: '1px solid rgba(52, 152, 219, 0.2)',
                boxShadow: '0 5px 15px rgba(52, 152, 219, 0.1)',
                transition: 'all 0.3s ease-in-out',
                cursor: 'default'
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  margin: '0 auto 20px',
                  border: '3px solid #3498db'
                }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ position: 'relative', marginBottom: '20px' }}>
                <FaQuoteLeft
                  style={{
                    position: 'absolute',
                    top: '-30px',
                    left: '-10px',
                    opacity: '0.1',
                    fontSize: '40px',
                    color: '#2c3e50'
                  }}
                />
                <p
                  style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                    fontStyle: 'italic',
                    color: '#34495e'
                  }}
                >
                  {item.quote}
                </p>
              </div>

              <p style={{ fontWeight: '600', color: '#3498db' }}>— {item.name}</p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
                {[...Array(5)].map((_, idx) => (
                  <FaStar key={idx} style={{ color: '#f1c40f', fontSize: '1.2rem' }} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>


      {/* WONDERENGINE FORM */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.2, once: false }}
        style={{ padding: '60px 10%', background: '#ffffff' }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <iframe
            style={{ width: '100%', maxWidth: '600px', height: '500px', border: 'none', borderRadius: '12px' }}
            id="wonderengine-form"
            src="https://api.wonderengine.ai/widget/form/o69tKOXv3NV8GnS4aGls?v=1"
            title="Contact us form"
          ></iframe>
        </div>
      </motion.section>

      {/* CTA SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ amount: 0.2, once: false }}
        style={{
          padding: '100px 5%',
          background: 'radial-gradient(circle at top left, #d1eaff, #f0f9ff)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: "'Segoe UI', sans-serif",
        }}
      >
        <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(0,123,255,0.2), transparent)', borderRadius: '50%', zIndex: '0' }}></div>
        <div style={{ position: 'absolute', bottom: '-80px', right: '-80px', width: '250px', height: '250px', background: 'radial-gradient(circle, rgba(0,123,255,0.1), transparent)', borderRadius: '50%', zIndex: '0' }}></div>

        <motion.h2
          variants={fadeUp}
          style={{
            fontSize: '2.8rem',
            background: 'linear-gradient(to right, #007BFF, #0056b3)',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}
        >
          <strong>Doors Are Closing Soon — Secure Your Spot</strong>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '25px', maxWidth: '1100px', margin: '20px auto' }}>
          {[
            ['Full Year of Training & Tools', 'Access comprehensive resources for a full year.'],
            ['Pick One Life-Changing Bonus', 'Choose a bonus to enhance your journey.'],
            ['Games, Courses, Templates & Live Sessions', 'Engage with interactive learning tools and live support.'],
            ['All for Just $69/month', 'Affordable access to all course benefits.']
          ].map(([title, desc], idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}
            >
              <h3 style={{ color: '#0056b3' }}><strong>{title}</strong></h3>
              <p>{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate('/mastertnc');
          }}
          style={{
            display: 'inline-block',
            padding: '18px 40px',
            background: 'linear-gradient(135deg, #3498db, #5dade2)',
            color: 'white',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            borderRadius: '10px',
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            marginTop: '30px'
          }}
        >
          Enroll Now
        </motion.a>
      </motion.section>
    </>
  );
};
