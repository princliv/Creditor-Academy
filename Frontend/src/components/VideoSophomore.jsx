import React from 'react';
import { motion } from 'framer-motion';

const features = [
  '24 Live Classes with Coach Mr. Rowland',
  '52 On-Demand Studio Lessons',
  'Powerful World-Class LMS',
  'Personal Studio Avatar to Guide You',
  'Downloadable Trust Templates + UCC Forms',
  'Real-Time Chatbot',
  'Law Comics + Game-Based Quizzes',
  'Private ID'
];

const EverythingYouGet = () => {
  return (
    <>
      {/* Video Embed */}
      <div
        style={{
          width: '100%',
          maxWidth: 960,
          margin: '40px auto',
          borderRadius: 20,
          overflow: 'hidden',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)'
        }}
      >
        <div style={{ position: 'relative', paddingTop: '56.25%', height: 0 }}>
          <iframe
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none'
            }}
            src="https://www.youtube.com/embed/o_fQSOM2dtw"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="SPC Video"
          ></iframe>
        </div>
      </div>

     {/* Everything You Get Section */}
<section
  style={{
    padding: '80px 5%',
    background: '#ffffff',
    fontFamily: 'Poppins, sans-serif',
  }}
>
  <div
    style={{
      maxWidth: 1200,
      margin: 'auto',
      background: 'linear-gradient(to bottom right, #f0f4f8, #ffffff)',
      padding: '60px 40px',
      borderRadius: 30,
      boxShadow: '0 25px 60px rgba(0,0,0,0.08)',
    }}
  >
    <h2
      style={{
        textAlign: 'center',
        fontSize: '2.6rem',
        color: '#0f172a',
        fontWeight: 700,
        marginBottom: 10,
      }}
    >
      Everything You <span style={{ color: '#0ea5e9' }}>Get</span>
    </h2>
    <p
      style={{
        textAlign: 'center',
        color: '#475569',
        fontSize: '1.15rem',
        marginBottom: 50,
      }}
    >
      A fully immersive learning experience to help you lawfully reclaim your standing.
    </p>

    {/* Features Grid */}
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 30,
      }}
    >
      {features.map((feature, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true }}
          style={{
            background: '#ffffff',
            padding: '24px 22px',
            borderRadius: 20,
            boxShadow: '0 12px 30px rgba(0,0,0,0.05)',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'default',
          }}
          whileHover={{
            scale: 1.04,
            boxShadow: '0 16px 40px rgba(0,0,0,0.08)',
          }}
        >
          {/* Icon */}
          <div
            style={{
              flexShrink: 0,
              background: '#e0f2fe',
              padding: 12,
              borderRadius: 14,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'inset 0 0 5px rgba(0,0,0,0.05)',
            }}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0284c7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9 14s1.5 2 3 2 3-2 3-2"></path>
              <path d="M9 9h.01"></path>
              <path d="M15 9h.01"></path>
            </svg>
          </div>

          {/* Feature Text */}
          <p
            style={{
              margin: 0,
              fontSize: '1.05rem',
              fontWeight: 600,
              color: '#1e293b',
              lineHeight: 1.4,
            }}
          >
            {feature}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

    </>
  );
};

export default EverythingYouGet;
