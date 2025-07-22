import React, { useState, useEffect, useRef } from 'react';
import { FaRobot, FaPaperPlane, FaTimes, FaBook, FaDollarSign, FaUsers, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      sender: 'bot', 
      text: 'Hey there! 🎉 Welcome to Creditor Academy—your gateway to financial freedom! How can I assist you today?', 
      showSuggestions: true 
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const botResponses = {
    courses: `📚 **Course Catalog** ✨\n\n` +
      `▸ Sovereignty 101 - Master legal identity foundations\n` +
      `▸ Private Merchant - Setup payment processing\n` +
      `▸ Operate in Private - Trust/business management\n` +
      `▸ Build in Credit™ - Unlimited funding strategies\n` +
      `▸ Masterclass - Advanced financial tactics\n\n` +
      `Which one intrigues you? 😊`,

    pricing: `💰 **Membership Tiers** 💎\n\n` +
      `◈ Freshman - $9/mo\n` +
      `◈ Master Class - $69/mo (includes private ID)\n` +
      `◈ "Remedy Now" - $399 (50% OFF)\n` +
      `◈ Cadillac Website - $499 down + $49/mo\n\n` +
      `Want me to explain any option?`,

    'talk to team': `👥 **Connect With Us** 📞\n\n` +
      `• Email: sales@creditoracademy.com\n` +
      `• Platform: Message via member dashboard\n` +
      `• VIP Support: Available for Master Class members\n\n` +
      `We'll respond within 24 hours!`,

    default: `🤖 **Pro Tip**: Try these quick options 👇`
  };

  const handleSendMessage = (message) => {
    if (!message.trim()) return;

    // Add user message with typing animation
    setMessages(prev => [...prev, { 
      sender: 'user', 
      text: message,
      id: Date.now() 
    }]);

    setTimeout(() => {
      const responseKey = message.toLowerCase().includes('course') ? 'courses' :
                         message.toLowerCase().includes('pric') ? 'pricing' :
                         message.toLowerCase().includes('team') ? 'talk to team' : 
                         'default';
      
      setMessages(prev => [...prev, { 
        sender: 'bot', 
        text: botResponses[responseKey],
        showSuggestions: responseKey === 'default',
        id: Date.now() + 1
      }]);
    }, 800);

    setInput('');
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Small bounce animation when opening
      const chatWindow = document.querySelector('.chat-window');
      if (chatWindow) {
        chatWindow.style.transform = 'translateY(10px)';
        setTimeout(() => {
          chatWindow.style.transform = 'translateY(0)';
        }, 100);
      }
    }
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 100,
        damping: 10
      }
    }
  };

  const popIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200
      }
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="chatbot-button"
        initial={false}
        animate={{
          scale: isOpen ? 0.9 : 1,
          rotate: isOpen ? 10 : 0
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChat}
      >
        <FaRobot size={24} />
        <AnimatePresence>
          {!isOpen && (
            <motion.div 
              className="pulse-dot"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-window"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25 }}
          >
            {/* Header */}
            <div className="chat-header">
              <div className="header-left">
                <motion.div 
                  className="bot-avatar"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2 
                  }}
                >
                  <FaRobot size={20} />
                </motion.div>
                <h3>CreditorBot</h3>
              </div>
              <motion.button
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleChat}
              >
                <FaTimes size={18} />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="messages-container">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  className={`message ${msg.sender}`}
                >
                  {msg.text.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                  
                  {msg.showSuggestions && (
                    <motion.div 
                      className="suggestions"
                      variants={popIn}
                    >
                      {['Courses', 'Pricing', 'Talk to Team'].map((item) => (
                        <motion.button
                          key={item}
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleSendMessage(item)}
                        >
                          {item === 'Courses' && <FaBook />}
                          {item === 'Pricing' && <FaDollarSign />}
                          {item === 'Talk to Team' && <FaUsers />}
                          {item}
                          <FaChevronRight size={12} />
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <motion.div 
              className="input-area"
              layout
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(input)}
                placeholder="Type your question..."
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleSendMessage(input)}
                disabled={!input.trim()}
              >
                <FaPaperPlane />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS Styles */}
      <style jsx>{`
        .chatbot-button {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #6e8efb, #3dc8e0);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          z-index: 1000;
          border: 2px solid white;
        }

        .pulse-dot {
          position: absolute;
          top: -5px;
          right: -5px;
          width: 15px;
          height: 15px;
          background: #ff4757;
          border-radius: 50%;
          border: 2px solid white;
        }

        .chat-window {
          position: fixed;
          bottom: 100px;
          right: 30px;
          width: 350px;
          height: 500px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.2);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 999;
        }

        .chat-header {
          padding: 15px 20px;
          background: linear-gradient(135deg, #6e8efb, #5dc0de);
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .bot-avatar {
          background: white;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6e8efb;
        }

        .messages-container {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          background: #f8f9fa;
        }

        .message {
          max-width: 80%;
          padding: 12px 16px;
          margin-bottom: 15px;
          border-radius: 18px;
          line-height: 1.4;
          font-size: 14px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .message.bot {
          background: white;
          color: #333;
          border-bottom-left-radius: 5px;
          margin-right: auto;
          border: 1px solid #eee;
        }

        .message.user {
          background: linear-gradient(135deg, #6e8efb, #3dc8e0);
          color: white;
          border-bottom-right-radius: 5px;
          margin-left: auto;
        }

        .suggestions {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 15px;
        }

        .suggestions button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 15px;
          background: white;
          border: 1px solid #ddd;
          border-radius: 10px;
          cursor: pointer;
          font-size: 13px;
          transition: all 0.2s;
        }

        .suggestions button:hover {
          background: #f1f3ff;
          transform: translateX(5px);
        }

        .input-area {
          padding: 15px;
          background: white;
          border-top: 1px solid #eee;
          display: flex;
          gap: 10px;
        }

        .input-area input {
          flex: 1;
          padding: 12px 15px;
          border: 1px solid #ddd;
          border-radius: 30px;
          outline: none;
          font-size: 14px;
        }

        .input-area button {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6e8efb, #3dc8e0);
          color: white;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .input-area button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
};

export default Chatbot;