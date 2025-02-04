import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Hero.css";
import whatsapp from '../../assets/Whatsapp.jpg';
import callicon from '../../assets/callicon.png';


const Hero = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeTab, setActiveTab] = useState("summary");

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".hero-container");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsSticky(heroBottom <= 0);
      }

      // Detect which section is in view
      const sections = ["summary", "module", "whyus", "career", "faq"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Certified <br/> Ethical Hacker v13</h1>
        <p>World’s No.1 ethical hacking certification, now with the power of AI</p>
        <button className="hero-button">Enquire</button>
      </div>
      <div className={`hero-nav ${isSticky ? "sticky" : ""}`}>
        <ul>
          <li>
            <Link 
              to="summary" 
              smooth={true} 
              duration={1000}
              className={activeTab === "summary" ? "active" : ""}
              onClick={() => setActiveTab("summary")}
            >
              SUMMARY
            </Link>
          </li>
          <li>
            <Link 
              to="module" 
              smooth={true} 
              duration={500}
              className={activeTab === "module" ? "active" : ""}
              onClick={() => setActiveTab("module")}
            >
              COURSE
            </Link>
          </li>
          <li>
            <Link 
              to="whyus" 
              smooth={true} 
              duration={500}
              className={activeTab === "whyus" ? "active" : ""}
              onClick={() => setActiveTab("whyus")}
            >
              WHY US?
            </Link>
          </li>
          <li>
            <Link 
              to="career" 
              smooth={true} 
              duration={500}
              className={activeTab === "career" ? "active" : ""}
              onClick={() => setActiveTab("career")}
            >
              CAREERS
            </Link>
          </li>
          <li>
            <Link 
              to="faq" 
              smooth={true} 
              duration={500}
              className={activeTab === "faq" ? "active" : ""}
              onClick={() => setActiveTab("faq")}
            >
              FAQs
            </Link>
          </li>
        </ul>
        <div className="call-section">
          <img src={callicon} alt="Call us" className="call-icon" />
          <div className="call-text">
            <span>Call Us</span>
            <br />
            <span><a href="tel:+918448046612">+91 8448046612</a></span>
          </div>
        </div>
      </div>

      <div 
        className="whatsapp-logo" 
        onClick={() => window.open('https://api.whatsapp.com/send/?phone=918448046612&text=CyberDefentech%0D%0AHi%2C%0D%0AHow+can+I+help+you+%3F&type=phone_number&app_absent=0', '_blank')}
      >
        <img src={whatsapp} alt="WhatsApp" />
      </div>
    </div>
  );
};

export default Hero;