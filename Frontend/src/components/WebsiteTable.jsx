import React from 'react';
import { motion } from 'framer-motion';
import { FaLayerGroup, FaCheck, FaArrowRight } from 'react-icons/fa';

const WebsiteTable = () => {
  // Enhanced Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: "backOut"
      }
    }),
    hover: {
      scale: 1.02,
      boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const promoVariants = {
    hidden: { scale: 0.95, opacity: 0, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const checkMarkVariants = {
    hidden: { scale: 0, rotate: -90 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.2,
      transition: { duration: 0.2 }
    }
  };

  const gradientTextVariants = {
    hidden: { backgroundPosition: '0% 50%' },
    visible: {
      backgroundPosition: '100% 50%',
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'linear'
      }
    }
  };

  const iconContainerVariants = {
    hover: {
      rotate: 10,
      scale: 1.1,
      transition: { duration: 0.3 }
    }
  };

  const arrowVariants = {
    hover: {
      x: 5,
      transition: { 
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 0.8
      }
    }
  };

  // Styles (same as before)
  const containerStyle = {
    maxWidth: '1200px',
    margin: '30px auto',
    padding: '0 5%',
    fontFamily: "'Inter', sans-serif",
  };

  const headingStyle = {
    textAlign: 'center',
    fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
    fontWeight: 800,
    color: '#1a202c',
    marginBottom: '40px',
    fontFamily: "'Poppins', sans-serif",
  };

  const tableContainerStyle = {
    marginTop: '40px',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '15px',
  };

  const theadStyle = {
    background: '#0284c7',
    color: '#000',
  };

  const thStyle = {
    padding: '16px 20px',
    background: 'rgb(2, 132, 199)',
    textAlign: 'center',
  };

  const thStyleSecondTable = {
    padding: '20px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    background: 'linear-gradient(to right, rgb(2, 132, 199), rgb(14, 165, 233))',
    color: 'white',
  };

  const rowStyle = {
    borderBottom: '1px solid #eee',
    transition: 'background 0.3s',
    background: 'white',
  };

  const tdStyle = {
    padding: '15px 20px',
    display: 'flex',
    alignItems: 'center',
  };

  const iconContainerStyle = {
    background: '#e0f2fe',
    width: '36px',
    height: '36px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '12px',
  };

  const textStyle = {
    fontWeight: 600,
    color: '#0c4a6e',
  };

  const centerTextStyle = {
    textAlign: 'center',
  };

  const totalRowStyle = {
    background: '#f9fafb',
    fontWeight: 600,
  };

  const promoStyle = {
    marginTop: '20px',
    marginBottom: '20px',
    background: 'linear-gradient(to right, #e0f2fe, #d4eeff)',
    padding: '30px',
    textAlign: 'center',
    borderRadius: '12px',
    boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
  };

  const secondTableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '1rem',
    fontFamily: "'Inter', sans-serif",
  };

  const featureTdStyle = {
    padding: '20px',
    fontWeight: 600,
    color: 'rgb(12, 74, 110)',
  };

  const checkStyle = {
    color: 'rgb(71, 71, 71)',
    fontSize: '16px',
    fontFamily: "'Google Sans', Arial, sans-serif",
  };

  const crossStyle = {
    color: 'rgb(239, 68, 68)',
    fontSize: '1.2rem',
  };

  const ctaButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    background: 'linear-gradient(to right, #0284c7, #0ea5e9)',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '50px',
    fontWeight: 'bold',
    fontSize: '1rem',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px',
    boxShadow: '0 4px 15px rgba(2, 132, 199, 0.3)'
  };

  return (
    <motion.div 
      style={containerStyle}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2 style={headingStyle} variants={itemVariants}>
        What <motion.span 
          style={{ 
            background: 'linear-gradient(90deg, #0284c7, #0ea5e9, #0284c7)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}
          variants={gradientTextVariants}
        >
          Creditor Academy
        </motion.span> Offers
      </motion.h2>

      <motion.div 
        style={tableContainerStyle} 
        variants={itemVariants}
        whileHover={{ 
          boxShadow: '0 15px 35px rgba(0,0,0,0.12)',
          transition: { duration: 0.3 }
        }}
      >
        <table style={tableStyle}>
          <thead style={theadStyle}>
            <motion.tr variants={itemVariants}>
              <th style={thStyle}>
                <h3 style={{ color: 'rgb(255, 255, 255)' }} aria-label="Website Components">
                  <strong>Website Components</strong>
                </h3>
              </th>
              <th style={thStyle}>
                <h3 style={{ color: 'rgb(255, 255, 255)' }} aria-label="Other Professionals">
                  <strong>Other Professionals</strong>
                </h3>
              </th>
            </motion.tr>
          </thead>
          <tbody>
            {[
              { feature: "Logo Design", price: "$400" },
              { feature: "UI/UX Design", price: "$500" },
              { feature: "Membership Login", price: "$800" },
              { feature: "Policy Pages", price: "$1200" },
              { feature: "Bank Credit Approval", price: "NA" },
              { feature: "Hosting & Deployment", price: "$400" },
              { feature: "Maintenance", price: "$300" }
            ].map((item, index) => (
              <motion.tr
                key={index}
                style={rowStyle}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={rowVariants}
                whileHover="hover"
              >
                <td style={tdStyle}>
                  <motion.div 
                    style={iconContainerStyle}
                    variants={iconContainerVariants}
                    whileHover="hover"
                  >
                    <FaLayerGroup size={18} color="#0369a1" />
                  </motion.div>
                  <div style={textStyle}>{item.feature}</div>
                </td>
                <td style={centerTextStyle}>{item.price}</td>
              </motion.tr>
            ))}
            <motion.tr 
              style={totalRowStyle}
              variants={itemVariants}
              whileHover={{ 
                backgroundColor: '#f0f9ff',
                transition: { duration: 0.3 }
              }}
            >
              <td style={{ padding: '16px 20px', fontWeight: 'bold' }}>Total Market Cost</td>
              <td style={{ ...centerTextStyle, fontWeight: 'bold', fontSize: '1.1rem' }}>$4000</td>
            </motion.tr>
          </tbody>
        </table>

        <motion.div 
          style={promoStyle}
          variants={promoVariants}
          whileHover="hover"
        >
          <h3 style={{ fontSize: '1.75rem', margin: 0, color: '#1a202c', fontWeight: 'bold', fontFamily: "'Poppins', sans-serif" }}>
            Choose the <span style={{ color: '#0284c7' }}>Basic Plan</span> and Save Over $3900!
          </h3>
          <p style={{ fontSize: '1.1rem', marginTop: '12px', color: '#4a5568', fontFamily: "'Inter', sans-serif" }}>
            Get starter features for <strong style={{ color: '#0284c7', fontSize: '1.2rem' }}>just $100 + $49 Monthly</strong> — No hidden costs!
          </p>
          <motion.button
            style={ctaButtonStyle}
            whileHover={{
              background: 'linear-gradient(to right, #0ea5e9, #0284c7)',
              boxShadow: '0 6px 20px rgba(2, 132, 199, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now
            <motion.span style={{ marginLeft: '8px' }} variants={arrowVariants} whileHover="hover">
              <FaArrowRight />
            </motion.span>
          </motion.button>
        </motion.div>

        <table style={secondTableStyle}>
          <thead>
            <motion.tr variants={itemVariants}>
              <th style={{ ...thStyleSecondTable, textAlign: 'left' }} aria-label="Feature">
                Feature
              </th>
              <th style={thStyleSecondTable} aria-label="$100 Starter Plan">
                $100 Starter Plan
              </th>
              <th style={thStyleSecondTable} aria-label="$1000 Cadillac Plan">
                $1000 Cadillac Plan
              </th>
            </motion.tr>
          </thead>
          <tbody>
            {[
              { feature: "Number of Pages", starter: "2-3 pages", cadillac: "5-7+ custom pages" },
              { feature: "Custom Logo", starter: "Basic text/logo", cadillac: "Premium design with revisions" },
              { feature: "Policy Pages", starter: "Basic templates", cadillac: "Custom-written & formatted" },
              { feature: "Contact Form", starter: "Basic with auto-email", cadillac: "Advanced with CRM sync" },
              { feature: "UI/UX Design", starter: "Clean layout", cadillac: "Brand-aligned premium design" },
              { feature: "Security (SSL)", starter: "✅ HTTPS", cadillac: "✅ HTTPS + Extra layers" },
              { feature: "Detail User Dashboard", starter: "❌", cadillac: "✅", isCheck: true },
              { feature: "Underwriter-Ready Structure", starter: "✅", cadillac: "✅", isCheck: true },
              { feature: "Mobile Responsive", starter: "✅", cadillac: "✅", isCheck: true },
              { feature: "Hosting & Maintenance", starter: "✅ Monthly", cadillac: "✅ Monthly" },
              { feature: "Member Login/Portal", starter: "❌", cadillac: "✅", isCheck: true },
              { feature: "Backend Integration", starter: "❌", cadillac: "✅ Admin/CMS", isCheck: true },
              { feature: "Blog/Resource Section", starter: "❌", cadillac: "✅", isCheck: true },
              { feature: "Chatbot/Live Chat", starter: "❌", cadillac: "✅", isCheck: true },
              { feature: "Appointment Booking", starter: "✅", cadillac: "✅ (e.g., Calendly)", isCheck: true },
              { feature: "SEO Optimization", starter: "❌", cadillac: "✅ Basic SEO setup", isCheck: true },
              { feature: "Client Training/Walkthrough", starter: "❌", cadillac: "✅ One-time call", isCheck: true }
            ].map((item, index) => (
              <motion.tr
                key={index}
                style={rowStyle}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={rowVariants}
                whileHover="hover"
              >
                <td style={featureTdStyle}>{item.feature}</td>
                <td style={centerTextStyle}>
                  {item.isCheck ? (
                    item.starter === "✅" ? (
                      <motion.div 
                        style={{ display: 'inline-block' }}
                        variants={checkMarkVariants}
                        whileHover="hover"
                      >
                        <FaCheck color="#10b981" />
                      </motion.div>
                    ) : item.starter === "❌" ? (
                      <span style={crossStyle}>✕</span>
                    ) : (
                      item.starter
                    )
                  ) : item.starter}
                </td>
                <td style={centerTextStyle}>
                  {item.isCheck ? (
                    <motion.div 
                      style={{ display: 'inline-block' }}
                      variants={checkMarkVariants}
                      whileHover="hover"
                    >
                      <FaCheck color="#10b981" />
                    </motion.div>
                  ) : item.cadillac}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  );
};

export default WebsiteTable;