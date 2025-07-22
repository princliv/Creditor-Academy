import React from 'react';
import CourseMatters from '../assets/course_matters.jpg';

const RemedyMaster = () => {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      
      {/* WHAT YOU'LL MASTER Section */}
      <section style={{ padding: '80px 6%', background: 'linear-gradient(to right, #d6e6f7, #f0f3f7)', fontFamily: 'Poppins, sans-serif' }}>
        <div style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto 50px' }}>
            <h2 style={{ fontSize: '2rem', color: '#0056b3', marginBottom: 15 }}>
            <strong>Credit & Remedy Masterclass</strong>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#595f66' }}>
            Your roadmap to Credit Power & Legal Liberation
            </p>
        </div>

        {/* Card Grid */}
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 30,
            maxWidth: 1200,
            margin: 'auto'
        }}>
            {[
            {
                title: "What is Credit?",
                icon: (
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                )
            },
            {
                title: "The Importance of Credit",
                icon: (
                <path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm1 12h-2v-2h2v2zm0-4h-2V8h2v4z" />
                )
            },
            {
                title: "Reading & Auditing Credit Reports",
                icon: (
                <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h12v2H3v-2zm0 4h12v2H3v-2z" />
                )
            },
            {
                title: "Mastering Credit Scores",
                icon: (
                <path d="M12 2L2 7v13h20V7L12 2zm0 2.18L18.26 7 12 11.82 5.74 7 12 4.18zM4 9.27l8 4.91 8-4.91V18H4V9.27z" />
                )
            },
            {
                title: "Establishing New Credit Correctly",
                icon: (
                <path d="M19 3H5a2 2 0 0 0-2 2v14h2V5h14v14h2V5a2 2 0 0 0-2-2zm-4 14h-6v-2h6v2z" />
                )
            },
            {
                title: "Controlling & Locking Your Profile",
                icon: (
                <path d="M12 17a2 2 0 0 1-2-2v-2a2 2 0 0 1 4 0v2a2 2 0 0 1-2 2zm6-5V9a6 6 0 1 0-12 0v3H4v10h16V12h-2zm-8-3a4 4 0 1 1 8 0v3h-8V9z" />
                )
            },
            {
                title: "Improving Credit Through Real Remedies",
                icon: (
                <path d="M12 3L1 9l11 6 11-6L12 3zm0 13l-7.74-4.21L12 7.18l7.74 4.61L12 16z" />
                )
            },
            {
                title: "Disputes, Deletions & Legal Notices",
                icon: (
                <path d="M19 3H5a2 2 0 0 0-2 2v14l4-4h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
                )
            },
            {
                title: "Identity Theft Recovery Strategy",
                icon: (
                <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-3.31 0-10 1.66-10 5v3h20v-3c0-3.34-6.69-5-10-5z" />
                )
            },
            {
                title: "Debt Negotiation, Settlement & Full Discharge",
                icon: (
                <path d="M4 4h16v2H4V4zm0 4h10v2H4V8zm0 4h10v2H4v-2zm0 4h16v2H4v-2z" />
                )
            }
            ].map((item, i) => (
            <div
                key={i}
                style={{
                background: '#ffffff',
                borderRadius: 14,
                padding: 25,
                textAlign: 'center',
                boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
                transition: 'transform 0.4s ease, box-shadow 0.4s',
                cursor: 'default'
                }}
                onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)';
                }}
                onMouseOut={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.06)';
                }}
            >
                <svg width="40" height="40" fill="#3498db" viewBox="0 0 24 24" style={{ marginBottom: 12 }}>
                {item.icon}
                </svg>
                <p style={{ fontSize: '0.92rem', color: '#2c3e50', margin: 0 }}>
                <strong style={{ color: '#3598db' }}>{item.title}</strong>
                </p>
            </div>
            ))}
        </div>
        </section>

      {/* WHY THIS COURSE MATTERS Section */}
      <section style={{ padding: '100px 5%', background: 'linear-gradient(to bottom, #eef5ff, #ffffff)' }}>
        <div style={{
          maxWidth: 1200,
          margin: 'auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 60
        }}>
          {/* Left Image */}
          <div style={{ flex: 1, minWidth: 280, textAlign: 'center' }}>
            <img
              src={CourseMatters}
              alt="Why This Matters"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 16,
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 12px 28px',
              }}
              height="3264"
            />
          </div>

          {/* Right Content */}
          <div style={{ flex: 2, minWidth: 300 }}>
            <h2 style={{ fontSize: '2.5rem', color: '#1a2e45', marginBottom: 30, fontWeight: 'bold' }}>
              <span style={{ fontSize: '24pt', color: 'rgb(35, 111, 161)' }}>WHY THIS COURSE MATTERS</span>
            </h2>
            <blockquote
              style={{
                background: '#ffffff',
                borderLeft: '6px solid #3498db',
                padding: '20px 25px',
                borderRadius: 12,
                marginBottom: 30,
                boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
              }}
            >
              <p style={{ margin: 0, fontSize: '1.2rem', color: '#2c3e50', lineHeight: 1.6 }}>
                <strong>“Debt isn’t just numbers — it’s a legal trap.”</strong>
              </p>
            </blockquote>
            <p style={{ color: '#4a4f57', fontSize: '1rem', lineHeight: 1.8 }}>
              Millions of Americans are being <strong>re-aged</strong>, <strong>misled</strong>, or <strong>harassed</strong> by illegal collectors.
              This course gives you the <strong>legal tools</strong> to challenge, dissolve, and take control of your <strong>financial identity</strong> — for good.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RemedyMaster;
