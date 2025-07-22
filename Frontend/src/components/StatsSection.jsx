import React, { useEffect } from 'react';
import { FaFacebookF, FaYoutube, FaUsers } from 'react-icons/fa';
import styled from 'styled-components';

const StatsSection = () => {
  useEffect(() => {
    const countUp = (elementId, target, duration) => {
      const element = document.getElementById(elementId);
      if (!element) return;

      let start = 0;
      const steps = 100;
      const increment = target / steps;
      const stepTime = duration / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          clearInterval(timer);
          start = target;
        }

        if (target >= 1000000) {
          element.textContent = (Math.floor(start / 100000) / 10) + 'M+';
        } else if (target >= 1000) {
          element.textContent = (Math.floor(start / 100) / 10) + 'k+';
        } else {
          element.textContent = Math.floor(start);
        }
      }, stepTime);
    };

    countUp('facebook-count', 3500, 2000);
    countUp('youtube-count', 8000, 2000);
    countUp('community-count', 11000, 2000);
  }, []);

  return (
    <Section>
      <Title 
        onMouseOver={(e) => e.currentTarget.querySelector('span').style.width = '100%'}
        onMouseOut={(e) => e.currentTarget.querySelector('span').style.width = '160px'}
      >
        We Take Pride in Our Numbers 
        <Underline />
      </Title>

      <StatsContainer>
        <StatCard 
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <FaFacebookF size={48} />
          <StatNumber id="facebook-count">0</StatNumber>
          <StatLabel>Members on Facebook</StatLabel>
        </StatCard>

        <StatCard 
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <FaYoutube size={48} />
          <StatNumber id="youtube-count">0</StatNumber>
          <StatLabel>Learners on YouTube</StatLabel>
        </StatCard>

        <StatCard 
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <FaUsers size={48} />
          <StatNumber id="community-count">0</StatNumber>
          <StatLabel>Community Members</StatLabel>
        </StatCard>
      </StatsContainer>
    </Section>
  );
};

// Styled Components
const Section = styled.section`
  background: #5DADE2;
  padding: 80px 10%;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: white;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  position: relative;
  display: inline-block;
  color: white;
`;

const Underline = styled.span`
  display: block;
  width: 160px;
  height: 5px;
  background: white;
  margin: 10px auto 0;
  transition: width 0.3s ease-in-out;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const StatCard = styled.div`
  flex: 0 0 300px;
  background: rgba(255, 255, 255, 0.12);
  padding: 40px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transition: transform 0.3s ease-in-out;
  color: white;
`;

const StatNumber = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin: 15px 0;
`;

const StatLabel = styled.p`
  font-size: 1.1rem;
  color: white;
`;

export default StatsSection;