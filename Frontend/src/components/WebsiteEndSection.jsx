import React from 'react';
import { FaCheckCircle, FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SEOoptimized from '../assets/SEOoptimized.jpg';
import BusinessFunctionality from '../assets/BusinessFunctionality.jpg';
import MonthlyMaintainance from '../assets/MonthlyMaintainance.jpg';
import CustomWebsite from '../assets/CustomWebsite.jpg';
import { useNavigate } from 'react-router-dom';

const WebsiteEndSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
 const navigate = useNavigate();
  const handleClick = () => {
    navigate('/ContactSection'); // Make sure this route exists in your app
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    offscreen: {
      y: 100,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeIn"
      }
    }
  };

  const slideInVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const scaleUpVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const sectionStyle = {
    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
    padding: '100px 5%',
  };

  const headingContainerStyle = {
    textAlign: 'center',
    marginBottom: '80px',
  };

  const headingStyle = {
    fontSize: 'clamp(2.2rem, 4vw, 3rem)',
    color: '#1a202c',
    marginBottom: '25px',
    fontWeight: 800,
    fontFamily: "'Poppins', sans-serif",
    position: 'relative',
    display: 'inline-block',
  };

  const subHeadingStyle = {
    fontSize: '1.15rem',
    color: '#64748b',
    maxWidth: '700px',
    margin: '0 auto',
    fontFamily: "'Inter', sans-serif",
    lineHeight: 1.7,
  };

  const cardContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto 80px',
    gap: '60px',
    flexWrap: 'wrap',
    background: 'white',
    borderRadius: '20px',
    boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
    overflow: 'hidden',
    position: 'relative',
  };

  const imageContainerStyle = {
    flex: 1,
    minWidth: '300px',
    position: 'relative',
  };

  const imageStyle = {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.5s ease',
  };

  const badgeStyle = {
    position: 'absolute',
    top: '25px',
    left: '25px',
    background: 'rgba(59, 130, 246, 0.95)',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '25px',
    fontWeight: 600,
    fontSize: '0.95rem',
  };

  const contentContainerStyle = {
    flex: 1,
    minWidth: '300px',
    padding: '50px',
  };

  const featureHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '30px',
  };

  const featureTitleStyle = {
    fontSize: '2rem',
    margin: 0,
    fontWeight: 800,
    color: '#1e293b',
    fontFamily: "'Poppins', sans-serif",
  };

  const listStyle = {
    fontSize: '1.1rem',
    color: '#475569',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const listItemStyle = {
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'flex-start',
  };

  const checkIconStyle = {
    marginRight: '15px',
    flexShrink: 0,
    marginTop: '3px',
  };

  const dividerStyle = {
    marginTop: '35px',
  };

  const whyChooseSectionStyle = {
    padding: '120px 5%',
    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
    position: 'relative',
    overflow: 'hidden',
  };

  const cardStyle = {
    flex: '0 0 auto',
    width: '360px',
    position: 'relative',
    height: '360px',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    transition: 'all 0.4s ease',
  };

  const cardBackgroundStyle = {
    position: 'absolute',
    inset: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const cardContentStyle = {
    position: 'absolute',
    bottom: 0,
    padding: '30px',
    width: '100%',
    background: 'linear-gradient(transparent, rgba(0,0,0,0.85))',
  };

  const ctaSectionStyle = {
    position: 'relative',
    padding: '140px 5%',
    background: 'linear-gradient(90deg, #62cff4, #30a1e3)',
    overflow: 'hidden',
    textAlign: 'center',
  };

  const ctaContentStyle = {
    position: 'relative',
    zIndex: 1,
    maxWidth: '900px',
    margin: '0 auto',
  };

  return (
    <>
      <style>
        {`
          @keyframes float {
            0% { transform: translate(0, 0); }
            50% { transform: translate(20px, 20px); }
            100% { transform: translate(0, 0); }
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          @keyframes wave {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
      
      {/* What's Included Section */}
      <section style={sectionStyle}>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          style={headingContainerStyle}
        >
          <motion.h3 
            variants={itemVariants}
            style={headingStyle} 
            aria-label="What's Included"
          >
            What's <span style={{ color: '#3598db' }}>Included</span>
            <svg style={{ position: 'absolute', bottom: '-15px', left: 0, width: '100%' }} viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,10 Q100,25 200,10" stroke="#3598db" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </motion.h3>
          <motion.p 
            variants={itemVariants}
            style={subHeadingStyle}
          >
            Everything you need for a powerful online presence, crafted with precision and care.
          </motion.p>
        </motion.div>
        
        {/* Custom Website Design */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, margin: "-100px" }}
          variants={cardVariants}
          style={cardContainerStyle}
        >
          <div style={imageContainerStyle}>
            <motion.img
              src={CustomWebsite}
              alt="Custom Design"
              style={imageStyle}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
            <div style={badgeStyle}>Premium Feature</div>
          </div>
          <div style={contentContainerStyle}>
            <div style={featureHeaderStyle}>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
              >
                <FaCheckCircle size={44} color="#3b82f6" style={{ marginRight: '15px' }} />
              </motion.div>
              <h4 style={featureTitleStyle}>
                Custom <span style={{ color: '#3b82f6' }}>Website Design</span>
              </h4>
            </div>
            <ul style={listStyle}>
              <motion.li 
                style={listItemStyle}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaCheck size={24} color="#10b981" style={checkIconStyle} />
                <span>Unique layout tailored to your brand with creative direction.</span>
              </motion.li>
              <motion.li 
                style={listItemStyle}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaCheck size={24} color="#10b981" style={checkIconStyle} />
                <span>Fully responsive across all devices with adaptive design.</span>
              </motion.li>
              <motion.li 
                style={listItemStyle}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaCheck size={24} color="#10b981" style={checkIconStyle} />
                <span>Clean, modern design optimized for maximum user engagement.</span>
              </motion.li>
            </ul>
            <div style={dividerStyle}>
              <svg width="100%" height="10" viewBox="0 0 300 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,5 Q75,10 150,5 T300,5" stroke="#e2e8f0" strokeWidth="2" fill="none" strokeDasharray="5,5" />
              </svg>
            </div>
          </div>
        </motion.div>
        
        {/* Monthly Maintenance */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, margin: "-100px" }}
          variants={cardVariants}
          style={{ ...cardContainerStyle, flexDirection: 'row-reverse' }}
        >
          <div style={imageContainerStyle}>
            <motion.img
              src={MonthlyMaintainance}
              alt="Maintenance"
              style={imageStyle}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
            <div style={{ ...badgeStyle, background: 'rgba(239, 68, 68, 0.95)', right: '25px', left: 'auto' }}>Essential</div>
          </div>
          <div style={contentContainerStyle}>
            <div style={featureHeaderStyle}>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaCheckCircle size={44} color="#ef4444" style={{ marginRight: '15px' }} />
              </motion.div>
              <h4 style={featureTitleStyle}>
                Monthly <span style={{ color: '#ef4444' }}>Maintenance</span>
              </h4>
            </div>
            <ul style={listStyle}>
              <motion.li 
                style={listItemStyle}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaCheck size={24} color="#10b981" style={checkIconStyle} />
                <span>Regular updates and automated backups for peace of mind.</span>
              </motion.li>
              <motion.li 
                style={listItemStyle}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaCheck size={24} color="#10b981" style={checkIconStyle} />
                <span>24/7 security monitoring and threat prevention.</span>
              </motion.li>
              <motion.li 
                style={listItemStyle}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaCheck size={24} color="#10b981" style={checkIconStyle} />
                <span>Performance optimization and priority technical support.</span>
              </motion.li>
            </ul>
            <div style={dividerStyle}>
              <svg width="100%" height="10" viewBox="0 0 300 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,5 Q75,10 150,5 T300,5" stroke="#e2e8f0" strokeWidth="2" fill="none" strokeDasharray="5,5" />
              </svg>
            </div>
          </div>
        </motion.div>
        
        {/* Business Functionality */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, margin: "-100px" }}
          variants={cardVariants}
          style={cardContainerStyle}
        >
          <div style={imageContainerStyle}>
            <motion.img
              src={BusinessFunctionality}
              alt="Functionality"
              style={imageStyle}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
            <div style={{ ...badgeStyle, background: 'rgba(16, 185, 129, 0.95)' }}>Growth Focused</div>
          </div>
          <div style={contentContainerStyle}>
            <div style={featureHeaderStyle}>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <FaCheckCircle size={44} color="#10b981" style={{ marginRight: '15px' }} />
              </motion.div>
              <h4 style={featureTitleStyle}>
                Business <span style={{ color: '#10b981' }}>Functionality</span>
              </h4>
            </div>
            <ul style={listStyle}>
              <motion.li 
                style={listItemStyle}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaCheck size={24} color="#10b981" style={checkIconStyle} />
                <span>Interactive contact forms with spam protection.</span>
              </motion.li>
              <motion.li 
                style={listItemStyle}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaCheck size={24} color="#10b981" style={checkIconStyle} />
                <span>Seamless social media integration and sharing.</span>
              </motion.li>
              <motion.li 
                style={listItemStyle}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaCheck size={24} color="#10b981" style={checkIconStyle} />
                <span>Google Maps integration and live chat widgets.</span>
              </motion.li>
            </ul>
            <div style={dividerStyle}>
              <svg width="100%" height="10" viewBox="0 0 300 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,5 Q75,10 150,5 T300,5" stroke="#e2e8f0" strokeWidth="2" fill="none" strokeDasharray="5,5" />
              </svg>
            </div>
          </div>
        </motion.div>
        
        {/* SEO Optimized */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, margin: "-100px" }}
          variants={cardVariants}
          style={{ ...cardContainerStyle, flexDirection: 'row-reverse' }}
        >
          <div style={imageContainerStyle}>
            <motion.img
              src={SEOoptimized}
              alt="SEO Structure"
              style={imageStyle}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
            <div style={{ ...badgeStyle, background: 'rgba(245, 158, 11, 0.95)', right: '25px', left: 'auto' }}>Visibility Boost</div>
          </div>
          <div style={contentContainerStyle}>
            <div style={featureHeaderStyle}>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaCheckCircle size={44} color="#f59e0b" style={{ marginRight: '15px' }} />
              </motion.div>
              <h4 style={featureTitleStyle}>
                SEO <span style={{ color: '#f59e0b' }}>Optimized</span>
              </h4>
            </div>
            <ul style={listStyle}>
              <motion.li 
                style={listItemStyle}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaCheck size={24} color="#10b981" style={checkIconStyle} />
                <span>Blazing fast page loads for better rankings.</span>
              </motion.li>
              <motion.li 
                style={listItemStyle}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaCheck size={24} color="#10b981" style={checkIconStyle} />
                <span>Semantic HTML5 markup and optimized metadata.</span>
              </motion.li>
              <motion.li 
                style={listItemStyle}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaCheck size={24} color="#10b981" style={checkIconStyle} />
                <span>SEO-friendly URLs and content structure.</span>
              </motion.li>
            </ul>
            <div style={dividerStyle}>
              <svg width="100%" height="10" viewBox="0 0 300 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,5 Q75,10 150,5 T300,5" stroke="#e2e8f0" strokeWidth="2" fill="none" strokeDasharray="5,5" />
              </svg>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Why Choose Our Service Section */}
      <section style={whyChooseSectionStyle}>
        <svg
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="dots" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="6" cy="6" r="1.5" fill="#e2e8f0" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#dots)" />
        </svg>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          style={{ ...headingContainerStyle, position: 'relative', zIndex: 1 }}
        >
          <h3 style={headingStyle} aria-label="Why Choose Our Service">
            Why Choose <span style={{ color: '#3598db' }}>Our Service?</span>
            <svg style={{ position: 'absolute', bottom: '-20px', left: 0, width: '100%' }} viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,10 Q100,25 200,10" stroke="#3598db" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </h3>
          <p style={subHeadingStyle}>Premium web solutions designed to elevate your business and outperform competitors.</p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          style={{ display: 'flex', gap: '40px', minWidth: 'max-content', overflowX: 'auto', padding: '20px 0' }}
        >
          {/* SEO Optimization */}
          <motion.div
            variants={itemVariants}
            style={cardStyle}
            whileHover={{ 
              y: -10,
              boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
              transition: { duration: 0.3 }
            }}
          >
            <div style={{ ...cardBackgroundStyle, background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${SEOoptimized})` }} />
            <div style={cardContentStyle}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  <FaCheckCircle size={32} color="#3b82f6" style={{ marginRight: '15px' }} />
                </motion.div>
                <h4 style={{ color: 'white', fontSize: '1.5rem', margin: 0, fontFamily: "'Poppins', sans-serif" }}>SEO Optimization</h4>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.95)', fontFamily: "'Inter', sans-serif" }}>
                Boost rankings and get discovered with our expert SEO strategies.
              </p>
            </div>
            <div style={{ ...badgeStyle, right: '25px', left: 'auto' }}>Visibility</div>
          </motion.div>
          
          {/* Mobile-Friendly Design */}
          <motion.div
            variants={itemVariants}
            style={cardStyle}
            whileHover={{ 
              y: -10,
              boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
              transition: { duration: 0.3 }
            }}
          >
            <div style={{ ...cardBackgroundStyle, background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${BusinessFunctionality})` }} />
            <div style={cardContentStyle}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaCheckCircle size={32} color="#3b82f6" style={{ marginRight: '15px' }} />
                </motion.div>
                <h4 style={{ color: 'white', fontSize: '1.5rem', margin: 0, fontFamily: "'Poppins', sans-serif" }}>Mobile-Friendly Design</h4>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.95)', fontFamily: "'Inter', sans-serif" }}>
                Seamless design across all devices for a flawless user experience.
              </p>
            </div>
            <div style={{ ...badgeStyle, right: '25px', left: 'auto' }}>Responsive</div>
          </motion.div>
          
          {/* Custom Branding */}
          <motion.div
            variants={itemVariants}
            style={cardStyle}
            whileHover={{ 
              y: -10,
              boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
              transition: { duration: 0.3 }
            }}
          >
            <div style={{ ...cardBackgroundStyle, background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${CustomWebsite})` }} />
            <div style={cardContentStyle}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaCheckCircle size={32} color="#3b82f6" style={{ marginRight: '15px' }} />
                </motion.div>
                <h4 style={{ color: 'white', fontSize: '1.5rem', margin: 0, fontFamily: "'Poppins', sans-serif" }}>Custom Branding</h4>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.95)', fontFamily: "'Inter', sans-serif" }}>
                Reflect your mission with branding that stands out and inspires.
              </p>
            </div>
            <div style={{ ...badgeStyle, right: '25px', left: 'auto' }}>Brand Identity</div>
          </motion.div>
          
          {/* Strong Online Presence */}
          <motion.div
            variants={itemVariants}
            style={cardStyle}
            whileHover={{ 
              y: -10,
              boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
              transition: { duration: 0.3 }
            }}
          >
            <div style={{ ...cardBackgroundStyle, background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${BusinessFunctionality})` }} />
            <div style={cardContentStyle}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <FaCheckCircle size={32} color="#3b82f6" style={{ marginRight: '15px' }} />
                </motion.div>
                <h4 style={{ color: 'white', fontSize: '1.5rem', margin: 0, fontFamily: "'Poppins', sans-serif" }}>Strong Online Presence</h4>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.95)', fontFamily: "'Inter', sans-serif" }}>
                Build credibility with a professional and consistent web presence.
              </p>
            </div>
            <div style={{ ...badgeStyle, right: '25px', left: 'auto' }}>Credibility</div>
          </motion.div>
          
          {/* Secure Hosting */}
          <motion.div
            variants={itemVariants}
            style={cardStyle}
            whileHover={{ 
              y: -10,
              boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
              transition: { duration: 0.3 }
            }}
          >
            <div style={{ ...cardBackgroundStyle, background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${MonthlyMaintainance})` }} />
            <div style={cardContentStyle}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaCheckCircle size={32} color="#3b82f6" style={{ marginRight: '15px' }} />
                </motion.div>
                <h4 style={{ color: 'white', fontSize: '1.5rem', margin: 0, fontFamily: "'Poppins', sans-serif" }}>Secure Hosting</h4>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.95)', fontFamily: "'Inter', sans-serif" }}>
                Your website is hosted with security and reliability in mind.
              </p>
            </div>
            <div style={{ ...badgeStyle, right: '25px', left: 'auto' }}>Security</div>
          </motion.div>
          
          {/* Ongoing Support */}
          <motion.div
            variants={itemVariants}
            style={cardStyle}
            whileHover={{ 
              y: -10,
              boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
              transition: { duration: 0.3 }
            }}
          >
            <div style={{ ...cardBackgroundStyle, background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${MonthlyMaintainance})` }} />
            <div style={cardContentStyle}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaCheckCircle size={32} color="#3b82f6" style={{ marginRight: '15px' }} />
                </motion.div>
                <h4 style={{ color: 'white', fontSize: '1.5rem', margin: 0, fontFamily: "'Poppins', sans-serif" }}>Ongoing Support</h4>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.95)', fontFamily: "'Inter', sans-serif" }}>
                Our team is here to assist you long after your site launches.
              </p>
            </div>
            <div style={{ ...badgeStyle, right: '25px', left: 'auto' }}>Support</div>
          </motion.div>
        </motion.div>
      </section>
      
      {/* CTA Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scaleUpVariants}
        style={ctaSectionStyle}
      >
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="wave" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q12.5 25 25 50 T50 50 T75 50 T100 50 T125 50" stroke="rgba(255,255,255,0.15)" fill="none" strokeWidth="2.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#wave)" opacity="0.6" />
          </defs>
        </svg>
        <motion.div 
          style={{ position: 'absolute', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(255,255,255,0.2), transparent 70%)', top: '-60px', left: '-60px', filter: 'blur(60px)', borderRadius: '50%', animation: 'float 12s infinite ease-in-out' }}
          animate={{ 
            x: [0, 20, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          style={{ position: 'absolute', width: '450px', height: '450px', background: 'radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%)', bottom: '-120px', right: '-120px', filter: 'blur(70px)', borderRadius: '50%', animation: 'float 18s infinite ease-in-out reverse' }}
          animate={{ 
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <div style={ctaContentStyle}>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '25px', lineHeight: 1.4, fontFamily: "'Poppins', sans-serif" }} 
            aria-label="Ready to Transform Your Online Presence"
          >
            Ready to <span style={{ background: 'linear-gradient(to right, #ffffff, #d4eeff)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Transform</span> Your Online Presence?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.95)', marginBottom: '50px', lineHeight: 1.8, maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', fontFamily: "'Inter', sans-serif" }}
          >
            Let's build a powerful digital experience that drives results and delights your audience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
         <button 
      onClick={handleClick}
      style={{
        display: 'inline-block',
        background: 'white',
        color: '#30a1e3',
        padding: '18px 48px',
        borderRadius: '50px',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        textDecoration: 'none',
        border: '2px solid transparent',
        boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
        cursor: 'pointer'
      }}
    >
      Get Started Today
    </button>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default WebsiteEndSection;