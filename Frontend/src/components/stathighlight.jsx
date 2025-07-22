import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaEye, FaCircle, FaUsers, FaYoutube } from "react-icons/fa";

const API_KEY = "AIzaSyCJKDRtak743c9fOKLhZYnnZi_PncFjov0";
const CHANNEL_ID = "UCl_FM9KmhMA-DV6OTgr42Dw";

const StatHighlights = () => {
  const [youtubeData, setYoutubeData] = useState({
    viewCount: "Loading...",
    subscriberCount: "Loading...",
  });

  useEffect(() => {
    const fetchYouTubeStats = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`
        );
        const data = await res.json();
        const stats = data.items[0].statistics;
        setYoutubeData({
          viewCount: Number(stats.viewCount).toLocaleString(),
          subscriberCount: Number(stats.subscriberCount).toLocaleString(),
        });
      } catch (error) {
        console.error("Error fetching YouTube stats:", error);
        setYoutubeData({
          viewCount: "Unavailable",
          subscriberCount: "Unavailable",
        });
      }
    };

    fetchYouTubeStats();
  }, []);

  const stats = [
    {
      icon: <FaEye size={28} />,
      label: "YouTube Views",
      value: youtubeData.viewCount,
      color: "#0abde3",
    },
    {
      icon: <FaCircle size={20} />,
      label: "Live Learners",
      value: "1,673",
      color: "#1dd1a1",
    },
    {
      icon: <FaUsers size={28} />,
      label: "Total Debt Eliminated",
      value: "1,275,432",
      color: "#54a0ff",
    },
    {
      icon: <FaYoutube size={28} />,
      label: "YouTube Subscribers",
      value: youtubeData.subscriberCount,
      color: "#ff6b6b",
    },
  ];

  const containerVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      style={{
        background: "linear-gradient(135deg, #f0f4f8, #e1e8ef)",
        padding: "60px 20px",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "30px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={cardVariant}
          whileHover={{
            scale: 1.05,
            boxShadow: `0 8px 25px ${stat.color}55`,
          }}
          animate={{
            y: [0, -5, 0],
            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "32px 40px",
            minWidth: "220px",
            textAlign: "center",
            color: stat.color,
            boxShadow: `0 4px 20px rgba(0,0,0,0.08)`,
            transition: "all 0.3s ease",
          }}
        >
          <div style={{ marginBottom: "14px" }}>{stat.icon}</div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#2c3e50",
            }}
          >
            {stat.value}
          </div>
          <div
            style={{
              fontSize: "15px",
              marginTop: "6px",
              color: "#7f8c8d",
            }}
          >
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default StatHighlights;
