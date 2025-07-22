import React from 'react';
import { motion } from 'framer-motion';

const sectionStyle = {
  padding: '60px 5%',
  background: '#eef5ff',
  fontFamily: 'Poppins, sans-serif',
  display: 'flex',
  justifyContent: 'center',
};

const containerStyle = {
  background: '#fff',
  maxWidth: '900px',
  borderRadius: '16px',
  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
  padding: '40px 30px',
  width: '100%',
};

const heading = {
  fontSize: '2.4rem',
  color: '#3498db',
  textAlign: 'center',
  fontWeight: '700',
  marginBottom: '10px',
};

const subheading = {
  fontSize: '1.6rem',
  color: '#2c3e50',
  textAlign: 'center',
  marginBottom: '30px',
};

const sectionTitle = {
  fontSize: '1.4rem',
  fontWeight: '600',
  color: '#5dade2',
  marginTop: '30px',
  marginBottom: '15px',
  transition: 'all 0.3s ease',
};

const paragraph = {
  fontSize: '1rem',
  lineHeight: '1.8',
  color: '#333',
  marginBottom: '15px',
};

const listStyle = {
  paddingLeft: '20px',
  marginBottom: '20px',
};

const checkboxList = {
  listStyle: 'none',
  paddingLeft: '0',
  lineHeight: '2',
};

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const animatedSection = (title, content, index) => (
  <motion.div
    key={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.5, delay: 0.1 * index }}
    variants={fadeIn}
  >
    <h3
      style={sectionTitle}
      onMouseEnter={e => (e.target.style.color = '#1f7ae0')}
      onMouseLeave={e => (e.target.style.color = '#5dade2')}
    >
      {title}
    </h3>
    {content}
  </motion.div>
);

