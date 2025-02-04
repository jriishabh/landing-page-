import React, { useRef, useEffect } from "react";
import "./SuccessStories.css";
import Grev1 from "../../assets/rev1.jpg";
import Grev2 from "../../assets/rev2.jpg";
import Grev3 from "../../assets/rev3.jpg";
import Grev4 from "../../assets/rev4.jpg";
import Grev5 from "../../assets/rev5.jpg";
import Grev6 from "../../assets/rev6.jpg";
import Lrev1 from "../../assets/img1.png";
import Lrev2 from "../../assets/img2.png";
import Lrev3 from "../../assets/img3.png";
import Lrev4 from "../../assets/img4.png";
import Lrev5 from "../../assets/img5.png";
import Lrev6 from "../../assets/img6.png";

// Separate images for both carousels
const topImages = [Grev1, Grev2, Grev3, Grev4, Grev5, Grev6];
const bottomImages = [Lrev1, Lrev2, Lrev3, Lrev4, Lrev5, Lrev6];

const SuccessStories = () => {
  const topSliderRef = useRef(null);
  const bottomSliderRef = useRef(null);

  // Function to handle automatic scrolling and loop effect
  const startAutoScroll = (sliderRef, direction) => {
    const slider = sliderRef.current;
    const scrollAmount = 2; // Amount to scroll in each step
    const scrollSpeed = 30; // Speed of scrolling in milliseconds

    let scrollInterval = setInterval(() => {
      if (direction === "left") {
        slider.scrollLeft += scrollAmount;
      } else {
        slider.scrollLeft -= scrollAmount;
      }

      // Reset scroll position for continuous loop effect
      if (slider.scrollLeft >= slider.scrollWidth - slider.offsetWidth) {
        slider.scrollLeft = 0;
      } else if (slider.scrollLeft <= 0) {
        slider.scrollLeft = slider.scrollWidth - slider.offsetWidth;
      }
    }, scrollSpeed);

    return scrollInterval;
  };

  useEffect(() => {
    const topScrollInterval = startAutoScroll(topSliderRef, "left");
    const bottomScrollInterval = startAutoScroll(bottomSliderRef, "right");

    // Clear intervals when the component is unmounted
    return () => {
      clearInterval(topScrollInterval);
      clearInterval(bottomScrollInterval);
    };
  }, []);

  return (
    <div className="success-stories">
      <h2 className="title">Success Stories</h2>

      {/* First Carousel - Top Images */}
      <div className="carousel-wrapper">
        <div className="carousel" ref={topSliderRef}>
          {topImages.map((img, index) => (
            <div key={index} className="carousel-item large">
              <img src={img} alt={`Top Success ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Second Carousel - Bottom Images */}
      <div className="carousel-wrapper">
        <div className="carousel" ref={bottomSliderRef}>
          {bottomImages.map((img, index) => (
            <div key={index} className="carousel-item small">
              <img src={img} alt={`Bottom Success ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
