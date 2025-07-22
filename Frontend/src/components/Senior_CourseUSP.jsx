import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut'
    }
  }),
};

const phaseCardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeOut'
    }
  }),
};

const usps = [
  {
    title: 'Step-by-Step Credit Framework',
    desc: 'We don’t just teach. We help you build it as you go — from address to D-U-N-S to cards, every click and form covered.',
    icon: '📋'
  },
  {
    title: 'Business Website – INCLUDED',
    desc: 'Get a lender-friendly, professionally designed site with domain, pro email, and Google map listings — all done for you.',
    icon: '🌐'
  },
  {
    title: 'Fundability Blueprint',
    desc: 'Launch with a binder banks love. Learn how to pass real underwriting checklists with confidence.',
    icon: '🛡️'
  },
  {
    title: 'Gamified Learning with Real Results',
    desc: 'Build credit while playing — every LMS level unlocks real credit actions, tools, and progress.',
    icon: '🎮'
  },
  {
    title: 'Graduate with Your First Funding Line',
    desc: 'By course end, most students land $10K–$20K+ in real credit — vendor, store, or fintech lines.',
    icon: '💳'
  },
  {
    title: 'Form-Filled Templates',
    desc: 'No guesswork — all forms (EIN, Schedule C, Lease Contracts) are pre-filled and fully explained.',
    icon: '📄'
  },
];

const phases = [
  {
    title: 'PHASE 1: Foundational Credit Setup',
    items: [
      'Business address, phone, domain, website, email',
      'ListYourself.net, D-U-N-S, Google/Bing listings',
      'Nav.com setup, vendor account readiness',
    ],
    icon: '🧱'
  },
  {
    title: 'PHASE 2: Tier-Based Credit Scaling',
    items: [
      'Tier 1 Net-30 accounts',
      'Tier 2 Store & Fleet Cards',
      'Tier 3 FinTech lending & lines',
      'Tier 4 Asset-backed credit',
      'Tier 5 Inter-Entity Tradeline Leasing',
    ],
    icon: '📈'
  },
  {
    title: 'PHASE 3: Advanced Credit Leverage',
    items: [
      'Tradeline stacking',
      'The Credit-to-Asset Loop',
      'Vehicle & equipment funding (No PG)',
      'Real estate + business acquisition funding',
    ],
    icon: '🚀'
  },
  {
    title: 'PHASE 4: Operate Private & Multiply',
    items: [
      'Internal leasing structures',
      'Credit-as-a-commodity modeling',
      'Operating from the Private using credit tools',
    ],
    icon: '🔐'
  },
];

const Senior_CourseUSP = () => {
  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: 'linear-gradient(to right, #e6f0ff, #f0f9ff)' }}>
      {/* USP SECTION */}
      <section style={{ padding: '60px 5%' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.8rem', marginBottom: 50, color: '#0f172a' }}>
          <strong style={{ color: '#34495e' }}>
            What Makes <span style={{ color: '#0056b3' }}>Unlimited Credit</span> Different
          </strong>
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {usps.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              style={{
                background: 'white',
                borderRadius: '14px',
                padding: '26px',
                boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
                display: 'flex',
                gap: '14px',
                alignItems: 'flex-start'
              }}
            >
              <div style={{ fontSize: 28 }}>{item.icon}</div>
              <div>
                <h3 style={{ margin: '0 0 8px', color: '#3598db' }}><strong>{item.title}</strong></h3>
                <p style={{ margin: 0, color: '#475569' }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PHASE-WISE COURSE STRUCTURE */}
      <section style={{ background: '#e0f2fe', padding: '80px 5%' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.6rem', marginBottom: 60, color: '#0f172a' }}>
          <strong style={{ color: '#0056b3' }}>PHASE-WISE COURSE STRUCTURE</strong>
        </h2>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'center',
          }}
        >
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={phaseCardVariants}
              style={{
                flex: '1 1 280px',
                background: 'white',
                borderRadius: '16px',
                padding: '30px',
                maxWidth: '300px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 16 }}>
                <div style={{ fontSize: '24px' }}>{phase.icon}</div>
                <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#3598db' }}>
                  <strong>{phase.title}</strong>
                </h3>
              </div>
              <ul style={{ paddingLeft: '20px', margin: 0, color: '#475569', lineHeight: 1.6 }}>
                {phase.items.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Senior_CourseUSP;
