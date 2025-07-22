import React from "react";
import { motion } from "framer-motion";
import {
  FaIdBadge,
  FaCheckCircle,
  FaFileContract,
  FaShieldAlt,
  FaUniversity,
  FaGraduationCap,
} from "react-icons/fa";
import CourseSop from "../assets/CourseSop.jpg";

const outcomes = [
  {
    text: "Private ID — Filed, Sealed & Verified",
    icon: <FaIdBadge />,
  },
  {
    text: "Secured Party Creditor Standing — Fully Executed",
    icon: <FaShieldAlt />,
  },
  {
    text: "Status Correction Record Binder — Court-Ready",
    icon: <FaFileContract />,
  },
  {
    text: "Irrevocable Trust — Registered with EIN & Security",
    icon: <FaUniversity />,
  },
  {
    text: "UCC Filings — Done Correctly with Full Protections",
    icon: <FaCheckCircle />,
  },
  {
    text: "Graduate Ready to Operate Fully in the Private",
    icon: <FaGraduationCap />,
  },
];

const reasons = [
  "You're done being “presumed” and want lawful standing.",
  "You want full control of your legal and commercial identity.",
  "You want to learn and implement SPC & status correction.",
  "You're ready to graduate with a Private ID, Trust, and full lawful power.",
];

const fadeFromTop = {
  initial: { opacity: 0, y: -40 },
  animate: { opacity: 1, y: 0 },
};

const OutcomeSection = () => {
  return (
    <>
      <div style={{ height: "60px" }} />

      {/* Outcome Section */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "auto",
          background: "#eef5ff",
          padding: "60px 5%",
          borderRadius: "25px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
        }}
      >
        <motion.h2
          initial="initial"
          whileInView="animate"
          variants={fadeFromTop}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
            color: "#2c3e50",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
          <span style={{ color: "rgb(0, 86, 179)" }}>Your Outcome</span>
        </motion.h2>

        <motion.p
          initial="initial"
          whileInView="animate"
          variants={fadeFromTop}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            textAlign: "center",
            color: "#595f66",
            fontSize: "clamp(1rem, 2vw, 1.1rem)",
            marginBottom: "40px",
          }}
        >
          Graduate empowered with everything you need to live lawfully and
          privately.
        </motion.p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {outcomes.map((item, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileInView="animate"
              variants={fadeFromTop}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                background: "#ffffff",
                borderLeft: "5px solid #3498db",
                padding: "20px",
                borderRadius: "16px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
              }}
            >
              <p
                style={{
                  color: "#0056b3",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  margin: 0,
                  fontSize: "1rem",
                }}
              >
                <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Course Fit Section */}
      <section
        style={{
          padding: "80px 5%",
          background: "#f8fafc",
          fontFamily: "'Segoe UI', sans-serif",
        }}
      >
        <motion.h2
          initial="initial"
          whileInView="animate"
          variants={fadeFromTop}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "clamp(2rem, 6vw, 2.6rem)",
            color: "#0f172a",
            marginBottom: "50px",
            textAlign: "center",
          }}
        >
          <strong>
            <span style={{ color: "rgb(0, 86, 179)" }}>
              Is This Course Right For You?
            </span>
          </strong>
        </motion.h2>

      <div
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "40px 0",
  }}
>
  {/* Text Column */}
  <div style={{ flex: "1 1 400px", minWidth: "300px" }}>
    {reasons.map((reason, index) => (
      <motion.div
        key={index}
        initial="initial"
        whileInView="animate"
        variants={fadeFromTop}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        viewport={{ once: true }}
        style={{
          display: "flex",
          alignItems: "flex-start",
          background: "#ffffff",
          padding: "20px",
          borderRadius: "14px",
          marginBottom: "20px",
          boxShadow: "0 6px 16px rgba(0,0,0,0.05)",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          style={{
            minWidth: "30px",
            height: "30px",
            marginRight: "16px",
            fill: "#0284c7",
          }}
        >
          <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm-1 15l7-7-1.4-1.4L11 14.2l-2.6-2.6L7 13l4 4z"></path>
        </svg>
        <p style={{ margin: 0, color: "#334155" }}>{reason}</p>
      </motion.div>
    ))}
  </div>

  {/* Image Column */}
  <motion.div
    initial="initial"
    whileInView="animate"
    variants={fadeFromTop}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    style={{
      flex: "1 1 400px",
      minWidth: "300px",
      textAlign: "center",
    }}
  >
    <img
      src={CourseSop}
      alt="Empowerment Visual"
      style={{
        width: "100%",
        maxWidth: "450px",
        height: "auto",
        borderRadius: "16px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
      }}
    />
  </motion.div>
</div>

      </section>
    </>
  );
};

export default OutcomeSection;
