import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { 
  FaListUl,
  FaMoneyBillWave,
  FaBuilding,
  FaFileContract,
  FaShieldAlt,
  FaBitcoin,
  FaBan,
  FaHandshake,
  FaShoppingCart,
  FaUserTie
} from 'react-icons/fa';

const CourseModulesPM = () => {
  const modules = [
    {
      icon: <FaListUl />,
      title: "1. Broken Bank Processors",
      description: "Why Stripe & PayPal don't work for private operators."
    },
    {
      icon: <FaMoneyBillWave />,
      title: "2. Private Payment Types",
      description: "ACH, eCheck, Crypto, Invoicing — how and when to use."
    },
    {
      icon: <FaBuilding />,
      title: "3. PMA Setup Guide",
      description: "Build your own merchant system under Trust or PMA."
    },
    {
      icon: <FaFileContract />,
      title: "4. Contracts & Templates",
      description: "Pre-built tools for legal and private commerce."
    },
    {
      icon: <FaShieldAlt />,
      title: "5. Fraud Prevention",
      description: "How to stay safe and protect your data."
    },
    {
      icon: <FaBitcoin />,
      title: "6. Accepting Crypto",
      description: "Operate privately with digital assets."
    },
    {
      icon: <FaBan />,
      title: "7. Avoid Shutdowns",
      description: "Avoid aggregator bans and disruptions."
    },
    {
      icon: <FaHandshake />,
      title: "8. Client Agreements",
      description: "Create contracts that protect your business."
    },
    {
      icon: <FaShoppingCart />,
      title: "9. Private eCommerce",
      description: "Tools to run stores outside traditional systems."
    },
    {
      icon: <FaUserTie />,
      title: "10. Become a Reseller",
      description: "Launch a business helping others process privately."
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

    document.querySelectorAll('.module-card').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ModulesSection>
      <SectionTitle className="animate-on-scroll">
        Course Snapshot – <Highlight>10 Transformational Modules</Highlight>
      </SectionTitle>
      
      <ModulesGrid>
        {modules.map((module, index) => (
          <ModuleCard 
            key={index} 
            className="module-card" 
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <IconWrapper>{module.icon}</IconWrapper>
            <ModuleTitle>{module.title}</ModuleTitle>
            <ModuleDescription>{module.description}</ModuleDescription>
          </ModuleCard>
        ))}
      </ModulesGrid>
    </ModulesSection>
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

const highlight = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Components
const ModulesSection = styled.section`
  background: linear-gradient(to right, #f0f8ff, #e6f2ff);
  padding: 100px 5%;
  font-family: 'Poppins', sans-serif;
  color: #2c3e50;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  color: #0056b3;
  font-weight: 700;
  margin-bottom: 60px;
  opacity: 0;
  transform: translateY(20px);

  &.animate-on-scroll {
    animation: ${fadeIn} 0.8s ease-out forwards;
  }
`;

const Highlight = styled.span`
  color: #0ea5e9;
  animation: ${highlight} 8s ease infinite;
  background: linear-gradient(90deg, #0ea5e9, #3b82f6, #0ea5e9);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
`;

const ModulesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  box-sizing: border-box;
`;

const ModuleCard = styled.div`
  background: #fff;
  padding: 30px 25px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: 0;
  transform: translateY(20px);
  border-left: 4px solid #0ea5e9;
  
  &.animate {
    animation: ${fadeIn} 0.6s ease-out forwards;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 16px 32px rgba(0,123,204,0.15);
    background: linear-gradient(135deg, #ffffff, #f8fbff);
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 20px;
  svg {
    width: 50px;
    height: 50px;
    fill: #0ea5e9;
    animation: ${float} 3s ease-in-out infinite;
  }
`;

const ModuleTitle = styled.h3`
  color: #0056b3;
  font-size: 1.2rem;
  margin-bottom: 12px;
  font-weight: 600;
`;

const ModuleDescription = styled.p`
  font-size: 1rem;
  color: #475569;
  line-height: 1.5;
`;

export default CourseModulesPM;