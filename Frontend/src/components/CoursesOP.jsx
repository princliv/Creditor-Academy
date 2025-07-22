import React from "react";
import { motion } from "framer-motion";

const CoursesUSP = () => {
  const cards = [
    {
      title: "Step-by-Step Legal Execution",
      desc:
        "We don’t just talk — we complete every doc live together with expert guidance."
    },
    {
      title: "Trust Banking Strategy",
      desc:
        "Walk into a bank confidently with tools to get your private trust account approved."
    },
    {
      title: "Private Business Vehicle",
      desc:
        "Operate your business through a lawfully formed trust — private and protected."
    },
    {
      title: "Gamified Avatar LMS",
      desc:
        "Train with interactive games that simulate real trust operations and choices."
    },
    {
      title: "Visual Learning",
      desc:
        "Complex legal ideas are made simple with comics, stories, and analogies."
    },
    {
      title: "Built by Legal Experts",
      desc:
        "Backed by America’s top private law educators and course designers."
    },
    {
      title: "Reliable Support System",
      desc:
        "Get help anytime via Avatar, Chatbot, WhatsApp team, templates, and PDFs."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section style={{ background: "#f0f9ff", padding: "60px 5%" }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
          fontSize: "2.5em",
          marginBottom: "50px",
          color: "#0f172a",
          fontFamily: "Poppins, sans-serif"
        }}
      >
        What Makes <span style={{ color: "#0ea5e9" }}>OPERATE PRIVATE</span> Different
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          maxWidth: "1200px",
          margin: "auto",
          justifyContent: "center"
        }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.04 }}
            style={{
              background: "white",
              borderRadius: "14px",
              padding: "26px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
              display: "flex",
              gap: "12px",
              width: "calc(33.33% - 30px)",
              minWidth: "280px",
              flex: "1 1 calc(33.33% - 30px)",
              boxSizing: "border-box",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
          >
            <svg
              style={{
                width: "26px",
                height: "26px",
                fill: "#0ea5e9",
                flexShrink: 0,
                marginTop: "4px"
              }}
              viewBox="0 0 24 24"
            >
              <path d="M9 16.2L4.8 12 3.4 13.4 9 19 21 7l-1.4-1.4z" />
            </svg>
            <div>
              <h3
                style={{
                  margin: "0 0 6px",
                  fontSize: "1.1em",
                  color: "#0f172a",
                  fontWeight: 600,
                  fontFamily: "Poppins, sans-serif"
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "#475569",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "0.95em",
                  lineHeight: "1.5"
                }}
              >
                {card.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CoursesUSP;
