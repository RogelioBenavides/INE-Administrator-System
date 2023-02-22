import { Link } from "react-router-dom";
import { useState } from "react";

// Componente de opción para mostrar una opción dentro de la página principal
const Option = ({ route, children }) => {
  // Estado para determinar si el cursor está sobre el elemento
  const [isHovered, setIsHovered] = useState(false);
  // Estado para determinar si el elemento está activo
  const [isActive, setActive] = useState(false);
  // Estilos para el elemento de opción
  const optionStyles = {
    width: "75%",
    margin: "40px auto",
    padding: "40px 0",
    background: "#FFFFFF",
    boxShadow: "0px 4px 25px 4px rgba(0, 0, 0, 0.27)",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    transform: isHovered
      ? isActive
        ? "translateY(-5px) translateY(5px)"
        : "translateY(-5px)"
      : isActive
      ? "translateY(0px)"
      : "translateY(0px)",
  };

  // Renderiza un enlace a la ruta especificada con el contenido proporcionado
  return (
    <Link to={route} style={{ textDecoration: "none", color: "#000000" }}>
      <div
        style={optionStyles}
        // Actualiza el estado al hacer hover sobre el elemento
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        // Actualiza el estado al hacer clic sobre el elemento
        onMouseDown={() => setActive(true)}
        onMouseUp={() => setActive(false)}
      >
        {children}
      </div>
    </Link>
  );
};

export default Option;
