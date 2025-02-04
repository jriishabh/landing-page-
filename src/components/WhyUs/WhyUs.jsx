import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./WhyUs.css";
import isaca from '../../assets/ISACA.png';
import isc2 from '../../assets/ISC2.png';
import microsoft from '../../assets/Microsoft.png';
import comptia from '../../assets/CompTIA .png';
import offsec from '../../assets/OffSec.jpg';
import pecb from '../../assets/PECB.png';
import cisco from '../../assets/Cisco.png';
import eccounsil from '../../assets/Ec counsil.png';

const WhyUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with 1s duration
  }, []);

  return (
    <div className="whyus-container" data-aos="fade-up">
      <div className="whyus-text">
        <h2 className="whyus-heading" data-aos="fade-up">
          Our Authorised <br /> Training Partners
        </h2>
        
        <p className="whyus-description" >
          Earn world-class certifications trusted and highly valued globally by
          government bodies, private organizations, and the defense.
        </p>
        <p className="whyus-description" >
          Advance your career with our expert guidance.
        </p>
        
        <button
          className="whyus-button"
          onClick={() => {
            const formSection = document.getElementById("booking-form");
            if (formSection) {
              formSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Get CEH Certified Now
        </button>
      </div>

      <div className="whyus-logos" data-aos="fade-left">
        <div className="logo-container">
          <img src={isaca} alt="isaca" data-aos="zoom-in" />
          <img src={isc2} alt="isc2" data-aos="zoom-in" />
          <img src={microsoft} alt="microsoft" data-aos="zoom-in" />
          <img src={comptia} alt="comptia" data-aos="zoom-in" />
          <img src={offsec} alt="offsec" data-aos="zoom-in" />
          <img src={pecb} alt="pecb" data-aos="zoom-in" />
          <img src={cisco} alt="cisco" data-aos="zoom-in" />
          <img src={eccounsil} alt="ec counsil" data-aos="zoom-in" />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
