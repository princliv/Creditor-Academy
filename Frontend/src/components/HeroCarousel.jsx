import React, { useEffect, useRef } from 'react';
import img1 from '../assets/Couple.jpg';
import img2 from '../assets/carluxury.jpg';
import img3 from '../assets/jet.jpg';
import img4 from '../assets/yatchview.jpg';

const slides = [
  {
    image: img1,
    heading: 'Protect What You Build. Pass On What Matters',
    subline: '',
  },
  {
    image: img2,
    heading: 'Thomas Jefferson',
    subline: '"When the people fear the government there is tyranny. When the government fears the people, there is liberty."',
  },
  {
    image: img3,
    heading: 'Board as a Student. Land as a Sovereign',
    subline: '',
  },
  {
    image: img4,
    heading: 'Operate Private. Take Control. Live Sovereign',
    subline: '',
  },
];

const HeroCarousel = () => {
  const carouselRef = useRef(null);
  const totalSlides = slides.length;

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % totalSlides;
      if (carouselRef.current) {
        carouselRef.current.style.transform = `translateX(-${(idx * 100) / totalSlides}%)`;
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: '90vh',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <div
        id="hero-carousel"
        ref={carouselRef}
        style={{
          display: 'flex',
          width: `${totalSlides * 100}%`,
          height: '100%',
          transition: 'transform 1s ease',
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              flex: `0 0 ${100 / totalSlides}%`,
              position: 'relative',
              background: `url(${slide.image}) center/cover no-repeat`,
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.4)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
                color: '#fff',
                padding: '0 20px 100px',
                textAlign: 'center',
              }}
            >
              <h1
                style={{
                  fontSize: '2em',
                  fontWeight: 'bold',
                  margin: '0 0 12px',
                }}
              >
                <span>{slide.heading}</span>
              </h1>
              <div
                style={{
                  height: '3px',
                  width: '100%',
                  maxWidth: slide.subline ? '300px' : '800px',
                  backgroundColor: '#0ea5e9',
                  marginBottom: slide.subline ? '20px' : '0',
                }}
              ></div>
              {slide.subline && (
                <p style={{ fontSize: '1em', maxWidth: '700px' }}>
                  <span>{slide.subline}</span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
