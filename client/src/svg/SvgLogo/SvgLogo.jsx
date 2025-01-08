import React from "react";
import "./SvgLogo.css";

const SvgLogo = () => {
  return (
    <svg
      className="svg-logo"
      width="50"
      height="50"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="cyan" />
          <stop offset="100%" stopColor="magenta" />
        </linearGradient>
        <filter id="blobFilter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 19 -9"
            result="gooey"
          />
          <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
        </filter>
      </defs>
      <path
        fill="url(#gradient)"
        filter="url(#blobFilter)"
        d="M43.1,-58.3C55.2,-51.6,64.3,-39.5,68.3,-25.7C72.3,-11.9,70.3,3.1,66.4,17.2C62.5,31.3,56.7,45.5,45.3,53.6C33.9,61.7,17,63.8,3.7,60.8C-9.6,57.8,-19.2,49.7,-29,42.8C-38.8,35.9,-49.8,30.3,-54.6,21.4C-59.4,12.5,-57,0.3,-53.8,-12C-50.7,-24.3,-46.8,-36.3,-38,-43.1C-29.2,-49.8,-15.6,-51.3,-3.5,-48.2C8.5,-45.1,17,-37.4,43.1,-58.3Z"
        transform="translate(100 100)"
      />
    </svg>
  );
};

export default SvgLogo;