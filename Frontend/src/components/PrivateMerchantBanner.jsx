import React, { useEffect } from 'react';
import privateMerchantFootball from '../assets/PrivateMerchantFootball.png';
import styled, { keyframes } from 'styled-components';

const PrivateMerchantBanner = () => {
  useEffect(() => {
    // Trigger animations after component mounts
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Full-Width Responsive Banner Image */}
      <BannerContainer className="animate-on-scroll">
        <BannerImage 
          src={privateMerchantFootball} 
          alt="Private Merchant Football" 
        />
      </BannerContainer>

      {/* Course Introduction Video Section */}
      <VideoSection>
        <SectionTitle className="animate-on-scroll">
          <strong>Course Introduction Video</strong>
        </SectionTitle>
        <SectionDescription className="animate-on-scroll">
          Take a quick look inside the Sovereignty 101 course — and discover what makes it unlike anything you've seen before.
        </SectionDescription>
        
        <VideoContainer className="animate-on-scroll">
          <VideoWrapper>
            <iframe 
              src="https://drive.google.com/file/d/1XI4s_hfp3jqaqEX3wfeRKXe0ev1xml9r/preview" 
              frameBorder="0"
              allow="autoplay; encrypted-media" 
              allowFullScreen
              title="Private Merchant Course Introduction"
            />
          </VideoWrapper>
        </VideoContainer>
      </VideoSection>
    </div>
  );
};

// Animation Keyframes
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { 
    opacity: 0;
    transform: translateY(30px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleIn = keyframes`
  from { 
    opacity: 0;
    transform: scale(0.95);
  }
  to { 
    opacity: 1;
    transform: scale(1);
  }
`;

// Styled Components with Animations
const BannerContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.5s ease;
  
  &.animate {
    opacity: 1;
    animation: ${fadeIn} 1s ease-out forwards;
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const VideoSection = styled.section`
  padding: 80px 5%;
  background: linear-gradient(135deg, #e6f0ff, #f8fbff);
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #1e293b;
  margin-bottom: 20px;
  opacity: 0;
  
  &.animate {
    animation: ${slideUp} 0.8s ease-out 0.2s forwards;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.15rem;
  color: #475569;
  max-width: 700px;
  margin: 0 auto 40px;
  opacity: 0;
  
  &.animate {
    animation: ${slideUp} 0.8s ease-out 0.4s forwards;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 20px;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  opacity: 0;
  transform: perspective(1000px) rotateX(-5deg);
  transition: all 0.5s ease;
  
  &.animate {
    opacity: 1;
    transform: perspective(1000px) rotateX(0);
    animation: ${scaleIn} 0.8s ease-out 0.6s forwards;
  }

  &:hover {
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
    transform: perspective(1000px) rotateX(0) scale(1.01);
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export default PrivateMerchantBanner;