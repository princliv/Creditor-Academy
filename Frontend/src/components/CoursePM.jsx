import React from 'react';
import styled from 'styled-components';
import client from '../assets/client.jpg';
import launch from '../assets/launch.jpg';
import legal from '../assets/legal.jpg';
import merchant from '../assets/merchant.jpg';
import reseller from '../assets/reseller.jpg';

const CoursePM = () => {
  const cards = [
    {
      image: merchant,
      alt: "Merchant Setup",
      title: "PMA Merchant Setup",
      description: "Build your own private system under a Trust or PMA."
    },
    {
      image: legal,
      alt: "Templates",
      title: "Legal Templates",
      description: "ACH, crypto, invoice & eCheck templates ready-to-use."
    },
    {
      image: client,
      alt: "Client Onboarding",
      title: "Client Onboarding",
      description: "Privacy-first contracts & smooth client setup system."
    },
    {
      image: reseller,
      alt: "Reseller Option",
      title: "Reseller Option",
      description: "Offer full merchant setups to others as a service."
    },
    {
      image: launch,
      alt: "Launch Tools",
      title: "Launch Tools",
      description: "Everything you need to launch a merchant business."
    }
  ];

  return (
    <CourseSection>
      <SectionTitle>What You Build in This Course</SectionTitle>
      
      <CardsContainer>
        {cards.map((card, index) => (
          <Card key={index}>
            <CardImage src={card.image} alt={card.alt} />
            <CardContent>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </CardsContainer>
    </CourseSection>
  );
};

// Styled Components
const CourseSection = styled.section`
  background: linear-gradient(to right, #b3d9ff, #e0f0ff);
  background-size: cover;
  background-repeat: no-repeat;
  padding: 100px 5%;
  font-family: 'Poppins', sans-serif;
  color: #2c3e50;
  width: 100%;
  box-sizing: border-box;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 30px;
  color: #0056b3;
  font-weight: bold;
  margin-bottom: 40px;
`;

const CardsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  background: #fff;
  width: 290px;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  text-align: center;
  transition: all 0.3s ease;
  overflow: hidden;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 20px rgba(0,123,204,0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  color: #0056b3;
  font-size: 18px;
  margin: 0 0 8px;
`;

const CardDescription = styled.p`
  font-size: 14px;
`;

export default CoursePM;