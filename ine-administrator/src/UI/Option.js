import { useState } from 'react'

const Option = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setActive] = useState(false);

    const optionStyles = {
        "width": "75%",
        "margin": "40px auto",
        "padding": "40px 0",
        "background": "#FFFFFF",
        "boxShadow": "0px 4px 25px 4px rgba(0, 0, 0, 0.27)",
        "borderRadius": "20px", "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "flexDirection": "column",
        "transform": isHovered
            ? isActive
                ? "translateY(-5px) translateY(5px)"
                : "translateY(-5px)"
            : isActive
                ? "translateY(0px)"
                : "translateY(0px)",
    };

    return (
        <div style={optionStyles}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseDown={() => setActive(true)}
            onMouseUp={() => setActive(false)}
            >{props.children}</div>
    );
}

export default Option;