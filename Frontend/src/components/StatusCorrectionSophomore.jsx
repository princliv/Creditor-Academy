import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PartySop from '../assets/PartySop.jpg';
import StatusSop from '../assets/statusSop.jpg';

const StatusCorrection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const cards = [
    {
      title: 'Status Correction',
      image: StatusSop,
    },
    {
      title: 'Secured Party Creditor (SPC) Processes',
      image: PartySop,
    },
  ];

  return (
    <section style={{
      padding: '60px 5%',
      background: 'linear-gradient(135deg, #eef5ff, #f8fbff)',
      fontFamily: "'Poppins', sans-serif",
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
            color: '#1a2b5f',
            fontWeight: '700',
            marginBottom: '15px',
            lineHeight: '1.2',
          }}>
            <span style={{ color: 'rgb(0, 86, 179)' }}>SPC + Status Correction Mastery</span>
          </h2>
          <p style={{
            color: '#5a6a85',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6',
          }}>
            Go step-by-step through every lawful declaration, filing, and notarization to correct your status and secure your estate.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
        }}>
          {cards.map((card, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.4s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img
                src={card.image}
                alt={card.title}
                style={{
                  width: '100%',
                  height: '100%',
                  aspectRatio: '4 / 3',
                  objectFit: 'cover',
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                padding: '15px',
                background: 'rgba(0, 86, 179, 0.6)',
                color: '#fff',
                textAlign: 'center',
                fontSize: '1.2rem',
                fontWeight: '600',
              }}>
                {card.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatusCorrection;
