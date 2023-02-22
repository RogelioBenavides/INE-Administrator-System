import logo from "../img/logo.png";
import { Nav, Navbar, Container, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = ({ activeReset, activeCandidates, activeUsers, activeDate }) => {
  // Crea un objeto con estilos según si la pestaña está activa o no
  const activeStyle = (active) => {
    if (active === "true")
      return {
        color: "white",
        fontWeight: "700",
        margin: "0 20px",
        textAlign: "center",
      };
    else
      return {
        color: "white",
        fontWeight: "400",
        margin: "0 20px",
        textAlign: "center",
      };
  };
  // Devuelve una barra de navegación con varias pestañas para navegar por diferentes secciones de la aplicación
  return (
    <Navbar
      className="navbar-ine"
      expand="md"
      sticky="top"
      style={{ margin: "0 0 20px" }}
    >
      <Container>
        {/* Muestra una imagen como logo de la aplicación */}
        <Navbar.Brand href="/">
          <Image
            src={logo}
            className="logo d-inline-block align-top"
            alt="Logo Votaciones"
          />
        </Navbar.Brand>
        {/* Muestra un icono de menú para mostrar las pestañas cuando la pantalla es pequeña */}
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0">
          <FontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav">
          {/* Muestra las pestañas de navegación */}
          <Nav className="mr-auto">
            <Nav.Link style={activeStyle(activeReset)} href="reset">
              Reseteo de Urnas
            </Nav.Link>
            <Nav.Link style={activeStyle(activeCandidates)} href="candidates">
              Editar Candidatura
            </Nav.Link>
            <Nav.Link style={activeStyle(activeUsers)} href="presidents">
              Generar Presidentes
            </Nav.Link>
            <Nav.Link style={activeStyle(activeDate)} href="date&time">
              Fecha y Hora
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
