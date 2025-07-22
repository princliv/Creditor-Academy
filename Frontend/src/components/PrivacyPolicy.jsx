import React from "react";

const PrivacyPolicy = () => {
  return (
    <div
      className="privacy-container"
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "40px 30px",
        backgroundColor: "#f8fafc",
        borderRadius: "14px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
        fontFamily: "Poppins, sans-serif",
        lineHeight: "1.8",
        color: "#334155",
      }}
    >
      <h1 style={{ fontSize: "2.2rem", marginBottom: "10px", color: "#0f172a" }}>
        Privacy Policy
      </h1>
      <p style={{ color: "#64748b", fontSize: "1rem", marginBottom: "30px" }}>
        <strong>Effective Date:</strong> 26 September 2024
      </p>

      <Section title="1. Introduction">
        Creditor Academy ("we," "our," or "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
      </Section>

      <Section title="2. Information We Collect">
        <ul>
          <li><strong>Personal Information:</strong> Name, email address, phone number, billing details, and account credentials when you register or make a purchase.</li>
          <li><strong>Payment Information:</strong> Collected via secure third-party payment processors.</li>
          <li><strong>Usage Data:</strong> IP addresses, browser type, device information, and usage patterns collected via cookies and analytics tools.</li>
          <li><strong>Communications:</strong> Messages you send us via contact forms, chat support, or email.</li>
        </ul>
      </Section>

      <Section title="3. How We Use Your Information">
        <ul>
          <li>Providing access to courses, memberships, and business services.</li>
          <li>Processing payments and managing accounts.</li>
          <li>Improving website functionality and user experience.</li>
          <li>Sending important updates, newsletters, and promotional offers (with your consent).</li>
        </ul>
      </Section>

      <Section title="4. Sharing of Information">
        <ul>
          <li><strong>Service Providers:</strong> Payment processors, hosting services, and analytics providers.</li>
          <li><strong>Legal Authorities:</strong> When required by law or to protect our rights.</li>
          <li><strong>Business Partners:</strong> If you enroll in courses or services provided in collaboration with third parties.</li>
        </ul>
      </Section>

      <Section title="5. Cookies and Tracking Technologies">
        We use cookies to enhance your experience. You can modify your browser settings to disable cookies, but some features may not function properly.
      </Section>

      <Section title="6. Data Security">
        We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure.
      </Section>

      <Section title="7. Your Rights and Choices">
        <ul>
          <li>Access, update, or delete your personal information.</li>
          <li>Opt out of marketing communications.</li>
          <li>Request a copy of your data.</li>
        </ul>
      </Section>

      <Section title="8. No Refund Policy">
        All purchases made on Creditor Academy are final. We do not offer refunds under any circumstances.
      </Section>

      <Section title="9. Third-Party Links">
        Our website may contain links to third-party websites. We are not responsible for their privacy practices.
      </Section>

      <Section title="10. Children's Privacy">
        Our services are not intended for individuals under the age of 13. We do not knowingly collect data from children.
      </Section>

      <Section title="11. Changes to This Policy">
        We may update this Privacy Policy from time to time. The latest version will be available on our website.
      </Section>

      <Section title="12. Contact Us">
        Creditor Academy<br />
        Email: <a href="mailto:counselor@creditoracademy.com" style={{ color: "#0ea5e9", textDecoration: "underline" }}>counselor@creditoracademy.com</a>
      </Section>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div
    style={{
      marginBottom: "30px",
      backgroundColor: "#ffffff",
      borderLeft: "4px solid #0ea5e9",
      padding: "20px 24px",
      borderRadius: "8px",
    }}
  >
    <h2 style={{ fontSize: "1.25rem", marginBottom: "12px", color: "#0f172a", display: "flex", alignItems: "center" }}>
      <span style={{ marginRight: "10px", fontSize: "1.2rem", color: "#0ea5e9" }}>⚙️</span> {title}
    </h2>
    <div style={{ paddingLeft: "5px", fontSize: "0.97rem", color: "#475569" }}>{children}</div>
  </div>
);

export default PrivacyPolicy;
