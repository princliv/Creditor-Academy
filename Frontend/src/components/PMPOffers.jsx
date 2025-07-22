import React from 'react';
import { motion } from 'framer-motion';
import Stripe from '../assets/PMPStripe.jpg';

const PMPOffers = () => {
  const animatedHover = {
    whileHover: {
      y: -6,
      boxShadow: '0 10px 30px rgba(31, 122, 224, 0.15)',
      backgroundColor: '#f0f8ff',
    },
    transition: { duration: 0.3 },
  };

  const steps = [
    "Complete a Secure Pre-Application – Takes less than 5 minutes.",
    "Get Underwritten by a Private-Friendly Processor – Usually within 48 hours.",
    "Begin Processing Payments Through Your Private Trust, Private Association, or any Business Structure.",
  ];

  return (
    <div style={{ width: '100%', fontFamily: 'Arial, sans-serif', background: '#f9fbfd' }}>
      {/* What You Get */}
      <section style={{ padding: '80px 15px', Width: '1200px', margin: '0 40px' }}>
        <h2 style={{
            fontSize: '34px',
            color: '#1f7ae0',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '40px'
        }}>
            What You Get with Our Platform
        </h2>
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '24px'
        }}>
            {[
            {
                title: "Hosted Private Gateway",
                icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1f7ae0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16v16H4z" />
                    <path d="M2 10h20" />
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                </svg>
                ),
            },
            {
                title: "Real-Time Reporting Dashboard",
                icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1f7ae0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3h18v18H3z" />
                    <path d="M9 9h6v6H9z" />
                </svg>
                ),
            },
            {
                title: "Subscription & Recurring Billing",
                icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1f7ae0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l3 3" />
                </svg>
                ),
            },
            {
                title: "Multiple MIDs & High-Risk Underwriting",
                icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1f7ae0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="2" />
                    <path d="M2 9h20" />
                    <path d="M9 22V9" />
                </svg>
                ),
            },
            {
                title: "Contactless, Mobile, and eCommerce Payments",
                icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1f7ae0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="10" rx="2" />
                    <path d="M16 3h4a2 2 0 0 1 2 2v2" />
                </svg>
                ),
            },
            {
                title: "Advanced Fraud Filters (iSpyFraud)",
                icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1f7ae0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="3" />
                    <path d="M2 12a10 10 0 0 1 20 0" />
                </svg>
                ),
            },
            {
                title: "Customer Vault for Card-on-File",
                icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1f7ae0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M3 10h18" />
                </svg>
                ),
            },
            {
                title: "Shopify & WooCommerce Compatibility",
                icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1f7ae0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 7l9 6 9-6-9-6z" />
                    <path d="M3 17l9 6 9-6" />
                    <path d="M3 12l9 6 9-6" />
                </svg>
                ),
            },
            {
                title: "Integration with Trust-Owned Entities or PMAs",
                icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1f7ae0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20V10" />
                    <path d="M18 20V4" />
                    <path d="M6 20v-6" />
                </svg>
                ),
            },
            {
                title: "Full Privacy Alignment — No Compromise",
                icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1f7ae0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 12c2.21 0 4-1.79 4-4V5a4 4 0 0 0-8 0v3c0 2.21 1.79 4 4 4z" />
                    <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
                </svg>
                ),
            },
            ].map((item, idx) => (
            <motion.div
                key={idx}
                whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: '0 12px 24px rgba(31, 122, 224, 0.15)',
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{
                flex: '1 1 260px',
                minHeight: '180px',
                padding: '24px',
                borderRadius: '14px',
                background: '#ffffff',
                color: '#1f7ae0',
                textAlign: 'center',
                boxShadow: '0 6px 16px rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
                }}
            >
                <div style={{ marginBottom: '16px' }}>{item.icon}</div>
                <strong style={{ fontSize: '16px', lineHeight: '1.4' }}>{item.title}</strong>
            </motion.div>
            ))}
        </div>
        </section>


      {/* Who This is For */}
      <section style={{
        padding: '60px 20px', background: '#eef5ff',
        borderTop: '1px solid #dde6ef', borderBottom: '1px solid #dde6ef'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '34px', fontWeight: 'bold', color: '#1f7ae0',
            textAlign: 'center', marginBottom: '20px'
          }}>
            Who This Is For?
          </h2>
          <p style={{
            textAlign: 'center', fontSize: '17px', color: '#444',
            maxWidth: '800px', margin: '0 auto 50px'
          }}>
            No matter what industry you’re in — if you value control, privacy, and stability in how you accept payments, this platform is for you.
          </p>

          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '24px',
            justifyContent: 'center'
          }}>
            {[
              "Small Businesses & Startups",
              "Coaches, Consultants & Creators",
              "E-commerce Stores & Subscription Services",
              "Educational Institutions & Online Academies",
              "Private Membership Associations (PMAs) & Ministries",
              "Health & Wellness Professionals",
              "Real Estate Investors & Property Managers",
              "Financial Advisors, CPAs & Legal Service Providers",
              "Tech Companies, SaaS Platforms & Digital Agencies",
              "Nonprofits, Foundations & Faith-Based Groups",
              "Freelancers, Gig Workers & Remote Teams",
              "Any Business that Wants to Operate Privately & Securely",
            ].map((text, idx) => (
              <motion.div
                key={idx}
                {...animatedHover}
                style={{
                  flex: '1 1 320px',
                  background: '#fff',
                  padding: '24px 30px',
                  borderRadius: '10px',
                  color: '#444',
                  fontSize: '15px',
                  boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
                  cursor: 'pointer',
                  textAlign: 'justify',
                }}
              >
                {text}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* Call to Action */}
      <section style={{
        padding: '60px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
        alignItems: 'center',
      }}>
        <div style={{ flex: '1 1 400px', minWidth: '280px' }}>
          <h2 style={{ fontSize: '28px', color: '#2c3e50', marginBottom: '20px' }}>
            <strong style={{ color: '#95a5a6' }}>
              Ready to Ditch <span style={{ color: '#3598db' }}>Stripe, PayPal & Big Tech?</span>
            </strong>
          </h2>
          <p style={{ fontSize: '18px', color: '#444' }}>
            Big processors don’t understand private commerce. They’re built for W-2s, corporations, and mainstream compliance. You deserve a processor that works with — not against — your structure. With Creditor Academy Private Merchant Processing, you keep your autonomy, your terms, and your peace of mind.
          </p>
        </div>
        <div style={{ flex: '1 1 400px', minWidth: '280px', textAlign: 'center' }}>
          <img
            src={Stripe}
            alt="Ditch Big Tech"
            style={{
              width: '100%',
              maxHeight: '400px',
              objectFit: 'cover',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
            }}
          />
        </div>
      </section>
      
      <section style={{
        padding: '60px 20px',
        background: '#f7f9fc',
        }}>
        <div style={{
            maxWidth: '1100px',
            margin: '0 auto',
            textAlign: 'center',
        }}>
            <h2 style={{
            fontSize: '32px',
            color: '#1f7ae0',
            fontWeight: '700',
            marginBottom: '50px',
            }}>
            Get Started in 3 Private Steps
            </h2>

            <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '30px',
            }}>
            {steps.map((desc, idx) => (
                <motion.div
                key={idx}
                {...animatedHover}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                style={{
                    flex: '1 1 300px',
                    background: '#ffffff',
                    padding: '30px 25px',
                    borderRadius: '16px',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
                    textAlign: 'left',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                }}
                >
                <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    fontSize: '56px',
                    fontWeight: '700',
                    color: '#e6f0ff',
                    lineHeight: '1',
                    zIndex: 0,
                }}>{idx + 1}</div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                    <h3 style={{
                    fontSize: '18px',
                    color: '#1f7ae0',
                    fontWeight: '600',
                    marginBottom: '10px',
                    }}>
                    STEP {idx + 1}
                    </h3>
                        <p style={{
                        fontSize: '16px',
                        color: '#444',
                        lineHeight: '1.7',
                        fontWeight: '500',
                        letterSpacing: '0.3px',
                        textAlign: 'justify',
                        margin: '0',
                        }}>
                        {desc}
                        </p>
                </div>
                </motion.div>
            ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default PMPOffers;
