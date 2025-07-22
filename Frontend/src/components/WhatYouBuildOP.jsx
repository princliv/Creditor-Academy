import React from "react";
import { motion } from "framer-motion";
import image from "../assets/arab-businessman-private-jet-generative-ai.jpg"; // Update if needed

const WhatYouBuild = () => {
  const items = [
    {
      title: "Fully Executed Irrevocable Trust Portfolio",
      desc: "You leave with every core document of your private trust executed and organized."
    },
    {
      title: "Valid EIN Without SSN",
      desc: "Get your EIN through IRS Form SS-4 as a foreign entity, bypassing public ties."
    },
    {
      title: "Private Bank Account Strategy",
      desc: "Know what to say, what to present, and how to walk into a bank with confidence."
    },
    {
      title: "Trustee Agreements & Resolutions",
      desc: "Includes all internal agreements and legal tools to empower your trust authority."
    },
    {
      title: "Operations Manual",
      desc: "A full step-by-step document for daily private operations and trust compliance."
    },
    {
      title: "Bookkeeping System",
      desc: "Designed for private entities to keep clean, compliant records — without risk."
    },
    {
      title: "Notices & Defense Tools",
      desc: "You’ll be armed with response documents, meeting minutes, and legal protection letters."
    },
    {
      title: "Trust Certificate Package",
      desc: "Have a ready-to-show certificate proving your lawful private operation."
    },
    {
      title: "Sovereign Trust Binder",
      desc: "A full binder that proves, with confidence, you are operating privately and lawfully."
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 }
    })
  };

  return (
    <div
      style={{
        background: "#e0f2fe",
        padding: "80px 5%",
        fontFamily: "'Segoe UI', sans-serif",
        boxSizing: "border-box"
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
          fontSize: "2.5em",
          marginBottom: "60px",
          color: "#0f172a"
        }}
      >
        WHAT YOU BUILD IN THIS COURSE
      </motion.h2>

      <div
        style={{
          maxWidth: "1300px",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          alignItems: "flex-start",
          flexDirection: "row"
        }}
      >
        {/* Left Column */}
        <div
          style={{
            flex: "1 1 600px",
            minWidth: "300px",
            borderLeft: "4px solid #38bdf8",
            paddingLeft: "30px",
            boxSizing: "border-box"
          }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              style={{ position: "relative", marginBottom: "50px" }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "-17px",
                  top: 0,
                  width: "34px",
                  height: "34px",
                  background: "#38bdf8",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  style={{ width: "20px", height: "20px", fill: "white" }}
                >
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19l12-12-1.4-1.4z" />
                </svg>
              </div>
              <h3 style={{ margin: 0, fontSize: "1.3em", color: "#0f172a" }}>
                &nbsp;&nbsp;&nbsp; {item.title}
              </h3>
              <p style={{ margin: "5px 0 0", color: "#334155" }}>
                &nbsp;&nbsp;&nbsp; {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            flex: "1 1 500px",
            minWidth: "280px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img
            src={image}
            alt="Trust Binder Example"
            style={{
              width: "100%",
              maxWidth: "500px",
              borderRadius: "16px",
              boxShadow: "0 12px 24px rgba(0,0,0,0.1)"
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default WhatYouBuild;
