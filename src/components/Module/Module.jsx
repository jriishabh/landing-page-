import React, { useEffect, useState } from "react";
import "./Module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const modules = [
  { "title": "Module 1 : Introduction to Ethical Hacking", "hours": 5 },
  { "title": "Module 2 : Footprinting and Reconnaissance", "hours": 5 },
  { "title": "Module 3 : Scanning Networks", "hours": 5 },
  { "title": "Module 4 : Enumeration", "hours": 5 },
  { "title": "Module 5 : Vulnerability Analysis", "hours": 5 },
  { "title": "Module 6 : System Hacking", "hours": 5 },
  { "title": "Module 7 : Malware Threats", "hours": 5 },
  { "title": "Module 8 : Sniffing", "hours": 5 },
  { "title": "Module 9 : Social Engineering", "hours": 5 },
  { "title": "Module 10 : Denial-of-Service", "hours": 5 },
  { "title": "Module 11 : Session Hijacking", "hours": 5 },
  { "title": "Module 12 : Evading IDS, Firewalls, and Honeypots", "hours": 5 },
  { "title": "Module 13 : Hacking Web Servers", "hours": 5 },
  { "title": "Module 14 : Hacking Web Applications", "hours": 5 },
  { "title": "Module 15 : SQL Injection", "hours": 5 },
  { "title": "Module 16 : Hacking Wireless Networks", "hours": 5 },
  { "title": "Module 17 : Hacking Mobile Platforms", "hours": 5 },
  { "title": "Module 18 : IoT and OT Hacking", "hours": 5 },
  { "title": "Module 19 : Cloud Computing", "hours": 5 },
  { "title": "Module 20 : Cryptography", "hours": 5 }
];

const courses = ["Ethical Hacking", "Basic Networking", "Linux", "Python", "Network Penetration Testing", "Web Application Penetration Testing", "Android Penetration Testing", "Api Penetration Testing", "Cloud Security", "Digital Forensic", "Cyber Security Controls And Operation", "Security Operation And Response Management", "Interview Preparation"];

const Module = () => {
  const [activeTab, setActiveTab] = useState("knowledge");
  const [fadeIn, setFadeIn] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    course: "",
  });
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [displayCount, setDisplayCount] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 300);
    Aos.init({ duration: 500 }); // Initialize AOS with a duration of 1 second
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "contact") {
      // Allow only numbers and limit input to 10 digits
      if (!/^\d{0,10}$/.test(value)) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const loadMore = () => {
    setDisplayCount(prev => Math.min(prev + 10, modules.length));
  };

  const loadLess = () => {
    setDisplayCount(prev => Math.max(prev - 10, 10));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e0c8c3e0-172a-4eab-8158-3b59ae575f4e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setSubmissionMessage("Form submitted successfully! ✅");
      setFormData({ name: "", email: "", contact: "", course: "" });
      setTimeout(() => setSubmissionMessage(""), 5000);
    } else {
      setSubmissionMessage("Submission failed. Please try again ❌");
    }
  };

  return (
    <div className="module-page">
      <div className={`module-container ${fadeIn ? "fade-in" : ""}`} >
        <h2 className="module-title" data-aos="zoom-in">Ethical Hacking Modules</h2>
        <div className="module-list">
          {modules.slice(0, displayCount).map((module, index) => (
            <div key={index} className="module-item" data-aos="zoom-in">
              <h4>{module.title}</h4>
              <p>{module.hours} hours</p>
            </div>
          ))}
        </div>

        <div className="load-buttons">
          {displayCount > 10 && (
            <button onClick={loadLess} className="submit-btn load-less-btn" data-aos="fade-up">
              Load Less
            </button>
          )}
          {displayCount < modules.length && (
            <button onClick={loadMore} className="submit-btn load-more" data-aos="fade-up">
              Load More
            </button>
          )}
        </div>

        <div className="instructor">
          <div className="google-icon" >
            {""}
          </div>
          <div>
            <h2 >Ec Counsil Certificates</h2>
            <p >CyberDentech • 325 Courses • 1000+ learners</p>
          </div>
        </div>
      </div>

      <div className="form-container" id="booking-form" data-aos="slide-up">
        <h2>Book Your Slot Now</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Contact Number</label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              pattern="[0-9]{10}"
              title="Phone number must be 10 digits"
              required
            />
          </div>
          <div className="form-group">
            <label>Select Course</label>
            <select name="course" value={formData.course} onChange={handleChange} required>
              <option value="" disabled>Select a course</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>{course}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="submit-btn" >Submit</button>
          {submissionMessage && <p className="submission-message">{submissionMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Module;
