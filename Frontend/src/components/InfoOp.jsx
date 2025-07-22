import React from "react";
import { motion } from "framer-motion";

const InfoOp = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const listItemAnim = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.15, duration: 0.4 }
    })
  };

  const containerStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      {/* Header Section */}
      <motion.div
        style={{
          background: "linear-gradient(to right, #e0f2fe, #bae6fd)",
          padding: "60px 20px"
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.div
          style={{
            maxWidth: "1000px",
            margin: "auto",
            background: "rgba(255, 255, 255, 0.4)",
            borderRadius: "16px",
            padding: "40px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            color: "#0f172a",
            textAlign: "center"
          }}
        >
          <motion.h1
            style={{ fontSize: "3em", marginBottom: "10px", fontWeight: "bold" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span style={{ color: "rgb(0, 86, 179)" }}>OPERATE PRIVATE</span>
          </motion.h1>
          <motion.p
            style={{ fontSize: "1.3em", marginBottom: "20px" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Start Operating Outside the Public System.
          </motion.p>

          <motion.div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "960px",
              margin: "0 auto",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)"
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
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
                src="https://drive.google.com/file/d/1JDzWkLSFtHMuuRceyogbfCTdM3o2NgJp/preview"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Operate Private Video"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Two Column Section */}
      <motion.div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "60px 5%",
          background: "#f0f9ff",
          gap: "30px"
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerStagger}
      >
        {/* The Problem */}
        <motion.div
          style={{
            flex: "1 1 320px",
            background: "white",
            borderLeft: "6px solid #e11d48",
            borderRadius: "12px",
            padding: "25px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.05)"
          }}
          variants={fadeIn}
        >
          <h2 style={{ fontSize: "1.7em", color: "#e11d48", marginBottom: "16px" }}>The Problem</h2>
          <p style={{ color: "#333" }}>
            You’ve declared your status. You’ve received your Private ID and Badge. But you're still living and earning like a public entity.
          </p>
          <ul style={{ listStyle: "none", paddingLeft: 0, marginTop: "20px" }}>
            {[
              "Banking under your Social Security Number",
              "Running a business in your own name",
              "Liable to statutes, licenses, and regulations",
              "Unprotected from legal presumptions & surveillance"
            ].map((text, i) => (
              <motion.li
                key={i}
                custom={i}
                variants={listItemAnim}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                  color: "#444"
                }}
              >
                <svg
                  style={{ fill: "#e11d48", width: "18px", height: "18px", marginRight: "10px" }}
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                </svg>
                {text}
              </motion.li>
            ))}
          </ul>
          <div style={{
            marginTop: "20px",
            fontWeight: "bold",
            background: "#fef2f2",
            padding: "12px 20px",
            borderLeft: "4px solid #e11d48",
            borderRadius: "6px"
          }}>
            Until you're operating through a lawful <span style={{ color: "#e11d48" }}>Private Trust</span>, you're not truly private.
          </div>
        </motion.div>

        {/* The Private Solution */}
        <motion.div
          style={{
            flex: "1 1 320px",
            background: "white",
            borderLeft: "6px solid #10b981",
            borderRadius: "12px",
            padding: "25px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.05)"
          }}
          variants={fadeIn}
        >
          <h2 style={{ fontSize: "1.7em", color: "#10b981", marginBottom: "16px" }}>The Private Solution</h2>
          <p style={{ color: "#333" }}>
            This course is your private operating system. It’s not theory — it’s execution of a bulletproof private structure.
          </p>
          <ul style={{ listStyle: "none", paddingLeft: 0, marginTop: "20px" }}>
            {[
              "Form an Irrevocable Common Law Business Trust",
              "Obtain EIN without your SSN",
              "Open a Private Bank Account",
              "Build your Trust Portfolio Binder",
              "Graduate with Certificate of Private Operation"
            ].map((item, i) => (
              <motion.li
                key={i}
                custom={i}
                variants={listItemAnim}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                  color: "#444"
                }}
              >
                <svg
                  style={{ fill: "#10b981", width: "18px", height: "18px", marginRight: "10px" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.2L4.8 12 3.4 13.4 9 19 21 7l-1.4-1.4z" />
                </svg>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </>
  );
};

export default InfoOp;
