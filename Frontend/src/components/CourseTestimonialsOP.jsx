import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const testimonialVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.3,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const CourseEndAndTestimonials = () => {
  const courseCards = [
    {
      title: "Operate Lawfully",
      desc: "Your trust and entity operate outside the public liability system.",
      iconPath: "M4 6h16v2H4zm0 5h10v2H4zm0 5h16v2H4z"
    },
    {
      title: "Ditch the SSN",
      desc: "Detach from SSN-based commerce & eliminate personal liability.",
      iconPath: "M12 2a10 10 0 100 20 10 10 0 000-20zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"
    },
    {
      title: "Audit-Ready & Safe",
      desc: "Stay protected from audits, presumptions & alter ego doctrines.",
      iconPath: "M19 3H5c-1.1 0-2 .9-2 2v14l7-3 7 3V5c0-1.1-.9-2-2-2z"
    },
    {
      title: "Graduate With Proof",
      desc: "Get documentation, certification & full legal confidence.",
      iconPath: "M12 2l1.5 4.5H18l-3.75 2.7L15.75 14 12 11.3 8.25 14l1.5-4.8L6 6.5h4.5z"
    }
  ];

  const testimonials = [
    {
      quote: "This course didn’t just teach me trust law. It helped me BUILD mine. I’ve got my EIN, my binder, and I’m operating outside the public. That’s real.",
      name: "James R., Arizona",
      color: "#0ea5e9"
    },
    {
      quote: "The games made it fun, but the structure made it lawfully powerful. I now control my business and my bank under trust.",
      name: "Theresa B., North Carolina",
      color: "#0284c7"
    },
    {
      quote: "If you’re done talking about sovereignty and ready to actually LIVE it — this is the only course you’ll ever need.",
      name: "DeShawn M., Texas",
      color: "#3b82f6"
    }
  ];

  return (
    <>
      {/* Course Outcome Section */}
      <section
        style={{
          background: "#f0f9ff",
          padding: "80px 5%",
          fontFamily: "'Segoe UI', sans-serif"
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.6em",
            marginBottom: "50px",
            color: "#0056b3"
          }}
        >
          <strong>By the End of This Course, You Will…</strong>
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
            maxWidth: "1200px",
            margin: "auto"
          }}
        >
          {courseCards.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                padding: "26px 20px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
                gap: "14px"
              }}
            >
              <svg style={{ width: "36px", height: "36px", fill: "#0ea5e9" }} viewBox="0 0 24 24">
                <path d={item.iconPath}></path>
              </svg>
              <h3 style={{ margin: 0, fontSize: "1.2rem", color: "#1e293b" }}>{item.title}</h3>
              <p style={{ margin: 0, color: "#475569", fontSize: "1rem" }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        style={{
          background: "linear-gradient(to bottom, #e0f2fe, #f8fafc)",
          padding: "100px 5%",
          fontFamily: "'Segoe UI', sans-serif",
          color: "#1e293b"
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.8em",
            marginBottom: "60px",
            color: "#0056b3"
          }}
        >
          <strong>REAL STUDENTS. REAL RESULTS.</strong>
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            maxWidth: "1200px",
            margin: "auto"
          }}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={testimonialVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{ scale: 1.03 }}
              style={{
                background: `linear-gradient(to bottom right, #f0f9ff, #dbeafe)`,
                borderRadius: "20px",
                padding: "30px",
                boxShadow: "0 10px 30px rgba(15, 23, 42, 0.12)",
                position: "relative",
                transition: "all 0.3s ease"
              }}
            >
              <svg
                viewBox="0 0 24 24"
                style={{
                  position: "absolute",
                  top: "-20px",
                  left: "20px",
                  width: "50px",
                  height: "50px",
                  fill: item.color
                }}
              >
                <path d="M9 11H7c0-2.8 1.2-4.2 4-4.9V4C6.3 4.7 4 7 4 11v6h5v-6zm10 0h-2c0-2.8 1.2-4.2 4-4.9V4c-4.7.7-7 3-7 7v6h5v-6z"></path>
              </svg>
              <p
                style={{
                  fontSize: "1.08rem",
                  lineHeight: 1.6,
                  marginTop: "30px",
                  marginBottom: "20px"
                }}
              >
                “{item.quote}”
              </p>
              <p style={{ fontWeight: 600, color: "#0f172a" }}>— {item.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CourseEndAndTestimonials;
