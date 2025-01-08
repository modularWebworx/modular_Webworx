import React, { useState, useEffect } from "react";
import "./Blobbie.css";

function Blobbie({ className, width = 300, height = 200 }) {
  // State for dynamic path data
  const [pathData, setPathData] = useState(
    "M63.6,-89.3C83.2,-72.9,98.5,-48.3,98.5,-18.5C98.6,11.3,83.3,38.1,66.9,57.1C50.5,76.1,32,87.2,12.3,84.3C-7.4,81.3,-27.5,64.3,-48.1,52.2C-68.6,40.1,-89.6,32.9,-99.2,15.3C-108.7,-2.3,-106.8,-30.2,-94.6,-55.3C-82.4,-80.3,-60.1,-102.5,-36.7,-108.7C-13.4,-114.9,13,-105.1,43.6,-89.3Z"
  );
  const [scale, setScale] = useState(0.1); // Start small
  const [opacity, setOpacity] = useState(1); // Start fully visible

  // Function to morph the blob dynamically
  const morphBlob = () => {
    // Extract numbers from the path's `d` attribute
    const numbers = pathData.match(/-?\d+(\.\d+)?/g).map(Number);

    // Adjust more points, ensuring smoother transitions
    const newNumbers = numbers.map((num, index) => {
      const adjustment = (Math.sin(index + Date.now() / 1000) * 0.5 + 0.5) * 5; // Smooth oscillation
      return num + (Math.random() - 0.5) * adjustment;
    });

    // Rebuild the `d` attribute
    const newPathData = pathData.replace(
      /-?\d+(\.\d+)?/g,
      (_, offset) => newNumbers.shift()
    );

    // Update state
    setPathData(newPathData);
  };

  // Handle growth and fade-out
  useEffect(() => {
    const interval = setInterval(() => {
      morphBlob(); // Morph the blob

      setScale((prev) => {
        const newScale = prev + 0.009; // Gradually increase scale
        if (newScale > 2) setOpacity(1 - (newScale - 2) / 1); // Fade out when scale > 2
        return  newScale; // Stop scaling at 3
      });
    }, 50);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [pathData]);

  return (
    <svg
      className={`${className} interactive-blob`}
      width={width}
      height={height}
      viewBox="0 0 300 200"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ opacity }} // Adjust opacity dynamically
    >
      <defs>
        <linearGradient id="blobGradient" x1="0%" y1="10%" x2="100%" y2="100%">
          <stop offset="20%" stopColor="#ff00d4" />
          <stop offset="60%" stopColor="#00eaff" />
        </linearGradient>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0   0 1 0 0 0   0 0 1 0 0   0 0 0 20 -5"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
      <path
        fill="url(#blobGradient)"
        d={pathData}
        transform={`translate(150 100) scale(${scale})`} // Apply scaling
      />
    </svg>
  );
}

export default Blobbie;
