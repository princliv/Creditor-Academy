import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import masterclassMembership from '../assets/masteclassmembership.png';
import { useNavigate } from 'react-router-dom';

const MasterHero = () => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate('/mastertnc');
  };

  return (
    <>
      {/* Banner with Motion */}
      <MotionBannerContainer
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <BannerImage src={masterclassMembership} alt="Masterclass Banner" />
      </MotionBannerContainer>

    
       {/* Enroll Button with Motion */}
      <ButtonContainer>
        <MotionSignUpButton
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 300 }}
          onClick={handleSignUp}
        >
          Sign up at $69/month
        </MotionSignUpButton>
      </ButtonContainer>

      {/* Video Section */}
      <VideoSection>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <SectionTitle>
            <span>Inside the Creditors Academy</span>{' '}
            <Highlight>Master Class</Highlight>
          </SectionTitle>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <SectionDescription>
            See what's possible when structure meets strategy. This short walkthrough shows the power of going private — the right way.
          </SectionDescription>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <VideoContainer>
            <VideoWrapper>
              <iframe
                src="https://drive.google.com/file/d/1KKlV8_rSO7eW0oMmPRUjc6tuf-X4bUnL/preview"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Creditors Academy Master Class Walkthrough"
              />
            </VideoWrapper>
          </VideoContainer>
        </motion.div>
      </VideoSection>
    </>
  );
};

// Styled Components
const MotionBannerContainer = styled(motion.div)`
  width: 100%;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  padding: 0;
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const ButtonContainer = styled.div`
  text-align: center;
  padding: 20px 0;
`;

const MotionSignUpButton = styled(motion.button)`
  background: linear-gradient(135deg, #0056b3, #1890ff);
  color: white;
  padding: 18px 40px;
  border-radius: 12px;
  font-size: 1.3rem;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  cursor: pointer;
  border: none;
  font-family: 'Poppins', sans-serif;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #007be5, #1da1f2);
  }
`;

const VideoSection = styled.section`
  padding: 80px 5%;
  background: linear-gradient(135deg, #e6f0ff, #f8fbff);
  font-family: 'Poppins', sans-serif;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #1e293b;
  margin-bottom: 20px;

  span {
    color: rgb(52, 73, 94);
  }
`;

const Highlight = styled.span`
  color: rgb(0, 86, 179);
`;

const SectionDescription = styled.p`
  font-size: 1.15rem;
  color: #475569;
  max-width: 700px;
  margin: 0 auto 40px;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
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

export default MasterHero;
