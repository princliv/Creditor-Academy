import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RemedyOfferSection = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
    const handleNavigate = () => {
    navigate('/remedytnc');
  };

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 600) setVisible(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  // Inject animations
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes pulseZoom {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.08); }
      }

      .fade-in-up {
        animation: fadeInUp 1s ease-out forwards;
      }

      .pulse-zoom {
        animation: pulseZoom 2.5s infinite;
      }

      .animate-button:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 25px rgba(41, 121, 255, 0.4);
      }

      @media (max-width: 768px) {
        .responsive-flex {
          flex-direction: column;
          padding: 30px 5% !important;
        }
        .responsive-half {
          width: 100% !important;
          padding: 0 !important;
        }
        .responsive-offer {
          padding-top: 40px !important;
        }
        .price-section {
          font-size: 2em !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const fadeIn = visible ? 'fade-in-up' : '';

  return (
    <>
      {/* Take the First Step Section */}
      <section
        style={{
          padding: '80px 6%',
          background: 'linear-gradient(to bottom, #f0f4f8, #e0f2fe)',
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div
          className={fadeIn}
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center',
            background: '#ffffffcc',
            borderRadius: '16px',
            padding: '50px 30px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s ease',
          }}
        >
          <h2 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '20px' }}>
            <strong style={{ color: 'rgb(53, 152, 219)' }}> TAKE THE FIRST STEP TO REMEDY</strong>
          </h2>
          <p style={{ fontSize: '1rem', color: '#334155', marginBottom: '18px' }}>
            It’s time to stop being the debtor — and start being the decision-maker.
          </p>
          <p style={{ fontSize: '1rem', color: '#334155', marginBottom: '18px' }}>
            Don’t beg the system for forgiveness.
            <br />
            <strong style={{ color: 'rgb(53, 152, 219)' }}>Command your remedy with confidence.</strong>
          </p>
          <p style={{ fontSize: '1rem', color: '#334155', marginBottom: '30px' }}>
            Let’s fix your credit the right way — the lawful way — starting now.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: 600 }}>
            <span style={{ color: 'rgb(53, 152, 219)' }}>Creditors Academy</span>
          </p>
          <p style={{ fontSize: '1rem', color: '#475569', fontStyle: 'italic' }}>Where Knowledge Becomes Power.</p>
        </div>
      </section>

      {/* What You'll Learn + Offer */}
      <section
        className="responsive-flex"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          padding: '60px 6%',
          maxWidth: '1200px',
          margin: 'auto',
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {/* Learn Column */}
        <div className="responsive-half"
          style={{
            flex: 1,
            minWidth: '300px',
            paddingRight: '30px',
            marginBottom: '30px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease',
          }}
        >
          <h2 style={{ fontSize: '1.8em', color: '#0f172a', marginBottom: '30px' }}>
            <span style={{ color: '#34495e' }}>
              What You'll <span style={{ color: 'rgb(0, 86, 179)' }}>Learn</span>
            </span>
          </h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              { title: 'Step-by-step Credit Repair Blueprint', desc: 'Remove negative items and rebuild credit step-by-step.' },
              { title: 'Credit Monitoring Tools & Strategies', desc: 'Track and protect your credit using expert tools.' },
              { title: 'Debt Negotiation Techniques', desc: 'Learn how to settle debts legally and save thousands.' },
              { title: 'Building Positive Credit History', desc: 'Establish habits that boost long-term credit health.' },
              { title: 'Your Legal Rights & Protections', desc: 'Understand and use credit laws to your advantage.' },
            ].map((item, idx) => (
              <li
                key={idx}
                style={{
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  background: '#f9fafe',
                  padding: '16px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                }}
              >
                <span
                  style={{
                    marginRight: '16px',
                    background: '#28a745',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="14" height="14" fill="#fff" viewBox="0 0 16 16">
                    <path d="M13.485 1.929a1 1 0 010 1.414L6.414 10.414 2.515 6.515a1 1 0 10-1.414 1.414l4.95 4.95a1 1 0 001.414 0l7.95-7.95a1 1 0 10-1.414-1.414z" />
                  </svg>
                </span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '1rem', color: '#334155' }}>{item.title}</div>
                  <div style={{ fontSize: '0.9rem', color: '#64748b' }}>{item.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Offer Column */}
        <div className="responsive-half responsive-offer" style={{ flex: 1, minWidth: '300px', paddingLeft: '30px' }}>
          <div
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              padding: '30px 20px',
              borderRadius: '16px',
              color: '#fff',
              textAlign: 'center',
              marginBottom: '25px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,123,255,0.2)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(0,153,255,0.7), rgba(0,191,255,0.5))',
                borderRadius: '16px',
              }}
            />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ fontWeight: 'bold', fontSize: '1.4em' }} className="pulse-zoom">
                Credit Score: <span style={{
                  background: 'rgba(0,0,0,0.3)',
                  padding: '2px 10px',
                  borderRadius: '20px'
                }}>750+</span>
              </div>
            </div>
          </div>

          <h3 style={{ margin: '10px 0', fontSize: '1.4em', textAlign: 'center', color: '#000' }}>
            Transform Your Financial Future
          </h3>

          <p style={{ color: '#666', marginBottom: '15px', textAlign: 'center', fontSize: '1rem' }}>
            Unlock the path to better credit—offline, hands-on, and fully supported.
          </p>

          <div style={{ position: 'relative', margin: '25px 0', textAlign: 'center' }}>
            <div className="price-section" style={{
              fontSize: '2.6em',
              fontWeight: 'bold',
              color: '#00bfff',
              animation: 'pulseZoom 2.5s infinite'
            }}>
              $399
            </div>
            <div style={{
              position: 'absolute',
              top: '-10px',
              right: '20%',
              background: '#ff4757',
              color: 'white',
              padding: '3px 15px',
              borderRadius: '20px',
              fontSize: '0.75em',
              fontWeight: 'bold',
              transform: 'rotate(10deg)',
            }}>
              SAVE $200
            </div>
            <div style={{ textDecoration: 'line-through', color: '#999', fontSize: '1.1em', marginTop: '5px' }}>
              $597
            </div>
          </div>

        <button
      onClick={handleNavigate}
      className="animate-button"
      style={{
        background: 'linear-gradient(to right, #00bfff, #2979ff)',
        color: 'white',
        fontWeight: 600,
        border: 'none',
        borderRadius: '8px',
        padding: '14px 20px',
        fontSize: '1.05em',
        cursor: 'pointer',
        width: '100%',
        boxShadow: '0 5px 15px rgba(41,121,255,0.3)',
      }}
    >
      Enroll Now – Limited Seats
    </button>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20px',
            fontSize: '0.85em',
            color: '#666',
            flexWrap: 'wrap',
            gap: '10px'
          }}>
            <span>✅ Learn. Apply. Transform.</span>
            <span>🔒 Secure Payment</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default RemedyOfferSection;
