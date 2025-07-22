import React, { useState } from "react";
import  Sophomore from '../assets/BecomePrivateBanner.png'; // Adjust the path if necessary
import MembershipTnC from "../page/MembershipTnC";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


const BannerSophomore = () => {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setAgreed(!agreed);
  };

  const handleClick = () => {
    if (agreed) {
         navigate('/ContactSection');
    }
  };

  return (
    <div style={{ width: "100%", fontFamily: "Poppins, sans-serif", textAlign: "center" }}>
      {/* Banner Image */}
      <div style={{ width: "100%", position: "relative", overflow: "hidden" }}>
        <img
          src={Sophomore}
          alt="Creditor Academy Banner"
          style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px", maxWidth: "100%" }}
        />
      </div>

      {/* Checkbox and Book Appointment Button */}
      <div style={{ textAlign: 'center', padding: '20px 0' }}>
        {/* Checkbox */}
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
              fontFamily: 'Poppins, sans-serif',
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

        {/* Book Appointment Button */}
        <button
          onClick={handleClick}
          disabled={!agreed}
          style={{
            display: 'inline-block',
            background: agreed ? '#1890FF' : '#ccc',
            color: 'white',
            padding: '18px 40px',
            borderRadius: '10px',
            fontSize: '1.3rem',
            fontFamily: 'Poppins, sans-serif',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            opacity: agreed ? '1' : '0.5',
            cursor: agreed ? 'pointer' : 'not-allowed',
            border: 'none',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => {
            if (agreed) {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
            }
          }}
          onMouseOut={(e) => {
            if (agreed) {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
            }
          }}
        >
          Book an Appointment with Counselor
        </button>
      </div>
    </div>
  );
};

export default BannerSophomore;
