import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { 
  FaExclamationTriangle, 
  FaCheckCircle,
  FaCheck 
} from 'react-icons/fa';

const PrivateMerchantSection = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
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
    <>
      {/* Hero Section */}
      <HeroSection className="animate-on-scroll">
        <HeroContent>
          <HeroTitle>
            <AnimatedText>Accept Payments Privately.</AnimatedText> <br />
            <AnimatedText delay="0.2s">Launch a Merchant Business.</AnimatedText> <br />
            <Highlight className="highlight-animate">Bring Others Into Your Private Gateway.</Highlight>
          </HeroTitle>
          <HeroDescription className="animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <strong>A revolutionary course</strong> that teaches you to set up your own private payment processing system — <em>outside traditional banks</em>, beyond Stripe & PayPal. Discover a powerful new income stream.
          </HeroDescription>
        </HeroContent>
      </HeroSection>

      {/* Two Column Section */}
      <TwoColumnSection>
        {/* Problem Card */}
        <ProblemCard className="animate-on-scroll">
          <ProblemTitle>
            <FaExclamationTriangle className="icon-float" />
            <span>The Problem: Merchant Accounts Are Broken</span>
          </ProblemTitle>
          <ProblemList>
            <li><FaCheck className="icon-pulse" /> Frozen payments</li>
            <li><FaCheck className="icon-pulse" /> Chargebacks with no recourse</li>
            <li><FaCheck className="icon-pulse" /> KYC headaches and data exposure</li>
            <li><FaCheck className="icon-pulse" /> Account shutdowns without warning</li>
            <li><FaCheck className="icon-pulse" /> Zero control. High risk</li>
          </ProblemList>
          <ProblemConclusion>
            Whether you're selling online, accepting client payments, or operating as a PMA, you're at the mercy of Stripe, PayPal, Square and others. <br /><br />
            <strong>What happens when they say you're "too risky"?</strong><br />
            You lose your income overnight.
          </ProblemConclusion>
        </ProblemCard>

        {/* Solution Card */}
        <SolutionCard className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
          <SolutionTitle>
            <FaCheckCircle className="icon-float" />
            <span>The Solution: Become Your Own Merchant</span>
          </SolutionTitle>
          <SolutionList>
            <li><FaCheck className="icon-pulse" /> Accept payments via Trust or PMA</li>
            <li><FaCheck className="icon-pulse" /> Use ACH, Crypto, Invoices & Direct Transfer</li>
            <li><FaCheck className="icon-pulse" /> Build a business or become a reseller</li>
          </SolutionList>
          <SolutionConclusion>
            This course doesn't just show you how to get paid.<br />
            <strong>It gives you a full private commerce system</strong> — with real docs and real business strategy.
          </SolutionConclusion>
        </SolutionCard>
      </TwoColumnSection>
    </>
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

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const highlight = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Components with Animations
const HeroSection = styled.section`
  padding: 100px 5%;
  background: linear-gradient(to bottom, #f8fafc, #e0f2fe);
  font-family: 'Segoe UI', sans-serif;
  overflow: hidden;

  &.animate {
    animation: ${fadeIn} 0.8s ease-out forwards;
  }
`;

const HeroContent = styled.div`
  max-width: 1100px;
  margin: auto;
  text-align: center;
`;

const AnimatedText = styled.span`
  display: inline-block;
  opacity: 0;
  transform: translateY(20px);
  animation: ${slideUp} 0.8s forwards;
  animation-delay: ${props => props.delay || '0s'};
`;

const HeroTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Highlight = styled.span`
  color: #0ea5e9;
  position: relative;
  display: inline-block;

  &.highlight-animate {
    animation: ${highlight} 8s ease infinite;
    background: linear-gradient(90deg, #0ea5e9, #3b82f6, #0ea5e9);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  color: #475569;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(20px);

  &.animate {
    animation: ${slideUp} 0.8s ease-out forwards;
  }

  strong {
    color: #0ea5e9;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TwoColumnSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 80px 5%;
  background: linear-gradient(to bottom, #e0f2fe, #f0f9ff);
  gap: 40px;
  font-family: 'Segoe UI', sans-serif;
`;

const CardBase = styled.div`
  flex: 1;
  min-width: 320px;
  background: #ffffff;
  border-radius: 14px;
  padding: 40px 30px;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  transform: translateY(30px);

  &.animate {
    animation: ${slideUp} 0.8s ease-out forwards;
  }

  &:hover {
    transform: translateY(-5px) !important;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  }
`;

const ProblemCard = styled(CardBase)`
  box-shadow: 0 16px 40px rgba(239, 68, 68, 0.15);
  border-left: 6px solid #ef4444;
`;

const SolutionCard = styled(CardBase)`
  box-shadow: 0 16px 40px rgba(14, 165, 233, 0.15);
  border-left: 6px solid #0ea5e9;
`;

const ProblemTitle = styled.h2`
  font-size: 2em;
  color: #ef4444;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }

  span {
    display: inline-block;
  }

  .icon-float {
    animation: ${float} 3s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const SolutionTitle = styled.h2`
  font-size: 2em;
  color: #0ea5e9;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }

  span {
    display: inline-block;
  }

  .icon-float {
    animation: ${float} 3s ease-in-out infinite 0.5s;
  }

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const ListBase = styled.ul`
  list-style: none;
  padding-left: 0;
  font-size: 1rem;

  li {
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateX(5px);
    }
  }

  svg {
    margin-right: 10px;
    width: 18px;
    height: 18px;
  }

  .icon-pulse {
    animation: ${pulse} 1.5s ease infinite;
  }
`;

const ProblemList = styled(ListBase)`
  color: #444;

  svg {
    fill: #ef4444;
  }
`;

const SolutionList = styled(ListBase)`
  color: #334155;

  svg {
    fill: #0ea5e9;
  }
`;

const ProblemConclusion = styled.p`
  margin-top: 25px;
  font-weight: 500;
  color: #991b1b;
  line-height: 1.6;

  strong {
    color: #dc2626;
  }
`;

const SolutionConclusion = styled.p`
  margin-top: 25px;
  font-weight: 500;
  color: #0f172a;
  line-height: 1.6;

  strong {
    color: #0ea5e9;
  }
`;

export default PrivateMerchantSection;