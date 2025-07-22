import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const features = [
  {
    title: "Interactive Sessions",
    desc: "Ask questions and get real-time answers during our engaging sessions.",
    img: "https://img.freepik.com/premium-photo/live-button-with-play-icon-rendering_327483-180.jpg?w=740",
  },
  {
    title: "Expert Mentors",
    desc: "Learn from professionals with years of real-world experience.",
    img: "https://img.freepik.com/premium-photo/portrait-manager-man-with-arms-crossed-startup-success-teamwork-with-partnership-face-male-person-employee-with-leadership-collaboration-meeting-with-happiness-profit-growth_590464-187930.jpg?w=740",
  },
  {
    title: "Session Replays",
    desc: "Missed a class? No problem — access full replays anytime.",
    img: "https://img.freepik.com/premium-photo/three-people-are-sitting-front-tv-that-has-man-it_1286328-3032.jpg?w=740",
  },
];

const containerVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

const LiveClassesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.3, once: false });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <div style={{ backgroundColor: "#f7f9fb", padding: "60px 20px" }}>
      {/* Header */}
      <motion.section
        ref={sectionRef}
        variants={containerVariant}
        initial="hidden"
        animate={controls}
        style={{
          padding: "60px 20px",
          background: "linear-gradient(145deg, #2b5a6eff, #36a3c8ff, #0d4157ff)",
          fontFamily: "Poppins, sans-serif",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Blobs */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "300px",
            height: "300px",
            background: "rgba(255,255,255,0.05)",
            filter: "blur(100px)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "-80px",
            width: "250px",
            height: "250px",
            background: "rgba(255,255,255,0.04)",
            filter: "blur(80px)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        ></div>

        {/* Heading and Text */}
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "0 10px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <motion.h2
            whileHover={{ scale: 1.05, rotateX: 15 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{
              fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
              fontWeight: 600,
              color: "#ffffff",
              marginBottom: "20px",
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
          >
            Why Join Our Live Classes?
          </motion.h2>

          <motion.p
            whileHover={{
              scale: 1.02,
              rotateX: -8,
              transformOrigin: "top",
            }}
            transition={{ duration: 0.4 }}
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              color: "#ddd",
              lineHeight: "1.8",
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(255,255,255,0))",
              padding: "20px",
              borderRadius: "12px",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
            }}
          >
            Get real-time answers to your questions, interact with experienced
            mentors, and build your skills through engaging sessions every week —
            all from the comfort of your home.
          </motion.p>
        </div>
      </motion.section>

      {/* Feature Cards */}
      <motion.div
        variants={cardContainerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "25px",
          justifyContent: "center",
          maxWidth: "1200px",
          margin: "auto",
          marginTop: "40px",
        }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariant}
            whileHover={{ scale: 1.03, rotate: 0.5 }}
            style={{
              background: "#fff",
              borderRadius: "16px",
              width: "300px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 6px 16px rgba(0,0,0,0.05)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            <img
              src={feature.img}
              alt={feature.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "12px",
                marginBottom: "15px",
              }}
            />
            <h3
              style={{
                fontSize: "20px",
                marginBottom: "10px",
                color: "#222",
              }}
            >
              {feature.title}
            </h3>
            <p
              style={{
                color: "#666",
                fontSize: "15px",
                lineHeight: "1.5",
              }}
            >
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LiveClassesSection;
