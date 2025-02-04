import React from "react";
import "./Summary.css";


const Summary = () => {
  return (
    <div className="summary-container">
      <div className="summary-content">
        <div className="summary-text">
          <h2>
            CEH v13 Ai Course in Delhi | EC Council Certified Ethical Hacker
            Course
          </h2>
          <p>
            The  <strong>CEH v13 </strong> program immerses you in <strong>real-world ethical hacking
            through the dynamic CEH practice environment</strong>. With CEH Engage,
            you’ll sharpen your skills and prove you have what it takes to
            thrive as an ethical hacker.
          </p>
          <p>
            New to <strong>CEH v13 </strong>,  learners will embark on their first emulated ethical
            hacking engagement . <strong>This four-phase engagement requires students to
            think critically and test the knowledge and skills </strong>gained by
            capturing a series of flags in each phase. It demonstrates the live
            application of skills and abilities in a consequence-free
            environment through <strong>EC-Council’s new “Cyber Range”</strong>.
          </p>
          <p>
            As you complete your training and labs, CEH Engage empowers you to
            put theory into practice through a mock hacking engagement. You’ll
            navigate a real-world, four-part engagement, targeting an emulated
            organization. Using a capture-the-flag format, you’ll progress by
            answering critical “flag” questions, gaining hands-on experience in
            a full-scale ethical hacking operation.
          </p>
        </div>

        <div className="summary-details">
          <p>
            ⏳ <strong>Course Duration:</strong> 40 Hours
          </p>
          <p>
            🗣️ <strong>Language:</strong> Hindi | English
          </p>
          <p>
            💻 <strong>Course Delivery:</strong> Online | Offline
          </p>
          <p>
            📞 <strong>Contact us:</strong>{" "}
            <a href="tel:9205625129">9205625129</a>
          </p>
          <p>
            📧 <strong>Email Id:</strong>{" "}
            <a href="mailto:training@cyberdefentech.com">
              training@cyberdefentech.com
            </a>
          </p>
        </div>
      </div>

      <div className="summary-buttons">
        <button
          className="book-seat"
          onClick={() => {
            const formSection = document.getElementById("booking-form");
            if (formSection) {
              formSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Book your Seat
        </button>

        <a href="/broscher.pdf" download="broscher.pdf">
          <button className="test-paper">
            Brochure <span className="free-badge">Download</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Summary;
