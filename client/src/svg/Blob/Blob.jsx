import React from "react";
import "./Blob.css"

function Blob({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 300 200"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient id="blobGradient" x1="0%" y1="10%" x2="100%" y2="100%">
          <stop offset="20%" stopColor="#ff00d4" />
          <stop offset="60%" stopColor="#00eaff" />
        </linearGradient>
      </defs>
      <path
        fill="url(#blobGradient)"
        d="M43.6,-69.3C56.2,-61.9,63.5,-48.3,68.5,-33.5C73.6,-18.7,76.3,-2.7,73.9,13.1C71.5,28.9,64.1,45.8,51.8,55.9C39.5,66,22.3,69.2,6.6,68.3C-9.2,67.4,-18.4,62.4,-30.1,58.2C-41.7,54,-55.9,50.6,-64.4,41.8C-73,33,-76.8,19.8,-76.4,7.8C-76,-4.2,-71.4,-15.1,-65,-27.1C-58.6,-39.1,-50.4,-52.3,-38.5,-60.7C-26.6,-69.2,-10.8,-73.9,3,-75.5C16.8,-77.1,33.5,-75.6,43.6,-69.3Z"
        transform="translate(130 130)"
      />
    </svg>
  );
}

export default Blob;
