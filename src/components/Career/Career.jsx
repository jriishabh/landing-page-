import React, { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import "./Career.css";
import img1 from '../../assets/Application security analyst.jpeg';
import img2 from '../../assets/Soc analyst.webp';
import img3 from '../../assets/Penetration tester.jpeg';
import img4 from '../../assets/Vapt Analyst.webp';
import img5 from '../../assets/CS audit.webp';
import img6 from '../../assets/Security admin.jpg';

const careers = [
  {
    title: "Application Security Analyst",
    description: "Protects the security and integrity of an organization's applications.",
    image: img1,
  },
  {
    title: "SOC Security Analyst",
    description: "Monitors and audits the company's systems for security threats.",
    image: img2,
  },
  {
    title: "Penetration Tester",
    description: "Simulates cyber-attacks to identify security vulnerabilities.",
    image: img3,
  },
  {
    title: "VAPT Analyst",
    description: "Conducts vulnerability assessments and penetration testing.",
    image: img4,
  },
  {
    title: "Cybersecurity Auditor",
    description: "Oversees security policies and compliance auditing.",
    image: img5,
  },
  {
    title: "Security Administrator",
    description: "Develops strategies to protect organizations from cyber threats.",
    image: img6,
  },
];

const Career = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with duration
  }, []);

  // Function to scroll left
  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  // Function to scroll right
  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <div className="career-section" data-aos="fade-up"> {/* Apply AOS effect */}
      <h1 className="career-heading">Career Opportunity</h1>
      <div className="underline2"></div>
      <div className="slider-wrapper" data-aos="fade-left"> {/* Apply AOS effect */}
        <button className="slider-arrow left" onClick={scrollLeft}>&#10094;</button>
        
        <div className="career-slider" ref={sliderRef}>
          {careers.map((career, index) => (
            <div key={index} className="career-card" data-aos="zoom-in"> {/* Apply AOS effect */}
              <img src={career.image} alt={career.title} className="career-image" />
              <div className="career-info">
                <h2>{career.title}</h2>
                <p>{career.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="slider-arrow right" onClick={scrollRight}>&#10095;</button>
      </div>
    </div>
  );
};

export default Career;
