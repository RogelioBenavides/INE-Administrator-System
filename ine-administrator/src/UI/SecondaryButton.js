import { useState } from 'react'

const SecondaryButton = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setActive] = useState(false);
    const secondaryButtonStyles = {
        fontFamily: "Arial",
        fontStyle: "normal",
        color: isHovered ? "#FFFFFF" : "#000000",
        fontWeight: 700,
        fontSize: 30,
        background: isHovered ? "#D14995" : "#FFFFFF",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 5px 4px rgba(255, 255, 255, 0.25)",
        borderRadius: 50,
        borderWidth: "5px",
        borderStyle: "solid",
        borderColor: isHovered ? "transparent" : "#D14995",
        boxSizing: "border-box",
        transform: isActive ? "translateY(1px)" : "translateY(0px)",
        padding: "20px 30px",
        margin: "0 20px",
    };
    return (
        <button
            style={secondaryButtonStyles}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseDown={() => setActive(true)}
            onMouseUp={() => setActive(false)}
            onClick={props.onClick}>
            {props.message}
        </button>
    );
};

export default SecondaryButton;