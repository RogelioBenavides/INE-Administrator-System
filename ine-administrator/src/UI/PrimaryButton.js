import { useState } from "react";

const PrimaryButton = (props) => {
  // Se usa el hook useState para mantener el estado si el botón está siendo hovered o está activo
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setActive] = useState(false);
  // Estilos para el botón primario
  const primaryButtonStyles = {
    fontFamily: "Arial", // Fuente
    fontStyle: "normal", // Estilo de fuente
    color: "#FFFFFF", // Color de texto
    fontWeight: 700, // Grueso de la fuente
    fontSize: 20, // Tamaño de la fuente
    background: isHovered ? "#A31464" : "#D14995", // Color de fondo
    // Sombra del botón
    boxShadow:
      "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 5px 4px rgba(255, 255, 255, 0.25)",
    borderRadius: 50, // Radio de borde
    borderWidth: 0, // Ancho de borde
    // Transición al hacer clic en el botón
    transform: isActive ? "translateY(1px)" : "translateY(0px)",
    padding: "20px 30px", // Espaciado interno
  };

  return (
    <button
      // Eventos que se activan cuando se hace hover, se hace clic y se deja de hacer clic en el botón
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onClick={props.onClick}
      // Estilos del botón
      style={primaryButtonStyles}
    >
      {props.message}
    </button>
  );
};

export default PrimaryButton;
