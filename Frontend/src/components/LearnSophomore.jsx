import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CorrectSop from '../assets/CorrectSop.jpg';
import SecureSop from '../assets/SecureSop.jpg';
import IdentitySop from '../assets/IdentitySop.jpg';

const LearnSophomore = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const cards = [
    {
      title: 'Correct Your Political & Commercial Status',
      desc: "Learn how to update your standing and free yourself from the system's assumptions.",
      img: CorrectSop,
    },
    {
      title: 'Become a Secured Party Creditor',
      desc: 'Establish lawful standing, reclaim your sovereignty, and protect your estate.',
      img: SecureSop,
    },
    {
      title: 'Reclaim Your Identity & Birth Right',
      desc: 'Understand how to take back control over your legal name, estate, and records.',
      img: IdentitySop,
    },
  ];

  return (
    <section
      style={{
        marginTop: '60px',
        padding: '40px 5%',
        background: '#f9fcff',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontSize: '2.2rem',
          color: '#2c3e50',
          marginBottom: '40px',
        }}
        data-aos="fade-up"
      >
        <span style={{ color: 'rgb(0, 86, 179)' }}>
          <strong>What You'll Learn</strong>
        </span>
      </h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          justifyContent: 'center',
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              flex: '1 1 280px',
              maxWidth: '300px',
              background: '#ffffff',
              borderRadius: '14px',
              boxShadow: '0 5px 20px rgba(0,123,255,0.08)',
              overflow: 'hidden',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <img
              src={card.img}
              alt={card.title}
              style={{
                width: '100%',
                height: '180px',
                objectFit: 'cover',
              }}
            />
            <div style={{ padding: '20px' }}>
              <h4
                style={{
                  color: '#0056b3',
                  fontSize: '1.2rem',
                  marginBottom: '10px',
                }}
              >
                {card.title}
              </h4>
              <p style={{ color: '#333', fontSize: '0.95rem' }}>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearnSophomore;
