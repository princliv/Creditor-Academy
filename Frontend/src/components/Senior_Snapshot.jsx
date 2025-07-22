import React from 'react';
import { motion } from 'framer-motion';

const snapshotItems = [
  {
    title: '3-Month Guided Journey',
    description: 'A step-by-step curriculum designed to build your credit profile over a structured 90-day period.',
    color: '#0ea5e9',
    path: 'M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h5v5H7v-5z'
  },
  {
    title: '24 Live Instructor Classes with Coach Mr. Rowland',
    description: 'Join live, interactive sessions for real-time guidance, Q&A, and expert insights.',
    color: '#38bdf8',
    path: 'M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 11.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 4.5 12 4.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm6 3.5H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z'
  },
  {
    title: '36 Studio-Based Self-Paced Lessons',
    description: 'Access high-quality video lessons anytime, anywhere, and learn at your own convenience.',
    color: '#0ea5e9',
    path: 'M10 16.5v-9l6 4.5-6 4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'
  },
  {
    title: 'AI-Powered Chat Bot for Help',
    description: 'Get instant answers and support 24/7 with our intelligent, course-trained chatbot.',
    color: '#0ea5e9',
    path: 'M12 2c.55 0 1 .45 1 1v1.07A8.002 8.002 0 0 1 20 12c0 1.63-.49 3.14-1.33 4.4l1.45 1.45a1 1 0 0 1-1.41 1.41l-1.45-1.45A7.954 7.954 0 0 1 12 20a7.954 7.954 0 0 1-5.26-2.19l-1.45 1.45a1 1 0 1 1-1.41-1.41l1.45-1.45A7.954 7.954 0 0 1 4 12a8.002 8.002 0 0 1 7-7.93V3c0-.55.45-1 1-1zm-3 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z'
  },
  {
    title: 'Pre-Filled Templates + Downloadable Forms',
    description: 'Save time and avoid errors with our library of ready-to-use documents and applications.',
    color: '#7dd3fc',
    path: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-1 13v-3h-2v3H9v-4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v4h-2zm-1-8V3.5L18.5 9H13z'
  },
  {
    title: 'Private Business Website – Done-for-You',
    description: 'Establish a professional online presence with a custom-built website for your business.',
    color: '#0ea5e9',
    path: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 12h16v6H4v-6zm0-6h16v2H4V6z'
  },
  {
    title: 'Access to Private Credit Stack Playbooks',
    description: 'Unlock advanced strategies and proprietary methods for accelerating your credit-building.',
    color: '#38bdf8',
    path: 'M20 6H10v2h10V6zM20 12H10v2h10v-2zm-10 6h10v2H10v-2zM6 6H4v2h2V6zM6 12H4v2h2v-2zm0 6H4v2h2v-2zM8 22c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H8zm0-2h12V4H8v16z'
  },
  {
    title: 'Payment Plan Options Available',
    description: 'Enroll in the course with flexible and affordable payment options that fit your budget.',
    color: '#7dd3fc',
    path: 'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z'
  },
  {
    title: 'Certificate of Completion + Business Credit Portfolio',
    description: 'Graduate with a formal certificate and a professional portfolio showcasing your new credit assets.',
    color: '#0ea5e9',
    path: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
  },
  {
    title: 'Customer Support',
    description: 'Our dedicated support team is here to help you with any questions or issues along your journey.',
    color: '#38bdf8',
    path: 'M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4.7c1.48 0 2.75-1.07 2.94-2.5C21.49 16.08 22 14.6 22 13V10c0-4.97-4.03-9-10-9z'
  }
];

const SeniorSnapshot = () => {
  return (
    <section style={{ background: '#f9fafb', padding: '80px 5%', position: 'relative', fontFamily: "'Segoe UI', sans-serif" }}>

      {/* Heading */}
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <h2 style={{ fontSize: '2.5rem', color: '#0ea5e9', marginBottom: '16px' }}>
          <strong style={{ color: '#0056b3' }}>Course Content Snapshot</strong>
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#475569', maxWidth: '720px', margin: '0 auto' }}>
          Just a glimpse of the strategic documents and private power tools you’ll build inside.
        </p>
      </div>

      {/* Cards Grid */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '30px',
        marginTop: '60px',
        zIndex: 2,
        position: 'relative'
      }}>
        {snapshotItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              flex: '1 1 480px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '20px',
              background: 'white',
              padding: '24px',
              borderRadius: '12px',
              borderLeft: `4px solid ${item.color}`,
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease'
            }}
            whileHover={{ y: -8, boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}
          >
            <svg width="36" height="36" fill={item.color} viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
              <path d={item.path} />
            </svg>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#0f172a' }}>
                <strong style={{ color: '#3598db' }}>{item.title}</strong>
              </h3>
              <p style={{ marginTop: '6px', color: '#64748b' }}>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SeniorSnapshot;
