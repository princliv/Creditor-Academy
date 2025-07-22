import React, { useState } from "react";

// ✅ Admin Modal Component
const AdminModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleMode = () => setIsLogin(!isLogin);

  if (!isOpen) return null;

  return (
    <div style={overlayStyle}>
      <div style={modalContainerStyle}>
        <div style={modalStyle}>
          <button style={closeBtnStyle} onClick={onClose}>×</button>

          <h2 style={headingStyle}>
            {isLogin ? " Welcome " : " Create Account"}
          </h2>

          <form style={formStyle}>
            {!isLogin && (
              <input type="text" placeholder=" Full Name" style={inputStyle} />
            )}
            <input type="email" placeholder=" Email" style={inputStyle} />
            <input type="password" placeholder=" Password" style={inputStyle} />

            <button type="submit" style={submitBtnStyle}>
              {isLogin ? "Login →" : "Register →"}
            </button>
          </form>

          <p style={toggleTextStyle}>
            {isLogin ? "New here?" : "Already registered?"}{" "}
            <span style={toggleLinkStyle} onClick={toggleMode}>
              {isLogin ? "Register Now" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

// ✅ Styles
const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(8, 8, 8, 0.7)",
  backdropFilter: "blur(8px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
};

const modalContainerStyle = {
  animation: "fadeIn 0.3s ease-in-out",
  transition: "all 0.3s ease-in-out",
};

const modalStyle = {
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(30px)",
  borderRadius: "20px",
  padding: "50px 35px",
  width: "95%",
  maxWidth: "500px",
  boxShadow: "0 25px 45px rgba(0,0,0,0.3)",
  color: "#fff",
  position: "relative",
  fontFamily: "'Poppins', sans-serif",
  border: "1px solid rgba(255,255,255,0.1)",
};

const closeBtnStyle = {
  position: "absolute",
  top: "15px",
  right: "20px",
  fontSize: "26px",
  color: "#fff",
  background: "none",
  border: "none",
  cursor: "pointer",
  transition: "transform 0.2s ease",
};

const headingStyle = {
  textAlign: "center",
  fontSize: "24px",
  marginBottom: "30px",
  fontWeight: "700",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "18px",
};

const inputStyle = {
  padding: "14px 16px",
  borderRadius: "12px",
  border: "none",
  outline: "none",
  background: "rgba(255,255,255,0.15)",
  color: "#fff",
  fontSize: "15px",
  fontWeight: "400",
  transition: "0.3s ease",
};

const submitBtnStyle = {
  padding: "14px",
  background: "linear-gradient(135deg, #0D88C2, #23A6D5)",
  color: "#fff",
  border: "none",
  borderRadius: "12px",
  fontWeight: "600",
  fontSize: "16px",
  cursor: "pointer",
  transition: "transform 0.2s ease",
};

const toggleTextStyle = {
  marginTop: "20px",
  fontSize: "14px",
  textAlign: "center",
};

const toggleLinkStyle = {
  color: "#23A6D5",
  cursor: "pointer",
  fontWeight: "600",
  textDecoration: "underline",
};

// ✅ Keyframe animation
const fadeInKeyframes = `
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
`;

if (typeof document !== "undefined" && !document.getElementById("modal-fadein-keyframes")) {
  const styleTag = document.createElement("style");
  styleTag.id = "modal-fadein-keyframes";
  styleTag.innerHTML = fadeInKeyframes;
  document.head.appendChild(styleTag);
}

export default AdminModal;
