import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1a2a6c, #1a3a8f, #4a89dc)',
      color: '#fff',
      padding: '80px 10%',
      fontFamily: "'Inter', sans-serif",
      maxWidth: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)',
        zIndex: 0
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '-50px',
        right: '-50px',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
        zIndex: 0
      }}></div>

      {/* Main content */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '40px',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Column 1: Legal & Policies */}
        <div style={{
          flex: 1,
          minWidth: 250,
          marginBottom: 40,
          position: 'relative',
          transform: 'translateY(0)',
          transition: 'transform 0.3s ease'
        }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
           onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '30px',
            height: '100%',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              marginBottom: 25,
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: 15,
              position: 'relative',
              paddingBottom: '15px'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(5px)'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l7 4v6c0 5.25-3.33 9.74-7 10-3.67-.26-7-4.75-7-10V6l7-4z"></path>
                </svg>
              </div>
              Legal & Policies
              <span style={{
                display: 'block',
                width: '100%',
                height: '3px',
                background: 'linear-gradient(90deg, #fff, transparent)',
                position: 'absolute',
                bottom: 0,
                left: 0,
                borderRadius: '3px'
              }}></span>
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '15px'
            }}>
              {[
                { path: '/privacypolicy', text: 'Privacy Policies' },
                { path: '/termcondition', text: 'Terms and Condition' },
                { path: '/returnrefund', text: 'Return and Refunds' },
                { path: '/mtc', text: 'Membership Terms and Conditions' }
              ].map((item, index) => (
                <li key={index} style={{
                  position: 'relative',
                  paddingLeft: '20px'
                }}>
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#fff',
                    transition: 'all 0.3s ease'
                  }}></div>
                  <Link to={item.path} style={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '1.1rem',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                    position: 'relative'
                  }} onMouseEnter={(e) => {
                    e.currentTarget.style.paddingLeft = '15px';
                    e.currentTarget.previousSibling.style.width = '15px';
                    e.currentTarget.previousSibling.style.height = '15px';
                    e.currentTarget.previousSibling.style.opacity = '0.7';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.paddingLeft = '0';
                    e.currentTarget.previousSibling.style.width = '8px';
                    e.currentTarget.previousSibling.style.height = '8px';
                    e.currentTarget.previousSibling.style.opacity = '1';
                  }}>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 2: Contact Us */}
        <div style={{
          flex: 1,
          minWidth: 250,
          marginBottom: 40,
          position: 'relative',
          transform: 'translateY(0)',
          transition: 'transform 0.3s ease'
        }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
           onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '30px',
            height: '100%',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              marginBottom: 25,
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: 15,
              position: 'relative',
              paddingBottom: '15px'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(5px)'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              Contact Us
              <span style={{
                display: 'block',
                width: '100%',
                height: '3px',
                background: 'linear-gradient(90deg, #fff, transparent)',
                position: 'absolute',
                bottom: 0,
                left: 0,
                borderRadius: '3px'
              }}></span>
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              {[
                { icon: 'email', text: 'counselor@creditoracademy.com' },
                { icon: 'phone', text: '(425-400-9246)' },
                { icon: 'clock', text: '9:00 AM to 5:00 PM EST' }
              ].map((item, index) => (
                <li key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.3s ease'
                  }}>
                    {item.icon === 'email' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    )}
                    {item.icon === 'phone' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    )}
                    {item.icon === 'clock' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    )}
                  </div>
                  <span style={{
                    fontWeight: 500,
                    fontSize: '1.1rem',
                    lineHeight: 1.4
                  }}>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 3: Social Links */}
        <div style={{
          flex: 1,
          minWidth: 250,
          marginBottom: 40,
          position: 'relative',
          transform: 'translateY(0)',
          transition: 'transform 0.3s ease'
        }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
           onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '30px',
            height: '100%',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              marginBottom: 25,
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: 15,
              position: 'relative',
              paddingBottom: '15px'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(5px)'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              Social Links
              <span style={{
                display: 'block',
                width: '100%',
                height: '3px',
                background: 'linear-gradient(90deg, #fff, transparent)',
                position: 'absolute',
                bottom: 0,
                left: 0,
                borderRadius: '3px'
              }}></span>
            </h3>
            <p style={{
              marginBottom: '25px',
              fontSize: '1.1rem',
              lineHeight: 1.6
            }}>Follow us on social media to stay updated with our latest news and offerings.</p>
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '15px'
            }}>
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/groups/1455118361753321/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                  e.currentTarget.style.background = '#1877F2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                }}
                aria-label="Facebook"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                  <path d="M22 12A10 10 0 1 0 12 22v-7h-2v-3h2v-2.3c0-2 1.2-3.2 3-3.2.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z" />
                </svg>
                <span style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  opacity: 0,
                  transition: 'all 0.3s ease'
                }}>Facebook</span>
              </a>

              {/* Twitter/X */}
              <a 
                href="https://x.com/CreditorAcademy" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                  e.currentTarget.style.background = '#000000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                }}
                aria-label="Twitter"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
                <span style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  opacity: 0,
                  transition: 'all 0.3s ease'
                }}>Twitter</span>
              </a>

              {/* YouTube */}
              <a 
                href="https://www.youtube.com/@creditoracademy" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                  e.currentTarget.style.background = '#FF0000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                }}
                aria-label="YouTube"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  opacity: 0,
                  transition: 'all 0.3s ease'
                }}>YouTube</span>
              </a>

              {/* Rumble */}
              <a 
                href="https://rumble.com/user/CreditorAcademy" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                  e.currentTarget.style.background = '#85C742';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                }}
                aria-label="Rumble"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.563 17.5c-1.5 1.75-3.5 2.75-5.563 2.75s-4.063-1-5.563-2.75c-1.5-1.75-2.437-4-2.437-5.5s.937-3.75 2.437-5.5C7.937 4 9.937 3 12 3s4.063 1 5.563 2.75c1.5 1.75 2.437 4 2.437 5.5s-.937 3.75-2.437 5.5zM10 8v8l5.5-4-5.5-4z" />
                </svg>
                <span style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  opacity: 0,
                  transition: 'all 0.3s ease'
                }}>Rumble</span>
              </a>

              {/* TikTok */}
              <a 
                href="https://www.tiktok.com/@creditoracademy" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                  e.currentTarget.style.background = '#000000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                }}
                aria-label="TikTok"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
                <span style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  opacity: 0,
                  transition: 'all 0.3s ease'
                }}>TikTok</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={{
        width: '100%',
        margin: '40px auto 0',
        padding: '30px 0 0',
        borderTop: '1px solid rgba(255,255,255,0.4)',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <p style={{
          margin: 0,
          fontSize: '1rem',
          fontWeight: 400,
          letterSpacing: '0.5px'
        }}>© 2025 Creditor Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;