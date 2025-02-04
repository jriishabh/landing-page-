import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./FAQ.css";

const faqData = [
  {
    category: "General ",
    questions: [
      {
        question: "What is the scope of CyberDefenTech’s Cyber Security course?",
        answer:
          "Our course prepares you for high-demand roles in IT, banking, healthcare, and government sectors, with a focus on EC-Council’s CEH certification.",
      },
      {
        question: "Who should enroll in this course?",
        answer:
          "IT professionals, students, and aspiring ethical hackers seeking globally recognized CEH certification and hands-on cybersecurity skills.",
      },
      {
        question: "Are there prerequisites for this course?",
        answer:
          "Basic IT knowledge is preferred; our curriculum is designed for beginners and advanced learners.",
      },
      {
        question: "How long is the course duration?",
        answer:
          "6–12 months, covering CEH training, labs, and exam preparation.",
      },
      {
        question: "Is the course certified?",
        answer:
          "Yes, we offer EC-Council’s Certified Ethical Hacker (CEH) certification upon completion.",
      },
    ],
  },
  {
    category: "Academics ",
    questions: [
      {
        question: "What are the eligibility criteria?",
        answer:
          "10+2 for entry-level programs; graduates/professionals can enroll directly for CEH certification.",
      },
      {
        question: "Is a computer science background mandatory?",
        answer:
          "No, but basic networking/programming knowledge helps. Our course includes foundational modules.",
      },
      {
        question: "Are classes online or offline?",
        answer:
          "Flexible options: online live sessions and offline workshops at our partnered centers.",
      },
      {
        question: "How are students assessed?",
        answer:
          "Through CEH-aligned exams, practical labs, Capture the Flag (CTF) challenges, and final projects.",
      },
      {
        question: "Are faculty members industry experts?",
        answer:
          "Yes, trainers are EC-Council certified professionals with real-world cybersecurity experience.",
      },
    ],
  },
  {
    category: "Curriculum",
    questions: [
      {
        question: "What topics are covered?",
        answer:
          "CEH v12 modules: network scanning, social engineering, malware analysis, penetration testing, and cloud security.",
      },
      {
        question: "Are tools like Kali Linux taught?",
        answer:
          "Yes, hands-on labs include Kali Linux, Metasploit, Burp Suite, and Wireshark.",
      },
      {
        question: "Does the course include CEH certification?",
        answer:
          "Absolutely! The program includes CEH training, lab access, and an exam voucher.",
      },
      {
        question: "Is there practical exposure?",
        answer:
          "Yes, 80+ labs, virtual cyber ranges, and simulated attack/defense scenarios.",
      },
      {
        question: "Are programming languages taught?",
        answer:
          "Basics of Python and Bash scripting for ethical hacking and automation.",
      },
    ],
  },
  {
    category: "Placement & Internship",
    questions: [
      {
        question: "Does CyberDefenTech provide placement support?",
        answer:
          "Yes, dedicated placement assistance with résumé building, mock interviews, and job referrals.",
      },
      {
        question: "What is the average starting salary after this course?",
        answer:
          "Freshers: ₹4–8 LPA; experienced professionals: ₹10–15 LPA in roles like Penetration Tester or SOC Analyst.",
      },
      {
        question: "Which companies hire CyberDefenTech graduates?",
        answer:
          "Our partners include top MNCs, cybersecurity firms, and EC-Council’s global network.",
      },
      {
        question: "Are internships included?",
        answer:
          "Yes, 1–3 month internships with cybersecurity startups or IT firms for real-world experience.",
      },
      {
        question: "What is the placement rate?",
        answer:
          "85%+ placement rate, with alumni placed in companies like IBM, Accenture, and Quick Heal.",
      },
    ],
  },
];

const FAQ = () => {
  const [openCategory, setOpenCategory] = useState(0);
  const [openQuestion, setOpenQuestion] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS with a duration of 1 second
  }, []);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
    setOpenQuestion(null);
  };

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };
  
  return (
    <div className="faq-container" data-aos="fade-up">
      <div className="faq-wrapper">
        <div className="faq-title">
          <h2>FAQs</h2>
        </div>
        <div className="faq-content">
          {faqData.map((category, catIndex) => (
            <div key={catIndex} className="faq-category" >
              <div
                className="faq-category-header"
                onClick={() => toggleCategory(catIndex)}
              >
                <h3>{category.category}</h3>
                <span>{openCategory === catIndex ? "▲" : "▼"}</span>
              </div>
              {openCategory === catIndex && (
                <div className="faq-questions" >
                  {category.questions.map((faq, index) => (
                    <div key={index} className="faq-item" >
                      <div
                        className="faq-question"
                        onClick={() => toggleQuestion(index)}
                      >
                        <h4>{faq.question}</h4>
                        <span>{openQuestion === index ? "▲" : "▼"}</span>
                      </div>
                      {openQuestion === index && (
                        <p className="faq-answer" data-aos="fade-right">{faq.answer}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
