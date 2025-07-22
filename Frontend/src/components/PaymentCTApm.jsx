import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import masterclassImage from '../assets/masteclassmembership.png';

const PaymentCTA = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <CTASection>
      {/* Decorative Elements */}
      <CircleTop className="animate-on-scroll" />
      <CircleBottom className="animate-on-scroll" />
      <CircleMiddle className="animate-on-scroll" />
      
      {/* Content */}
      <ContentWrapper>
        <Heading className="animate-on-scroll">
          Ready to Accept Payments Privately — and Build a New Income Stream?
        </Heading>
        <Subheading className="animate-on-scroll">
          Choose your path to unlock the Private Merchant course and begin building your financial sovereignty.
        </Subheading>
        
        <Card className="animate-on-scroll">
          <BannerImage src={masterclassImage} alt="Join Masterclass Banner" />
          <CardContent>
            <CardTitle>Join the Master Class</CardTitle>
            <CardDescription>
              Get full access to the Private Merchant course and all premium content when you become a Master Class Member.
            </CardDescription>
            <CTAButton to="/masterclass">
              Join the Master Class
            </CTAButton>
          </CardContent>
        </Card>
      </ContentWrapper>
    </CTASection>
  );
};

// Animation Keyframes
const float = keyframes`
  0% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-10px) scale(1.05); }
  100% { transform: translateY(0) scale(1); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Styled Components
const CTASection = styled.section`
  position: relative;
  background: linear-gradient(135deg, #f0f8ff, #dceeff, #e6f2ff);
  padding: 120px 5%;
  font-family: 'Poppins', sans-serif;
  color: #2c3e50;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  isolation: isolate;
`;

const CircleBase = styled.div`
  position: absolute;
  border-radius: 50%;
  z-index: 1;
  opacity: 0;
  transition: opacity 1s ease, transform 1s ease;

  &.animate {
    opacity: 1;
    animation: ${float} 8s ease-in-out infinite;
  }
`;

const CircleTop = styled(CircleBase)`
  top: -50px;
  left: -50px;
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, rgba(160, 205, 255, 0.3), transparent 70%);
`;

const CircleBottom = styled(CircleBase)`
  bottom: -70px;
  right: -70px;
  width: 160px;
  height: 160px;
  background: radial-gradient(circle, rgba(160, 205, 255, 0.2), transparent 70%);
  animation-delay: 0.5s;
`;

const CircleMiddle = styled(CircleBase)`
  top: 50%;
  left: 10%;
  width: 80px;
  height: 80px;
  background: radial-gradient(circle, rgba(160, 205, 255, 0.15), transparent 70%);
  animation-delay: 1s;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  color: #0056b3;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.3;
  opacity: 0;
  transform: translateY(20px);

  &.animate {
    animation: ${fadeIn} 0.8s ease-out forwards;
  }
`;

const Subheading = styled.p`
  text-align: center;
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: #2c3e50;
  max-width: 720px;
  margin: 0 auto 60px;
  line-height: 1.6;
  opacity: 0;
  transform: translateY(20px);

  &.animate {
    animation: ${fadeIn} 0.8s ease-out 0.2s forwards;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Card = styled.div`
  width: 100%;
  max-width: 700px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  overflow: hidden;
  margin: 0 auto;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: 0;
  transform: translateY(20px);
  border: 1px solid rgba(0, 118, 204, 0.1);

  &.animate {
    animation: ${fadeIn} 0.8s ease-out 0.4s forwards;
  }

  &:hover {
    transform: translateY(-8px) scale(1.01);
    box-shadow: 0 12px 40px rgba(0, 123, 204, 0.15);
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  transition: transform 0.5s ease;

  ${Card}:hover & {
    transform: scale(1.02);
  }
`;

const CardContent = styled.div`
  padding: 40px 30px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const CardTitle = styled.h3`
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  color: #0056b3;
  margin-bottom: 15px;
  font-weight: 600;
`;

const CardDescription = styled.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: #333333;
  max-width: 600px;
  margin: 0 auto 30px;
  line-height: 1.6;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: clamp(12px, 2vw, 16px) clamp(28px, 3vw, 32px);
  background: linear-gradient(135deg, #1f7ae0, #0d5bb5);
  color: #ffffff;
  font-size: clamp(0.9rem, 2vw, 1rem);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(31, 122, 224, 0.3);
  position: relative;
  overflow: hidden;
  
  &:hover {
    background: linear-gradient(135deg, #0d5bb5, #1f7ae0);
    box-shadow: 0 6px 16px rgba(31, 122, 224, 0.4);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(255,255,255,0.2), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

export default PaymentCTA;