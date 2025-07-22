import React from 'react';
import { motion } from 'framer-motion';
import Banner from '../assets/Unlimited_Credit_Banner.png';
import USP from '../components/Senior_CourseUSP'
import GameBanner from '../components/GameBanner';
import Snapshot from '../components/Senior_Snapshot';
import Testimonial from '../components/Senior_Testimonial';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Senior = () => {
  const navigate = useNavigate();


  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: 'linear-gradient(to bottom, #eef5ff, #ffffff)' }}>
      
      {/* Banner Section */}
      <div style={{ position: 'relative', width: '100%', paddingTop: '35%' }}>
        <img
          src={Banner}
          alt="Senior Banner"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            objectPosition: 'center center',
            borderBottomLeftRadius: '50% 8%',
            borderBottomRightRadius: '50% 8%',
          }}
        />
      </div>

      {/* Terms + Button */}
      <div style={{ textAlign: 'center', padding: '30px 10px' }}>
        <div style={{ marginBottom: '20px' }}>
          <input
            type="checkbox"
            id="termsCheckbox"
            onChange={(e) => {
              const btn = document.getElementById('appointmentButton');
              btn.disabled = !e.target.checked;
              btn.style.background = e.target.checked ? '#1890FF' : '#ccc';
              btn.style.opacity = e.target.checked ? '1' : '0.5';
              btn.style.cursor = e.target.checked ? 'pointer' : 'not-allowed';
            }}
            style={{ verticalAlign: 'middle', marginRight: '10px' }}
          />
          <label htmlFor="termsCheckbox" style={{ fontSize: '1.1rem', color: '#333' }}>
            I agree to the{' '}
            <Link
    to="/mtc"
    style={{ color: '#5dade2', textDecoration: 'none' }}
    onMouseOver={(e) => (e.target.style.color = '#1890FF')}
    onMouseOut={(e) => (e.target.style.color = '#5dade2')}
  >
    Terms and Conditions
  </Link>
          </label>
        </div>
 <motion.button
          id="appointmentButton"
        
          whileHover={{ scale: 1.05 }}
          style={{
            background: '#ccc',
            color: 'white',
            padding: '16px 36px',
            fontSize: '1.2rem',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease',
            opacity: 0.5,
            cursor: 'not-allowed',
            border: 'none',
          }}
          onClick={() =>
            navigate('/ContactSection')
          }
        >
          Book an Appointment with Counselor
        </motion.button>

      </div>

      {/* Section Title + Video */}
      <section style={{ textAlign: 'center', padding: '60px 5%' }}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: '2.8rem', fontWeight: 'bold', color: '#2c3e50' }}
        >
          <span style={{ color: '#34495e' }}>Senior Year:</span>{' '}
          <span style={{ color: '#0056b3' }}>Unlimited Credit</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{ fontSize: '1.3rem', color: '#3598db', margin: '16px 0 40px' }}
        >
          "Build business credit under your private structure."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
          }}
        >
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <iframe
              src="https://drive.google.com/file/d/1rJmFSI-IF2MImdwUxFmqJr5h8BPFBqiZ/preview"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            />
          </div>
        </motion.div>
      </section>

      {/* Problem & Solution */}
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
          padding: '60px 5%',
          background: '#f0f9ff',
          boxSizing: 'border-box',
        }}
      >
        {/* Problem */}
        <div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.8 }}
          style={{
            background: 'white',
            borderLeft: '6px solid #e11d48',
            borderRadius: '12px',
            padding: '30px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box',
          }}
        >
          <h2 style={{ fontSize: '2em', color: '#e11d48', marginBottom: '20px' }}>The Problem</h2>
          <p style={{ color: '#333' }}>Brilliant entrepreneurs are trapped — not by bad ideas, but by bad credit systems.</p>
          <ul style={{ paddingLeft: 0, listStyle: 'none', marginTop: '20px', color: '#444' }}>
            {[
              'Banks ask for their personal credit score',
              'Lenders demand Social Security Numbers',
              'Vendors deny credit lines',
              'Funding feels like a secret club — they’re locked out',
            ].map((item, idx) => (
              <li key={idx} style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '8px', color: '#e11d48' }}>●</span>
                {item}
              </li>
            ))}
          </ul>
          <div style={{ background: '#fef2f2', padding: '16px 20px', borderLeft: '4px solid #e11d48', borderRadius: '8px', marginTop: '20px' }}>
            <p style={{ color: '#e11d48', fontWeight: 'bold' }}>❌ Borrow personally and risk everything</p>
            <p style={{ color: '#e11d48', fontWeight: 'bold' }}>❌ Or give up the dream entirely</p>
          </div>
          <div style={{ marginTop: '20px', fontWeight: 'bold', background: '#fffbea', padding: '12px 20px', borderLeft: '4px solid #facc15', borderRadius: '6px' }}>
            There's a third path. <span style={{ color: '#e11d48' }}>The Private Path.</span>
          </div>
        </div>

        {/* Solution */}
        <div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.8 }}
          style={{
            background: 'white',
            borderLeft: '6px solid #10b981',
            borderRadius: '12px',
            padding: '30px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box',
          }}
        >
          <h2 style={{ fontSize: '2em', color: '#10b981', marginBottom: '20px' }}>The Private Solution</h2>
          <p style={{ color: '#333' }}>
            <strong>Unlimited Credit</strong><br />
            A groundbreaking 3-month course that gives you the exact steps, tools, and funding system to:
          </p>
          <ul style={{ paddingLeft: 0, listStyle: 'none', marginTop: '20px', color: '#444' }}>
            {[
              'Build business credit under your private structure',
              'Get funded with no PG (personal guarantee)',
              'Stack, cycle, and recycle business credit',
              'Get your custom website built for lenders to love',
              'Grow your credit file through Tier 1 to Tier 5',
              'Walk away with a funded business — ready to operate private',
            ].map((item, idx) => (
              <li key={idx} style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '8px', color: '#10b981' }}>✔</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <USP/>
      <GameBanner/>
      <Snapshot/>
      <Testimonial/>
    </div>
  );
};

export default Senior;
