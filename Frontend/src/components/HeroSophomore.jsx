import React from "react";
import { FaDesktop, FaBook, FaClock, FaFileAlt, FaIdCard } from 'react-icons/fa'
import {useNavigate } from 'react-router-dom';
const HeroSectionPrivate = () => {
  const navigate = useNavigate();
   const handleClick = () => {
    navigate('/ContactSection'); // Make sure this route exists
  };
  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      {/* INFO HEADER */}
      <div
        style={{
          background: "linear-gradient(to right, #e0f2fe, #bae6fd)",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "auto",
            background: "rgba(255, 255, 255, 0.5)",
            borderRadius: "16px",
            padding: "40px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            color: "#0f172a",
            textAlign: "center",
            backdropFilter: "blur(10px)",
          }}
          data-aos="fade-up"
        >
          <h1
            style={{ fontSize: "3em", marginBottom: 10, fontWeight: "bold" }}
            data-aos="zoom-in"
          >
            <span style={{ color: "#0056b3" }}>
              Become Private By Creditor Academy
            </span>
          </h1>
          <p
            style={{
              fontSize: "1.3em",
              marginBottom: 20,
              lineHeight: 1.6,
              fontWeight: 300,
            }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Secure Your Freedom. Walk with Your Private ID & Badge.
          </p>

          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "960px",
              margin: "0 auto",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
            }}
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div style={{ position: "relative", paddingTop: "56.25%", height: 0 }}>
              <iframe
                src="https://drive.google.com/file/d/1zCKsB4sXdseYnqARowzRr1wU4xEcxsCP/preview"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Private Intro Video"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}

<section
  style={{
    marginTop: '60px',
    padding: '60px 5%',
    background: 'linear-gradient(to right, #eef5ff, #ffffff)',
    borderRadius: '20px',
    boxShadow: '0 12px 40px rgba(44, 62, 80, 0.1)',
    boxSizing: 'border-box',
    fontFamily: "'Segoe UI', sans-serif",
  }}
  data-aos="fade-up"
>
  <div style={{ textAlign: 'center' }}>
    <h2
      style={{
        color: '#0056b3',
        fontSize: '2rem',
        fontWeight: '600',
        lineHeight: '1.4',
        marginBottom: '30px',
      }}
      data-aos="fade-down"
      data-aos-delay="200"
    >
      <span style={{ color: 'rgb(35, 111, 161)' }}>
        A Guided 3-Month Journey to Lawful Freedom
      </span>
    </h2>

    {/* Features Grid */}
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '16px',
        maxWidth: '960px',
        margin: 'auto',
      }}
    >
      {[
        { icon: <FaDesktop />, text: '24 Live Classes', color: '#3498db' },
        { icon: <FaBook />, text: '52 Studio Lessons', color: '#f39c12' },
        { icon: <FaClock />, text: '10 Sovereignty Games', color: '#2ecc71' },
        { icon: <FaFileAlt />, text: 'Real Documents & Filings', color: '#9b59b6' },
        { icon: <FaIdCard />, text: 'Private ID & Badge', color: '#e74c3c' },
      ].map((item, idx) => (
        <div
          key={idx}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: '#ffffff',
            borderRadius: '10px',
            padding: '12px 20px',
            flex: '1 1 250px',
            minWidth: '220px',
            boxShadow: '0 6px 16px rgba(0,0,0,0.05)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          data-aos="fade-up"
          data-aos-delay={idx * 150}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.05)';
          }}
        >
          <div style={{ color: item.color, fontSize: '24px' }}>{item.icon}</div>
          <span style={{ fontSize: '1rem', color: '#333' }}>{item.text}</span>
        </div>
      ))}
    </div>

    {/* CTA Button */}
    <div style={{ marginTop: '50px' }} data-aos="zoom-in" data-aos-delay="600">
       <button
      onClick={handleClick}
      style={{
        padding: '14px 28px',
        fontSize: '1rem',
        background: '#3498db',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontWeight: '600',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }}
      onMouseOver={(e) => (e.target.style.background = '#2c80b4')}
      onMouseOut={(e) => (e.target.style.background = '#3498db')}
    >
      Connect with us!
    </button>
    </div>
  </div>
