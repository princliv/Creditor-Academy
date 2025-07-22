import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ContactSection from './ContactSection';
import { 
  FaInfoCircle,
  FaCheck,
  FaTimes,
  FaExclamationCircle,
  FaArrowRight
} from 'react-icons/fa';

const ComparisonSectionPM = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Unique Difference Comparison Section */}
      <ComparisonContainer>
        <ComparisonTitle>
          <FaInfoCircle />
          What Makes <Highlight>Private Merchant</Highlight> Different?
        </ComparisonTitle>

        <ComparisonWrapper>
          {/* Traditional Side */}
          <TraditionalCard>
            <TraditionalTitle>Traditional Courses</TraditionalTitle>
            <TraditionalList>
              <li><FaTimes /> Teaches Stripe, PayPal, or cash apps</li>
              <li><FaTimes /> Exposes SSN and EIN to risk</li>
              <li><FaTimes /> No scaling support</li>
              <li><FaTimes /> No legal protection</li>
              <li><FaTimes /> Only theory — no tools</li>
            </TraditionalList>
          </TraditionalCard>

          {/* VS Circle */}
          <VSCircle>VS</VSCircle>

          {/* Private Merchant Side */}
          <PrivateCard>
            <PrivateTitle>Private Merchant</PrivateTitle>
            <PrivateList>
              <li><FaCheck /> Run independently via Trust or PMA</li>
              <li><FaCheck /> Protects your identity and privacy</li>
              <li><FaCheck /> Learn to become a reseller</li>
              <li><FaCheck /> Includes legal contracts and tools</li>
              <li><FaCheck /> Deploy real tools immediately</li>
            </PrivateList>
          </PrivateCard>
        </ComparisonWrapper>
      </ComparisonContainer>

      {/* Monetization Opportunity Section */}
      <MonetizationSection>
        <MonetizationWrapper>
          {/* Left Text */}
          <MonetizationContent>
            <MonetizationTitle>
              <FaExclamationCircle />
              Monetization Opportunity: Become a Reseller
            </MonetizationTitle>
            <MonetizationDescription>
              This course doesn't just teach you how to process payments — it opens the door to profit.
            </MonetizationDescription>

            <Checklist>
              <li><FaCheck /> Offer done-for-you setups for other PMAs, trusts, and private operators</li>
              <li><FaCheck /> Resell payment processing services to your clients</li>
              <li><FaCheck /> Create a new income stream in the fast-growing private commerce sector</li>
              <li><FaCheck /> Serve consultants, real estate investors, coaches & eCommerce brands</li>
              <li><FaCheck /> Keep <strong>100% of your client revenue</strong> — no middleman fees</li>
            </Checklist>

            <FinalStatement>
              You're not just a student. <Highlight>You're becoming a merchant strategist.</Highlight>
            </FinalStatement>
          </MonetizationContent>

          {/* Right Visual Box */}
          <MonetizationBox>
            <FaExclamationCircle size={48} />
            <h3>Ready to Monetize?</h3>
            <p>Gain lifetime tools & start offering white-glove setups to your clients immediately.</p>
            <MonetizationButton 
              onClick={() => navigate('/ContactSection')}
            >
              Bring Others Into Your Private Gateway <FaArrowRight />
            </MonetizationButton>
          </MonetizationBox>
        </MonetizationWrapper>
      </MonetizationSection>
    </>
  );
};

// Styled Components
const ComparisonContainer = styled.div`
  padding: 60px 5%;
  background: linear-gradient(to bottom, #f0f9ff, #e0f2fe);
  font-family: 'Segoe UI', sans-serif;
`;

const ComparisonTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;

  svg {
    width: 30px;
    height: 30px;
    fill: #0ea5e9;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const Highlight = styled.span`
  color: #0ea5e9;
`;

const ComparisonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
`;

const CardBase = styled.div`
  flex: 1;
  min-width: 280px;
  max-width: 450px;
  padding: 25px 20px;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border: 3px solid;
`;

const TraditionalCard = styled(CardBase)`
  background: #fff1f2;
  border-color: #ef4444;
`;

const PrivateCard = styled(CardBase)`
  background: #ecfeff;
  border-color: #0ea5e9;
`;

const VSCircle = styled.div`
  background: #0ea5e9;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 20px rgba(0,0,0,0.2);
  position: relative;
  z-index: 1;
  margin: 20px;

  @media (max-width: 768px) {
    margin: 20px auto;
  }
`;

const TitleBase = styled.h3`
  text-align: center;
  font-size: clamp(1.2rem, 2vw, 1.3rem);
  font-weight: bold;
  margin-bottom: 20px;
`;

const TraditionalTitle = styled(TitleBase)`
  color: #b91c1c;
`;

const PrivateTitle = styled(TitleBase)`
  color: #0284c7;
`;

const ListBase = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: clamp(0.9rem, 1.5vw, 1rem);

  li {
    margin-bottom: 14px;
    display: flex;
    align-items: flex-start;
    line-height: 1.4;
  }

  svg {
    width: 18px;
    height: 18px;
    margin-right: 10px;
    flex-shrink: 0;
    margin-top: 3px;
  }
`;

const TraditionalList = styled(ListBase)`
  color: #7f1d1d;

  svg {
    fill: #ef4444;
  }
`;

const PrivateList = styled(ListBase)`
  color: #0f172a;

  svg {
    fill: #0ea5e9;
  }
`;

const MonetizationSection = styled.div`
  padding: 60px 5%;
  background: #f9fafb;
  font-family: 'Segoe UI', sans-serif;
  color: #1e293b;
`;

const MonetizationWrapper = styled.div`
  max-width: 1100px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: center;
`;

const MonetizationContent = styled.div`
  flex: 1;
  min-width: 280px;
`;

const MonetizationTitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 800;
  margin-bottom: 16px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;

  svg {
    fill: #0ea5e9;
    width: 30px;
    height: 30px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const MonetizationDescription = styled.p`
  font-size: clamp(0.95rem, 1.5vw, 1.05rem);
  color: #475569;
  margin-bottom: 24px;
  line-height: 1.5;
`;

const Checklist = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 16px;
    display: flex;
    align-items: flex-start;
    line-height: 1.4;
    font-size: clamp(0.9rem, 1.5vw, 1rem);
  }

  svg {
    width: 20px;
    height: 20px;
    fill: #10b981;
    margin-right: 10px;
    flex-shrink: 0;
    margin-top: 3px;
  }

  strong {
    color: #0f766e;
  }
`;

const FinalStatement = styled.p`
  margin-top: 30px;
  font-weight: 600;
  color: #1e293b;
  font-size: clamp(1rem, 1.5vw, 1.1rem);
`;

const MonetizationBox = styled.div`
  flex: 1;
  min-width: 280px;
  background: linear-gradient(135deg, #f0f9ff, #dbeafe);
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 16px 40px rgba(0,0,0,0.06);
  text-align: center;

  h3 {
    font-size: clamp(1.2rem, 2vw, 1.4rem);
    font-weight: bold;
    color: #0f172a;
    margin-bottom: 10px;
  }

  p {
    color: #475569;
    font-size: clamp(0.95rem, 1.5vw, 1.05rem);
    line-height: 1.5;
  }

  svg {
    margin-bottom: 15px;
  }
`;

const MonetizationButton = styled.button`
  margin-top: 20px;
  background: #0ea5e9;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(14,165,233,0.25);
  transition: transform 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 20px auto 0;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

export default ComparisonSectionPM;