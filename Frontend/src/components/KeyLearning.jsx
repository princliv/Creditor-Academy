import React from 'react';
import { motion } from 'framer-motion';
import begin from '../assets/begin.jpg';
import how from '../assets/how.jpg';
import acting from '../assets/acting.jpg';
import understand from '../assets/understand.jpg';
import truee from '../assets/true.jpg';
import publicc from '../assets/public.jpg';
import law from '../assets/law.jpg';

const KeyLearning = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.03,
      boxShadow: "0 15px 30px rgba(0,123,255,0.25)",
      transition: {
        duration: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Grid of Key Learnings */}
      <div style={{ 
        background: '#e8f4fd', 
        padding: '50px 5%', 
        margin: '0 auto', 
        width: '100%', 
        boxSizing: 'border-box' 
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '25px', 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          {/* Card 1 */}
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            style={{ 
              background: 'white', 
              borderRadius: '16px', 
              padding: '20px', 
              boxShadow: '0 5px 20px rgba(0,123,255,0.1)',
              transition: 'all 0.3s ease',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
          >
            <div style={{ marginBottom: '15px', textAlign: 'center' }}>
              <motion.img 
                src={understand} 
                alt="True History" 
                style={{ 
                  width: '100%', 
                  height: '180px', 
                  objectFit: 'cover', 
                  borderRadius: '12px'
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <h3 style={{ fontWeight: 'bold', color: '#0056b3', marginBottom: '10px', textAlign: 'center' }}>
              Understand Public vs Private
            </h3>
            <p style={{ fontSize: '14px', color: '#333', textAlign: 'center' }}>
              See the foundational difference between public identity and your sovereign private self.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            style={{ 
              background: 'white', 
              borderRadius: '16px', 
              padding: '20px', 
              boxShadow: '0 5px 20px rgba(0,123,255,0.1)',
              transition: 'all 0.3s ease',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
          >
            <div style={{ marginBottom: '15px', textAlign: 'center' }}>
              <motion.img 
                src={how} 
                alt="legal" 
                style={{ 
                  width: '100%', 
                  height: '180px', 
                  objectFit: 'cover', 
                  borderRadius: '12px'
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <h3 style={{ fontWeight: 'bold', color: '#0056b3', marginBottom: '10px', textAlign: 'center' }}>
              How Sovereignty Was Stripped
            </h3>
            <p style={{ fontSize: '14px', color: '#333', textAlign: 'center' }}>
              Understand the legal tricks and historical shifts that quietly removed your freedom.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            style={{ 
              background: 'white', 
              borderRadius: '16px', 
              padding: '20px', 
              boxShadow: '0 5px 20px rgba(0,123,255,0.1)',
              transition: 'all 0.3s ease',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
          >
            <div style={{ marginBottom: '15px', textAlign: 'center' }}>
              <motion.img 
                src={acting} 
                alt="operatee" 
                style={{ 
                  width: '100%', 
                  height: '180px', 
                  objectFit: 'cover', 
                  borderRadius: '12px'
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <h3 style={{ fontWeight: 'bold', color: '#0056b3', marginBottom: '10px', textAlign: 'center' }}>
              Acting as Public Property
            </h3>
            <p style={{ fontSize: '14px', color: '#333', textAlign: 'center' }}>
              Reveal why most citizens unknowingly operate as assets of the public system.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            style={{ 
              background: 'white', 
              borderRadius: '16px', 
              padding: '20px', 
              boxShadow: '0 5px 20px rgba(0,123,255,0.1)',
              transition: 'all 0.3s ease',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
          >
            <div style={{ marginBottom: '15px', textAlign: 'center' }}>
              <motion.img 
                src={begin} 
                alt="women" 
                style={{ 
                  width: '100%', 
                  height: '180px', 
                  objectFit: 'cover', 
                  borderRadius: '12px'
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <h3 style={{ fontWeight: 'bold', color: '#0056b3', marginBottom: '10px', textAlign: 'center' }}>
              Begin the Private Walk
            </h3>
            <p style={{ fontSize: '14px', color: '#333', textAlign: 'center' }}>
              Get equipped to enter the next phase — living lawfully and privately, with clarity.
            </p>
          </motion.div>
        </div>
      </div>

      {/* What You'll Learn in Sovereignty 101 */}
      <motion.section 
        style={{ 
          background: '#e8f4fd', 
          padding: '60px 5%', 
          fontFamily: "'Segoe UI', sans-serif" 
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <motion.h2 
            variants={titleVariants}
            style={{ color: '#007bff', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '40px' }}
          >
            <strong>
              <span style={{ color: 'rgb(126, 140, 141)' }}>What You'll Learn in</span>{' '}
              <span style={{ color: '#0056b3' }}>Sovereignty 101</span>
            </strong>
          </motion.h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '25px', 
            justifyContent: 'center'
          }}>
            {/* Card 1 */}
            <motion.div 
              variants={cardVariants}
              whileHover="hover"
              style={{ 
                background: 'white', 
                borderRadius: '20px', 
                padding: '25px 20px', 
                boxShadow: '0 10px 30px rgba(0,123,255,0.15)', 
                transition: 'all 0.3s ease',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
            >
              <motion.img 
                src={truee} 
                alt="True History" 
                style={{ 
                  width: '100%', 
                  height: '180px', 
                  objectFit: 'cover', 
                  borderRadius: '12px', 
                  marginBottom: '15px' 
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <h3 style={{ color: '#0056b3', marginBottom: '10px', textAlign: 'center' }}>
                <strong>True American History</strong>
              </h3>
              <p style={{ fontSize: '14px', color: '#333', textAlign: 'center' }}>
                Discover the real story of America: sovereignty, consent, and freedom before the corporate system took over.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              variants={cardVariants}
              whileHover="hover"
              style={{ 
                background: 'white', 
                borderRadius: '20px', 
                padding: '25px 20px', 
                boxShadow: '0 10px 30px rgba(0,123,255,0.15)', 
                transition: 'all 0.3s ease',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
            >
              <motion.img 
                src={publicc} 
                alt="Public vs Private" 
                style={{ 
                  width: '100%', 
                  height: '180px', 
                  objectFit: 'cover', 
                  borderRadius: '12px', 
                  marginBottom: '15px' 
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <h3 style={{ color: '#0056b3', marginBottom: '10px', textAlign: 'center' }}>
                <strong>Public vs Private</strong>
              </h3>
              <p style={{ fontSize: '14px', color: '#333', textAlign: 'center' }}>
                Learn how your identity was turned into a legal fiction and how to stand in your true, private status.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              variants={cardVariants}
              whileHover="hover"
              style={{ 
                background: 'white', 
                borderRadius: '20px', 
                padding: '25px 20px', 
                boxShadow: '0 10px 30px rgba(0,123,255,0.15)', 
                transition: 'all 0.3s ease',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
            >
              <motion.img 
                src={law} 
                alt="Law & Jurisdiction" 
                style={{ 
                  width: '100%', 
                  height: '180px', 
                  objectFit: 'cover', 
                  borderRadius: '12px', 
                  marginBottom: '15px' 
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <h3 style={{ color: '#0056b3', marginBottom: '10px', textAlign: 'center' }}>
                <strong>Law & Jurisdiction</strong>
              </h3>
              <p style={{ fontSize: '14px', color: '#333', textAlign: 'center' }}>
                Understand the shift from common law to admiralty and how modern courts operate by contract.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default KeyLearning;