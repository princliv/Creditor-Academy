import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CommitToGrowth = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });
  const [offerExpired, setOfferExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const currentMonth = now.getMonth();
      const nextMonth = new Date(currentYear, currentMonth + 1, 1);
      const endOfMonth = new Date(nextMonth.getTime() - 1000);
      const targetDate = new Date(`${endOfMonth.getFullYear()}-${String(endOfMonth.getMonth() + 1).padStart(2, '0')}-${String(endOfMonth.getDate()).padStart(2, '0')} 23:59:59 PST`).getTime();
      const nowTime = new Date().getTime();
      const distance = targetDate - nowTime;

      if (distance < 0) {
        setOfferExpired(true);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days < 10 ? `0${days}` : days.toString(),
        hours: hours < 10 ? `0${hours}` : hours.toString(),
        minutes: minutes < 10 ? `0${minutes}` : minutes.toString(),
        seconds: seconds < 10 ? `0${seconds}` : seconds.toString()
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <GrowthSection
      as={motion.section}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <SectionTitle>
          <span>Commit to Growth –</span> <Highlight>Pick 1 of 3 Limited Time Offers</Highlight>
        </SectionTitle>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <SectionDescription>
          Sign up for a full year of Masterclass membership $828 annually and choose ONE of these powerful bonuses:
        </SectionDescription>
      </motion.div>

      <CountdownContainer
        as={motion.div}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {offerExpired ? (
          <ExpiredMessage>Offer Expired!</ExpiredMessage>
        ) : (
          <>
            <CountdownHeader>⏳ Hurry! Offer Ends in:</CountdownHeader>
            <CountdownTimer>
              {['days', 'hours', 'minutes', 'seconds'].map((unit, idx) => (
                <TimeUnit key={idx}>
                  <AnimatedTimeValue
                    key={timeLeft[unit]}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {timeLeft[unit]}
                  </AnimatedTimeValue>
                  <TimeLabel>{unit.charAt(0).toUpperCase() + unit.slice(1)}</TimeLabel>
                </TimeUnit>
              ))}
            </CountdownTimer>
          </>
        )}
      </CountdownContainer>
    </GrowthSection>
  );
};

// Styled Components
const GrowthSection = styled.section`
  max-width: 1200px;
  margin: auto;
  padding: 40px 20px;
  font-family: 'Poppins', sans-serif;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;

  span {
    color: rgb(52, 73, 94);
  }

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const Highlight = styled.span`
  color: rgb(0, 86, 179);
`;

const SectionDescription = styled.p`
  max-width: 700px;
  margin: 0 auto 40px;
  font-size: 16px;
  color: #555;
  text-align: center;
  padding: 0 10px;
`;

const CountdownContainer = styled.div`
  text-align: center;
  background: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  margin-bottom: 40px;
`;

const CountdownHeader = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #d32f2f;
  margin-bottom: 10px;
`;

const CountdownTimer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
  flex-wrap: wrap;
`;

const TimeUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 60px;
`;

const AnimatedTimeValue = styled(motion.span)`
  font-size: 28px;
`;

const TimeLabel = styled.p`
  font-size: 14px;
  color: #555;
  margin-top: 4px;
`;

const ExpiredMessage = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #d32f2f;
`;

export default CommitToGrowth;
