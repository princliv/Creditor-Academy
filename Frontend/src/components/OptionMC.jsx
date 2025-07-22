import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import option1 from '../assets/option1.jpg';
import option2 from '../assets/option2.jpg';
import option3 from '../assets/option3.jpg';

const OptionMC = () => {
  const offers = [
    {
      image: option1,
      alt: "Option 1",
      title: "Option 1:",
      subtitle: "Extra Months On Us",
      description: "Get 2 additional months FREE — that's 14 months total for the price of 12.",
      savings: "($138 instant savings)",
      link: "https://quickclick.com/r/ylju71tqiulsto3pqq6w9mq9tbrnmn"
    },
    {
      image: option2,
      alt: "Option 2",
      title: "Option 2:",
      subtitle: "I Want Remedy Now!",
      description: "Get 50% off on 'I Want Remedy Now' Course. ($399 Cost).",
      savings: "($200 instant savings)",
      link: "https://quickclick.com/r/2ki208s0ma02pjgpkzsl1i7fy7pxot"
    },
    {
      image: option3,
      alt: "Option 3",
      title: "Option 3:",
      subtitle: "Cadillac Website, Get 50% Off on Setup Fee",
      description: "Launch your Cadillac website for $499 down (normally $1,000). Pay $49/month for support and hosting.",
      savings: "($501 instant savings)",
      link: "https://quickclick.com/r/rb2jlzfzukvlhucyksh35imhlmu85c"
    }
  ];

  return (
    <OffersSection
      as={motion.section}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <OffersContainer>
        {offers.map((offer, index) => (
          <CardWrapper
            key={index}
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.03 }}
          >
            <CardContent>
              <ImageContainer>
                <OfferImage src={offer.image} alt={offer.alt} />
              </ImageContainer>
              <OfferTitle>{offer.title}</OfferTitle>
              <OfferSubtitle>{offer.subtitle}</OfferSubtitle>
              <OfferDescription>{offer.description}</OfferDescription>
              <OfferSavings>{offer.savings}</OfferSavings>
              <JoinButton href={offer.link} target="_blank" rel="noopener noreferrer">
                Join Now
              </JoinButton>
            </CardContent>
          </CardWrapper>
        ))}
      </OffersContainer>
    </OffersSection>
  );
};

// Styled Components
const OffersSection = styled.section`
  padding: 40px 5%;
  background: #f9fcff;
  font-family: 'Poppins', sans-serif;
`;

const OffersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;

const CardWrapper = styled(motion.section)`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  padding: 20px;
  width: 100%;
  flex: 1 1 280px;
  max-width: 360px;
  text-align: center;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ImageContainer = styled.div`
  height: 180px;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    height: 160px;
  }
`;

const OfferImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const OfferTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const OfferSubtitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
  color: #007acc;
`;

const OfferDescription = styled.p`
  font-size: 15px;
  color: #444;
`;

const OfferSavings = styled.p`
  font-size: 15px;
  color: #28a745;
  font-weight: bold;
  margin-top: 10px;
`;

const JoinButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  background-color: #1890ff;
  color: white;
  border-radius: 25px;
  font-size: 15px;
  text-decoration: none;
  margin-top: auto;
  font-weight: 600;
  transition: background 0.3s ease;

  &:hover {
    background-color: #007be5;
  }
`;

export default OptionMC;