</section>


     <section
  style={{
    marginTop: "80px",
    background: "#ffffff",
    padding: "80px 5%",
    borderRadius: "20px",
    boxShadow: "0 15px 50px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif",
    position: "relative",
    overflow: "hidden",
    border: "1px solid rgba(0, 0, 0, 0.05)"
  }}
  data-aos="fade-up"
>
  {/* Decorative elements */}
  <div style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "radial-gradient(circle at 20% 30%, rgba(0, 150, 255, 0.03) 0%, transparent 50%)",
    zIndex: 0
  }}></div>
  
  <div style={{
    position: "absolute",
    bottom: "-100px",
    right: "-100px",
    width: "300px",
    height: "300px",
    background: "radial-gradient(circle, rgba(0, 86, 179, 0.05) 0%, transparent 70%)",
    borderRadius: "50%",
    zIndex: 0
  }}></div>

  <div style={{
    position: "relative",
    zIndex: 1,
    maxWidth: "1000px",
    margin: "0 auto"
  }}>
    {/* Animated heading with gradient */}
    <h3
      style={{
        fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
        fontWeight: 800,
        background: "linear-gradient(90deg, #0056b3, #0099ff, #0056b3)",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        marginBottom: "30px",
        lineHeight: 1.3,
        animation: "gradientText 6s linear infinite",
        textShadow: "0 2px 10px rgba(0, 86, 179, 0.1)"
      }}
      data-aos="fade-up"
    >
      The System is Presuming You're a <span style={{ whiteSpace: "nowrap" }}>Corporate Asset</span>
    </h3>

    {/* Animated paragraph with hover effect */}
    <div style={{
      position: "relative",
      padding: "30px",
      background: "rgba(240, 247, 255, 0.5)",
      borderRadius: "15px",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(0, 150, 255, 0.1)",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.03)",
      maxWidth: "800px",
      margin: "0 auto",
      transition: "all 0.4s ease"
    }}
    data-aos="fade-up"
    data-aos-delay="200"
    onMouseOver={(e) => {
      e.currentTarget.style.background = "rgba(240, 247, 255, 0.8)";
      e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 86, 179, 0.1)";
      e.currentTarget.style.transform = "translateY(-5px)";
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.background = "rgba(240, 247, 255, 0.5)";
      e.currentTarget.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.03)";
      e.currentTarget.style.transform = "translateY(0)";
    }}
    >
      <p
        style={{
          color: "#333",
          fontSize: "clamp(1rem, 1.2vw, 1.1rem)",
          lineHeight: 1.8,
          margin: 0,
          position: "relative",
          zIndex: 1,
          transition: "all 0.3s ease"
        }}
      >
        <span style={{
          display: "inline-block",
          fontWeight: 600,
          color: "#0056b3",
          marginBottom: "10px",
          fontSize: "1.1em"
        }}>You're not free just because you think you are.</span><br />
        
        You're registered, bonded, and presumed lost at sea in the public system. 
        Every court summons, bank contract, and tax demand is based on status 
        presumptions. Until you correct them — <span style={{ 
          fontWeight: 700, 
          background: "linear-gradient(90deg, #e63946, #d90429)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>you are presumed property.</span>
      </p>
      
      {/* Decorative quote marks */}
      <div style={{
        position: "absolute",
        top: "15px",
        left: "20px",
        fontSize: "3rem",
        color: "rgba(0, 86, 179, 0.1)",
        fontFamily: "Georgia, serif",
        lineHeight: 1,
        zIndex: 0
      }}>"</div>
      
      <div style={{
        position: "absolute",
        bottom: "15px",
        right: "20px",
        fontSize: "3rem",
        color: "rgba(0, 86, 179, 0.1)",
        fontFamily: "Georgia, serif",
        lineHeight: 1,
        zIndex: 0
      }}>"</div>
    </div>

  </div>

  {/* CSS Animation for gradient text */}
  <style jsx>{`
    @keyframes gradientText {
      0% { background-position: 0% center; }
      100% { background-position: 200% center; }
    }
  `}</style>
</section>
    </div>
  );
};

export default HeroSectionPrivate;
