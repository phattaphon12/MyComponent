import React, { useState, useEffect } from 'react';
import './SlideBanner.css';

const SlideBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://assets.lummi.ai/assets/QmdX4V4zCtaq2AKgv8CebPYDBKMQxZKoCGrBcjA9fEFnZ5?auto=format&w=1500',
    'https://assets.lummi.ai/assets/QmcxjZUp471Z1rVnnY86ZcYfm9n2gLVesbE6KsNq1LzHjN?auto=format&w=1500',
    'https://assets.lummi.ai/assets/QmYhNP21z7SQx4jaJWe53LhPV4Fbm6N8FBVVXeF4RtsiFp?auto=format&w=1500',
    // Add more images here
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      goToNextSlide();
    }, 3000); // 5000ms = 5 seconds

    return () => clearInterval(slideInterval); // Cleanup interval on component unmount
  }, [currentIndex]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slide-banner">
      <div
        className="slide-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SlideBanner;
