module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slowSpin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        spinScale: {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(1.05)" },
          "100%": { transform: "rotate(360deg) scale(1)" }
        },
        spinScaleReverse: {
          "0%": { transform: "rotate(360deg) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(1.05)" },
          "100%": { transform: "rotate(0deg) scale(1)" }
        },
        moveCircle: {
          "0%": { transform: "translateX(0)" },
          "70%": { transform: "translateX(-100px)" }
        }
      },
      animation: {
        "slow-spin": "slowSpin 10s linear infinite",
        "spin-scale": "spinScale 20s ease-in-out infinite",
        "spin-scale-reverse": "spinScaleReverse 15s ease-in-out infinite",
        "move-circle": "moveCircle 10s infinite alternate",
        fadeIn: 'fadeIn 1s ease-in-out'
      },
      colors: {
        cmykCyan: "#00FFFF", 
        cmykMagenta: "#FF00FF",
        cmykYellow: "#FFFF00",
        cmykBlack: "#000000"
      }
    }
  },
  plugins: []
};
