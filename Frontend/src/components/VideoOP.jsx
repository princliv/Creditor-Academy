import React from "react";
import { motion } from "framer-motion";

const CourseContentSnapshot = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 }
    })
  };

  return (
    <>
      {/* Embedded YouTube Video */}
      <motion.div
        style={{
          width: "100%",
          maxWidth: "960px",
          margin: "40px auto",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)"
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div style={{ position: "relative", paddingTop: "56.25%", height: 0 }}>
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none"
            }}
            src="https://www.youtube.com/embed/x4vwr-SdXdk"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Course Video"
          ></iframe>
        </div>
      </motion.div>

      {/* Course Content Snapshot Section */}
      <section
        style={{
          background: "#f9fafb",
          padding: "80px 5%",
          fontFamily: "'Segoe UI', sans-serif"
        }}
      >
        <motion.h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "20px",
            color: "#0ea5e9"
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span style={{ color: "#236fa1" }}>
            <strong>Course Content Snapshot</strong>
          </span>
        </motion.h2>

        <motion.p
          style={{
            textAlign: "center",
            fontSize: "1.1rem",
            color: "#475569",
            maxWidth: "720px",
            margin: "auto"
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Just a glimpse of the strategic documents and private power tools you’ll build inside.
        </motion.p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
            marginTop: "60px"
          }}
        >
          {contentBlocks.map((block, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              style={{
                flex: "1 1 320px",
                minWidth: "280px",
                display: "flex",
                gap: "20px",
                background: "white",
                padding: "24px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                borderLeft: `4px solid ${block.borderColor}`,
                transition: "all 0.3s ease"
              }}
            >
              <svg width="36" height="36" fill="#0ea5e9" viewBox="0 0 24 24">
                <path d={block.icon} />
              </svg>
              <div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "1.2rem",
                    color: "#0f172a",
                    fontWeight: 600
                  }}
                >
                  {block.title}
                </h3>
                <p
                  style={{
                    marginTop: "6px",
                    color: "#64748b",
                    fontSize: "0.95rem",
                    lineHeight: "1.5"
                  }}
                >
                  {block.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

const contentBlocks = [
  {
    title: "Trust Indenture + Schedules A–D",
    description: "Define powers, parties, and assets of your private trust.",
    borderColor: "#0ea5e9",
    icon: "M3 3V21H21V3H3ZM19 19H5V5H19V19ZM7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H13V17H7V15Z"
  },
  {
    title: "Trustee Agreements & Transfer Docs",
    description: "Legally appoint trustees & move assets into the trust.",
    borderColor: "#0ea5e9",
    icon: "M3 6H21V8H3V6ZM3 10H21V12H3V10ZM3 14H15V16H3V14Z"
  },
  {
    title: "Hold Harmless & Indemnity Bonds",
    description: "Protect trustees from liability using binding bond agreements.",
    borderColor: "#0ea5e9",
    icon: "M3 6H21V8H3V6ZM3 10H21V12H3V10ZM3 14H15V16H3V14Z"
  },
  {
    title: "Public Lawful Notices & Security Agreements",
    description: "Declare your private position and secure your interests publicly.",
    borderColor: "#7dd3fc",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2ZM7 15l5-5 5 5H7Z"
  },
  {
    title: "IRS-proof Structures & Operating Principles",
    description: "Structure your trust to operate lawfully while minimizing IRS exposure.",
    borderColor: "#0ea5e9",
    icon: "M6 4h12v2H6zM4 8h16v2H4zM6 12h12v2H6zM4 16h16v2H4z"
  },
  {
    title: "Trust Operations & IRS-Proof Structure",
    description: "Build & run lawful businesses with protection from seizure.",
    borderColor: "#38bdf8",
    icon: "M5 4v2h14V4H5Zm14 14v2H5v-2h14Zm2-6v2H3v-2h18Z"
  },
  {
    title: "Bookkeeping, Bonds & Appendices",
    description: "Full tracking tools, indemnity bonds, and liability protection.",
    borderColor: "#7dd3fc",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2ZM7 15l5-5 5 5H7Z"
  },
  {
    title: "W-8BEN, Form 56, UCC1 Filings",
    description: "Handle foreign entity status and lawful filings correctly.",
    borderColor: "#0ea5e9",
    icon: "M6 4h12v2H6zM4 8h16v2H4zM6 12h12v2H6zM4 16h16v2H4z"
  }
];

export default CourseContentSnapshot;
