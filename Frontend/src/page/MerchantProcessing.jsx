import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Banner from '../assets/PrivateMerchant_Banner.jpg';
import flex from '../assets/PMP_Flex.jpg'
import PMP1 from '../assets/PMP1.jpg';
import PMP2 from '../assets/PMP2.jpg';
import PMP3 from '../assets/PMP3.jpg';
import PMP4 from '../assets/PMP4.jpg';
import PMP5 from '../assets/PMP5.jpg';
import OurPlatform from '../components/PMPOffers';

const MerchantProcessing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollCarousel = (direction) => {
    const container = document.getElementById('carousel');
    const scrollAmount = 380;
    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  };

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', background: '#eef5ff', overflowX: 'hidden' }}>
  {/* Banner */}
  <motion.div
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    style={{
      width: '100%',
      height: 'auto',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <img
      src={Banner}
      alt="Banner"
      style={{
        width: '100%',
        height: 'auto',
        maxHeight: '400px',
        objectFit: 'cover',
        display: 'block',
      }}
    />

    {/* Responsive Decorative Bubble */}
    <div
      style={{
        position: 'absolute',
        top: 'clamp(-140px, -20vw, -80px)',
        right: 'clamp(-100px, -15vw, -40px)',
        width: 'clamp(150px, 30vw, 300px)',
        height: 'clamp(150px, 30vw, 300px)',
        background: 'radial-gradient(circle, #dbeafe, transparent)',
        zIndex: 0,
        borderRadius: '50%',
        pointerEvents: 'none',
      }}
    />
  </motion.div>

  {/* CTA Button */}
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      gap: 20,
      margin: 'clamp(20px, 5vw, 60px) 0',
      padding: '0 5%',
    }}
  >
    <a
      href="http://dashboard.elitepay.pro/form/creditor-academy-paulr-prevet"
      style={{
        backgroundColor: '#5dade2',
        color: 'white',
        padding: '16px 32px',
        fontSize: 18,
        fontWeight: 'bold',
        borderRadius: 8,
        textDecoration: 'none',
        transition: 'all 0.3s ease-out',
        display: 'inline-block',
      }}
      onMouseOver={(e) => {
        e.target.style.transform = 'scale(1.07)';
        e.target.style.boxShadow = '0 6px 18px rgba(0,0,0,0.3)';
      }}
      onMouseOut={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = 'none';
      }}
    >
      Apply Now
    </a>
  </div>

      {/* Header Section */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: 36, color: '#333', marginBottom: 20 }}
        >
          <strong>
            <span style={{ color: '#3498db' }}>Creditor Academy </span>
            <span style={{ color: '#95a5a6' }}>Private Merchant Processing</span>
          </strong>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: 24, color: '#666', marginBottom: 40 }}
        >
          Process Payments Privately. Get Paid Securely. Stay in Control.
        </motion.h2>
      </div>

      {/* Private Merchant Processing Section */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#f9f9f9',
          borderRadius: 16,
          boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
          padding: '40px 30px',
          maxWidth: 1200,
          margin: '40px auto',
        }}
      >
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: '1 1 500px', paddingRight: 20 }}
        >
          <h2 style={{ fontSize: 28, color: '#1a1a1a', marginBottom: 16 }}>
            <strong>
              <span style={{ color: '#7e8c8d' }}>Welcome to the payment gateway for</span>
              <br />
              <span style={{ color: '#0066cc' }}>private operators</span>
            </strong>
          </h2>
          <p style={{ fontSize: 16, color: '#333', lineHeight: 1.6 }}>
            Creditor Academy Private Merchant Processing gives you the power to accept payments
            without compromising your sovereignty, your privacy, or your mission. Built on the robust
            NMI + International Banking platform + Shopify, we provide elite-level processing
            designed for those who operate in the private domain — not under the thumb of Big Tech or
            Big Banks.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: '1 1 400px', textAlign: 'center', marginTop: 20 }}
        >
          <img
            src={flex}
            alt="Private Merchant"
            style={{ width: '100%', maxWidth: 400, height: 'auto', borderRadius: 12 }}
          />
        </motion.div>
      </div>

      {/* Why Choose Us Section */}
        <div
        style={{
            width: '100%',
            padding: '40px 80px',
            textAlign: 'center',
            background: 'linear-gradient(to bottom, #ffffff, #eaf1fa)',
            position: 'relative',
            boxSizing: 'border-box',
        }}
        >
        <h2 style={{ fontSize: 32, color: '#1f7ae0', fontWeight: 'bold', marginBottom: 20 }}>
            Why Choose <span style={{ color: '#7e8c8d' }}>Creditor Academy?</span>
        </h2>

        {/* Arrows */}
        <button
            onClick={() => scrollCarousel(-1)}
            style={{
            position: 'absolute',
            top: '50%',
            left: 10,
            transform: 'translateY(-50%)',
            background: 'rgba(31,122,224,0.2)',
            color: '#1f7ae0',
            border: 'none',
            borderRadius: '50%',
            width: 40,
            height: 40,
            fontSize: 20,
            cursor: 'pointer',
            zIndex: 1,
            transition: 'background 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.background = 'rgba(31,122,224,0.4)')}
            onMouseOut={(e) => (e.target.style.background = 'rgba(31,122,224,0.2)')}
        >
            ❮
        </button>
        <button
            onClick={() => scrollCarousel(1)}
            style={{
            position: 'absolute',
            top: '50%',
            right: 10,
            transform: 'translateY(-50%)',
            background: 'rgba(31,122,224,0.2)',
            color: '#1f7ae0',
            border: 'none',
            borderRadius: '50%',
            width: 40,
            height: 40,
            fontSize: 20,
            cursor: 'pointer',
            zIndex: 1,
            transition: 'background 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.background = 'rgba(31,122,224,0.4)')}
            onMouseOut={(e) => (e.target.style.background = 'rgba(31,122,224,0.2)')}
        >
            ❯
        </button>

        {/* Carousel */}
        <div
            id="carousel"
            style={{
            display: 'flex',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            gap: 20,
            padding: '40px 0',
            marginTop: 20,
            marginBottom: 10,
            boxSizing: 'border-box',
            }}
        >
            {[
            {
                img: PMP1,
                title: 'Private Merchant Accounts',
                desc: 'You’re not “renting” access to a third-party processor. You’re operating through your own secure, fully underwritten account.',
            },
            {
                img: PMP2,
                title: 'Full Shopify Integration',
                desc: 'Our platform syncs with Shopify, WooCommerce, and other major platforms while keeping your data in your hands.',
            },
            {
                img: PMP3,
                title: 'No Freezes, No Holds',
                desc: 'We aren’t Stripe. We aren’t PayPal. You will not wake up one day with your funds frozen.',
            },
            {
                img: PMP4,
                title: 'Total Privacy, End-to-End',
                desc: 'Encrypted tokenization, PCI-DSS compliance, fraud protection. Your clients’ data is safe.',
            },
            {
                img: PMP5,
                title: 'Custom Rates, Human Support',
                desc: 'We offer custom pricing and real human support based on your private business structure.',
            },
            ].map((item, index) => (
            <div
                key={index}
                style={{
                backgroundColor: '#fff',
                borderRadius: 12,
                minWidth: '280px',
                maxWidth: '320px',
                flex: '0 0 auto',
                boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
                textAlign: 'left',
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
                <img
                src={item.img}
                alt={item.title}
                style={{
                    width: '100%',
                    height: 150,
                    objectFit: 'cover',
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                }}
                />
                <div style={{ padding: 20 }}>
                <h3 style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#555' }}>{item.desc}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
        <OurPlatform/>

    </div>
  );
};

export default MerchantProcessing;