import React from 'react';

const TermsAndConditions = () => {
  return (
    <div style={{
      padding: "60px 20px",
      maxWidth: "960px",
      margin: "0 auto",
      fontFamily: "'Poppins', sans-serif",
      lineHeight: "1.8",
      color: "#333"
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#111", textAlign: "center" }}>
        📄 Terms & Conditions
      </h1>

      <p style={{ fontWeight: "bold", color: "#555", textAlign: "center" }}>Effective Date: 26 September 2024</p>

      <hr style={{ margin: "30px 0", borderColor: "#ddd" }} />

      <Section title="1. 📘 Introduction">
        Welcome to Creditor Academy! These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to comply with these terms.
      </Section>

      <Section title="2. ✅ User Eligibility">
        <ul>
          <li>You must be at least 18 years old to use our services.</li>
          <li>If under 18, you need parental or guardian consent.</li>
        </ul>
      </Section>

      <Section title="3. 🧾 Account Registration">
        <ul>
          <li>Create an account with accurate and complete information.</li>
          <li>You're responsible for your login credentials.</li>
          <li>We may suspend accounts for suspected fraud or unauthorized use.</li>
        </ul>
      </Section>

      <Section title="4. 💳 Membership and Payment">
        <ul>
          <li>Services are offered via membership plans.</li>
          <li>Payments are processed securely via third parties.</li>
          <li>All fees are non-refundable.</li>
          <li>Pricing may change, but your current plan remains active until renewal.</li>
        </ul>
      </Section>

      <Section title="5. 🚫 Prohibited Activities">
        <ul>
          <li>Do not share login details.</li>
          <li>No illegal activities using our platform.</li>
          <li>Unauthorized copying or reselling is forbidden.</li>
          <li>No fraudulent transactions or IP violations.</li>
        </ul>
      </Section>

      <Section title="6. ©️ Intellectual Property">
        All course content, text, videos, and logos are owned by Creditor Academy. Reproduction or distribution without permission is prohibited.
      </Section>

      <Section title="7. 🛠️ Service Availability">
        <ul>
          <li>We may update or discontinue services anytime.</li>
          <li>We’re not liable for disruptions due to external factors.</li>
        </ul>
      </Section>

      <Section title="8. ⚖️ Limitation of Liability">
        We are not responsible for any direct, indirect, incidental, or consequential damages from using our services.
      </Section>

      <Section title="9. ✖️ Termination of Services">
        <ul>
          <li>We may suspend your account for violating terms.</li>
          <li>You can cancel anytime, but no refunds will be provided.</li>
        </ul>
      </Section>

      <Section title="10. 🧭 Governing Law">
        These terms follow the laws of [Insert Jurisdiction]. Disputes will be resolved via binding arbitration in [Insert Location].
      </Section>

      <Section title="11. 🔁 Changes to Terms">
        We may update terms at any time. Always refer to the latest version on our website.
      </Section>

      <Section title="12. 📬 Contact Us">
        Creditor Academy<br />
        Email: <a href="mailto:Counselor@creditoracademy.com" style={{ color: "#0077cc" }}>Counselor@creditoracademy.com</a>
      </Section>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div style={{ marginBottom: "40px" }}>
    <h2 style={{ fontSize: "1.5rem", color: "#222", marginBottom: "10px" }}>{title}</h2>
    <div style={{ paddingLeft: "10px", fontSize: "1rem", color: "#555" }}>{children}</div>
  </div>
);

export default TermsAndConditions;
