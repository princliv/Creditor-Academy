import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/creditorlogo.png';
import mascot from '../assets/paul_avatar.png';
import AdminModal from './AdminModal';
import './navbar.css';

const tourSteps = [
  {
    selector: null,
    text: "👋 Welcome to Creditor Academy!",
    description: "We empower individuals with private education on credit, remedy processes, and business structuring. Let's take a quick tour of the platform."
  },
  {
    selector: '#nav-courses',
    text: 'Explore all credit-building courses.',
    description: 'Browse our structured education paths covering credit, sovereignty, and private business solutions.'
  },
  {
    selector: '#nav-services',
    text: 'Check services like website and merchant support.',
    description: 'We offer additional services like private website setups and merchant processing tailored to your journey.'
  },
  {
    selector: '#nav-membership',
    text: 'Join our membership to unlock full benefits.',
    description: 'Access exclusive content, member-only classes, priority support, and more with our all-in-one membership.'
  },
  {
    selector: '#nav-contact',
    text: 'Have a question? Contact us here.',
    description: 'Need help or have a query? Reach out to us anytime through our contact page.'
  },
  {
    selector: '#nav-remedy',
    text: 'Start your remedy journey now.',
    description: 'Take action with practical remedy courses to correct status, claim rights, and restore credit powerfully.'
  },
  {
    selector: '#nav-login',
    text: 'Already a member? Login here.',
    description: 'If you’ve joined us before, log in to access your dashboard, courses, and exclusive resources.'
  }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [scrolled, setScrolled] = useState(false);

  const [tourStep, setTourStep] = useState(0);
  const [tourActive, setTourActive] = useState(true); // tour repeats every time
  const [animateIn, setAnimateIn] = useState(false);

  const coursesTimeoutRef = useRef(null);
  const servicesTimeoutRef = useRef(null);

  // Animate on activation
  useEffect(() => {
    if (tourActive) setTimeout(() => setAnimateIn(true), 100);
    else setAnimateIn(false);
  }, [tourActive]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 5);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCoursesEnter = () => {
    clearTimeout(coursesTimeoutRef.current);
    setShowCourses(true);
  };
  const handleCoursesLeave = () => {
    coursesTimeoutRef.current = setTimeout(() => setShowCourses(false), 150);
  };
  const handleServicesEnter = () => {
    clearTimeout(servicesTimeoutRef.current);
    setShowServices(true);
  };
  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => setShowServices(false), 150);
  };
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile && isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMobile && isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen, isMobile]);

  const loginButton = (isMobileView = false) => (
    <a
      id="nav-login"
      href="#"
      onClick={openModal}
      className={`nav-login-btn${isMobileView ? ' mobile' : ''}`}
    >Login</a>
  );

  // Highlight effect
  useEffect(() => {
    if (!tourActive) return;
    const currentStep = tourSteps[tourStep];
    document.querySelectorAll('.tour-highlight').forEach(el => el.classList.remove('tour-highlight'));
    const el = document.querySelector(currentStep.selector);
    if (el) el.classList.add('tour-highlight');
    return () => {
      document.querySelectorAll('.tour-highlight').forEach(el => el.classList.remove('tour-highlight'));
    };
  }, [tourStep, tourActive]);

  const getCurrentRect = () => {
    const step = tourSteps[tourStep];
    if (!step.selector) return null;
    const el = document.querySelector(step.selector);
    return el?.getBoundingClientRect();
  };
  return (
    <>
      <header className={`nav-root${scrolled ? " scrolled" : ""}`}>
        <div className="nav-logo-wrap">
          {isMobile && (
            <button onClick={toggleMenu} className="nav-menu-btn" aria-label="Menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#59b7ff">
                {isMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" strokeWidth="2.5" strokeLinecap="round" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" strokeWidth="2.5" strokeLinecap="round" />
                )}
              </svg>
            </button>
          )}
          <Link to="/" className="nav-logo-link">
            <img src={logo} alt="Creditor Academy" className="nav-logo" />
          </Link>
        </div>
        {!isMobile && (
          <nav className="nav-main-menu">
            <div className="nav-dropdown-wrap" onMouseEnter={handleCoursesEnter} onMouseLeave={handleCoursesLeave}>
              <span id="nav-courses" className="nav-link cool-underline">Courses ▾</span>
              <div className={`nav-dropdown${showCourses ? ' visible' : ''}`}>
                <NavLink to="/sov" className="nav-dropdown-link cool-underline">FRESHMAN: Sovereignty 101</NavLink>
                <NavLink to="/sophomore" className="nav-dropdown-link cool-underline">SOPHOMORE: Become Private</NavLink>
                <NavLink to="/operateprivate" className="nav-dropdown-link cool-underline">JUNIOR: Operate Private</NavLink>
                <NavLink to="/unlimitedcredit" className="nav-dropdown-link cool-underline">SENIOR: PRIVATE BUSINESS CREDIT</NavLink>
                <NavLink to="/remedy" className="nav-dropdown-link cool-underline">I WANT REMEDY NOW!</NavLink>
                <NavLink to="/privatemerchant" className="nav-dropdown-link cool-underline">Private Merchant & Processing</NavLink>
              </div>
            </div>
            <div className="nav-dropdown-wrap" onMouseEnter={handleServicesEnter} onMouseLeave={handleServicesLeave}>
              <span id="nav-services" className="nav-link cool-underline">Services ▾</span>
              <div className={`nav-dropdown${showServices ? ' visible' : ''}`}>
                <NavLink to="/liveclass" className="nav-dropdown-link cool-underline">Live Class</NavLink>
                <NavLink to="/website" className="nav-dropdown-link cool-underline">Website Creation</NavLink>
                <NavLink to="/pmp" className="nav-dropdown-link cool-underline">Merchant Processing</NavLink>
              </div>
            </div>
            <NavLink id="nav-membership" to="/masterclass" className="nav-link cool-underline">Membership</NavLink>
            <NavLink id="nav-contact" to="/ContactSection" className="nav-link cool-underline">Contact</NavLink>
            <NavLink id="nav-remedy" to="/remedy" className="nav-link cool-underline">Remedy NOW</NavLink>
            {loginButton()}
          </nav>
        )}
        {isMobile && loginButton(true)}
        {isMobile && isMenuOpen && (
          <div className="nav-mobile-menu">
            <div className="nav-mobile-dropdown">
              <button
                onClick={() => setShowCourses(!showCourses)}
                className="nav-mobile-dropdown-btn"
              >
                Courses {showCourses ? '▴' : '▾'}
              </button>
              {showCourses && (
                <div className="nav-mobile-dropdown-content">
                  <NavLink to="/sov" className="nav-mobile-link cool-underline" onClick={toggleMenu}>FRESHMAN: Sovereignty 101</NavLink>
                  <NavLink to="/sophomore" className="nav-mobile-link cool-underline" onClick={toggleMenu}>SOPHOMORE: Become Private</NavLink>
                  <NavLink to="/operateprivate" className="nav-mobile-link cool-underline" onClick={toggleMenu}>JUNIOR: Operate Private</NavLink>
                  <NavLink to="/unlimitedcredit" className="nav-mobile-link cool-underline" onClick={toggleMenu}>SENIOR: PRIVATE BUSINESS CREDIT</NavLink>
                  <NavLink to="/remedy" className="nav-mobile-link cool-underline" onClick={toggleMenu}>I WANT REMEDY NOW!</NavLink>
                  <NavLink to="/privatemerchant" className="nav-mobile-link cool-underline" onClick={toggleMenu}>Private Merchant & Processing</NavLink>
                </div>
              )}
            </div>
            <div className="nav-mobile-dropdown">
              <button
                onClick={() => setShowServices(!showServices)}
                className="nav-mobile-dropdown-btn"
              >
                Services {showServices ? '▴' : '▾'}
              </button>
              {showServices && (
                <div className="nav-mobile-dropdown-content">
                  <NavLink to="/liveclass"   className="nav-mobile-link cool-underline" onClick={toggleMenu}>Live Class</NavLink>
                  <NavLink to="/website" className="nav-mobile-link cool-underline" onClick={toggleMenu}>Website Creation</NavLink>
                  <NavLink to="/pmp" className="nav-mobile-link cool-underline" onClick={toggleMenu}>Merchant Processing</NavLink>
                </div>
              )}
            </div>
            <NavLink to="/masterclass" className="nav-mobile-link cool-underline" onClick={toggleMenu}>Membership</NavLink>
            <NavLink to="/ContactSection" className="nav-mobile-link cool-underline" onClick={toggleMenu}>Contact</NavLink>
            <NavLink to="/remedy" className="nav-mobile-link cool-underline" onClick={toggleMenu}>Remedy NOW</NavLink>
          </div>
        )}
      </header>

      {/* MASCOT TOUR */}
      {tourActive && (
        <>
          {/* Overlay */}
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.7)',
            zIndex: 998
          }} />

          {/* Focus highlight */}
          {(() => {
            const rect = getCurrentRect();
            if (!rect) return null;
            const size = Math.max(rect.width, rect.height) + 30;
            const top = rect.top + window.scrollY + rect.height / 2 - size / 2;
            const left = rect.left + window.scrollX + rect.width / 2 - size / 2;
            return (
              <div style={{
                position: 'absolute',
                top,
                left,
                width: size,
                height: size,
                borderRadius: '50%',
                boxShadow: '0 0 0 3px #fff, 0 0 15px 6px #3498db',
                zIndex: 9999,
                pointerEvents: 'none',
                transition: 'all 0.3s ease'
              }} />
            );
          })()}

          {/* Curved Arrow from Mascot to Edge of Highlighted Circle */}
          {(() => {
            const rect = getCurrentRect();
            if (!rect) return null;

            const mascotX = 140; // center of mascot box (adjust to match image)
            const mascotY = window.innerHeight - 100; // slightly above mascot bottom

            // Center of the highlight circle
            const centerX = rect.left + rect.width / 2 + window.scrollX;
            const centerY = rect.top + rect.height / 2 + window.scrollY;

            // Radius of the circle (matching the highlight ring)
            const radius = Math.max(rect.width, rect.height) / 2 + 15;

            // Calculate direction vector
            const dx = centerX - mascotX;
            const dy = centerY - mascotY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Normalize and scale to stop at the edge of the circle
            const unitX = dx / dist;
            const unitY = dy / dist;

            const targetX = centerX - unitX * radius;
            const targetY = centerY - unitY * radius;

            // Smooth upward curve
            const controlOffsetY = Math.min(100, dist / 2); // dynamic control height
            const controlPoint1 = `${mascotX},${mascotY - controlOffsetY}`;
            const controlPoint2 = `${targetX},${mascotY - controlOffsetY}`;

            const path = `M ${mascotX},${mascotY}
                          C ${controlPoint1}, ${controlPoint2}, ${targetX},${targetY}`;

            return (
              <svg
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  zIndex: 9999,
                  pointerEvents: 'none',
                }}
              >
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="0"
                    refY="3.5"
                    orient="auto"
                    fill="#ffffff"
                  >
                    <polygon points="0 0, 10 3.5, 0 7" />
                  </marker>
                </defs>
                <path
                  d={path}
                  stroke="#ffffff"
                  strokeWidth="3"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  style={{
                    filter: 'drop-shadow(0 0 6px #3498db)',
                    strokeDasharray: '6,4',
                    transition: 'all 0.4s ease'
                  }}
                />
              </svg>
            );
          })()}

          {/* Mascot Box with Avatar & Animation */}
          <div style={{
            position: 'fixed',
            bottom: '20px',
            left: '30px',
            display: 'flex',
            alignItems: 'center',
            padding: '16px 20px 16px 100px', // increased left padding for mascot
            background: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            borderRadius: '16px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
            zIndex: 10000,
            width: '300px',
            minHeight: '180px',
            height: 'auto',
            color: '#fff',
            transform: animateIn ? 'translateY(0)' : 'translateY(40px)',
            opacity: animateIn ? 1 : 0,
            transition: 'all 0.6s ease',
          }}>
            {/* Speech bubble tail */}
            <div style={{
              position: 'absolute',
              left: '55px',
              bottom: '-14px',
              width: 0,
              height: 0,
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderTop: '14px solid rgba(0, 0, 0, 0.5)',
              filter: 'blur(0.3px)',
              zIndex: -1
            }} />

            {/* Mascot Image - aligned left and outside */}
            <img src={mascot} alt="Mascot" style={{
              width: 'auto',
              height: '180px',
              position: 'absolute',
              left: '0px',
              bottom: '20px',
            }} />

            {/* Text + Buttons */}
            <div style={{ flex: 1, fontFamily: "'Poppins', sans-serif", position: 'relative' }}>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{tourSteps[tourStep].text}</p>
              {tourSteps[tourStep].description && (
                <p style={{ fontSize: '0.9rem', marginTop: '6px', color: '#ddd' }}>
                  {tourSteps[tourStep].description}
                </p>
              )}


              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                  onClick={() => {
                    setTourActive(false);
                    localStorage.setItem('tour_seen', 'true');
                  }}
                  style={{
                    border: 'none',
                    background: 'none',
                    color: '#ccc',
                    fontSize: '0.85rem',
                    fontFamily: 'Poppins, sans-serif',
                    cursor: 'pointer',
                    textDecoration: 'underline'
                  }}
                >
                  Skip
                </button>

                <div style={{ display: 'flex', gap: '12px' }}>
                  {/* BACK BUTTON */}
                  {tourStep > 0 && (
                    <button
                      onClick={() => setTourStep(tourStep - 1)}
                      style={{
                        backgroundColor: '#ffffff',
                        color: '#2c3e50',
                        border: '1px solid #2c3e50',
                        padding: '8px 14px',
                        borderRadius: '6px',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
                    >
                      ← Back
                    </button>
                  )}

                  {/* NEXT/FINISH BUTTON */}
                  <button
                    onClick={() => {
                      if (tourStep === tourSteps.length - 1) {
                        setTourActive(false);
                        localStorage.setItem('tour_seen', 'true');
                      } else {
                        setTourStep(tourStep + 1);
                      }
                    }}
                    style={{
                      backgroundColor: '#3498db',
                      color: '#fff',
                      border: 'none',
                      padding: '8px 14px',
                      borderRadius: '6px',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2980b9'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3498db'}
                  >
                    {tourStep === tourSteps.length - 1 ? 'Finish' : 'Next →'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <AdminModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Navbar;