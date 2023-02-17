import { useState } from 'react'

const PrimaryButton = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setActive] = useState(false);
  const primaryButtonStyles = {
    fontFamily: "Arial",
    fontStyle: "normal",
    color: "#FFFFFF",
    fontWeight: 700,
    fontSize: 30,
    background: isHovered ? "#A31464" : "#D14995",
    boxShadow:
      "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 5px 4px rgba(255, 255, 255, 0.25)",
    borderRadius: 42.5,
    borderWidth: 0,
    transform: isActive ? "translateY(1px)" : "translateY(0px)",
    padding: "20px 30px",
    margin: "20px 0 40px",
  };
  return (
    <button
      style={primaryButtonStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      type='submit'
    >
      {props.message}
    </button>
  );
};

export default PrimaryButton;