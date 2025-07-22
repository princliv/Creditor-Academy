import React from 'react';
import JourneySOV from '../assets/journeysov.jpg';
import walk from '../assets/walk.jpg';
import graduate from '../assets/graduate.jpg';

const JourneySOVpage = () => {
  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = 'scale(1.04)';
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  const journeyCards = [
    {
      id: 1,
      image: JourneySOV,
      title: "Begin the Journey",
      description: "Learn who you are under law — and why sovereignty begins with knowledge."
    },
    {
      id: 2,
      image: graduate,
      title: "Graduate with Clarity",
      description: "No more confusion. Know your status, rights, and lawful standing in the Private."
    },
    {
      id: 3,
      image: walk,
      title: "Walk Away Empowered",
      description: "Leave with your Private ID — and a mindset that's unshakeable."
    }
  ];

  return (
    <section style={{ 
      padding: '100px 5%', 
      background: 'radial-gradient(circle at top left, #d1eaff, #f0f9ff)', 
      fontFamily: "'Segoe UI', sans-serif", 
      position: 'relative', 
      overflow: 'hidden', 
      width: '100%', 
      boxSizing: 'border-box' 
    }}>
      {/* Soft Background Decorations */}
      <div style={{ 
        position: 'absolute', 
        top: '-100px', 
        left: '-100px', 
        width: '300px', 
        height: '300px', 
        background: 'radial-gradient(circle, rgba(0,123,255,0.2), transparent)', 
        borderRadius: '50%', 
        zIndex: '0' 
      }}></div>
      <div style={{ 
        position: 'absolute', 
        bottom: '-80px', 
        right: '-80px', 
        width: '250px', 
        height: '250px', 
        background: 'radial-gradient(circle, rgba(0,123,255,0.1), transparent)', 
        borderRadius: '50%', 
        zIndex: '0' 
      }}></div>
      
      <div style={{ 
        maxWidth: '1100px', 
        margin: 'auto', 
        textAlign: 'center', 
        position: 'relative', 
        zIndex: '1' 
      }}>
        <h2 style={{ 
          fontSize: '2.8rem', 
          background: 'linear-gradient(to right, #007BFF, #0056b3)', 
          WebkitBackgroundClip: 'text', 
          color: 'transparent', 
          fontWeight: 'bold', 
          marginBottom: '30px' 
        }}>
          <span style={{ color: 'rgb(0, 86, 179)' }}>The Journey to Private Begins with Truth</span>
        </h2>
        
        <p style={{ 
          fontSize: '18px', 
          color: '#1e2e50', 
          maxWidth: '750px', 
          margin: '0 auto 50px', 
          lineHeight: '1.7' 
        }}>
          You can't file your way into sovereignty. <strong>You have to know who you are first.</strong> New SOV 101 gives you that truth — and the lawful identity to walk in it.
        </p>
        
        {/* Flexbox for Cards */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'space-between', 
          gap: '30px' 
        }}>
          {journeyCards.map((card) => (
            <div 
              key={card.id}
              style={{ 
                flex: '1 1 calc(33.333% - 20px)', 
                background: 'rgba(255,255,255,0.95)', 
                backdropFilter: 'blur(8px)', 
                borderRadius: '20px', 
                padding: '30px 25px', 
                boxShadow: '0 8px 30px rgba(0,123,255,0.1)', 
                transition: '0.3s', 
                boxSizing: 'border-box' 
              }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <div style={{ marginBottom: '10px' }}>
                <img 
                  src={card.image} 
                  alt={card.title} 
                  style={{ 
                    width: '100%', 
                    height: '200px', 
                    objectFit: 'cover',
                    borderRadius: '12px'
                  }} 
                />
              </div>
              <h3 style={{ 
                fontSize: '1.1rem', 
                color: '#0056b3', 
                marginBottom: '10px' 
              }}>
                <strong>{card.title}</strong>
              </h3>
              <p style={{ 
                fontSize: '14px', 
                color: '#333', 
                lineHeight: '1.6' 
              }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySOVpage;