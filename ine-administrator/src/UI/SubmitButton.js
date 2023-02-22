import { useState } from "react";

const SubmitButton = (props) => {
  // Se crea un estado para controlar el estado de "isHovered" y "isActive"
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setActive] = useState(false);

  // Estilos para el botón
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

  // Se devuelve el componente botón
  return (
    <button
      style={primaryButtonStyles}
      onMouseEnter={() => setIsHovered(true)} // Cambia el estado "isHovered" a "true" cuando se posiciona el cursor sobre el botón
      onMouseLeave={() => setIsHovered(false)} // Cambia el estado "isHovered" a "false" cuando se retira el cursor del botón
      onMouseDown={() => setActive(true)} // Cambia el estado "isActive" a "true" cuando se hace clic sobre el botón
      onMouseUp={() => setActive(false)} // Cambia el estado "isActive" a "false" cuando se suelta el clic sobre el botón
      type="submit" // Tipo de botón: submit
    >
      {props.message}
    </button>
  );
};

export default SubmitButton;
