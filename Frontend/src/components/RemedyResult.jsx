import React from 'react';
import { motion } from 'framer-motion';
import CourseMatters from '../assets/course_matters.jpg';
import RemedyResult1 from '../assets/Remedy_Result_1.jpg';
import RemedyResult2 from '../assets/Remedy_Result_2.jpg';
import RemedyResult3 from '../assets/Remedy_Result_3.jpg';
import RemedyResult4 from '../assets/Remedy_Result_4.jpg';
import RemedyResult5 from '../assets/Remedy_Result_5.jpg';

const cardVariants = {
  hover: { y: -8, transition: { duration: 0.3 } }
};

const results = [
  {
    title: 'Improve Your Credit Score',
    desc: 'Gain 50–200 points legally and strategically.',
    image: RemedyResult1
  },
  {
    title: 'End Collector Harassment',
    desc: 'Eliminate illegal threats and regain peace.',
    image: RemedyResult2
  },
  {
    title: 'Settle Debt for Less',
    desc: 'Negotiate and discharge debt at 10–30% value.',
    image: RemedyResult3
  },
  {
    title: 'Lawfully Discharge Debt',
    desc: 'Use UCC tools and remedy notices to take action.',
    image: RemedyResult4
  },
  {
    title: 'Build a Legal Paper Trail',
    desc: 'Document your path to sue or protect your rights.',
    image: RemedyResult5
  }
];

const bonuses = [
  {
    title: 'Free Personal Credit eBook',
    desc: 'Your personal credit breakthrough guide'
  },
  {
    title: 'Remedy Game Strategy Cards',
    desc: 'Play-to-learn tools for legal empowerment'
  },
  {
    title: 'Bonus IRS Discharge Tactics',
    desc: 'Learn how to challenge debt at the source'
  },
  {
    title: 'Extra Creditors Academy Courses',
    desc: 'Expand your sovereignty & financial power'
  }
];

export default function RemedyResult() {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* RESULTS YOU CAN EXPECT */}
      <section style={{ padding: '80px 6%', background: 'linear-gradient(to bottom, #eef5ff, #f4f6f8)' }}>
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <h2 style={{ fontSize: '2rem', color: '#0056b3', marginBottom: 10 }}>
            <strong style={{ color: '#3498db' }}>RESULTS YOU CAN EXPECT</strong>
          </h2>
          <p style={{ color: '#595f66', fontSize: '1.05rem' }}>
            Real transformation. Real power — in your hands.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 25,
          maxWidth: 1200,
          margin: 'auto'
        }}>
          {results.map((res, index) => (
            <motion.div
              key={index}
              whileHover="hover"
              variants={cardVariants}
              style={{
                background: '#ffffff',
                borderRadius: 12,
                padding: 25,
                boxShadow: '0 6px 16px rgba(0,0,0,0.06)',
                transition: 'transform 0.3s'
              }}
            >
              <img
                src={res.image}
                alt={res.title}
                style={{ width: '100%', height: 'auto', borderRadius: 8, marginBottom: 15 }}
              />
              <h4 style={{ color: '#0056b3', fontSize: '1.1rem', marginBottom: 10 }}>{res.title}</h4>
              <p style={{ color: '#595f66', fontSize: '0.95rem' }}>{res.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LIMITED TIME BONUS */}
      <section style={{
        padding: '70px 6%',
        background: 'linear-gradient(to right, #eef5ff, #f4f6f8)',
        color: '#2c3e50',
        borderRadius: 14,
        boxShadow: '0 8px 18px rgba(0,0,0,0.05)'
      }}>
        <div style={{ textAlign: 'center', maxWidth: 900, margin: 'auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: 10, color: '#0056b3' }}>
            <strong style={{ color: '#3498db' }}>LIMITED TIME BONUS</strong>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#595f66', marginBottom: 40 }}>
            Enroll Now & Get Access to the Exclusive <strong>Masterclass Remedy Vault</strong>
          </p>
        </div>

        <div style={{ maxWidth: 2000, margin: 'auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 30
          }}>
            {bonuses.map((bonus, index) => (
              <motion.div
                key={index}
                whileHover="hover"
                variants={cardVariants}
                style={{
                  background: '#ffffff',
                  borderRadius: 12,
                  padding: 20,
                  boxShadow: '0 6px 16px rgba(0,0,0,0.05)',
                  transition: 'transform 0.3s'
                }}
              >
                <h4 style={{ marginBottom: 8, fontSize: '1rem', fontWeight: 600, color: '#0056b3' }}>{bonus.title}</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#595f66' }}>{bonus.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
