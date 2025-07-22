import React from 'react';
import './CoursesSection.css';
import {
  FaFileAlt, FaComments, FaCheckCircle, FaCreditCard, FaUser,
  FaUsers, FaListUl, FaFacebook, FaFileSignature, FaBriefcase,
  FaHome, FaExclamationTriangle, FaPaperPlane, FaChartBar,
  FaStore, FaCube, FaShieldAlt, FaMobileAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';

import freshmanImage from '../assets/freshman.jpg';
import sophomoreImage from '../assets/sophomore.jpg';
import juniorImage from '../assets/junior.jpg';
import seniorImage from '../assets/senior.jpeg';
import remedyImage from '../assets/remedy.jpg';
import privateImage from '../assets/private.jpg';

import { useNavigate } from 'react-router-dom';

const courses = [
  {
    title: 'FRESHMAN: Sovereignty 101',
    description: 'Discover how America shifted from liberty to control—and what it takes to reclaim independence once again.',
    image: freshmanImage,
    link: '/sov',
    features: [
      { icon: <FaFileAlt />, text: 'Foundations of American sovereignty and law' },
      { icon: <FaComments />, text: 'Evolution of legal identity post-Civil War' },
      { icon: <FaCheckCircle />, text: 'Origins of commercial law and currency' },
      { icon: <FaCreditCard />, text: 'Public system as a managed debt trap' },
      { icon: <FaUser />, text: 'Understanding your lawful private standing' }
    ]
  },
  {
    title: 'SOPHOMORE: Become Private',
    description: 'Learn how to step out of the public and establish your affairs in the private.',
    image: sophomoreImage,
    link: '/sophomore',
    features: [
      { icon: <FaCheckCircle />, text: 'Correct your status and reclaim your lawful standing' },
      { icon: <FaUsers />, text: 'Establish yourself as an American National' },
      { icon: <FaListUl />, text: 'Complete your Secured Party Creditor process' },
      { icon: <FaFacebook />, text: 'Create your private identity and foundational documents' },
      { icon: <FaFileSignature />, text: 'Declare your political and legal autonomy' }
    ]
  },
  {
    title: 'JUNIOR: Operate Private',
    description: 'Build, manage, and grow an Empire in the private, independent of the public system.',
    image: juniorImage,
    link: '/operateprivate',
    features: [
      { icon: <FaBriefcase />, text: 'Form Private Business Trusts' },
      { icon: <FaHome />, text: 'Private Membership Association' },
      { icon: <FaUsers />, text: 'Protect Real Estate Privately' },
      { icon: <FaCheckCircle />, text: 'Legacy Planning' }
    ]
  },
  {
    title: 'SENIOR: PRIVATE BUSINESS CREDIT',
    description: 'Learn how to build unlimited business credit in the Private',
    image: seniorImage,
    link: '/unlimitedcredit',
    features: [
      { icon: <FaListUl />, text: 'Build credit with unincorporated Business Trusts' },
      { icon: <FaFileAlt />, text: 'Access high-limit credit with no PG' },
      { icon: <FaCreditCard />, text: 'Set up strong reporting tradelines' },
      { icon: <FaExclamationTriangle />, text: 'Access airport lounges, luxury hotels, and vacations' },
      { icon: <FaPaperPlane />, text: '200k+ Business Funding' }
    ]
  },
  {
    title: 'I WANT REMEDY NOW!',
    description: 'Fast, lawful credit discharge that puts you back in control.',
    image: remedyImage,
    link: '/remedy',
    features: [
      { icon: <FaChartBar />, text: 'Credit Score & Report Fundamentals' },
      { icon: <FaExclamationTriangle />, text: 'Disputes & Legal Notices' },
      { icon: <FaUser />, text: 'Identity Theft & Restoration' },
      { icon: <FaListUl />, text: 'Credit Repair After Collections' },
      { icon: <FaComments />, text: 'Debt Discharge Tactics' }
    ]
  },
  {
    title: 'PRIVATE MERCHANT & PROCESSING',
    description: 'Discover the foundation of private commerce and take control of how you get paid',
    image: privateImage,
    link: '/privatemerchant',
    features: [
      { icon: <FaCreditCard />, text: 'Private Merchant Processing 101' },
      { icon: <FaStore />, text: 'Accept Payments Privately' },
      { icon: <FaCube />, text: 'Bypass Mainstream Merchant Gatekeepers' },
      { icon: <FaShieldAlt />, text: 'Avoid Freezes, Chargebacks & Account Terminations' },
      { icon: <FaMobileAlt />, text: 'POS Technology & Software' }
    ]
  }
];

const CoursesSection = () => {
  const navigate = useNavigate(); // ✅ Use inside component

  return (
    <section className="courses-section">
      <h2 className="section-heading">
        CREDITOR ACADEMY <span className="highlight">COURSES</span>
      </h2>

      <div className="cards-wrapper">
        {courses.map((course, index) => (
          <motion.div
            className="course-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="course-img-wrapper">
              <img src={course.image} alt={course.title} className="course-img" />
            </div>
            <div className="course-info">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <ul className="feature-list">
                {course.features.map((feature, i) => (
                  <li key={i}><span className="icon">{feature.icon}</span>{feature.text}</li>
                ))}
              </ul>
              <button
                className="learn-more"
                onClick={() => navigate(course.link)} // ✅ Internal navigation
              >
                LEARN MORE
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
