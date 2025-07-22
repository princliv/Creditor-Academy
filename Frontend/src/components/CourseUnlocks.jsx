import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { 
  FaTrophy,
  FaFileDownload,
  FaSearch,
  FaMobileAlt,
  FaBookOpen
} from 'react-icons/fa';
import lmsPreview from '../assets/lms.jpg'; // Using your imported image

const CourseUnlocks = () => {
  const unlockItems = [
    {
      icon: <FaTrophy />,
      text: "Complete challenges to earn XP and access the modules"
    },
    {
      icon: <FaFileDownload />,
      text: "Download 100+ templates & contracts"
    },
    {
      icon: <FaSearch />,
      text: "Join optional reseller mentorship + toolkits"
    },
    {
      icon: <FaMobileAlt />,
      text: "Access everything on mobile 24/7"
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

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <UnlocksSection>
      <UnlocksContainer>
        {/* Text Column */}
        <TextColumn className="animate-on-scroll">
          <SectionTitle>
            This Course Unlocks Inside Your<br />
            <Highlight>Creditor Academy LMS</Highlight>
          </SectionTitle>
          
          <UnlockItems>
            {unlockItems.map((item, index) => (
              <UnlockItem 
                key={index}
                className="animate-on-scroll"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <IconWrapper>{item.icon}</IconWrapper>
                <UnlockText>{item.text}</UnlockText>
              </UnlockItem>
            ))}
          </UnlockItems>

          <EnrollBadge className="animate-on-scroll">
            Enroll once. Operate forever.
          </EnrollBadge>
        </TextColumn>

        {/* Highlight Card */}
        <HighlightCard className="animate-on-scroll">
          <PreviewImage src={lmsPreview} alt="LMS Preview" />
          <CardTitle>Inside the LMS Portal</CardTitle>
          <CardDescription>
            Get full access to all modules, templates, and live mentorship tools — all optimized for desktop and mobile. You're not just joining a course, you're unlocking a system built for sovereign service providers.
          </CardDescription>
          <DecorativeIcon>
            <FaBookOpen />
          </DecorativeIcon>
        </HighlightCard>
      </UnlocksContainer>
    </UnlocksSection>
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
const UnlocksSection = styled.section`
  padding: 100px 5%;
  background: linear-gradient(to right, #ffffff, #eef5ff);
  font-family: 'Poppins', sans-serif;
  position: relative;
  overflow: hidden;
`;

const UnlocksContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const TextColumn = styled.div`
  flex: 1 1 480px;
  min-width: 300px;
  opacity: 0;
  transform: translateY(20px);

  &.animate {
    animation: ${fadeIn} 0.8s ease-out forwards;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  font-weight: 700;
  color: #0056b3;
  margin-bottom: 20px;
  line-height: 1.3;
`;

const Highlight = styled.span`
  color: #3498db;
  animation: ${gradientFlow} 8s ease infinite;
  background: linear-gradient(90deg, #0056b3, #3498db, #0056b3);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
`;

const UnlockItems = styled.div`
  margin-top: 30px;
`;

const UnlockItem = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 86, 179, 0.1);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;

  &.animate {
    animation: ${fadeIn} 0.6s ease-out forwards;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    background-color: rgba(255, 255, 255, 0.95);
  }
`;

const IconWrapper = styled.div`
  margin-right: 15px;
  color: #0056b3;
  
  svg {
    width: 24px;
    height: 24px;
    animation: ${float} 3s ease-in-out infinite;
  }
`;

const UnlockText = styled.div`
  color: #2c3e50;
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.5;
`;

const EnrollBadge = styled.div`
  display: inline-block;
  padding: 14px 24px;
  background-color: #eef5ff;
  border: 2px solid #3498db;
  border-radius: 30px;
  font-size: clamp(0.9rem, 2vw, 1rem);
  font-weight: 600;
  color: #0056b3;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  cursor: default;
  margin-top: 20px;
  opacity: 0;
  transform: translateY(20px);

  &.animate {
    animation: ${fadeIn} 0.8s ease-out 0.4s forwards;
  }

  &:hover {
    background-color: #d6eaff;
    transform: translateY(-2px) scale(1.02);
  }
`;

const HighlightCard = styled.div`
  flex: 1 1 400px;
  min-width: 300px;
  background: linear-gradient(145deg, #eef5ff, #d8eefe);
  padding: 40px;
  border-radius: 20px;
  color: #2c3e50;
  position: relative;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0,0,0,0.08);
  opacity: 0;
  transform: translateY(20px);
  border: 1px solid rgba(0, 86, 179, 0.15);

  &.animate {
    animation: ${fadeIn} 0.8s ease-out 0.2s forwards;
  }

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const PreviewImage = styled.img`
  width: 100%;
  max-width: 100%;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  display: block;
  margin: 0 auto 25px;
  transition: transform 0.5s ease;

  ${HighlightCard}:hover & {
    transform: scale(1.02);
  }
`;

const CardTitle = styled.h3`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 600;
  margin-bottom: 20px;
  color: #0056b3;
`;

const CardDescription = styled.p`
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.6;
  color: #444;
`;

const DecorativeIcon = styled.div`
  position: absolute;
  bottom: -40px;
  right: -40px;
  opacity: 0.05;
  color: #2c3e50;
  
  svg {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 768px) {
    bottom: -30px;
    right: -30px;
    
    svg {
      width: 120px;
      height: 120px;
    }
  }
`;

export default CourseUnlocks;