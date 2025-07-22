import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import LiveClassBanner from "../assets/LiveClassBanner.png";

const ClassLC = () => {
  const bannerRef = useRef(null);
  const ctaRef = useRef(null);

  const bannerControls = useAnimation();
  const ctaControls = useAnimation();

  const bannerInView = useInView(bannerRef, { threshold: 0.3, once: false });
  const ctaInView = useInView(ctaRef, { threshold: 0.3, once: false });

  useEffect(() => {
    if (bannerInView) {
      bannerControls.start("visible");
    } else {
      bannerControls.start("hidden");
    }

    if (ctaInView) {
      ctaControls.start("visible");
    } else {
      ctaControls.start("hidden");
    }
  }, [bannerInView, ctaInView]);

  return (
    <div className="w-full font-[Poppins]">
      {/* Banner Section */}
      <motion.div
        ref={bannerRef}
        initial="hidden"
        animate={bannerControls}
        variants={{
          hidden: { opacity: 0, scale: 1.05 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        }}
        style={{
          position: "relative",
          maxWidth: "100%",
          height: "470px",
          overflow: "hidden",
        }}
      >
        <img
          src={LiveClassBanner}
          alt="Live Class Banner"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </motion.div>

      {/* Bottom CTA Section */}
      <motion.section
        ref={ctaRef}
        initial="hidden"
        animate={ctaControls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" },
          },
        }}
        style={{
          backgroundColor: "#eaf3f8",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
          Don't Miss Out on the Next Live Class!
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {[
            {
              label: "Join Live Session on Tuesday",
              url: "https://meet.google.com/vmz-atgi-rpo",
            },
            {
              label: "Join Live Session on Thursday",
              url: "https://meet.google.com/rvq-bhqr-kxv",
            },
          ].map((btn, idx) => (
            <motion.a
              key={idx}
              href={btn.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.98 }}
              style={{
                backgroundColor: "#5dade2",
                color: "white",
                textDecoration: "none",
                border: "none",
                padding: "12px 24px",
                fontSize: "16px",
                borderRadius: "30px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              <strong>{btn.label}</strong>
            </motion.a>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default ClassLC;
