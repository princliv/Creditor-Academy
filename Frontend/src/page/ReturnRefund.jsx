import React from 'react';
import { motion } from 'framer-motion';

const sectionStyle = {
  padding: '60px 5%',
  fontFamily: 'Poppins, sans-serif',
  color: '#2c3e50',
  background: '#eef5ff',
};

const headingStyle = {
  fontSize: '36px',
  fontWeight: '700',
  color: '#0056b3',
  marginBottom: '20px',
  textAlign: 'center',
};

const subheadingStyle = {
  fontSize: '22px',
  fontWeight: '600',
  marginBottom: '15px',
  color: '#2c3e50',
};

const paragraphStyle = {
  fontSize: '16px',
  lineHeight: '1.7',
  color: '#595f66',
  marginBottom: '20px',
  maxWidth: '900px',
};

const listStyle = {
  paddingLeft: '20px',
  marginBottom: '20px',
};

const listItemStyle = {
  fontSize: '16px',
  color: '#595f66',
  marginBottom: '10px',
};

const containerStyle = {
  backgroundColor: '#ffffff',
  padding: '30px',
  margin: '30px auto',
  borderRadius: '16px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  maxWidth: '1000px',
};

const ReturnRefund = () => {
  return (
    <div style={sectionStyle}>
      <motion.h1 
        style={headingStyle}
        initial={{ opacity: 0, y: -50 }} 
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        Return and Refund Policy
      </motion.h1>

      <motion.p 
        style={{ ...paragraphStyle, textAlign: 'center', fontStyle: 'italic', color: '#7f8c8d' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.2 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        Effective Date: 26 September 2024
      </motion.p>

      {/* Section 1 */}
      <motion.div style={containerStyle} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: 0.2 }} transition={{ delay: 0.1 }}>
        <h2 style={subheadingStyle}>1. No Refund Policy</h2>
        <p style={paragraphStyle}>
          At Creditor Academy, all purchases of memberships, courses, and business services are final. We do not offer refunds under any circumstances. Please ensure that you review all course details, membership benefits, and service descriptions carefully before making a purchase.
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div style={containerStyle} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: 0.2 }} transition={{ delay: 0.1 }}>
        <h2 style={subheadingStyle}>2. Exceptions</h2>
        <p style={paragraphStyle}>
          Since we do not offer refunds, there are no exceptions to this policy. In special cases where a technical issue prevents access to a purchased course or service, our support team will assist in resolving the issue, but no refunds will be provided.
        </p>
      </motion.div>

      {/* Section 3 */}
      <motion.div style={containerStyle} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: 0.2 }} transition={{ delay: 0.1 }}>
        <h2 style={subheadingStyle}>3. Course and Membership Access</h2>
        <ul style={listStyle}>
          <li style={listItemStyle}>Upon successful payment, you will gain immediate access to the purchased content.</li>
          <li style={listItemStyle}>Ensure compatibility with your device and internet connection before making a purchase.</li>
          <li style={listItemStyle}>Course and membership access is non-transferable.</li>
        </ul>
      </motion.div>

      {/* Section 4 */}
      <motion.div style={containerStyle} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: 0.2 }} transition={{ delay: 0.1 }}>
        <h2 style={subheadingStyle}>4. Payment Disputes</h2>
        <ul style={listStyle}>
          <li style={listItemStyle}>If you have a payment issue or dispute, please contact us immediately at <a href="mailto:sales@creditoracademy.com" style={{ color: '#0056b3', textDecoration: 'underline' }}>sales@creditoracademy.com</a>.</li>
          <li style={listItemStyle}>Chargebacks and unauthorized disputes may result in the suspension of your account.</li>
        </ul>
      </motion.div>

      {/* Section 5 */}
      <motion.div style={containerStyle} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: 0.2 }} transition={{ delay: 0.1 }}>
        <h2 style={subheadingStyle}>5. Modifications to this Policy</h2>
        <p style={paragraphStyle}>
          We reserve the right to update this policy at any time. Any modifications will be effective immediately upon posting on our website.
        </p>
      </motion.div>

      {/* Section 6 */}
      <motion.div style={containerStyle} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: 0.2 }} transition={{ delay: 0.1 }}>
        <h2 style={subheadingStyle}>6. Contact Us</h2>
        <p style={paragraphStyle}>
          Creditor Academy<br />
          Email: <a href="mailto:counselor@creditoracademy.com" style={{ color: '#0056b3', textDecoration: 'underline' }}>counselor@creditoracademy.com</a>
        </p>
      </motion.div>
    </div>
  );
};

export default ReturnRefund;