const MembershipTnC = () => {
  const sections = [
    {
      title: '1. Purpose and Legal Standing',
      content: (
        <>
          <p style={paragraph}>This Private Montessori Association (PMA) is established to provide a secure and private platform for its members to conduct lawful business, exchange knowledge, and seek counsel in education, finance, law, health, and other areas—all outside the jurisdiction of governmental and regulatory authorities.</p>
          <p style={paragraph}>We believe that the Holy Scriptures, the U.S. Constitution, the various State Constitutions guarantee our members:</p>
          <ul style={listStyle}>
            <li>The absolute freedom of religion, speech, petition, and assembly.</li>
            <li>The right to gather together lawfully to help one another assert and protect our rights.</li>
            <li>Protection from unreasonable search and seizure.</li>
            <li>The right to not incriminate ourselves.</li>
            <li>The freedom to exercise all other unalienable rights as granted by our Creator and protected by the U.S. and State Constitutions.</li>
          </ul>
        </>
      )
    },
    {
      title: '2. Private Domain & Freedom of Association',
      content: (
        <>
          <p style={paragraph}><strong>WE HEREBY DECLARE</strong> that we are exercising our right to freedom of association, as protected by the U.S. Constitution, State Constitutions. This means that:</p>
          <ul style={listStyle}>
            <li>Our Association activities are restricted to the private domain only.</li>
            <li>We operate outside the jurisdiction of government agencies, entities, officers, agents, contractors, or other representatives, as permitted by law.</li>
            <li>All interactions within the Association are private contractual matters between members.</li>
            <li>By agreeing to this membership, I acknowledge that my private membership supersedes any public obligations concerning disclosure, investigation, or enforcement related to the Association.</li>
          </ul>
        </>
      )
    },
    {
      title: '3. Membership Rights and Responsibilities',
      content: (
        <>
          <p style={paragraph}>Members exercise their right to associate freely and conduct business in the private domain.</p>
          <p style={paragraph}>Members may seek counsel, advice, and assistance from other members on matters including but not limited to:</p>
          <ul style={listStyle}>
            <li>Education</li>
            <li>Financial & Business Matters</li>
            <li>Legal Issues</li>
            <li>Health & Wellness</li>
            <li>Personal Development</li>
          </ul>
          <p style={paragraph}>Members maintain absolute freedom to choose what methods, strategies, and solutions they deem best for themselves.</p>
          <p style={paragraph}>The Association does not recognize the authority of any governmental regulatory agency over its internal activities.</p>
          <p style={paragraph}>Members are strictly prohibited from advertising or promoting their own businesses, products, or services within the Creditor Academy, its websites, or Social Media Groups without the explicit prior written approval of Creditor Academy. Any member found to be advertising without proper authorization will be subject to immediate banning from the Association, its platforms, and any related groups.</p>
        </>
      )
    },
    {
      title: '4. Masterclass Membership & Monthly Fee',
      content: (
        <ul style={listStyle}>
          <li>To maintain an active membership, a monthly fee of $69 USD is required.</li>
          <li>Membership remains active as long as the fee is paid on time.</li>
          <li>Failure to pay the fee results in automatic termination of membership.</li>
          <li>Terminated members may reapply, subject to approval by the Association.</li>
          <li>Once a membership fee payment is made, it is non-refundable.</li>
        </ul>
      )
    },
    {
      title: '5. Cancellation Policy',
      content: (
        <>
          <p style={paragraph}>A member may cancel their membership. However, if a member cancels their membership within the first year, a cancellation fee will be applied.</p>
          <p style={paragraph}>The cancellation fee will be the lesser of:</p>
          <ul style={listStyle}>
            <li>$399 (USD)</li>
            <li>The sum of the remaining monthly fees for the remainder of what would have been the first 12 months of membership.</li>
          </ul>
          <p style={paragraph}>For example, if a member cancels after six months, the cancellation fee would be the lesser of $399 or (6 months x $69 = $414). In this case, the cancellation fee would be $399.</p>
          <p style={paragraph}>This fee is to compensate the Association for the costs incurred due to the early termination of the membership.</p>
          <p style={paragraph}>Members acknowledge and agree that this cancellation fee is a reasonable estimate of the damages that the Association will incur in the event of early termination.</p>
        </>
      )
    },
    {
      title: '6. Membership Eligibility and Termination',
      content: (
        <ul style={listStyle}>
          <li>Membership is open to any individual who agrees to abide by these principles and is not subject to prior sanction, suspension, or expulsion from the Association.</li>
          <li>Membership may be terminated at the discretion of the Association’s Trustees or designated representatives if a member's actions are deemed detrimental to the integrity or well-being of the Association.</li>
          <li>Members agree not to pursue legal action against any fellow member unless a clear and present danger exists, as determined by the Association.</li>
          <li>Membership is non-transferable and may be revoked if a member violates any terms of this agreement.</li>
        </ul>
      )
    },
    {
      title: '7. Dispute Resolution & Limitation of Liability',
      content: (
        <>
          <p style={paragraph}>Since the Association is protected by the First, Fourth, Fifth, Ninth, and Tenth Amendments of the U.S. Constitution, it is outside the jurisdiction of federal and state authorities regarding any complaints or grievances against its members.</p>
          <ul style={listStyle}>
            <li>All disputes shall be resolved internally through the Association’s designated committee or tribunal.</li>
            <li>Members waive their right to pursue external legal action against the Association or any of its members.</li>
          </ul>
        </>
      )
    },
    {
      title: '8. Voluntary Participation & Legal Standing',
      content: (
        <ul style={listStyle}>
          <li>I affirm that I am voluntarily joining the Creditor Academy and that I do not represent any government entity, regulatory body, or enforcement agency.</li>
          <li>I acknowledge that my activities within the Association are private contractual matters, not subject to disclosure to local, state, or federal authorities.</li>
          <li>I understand that my membership can be revoked if I engage in any abusive, violent, destructive, or harassing behavior toward another member.</li>
        </ul>
      )
    },
    {
      title: '9. Agreement & Acknowledgment',
      content: (
        <>
          <p style={paragraph}>By signing this agreement, I affirm that:</p>
          <ul style={checkboxList}>
            <li><input type="checkbox" style={{ marginRight: '10px' }} checked readOnly /> I have read and understood this document in its entirety.</li>
            <li><input type="checkbox" style={{ marginRight: '10px' }} checked readOnly /> I am joining of my own free will, without coercion or pressure.</li>
            <li><input type="checkbox" style={{ marginRight: '10px' }} checked readOnly /> I acknowledge that this is a private association and agree to abide by its rules.</li>
            <li><input type="checkbox" style={{ marginRight: '10px' }} checked readOnly /> I understand that my failure to comply with membership terms may result in termination of membership.</li>
          </ul>
        </>
      )
    },
  ];

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <motion.h1 style={heading} initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: false }} transition={{ duration: 0.5 }}>
          Creditor Academy
        </motion.h1>
        <motion.h2 style={subheading} initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: false }} transition={{ duration: 0.5, delay: 0.1 }}>
          CREDITOR ACADEMY - A Private Montessori Association
        </motion.h2>
        <motion.p style={paragraph} initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: false }} transition={{ duration: 0.5, delay: 0.2 }}>
          By joining CREDITOR ACADEMY, a Private Montessori Association and/or any website or Social Media Group started by, created by, maintained, or organized by the Association, I agree to the terms and conditions of CREDITOR ACADEMY, a Private Montessori Association, Agreement as follows.
        </motion.p>

        {sections.map((s, i) => animatedSection(s.title, s.content, i))}
      </div>
    </section>
  );
};

export default MembershipTnC;
