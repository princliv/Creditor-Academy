import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Operate from '../assets/OperatePrivateFootball.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MembershipTnC from '../page/MembershipTnC';

const AppointmentBanner = () => {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    setAgreed(e.target.checked);
  };

  const handleClick = () => {
    if (agreed) {
      navigate('/ContactSection');
    }
  };

  return (
    <div style={{ width: '100%', fontFamily: 'Poppins, sans-serif' }}>
      {/* ✅ Animated Banner Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', overflow: 'hidden' }}
      >
        <img
          src={Operate}
          alt="OperateP"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </motion.div>

      {/* ✅ Terms + CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          textAlign: 'center',
          padding: '20px 10px',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        {/* Terms Checkbox */}
        <div style={{ marginBottom: '20px' }}>
          <input
            type="checkbox"
            id="termsCheckbox"
            checked={agreed}
            onChange={handleCheckboxChange}
            style={{ verticalAlign: 'middle', marginRight: '10px' }}
          />
          <label
            htmlFor="termsCheckbox"
            style={{
              fontSize: '1.1rem',
              color: '#333',
            }}
          >
            I agree to the{' '}
               <Link
            to="/mtc"
            style={{
              color: '#5dade2',
              textDecoration: 'none',
            }}
            onMouseOver={(e) => (e.target.style.color = '#1890FF')}
            onMouseOut={(e) => (e.target.style.color = '#5DADE2')}
          >
            Terms and Conditions
          </Link>
          </label>
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={handleClick}
          disabled={!agreed}
          whileHover={
            agreed
              ? {
                  scale: 1.05,
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
                }
              : {}
          }
          whileTap={agreed ? { scale: 0.98 } : {}}
          transition={{ type: 'spring', stiffness: 300 }}
          style={{
            background: agreed ? '#1890FF' : '#ccc',
            color: 'white',
            padding: '16px 30px',
            borderRadius: '10px',
            fontSize: '1.1rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            opacity: agreed ? '1' : '0.6',
            cursor: agreed ? 'pointer' : 'not-allowed',
            border: 'none',
            width: '100%',
            maxWidth: '380px',
          }}
        >
          Book an Appointment with Counselor
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AppointmentBanner;