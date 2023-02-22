import { useState } from "react";

// Componente secundario del botón
const SecondaryButton = (props) => {
  // State para el hover
  const [isHovered, setIsHovered] = useState(false);
  // State para el clic
  const [isActive, setActive] = useState(false);
  // Estilos del botón secundario
  const secondaryButtonStyles = {
    fontFamily: "Arial", // Fuente
    fontStyle: "normal", // Estilo de fuente
    color: isHovered ? "#FFFFFF" : "#000000", // Color de fuente según hover
    fontWeight: 700, // Peso de fuente
    fontSize: 20, // Tamaño de fuente
    background: isHovered ? "#D14995" : "#FFFFFF", // Fondo según hover
    boxShadow:
      "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 5px 4px rgba(255, 255, 255, 0.25)", // Sombra
    borderRadius: 50, // Radio de borde
    borderWidth: "5px", // Ancho de borde
    borderStyle: "solid", // Estilo de borde
    borderColor: isHovered ? "transparent" : "#D14995", // Color de borde según hover
    boxSizing: "border-box", // Tamaño de caja
    transform: isActive ? "translateY(1px)" : "translateY(0px)", // Transformación según clic
    padding: "20px 30px", // Espaciado
  };
  // Render del botón secundario
  return (
    <button
      style={secondaryButtonStyles} // Estilos del botón
      onMouseEnter={() => setIsHovered(true)} // Evento hover
      onMouseLeave={() => setIsHovered(false)} // Evento dejar de hacer hover
      onMouseDown={() => setActive(true)} // Evento clic
      onMouseUp={() => setActive(false)} // Evento soltar clic
      onClick={props.onClick} // Evento clic en el botón
    >
      
      {props.message} {/* Mensaje del botón */}
    </button>
  );
};

export default SecondaryButton;
