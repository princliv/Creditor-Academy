import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { 
  FaListUl,
  FaExchangeAlt,
  FaBitcoin,
  FaMoneyBillWave,
  FaFolderOpen,
  FaUserTie
} from 'react-icons/fa';

const WhatYouWillLearn = () => {
  const learnItems = [
    {
      icon: <FaListUl />,
      title: "Accept Payments Privately",
      description: "Learn how to accept payments without relying on traditional banking systems."
    },
    {
      icon: <FaExchangeAlt />,
      title: "Legal Invoicing with PMA",
      description: "Create legally sound invoices and contracts under a Private Membership Association."
    },
    {
      icon: <FaBitcoin />,
      title: "Crypto, ACH & Hybrid Use",
      description: "Use cryptocurrency, ACH, and hybrid systems to remain compliant and private."
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Build a Client Payment System",
      description: "Develop a professional offering and accept payments directly from clients."
    },
    {
      icon: <FaFolderOpen />,
      title: "Launch Your Merchant Business",
      description: "Start your own compliant merchant model with minimal technical setup."
    },
    {
      icon: <FaUserTie />,
      title: "Monetize This Skill",
      description: "Turn your knowledge into an income stream with proven business techniques."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.learn-card').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <LearnSection>
      <LearnContainer>
        <SectionHeading className="animate-on-scroll">
          <GradientText>What You Will Learn</GradientText>
        </SectionHeading>
        <SectionSubtitle className="animate-on-scroll">
          By the end of this course, you'll have mastered these real-world skills:
        </SectionSubtitle>
        
        <LearnGrid>
          {learnItems.map((item, index) => (
            <LearnCard 
              key={index} 
              className="learn-card"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <IconContainer>{item.icon}</IconContainer>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </LearnCard>
          ))}
        </LearnGrid>
      </LearnContainer>
    </LearnSection>
  );
};

// Animation Keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Components
const LearnSection = styled.section`
  padding: 100px 5%;
  background: linear-gradient(135deg, #eef5ff, #ffffff);
  font-family: 'Poppins', sans-serif;
  position: relative;
  overflow: hidden;
`;

const LearnContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  text-align: center;
`;

const SectionHeading = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 15px;
  opacity: 0;
  transform: translateY(20px);

  &.animate-on-scroll {
    animation: ${fadeIn} 0.8s ease-out forwards;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(90deg, #0056b3, #3498db, #0056b3);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${gradientFlow} 8s ease infinite;
`;

const SectionSubtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: #595f66;
  margin-bottom: 60px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  transform: translateY(20px);

  &.animate-on-scroll {
    animation: ${fadeIn} 0.8s ease-out 0.2s forwards;
  }
`;

const LearnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const LearnCard = styled.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 40px 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(0, 86, 179, 0.1);
  opacity: 0;
  transform: translateY(20px);

  &.animate {
    animation: ${fadeIn} 0.6s ease-out forwards;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 15px 40px rgba(0, 86, 179, 0.15);
    background: rgba(255, 255, 255, 0.95);
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const IconContainer = styled.div`
  margin-bottom: 25px;
  color: #0056b3;
  
  svg {
    width: 40px;
    height: 40px;
    animation: ${float} 3s ease-in-out infinite;
  }
`;

const CardTitle = styled.h3`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 15px;
`;

const CardDescription = styled.p`
  color: #595f66;
  font-size: clamp(0.95rem, 1.5vw, 1rem);
  line-height: 1.6;
`;

export default WhatYouWillLearn;