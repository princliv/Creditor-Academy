import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    name: "Amara W., Oregon",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Status correction isn’t theory here. You actually do the work, file the docs, and walk away with proof.",
  },
  {
    name: "Kevin R., Tennessee",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "The SPC process was a mystery until I took this course. Now I’m filed, recorded, and free.",
  },
  {
    name: "John P., Arizona",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "My ID, Trust, and UCC — all completed in 3 months. I’m living in the Private now.",
  },
];

const TestimonialsSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/ContactSection'); // Make sure this route exists
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Testimonials */}
      <div
        style={{
          background: "linear-gradient(135deg, #e6f0ff, #cce0ff)",
          color: "#2c3e50",
          padding: "80px 10%",
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
        }}
        data-aos="fade-up"
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "50px",
            position: "relative",
            display: "inline-block",
          }}
        >
          <strong>
            <span style={{ color: "rgb(0, 86, 179)" }}>
              What Our Students Are Saying
            </span>
          </strong>
          <span
            style={{
              position: "absolute",
              bottom: "-15px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              background: "linear-gradient(90deg, #3498db, #5dade2)",
              borderRadius: "2px",
            }}
          />
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 200}
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                padding: "40px 30px",
                maxWidth: "320px",
                border: "1px solid rgba(52, 152, 219, 0.3)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: "0 5px 15px rgba(52, 152, 219, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 25px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow =
                  "0 5px 15px rgba(52, 152, 219, 0.1)";
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  margin: "0 auto 20px",
                  border: "3px solid #3498db",
                }}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div style={{ position: "relative", marginBottom: "20px" }}>
                <svg
                  style={{
                    position: "absolute",
                    top: "-30px",
                    left: "-10px",
                    opacity: 0.1,
                    width: "40px",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#2c3e50"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.6",
                    fontStyle: "italic",
                    color: "#34495e",
                    marginTop: 0,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  “{t.quote}”
                </p>
              </div>

              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#3498db",
                  marginBottom: 0,
                }}
              >
                — {t.name}
              </p>

              <div style={{ marginTop: "15px" }}>
                <span
                  style={{
                    color: "#f1c40f",
                    fontSize: "1.2rem",
                    letterSpacing: "1px",
                  }}
                >
                  ★ ★ ★ ★ ★
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Footer */}
      <section
        data-aos="fade-up"
        style={{
          padding: "30px",
          backgroundColor: "white",
          textAlign: "center",
          borderTop: "1px solid rgba(52, 152, 219, 0.2)",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#2c3e50",
            fontSize: "1.1rem",
            fontWeight: 500,
          }}
        >
          Join thousands of satisfied students today
        </p>
      </section>

      {/* Final CTA */}
      <section
        data-aos="fade-up"
        style={{
          padding: "100px 10%",
          background: "radial-gradient(circle at top left, #d1eaff, #f0f9ff)",
          textAlign: "center",
          fontFamily: "'Segoe UI', sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle, rgba(0,123,255,0.2), transparent)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "-80px",
            width: "250px",
            height: "250px",
            background:
              "radial-gradient(circle, rgba(0,123,255,0.1), transparent)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        />
        <h2
          style={{
            fontSize: "2.8rem",
            background: "linear-gradient(to right, #007BFF, #0056b3)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          <strong>
            <span style={{ color: "rgb(0, 86, 179)" }}>
              Ready to Become Private?
            </span>
          </strong>
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#2c3e50",
            maxWidth: "700px",
            margin: "20px auto",
          }}
        >
          3 Months | 1 Transformation. 24 Live Classes | 52 Elite Lessons. 10
          Games | 100% Executed Record. You can’t file your way into sovereignty.
          You have to know who you are first.
        </p>
   <button
      onClick={handleClick}
      style={{
        display: "inline-block",
        padding: "18px 40px",
        background: "linear-gradient(135deg, #3498db, #5dade2)",
        color: "white",
        fontSize: "1.2rem",
        fontWeight: "bold",
        borderRadius: "10px",
        textDecoration: "none",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        border: "none",
        cursor: "pointer"
      }}
    >
      Enroll Now
    </button>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#333",
            marginTop: "20px",
          }}
        >
          <a
            href="https://www.creditoracademy.com"
            style={{ color: "#5dade2" }}
          >
            creditoracademy.com
          </a>{" "}
          | +1 425-400-9246 |{" "}
          <a
            href="mailto:support@creditoracademy.com"
            style={{ color: "#5dade2" }}
          >
            support@creditoracademy.com
          </a>
        </p>
      </section>
    </>
  );
};

export default TestimonialsSection;
