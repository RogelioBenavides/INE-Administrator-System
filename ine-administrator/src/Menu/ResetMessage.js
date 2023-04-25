import PrimaryButton from "../UI/PrimaryButton";
import SecondaryButton from "../UI/SecondaryButton";
import { Container, Row, Col } from "react-bootstrap";
import { useCallback } from "react";

const ResetMessage = (props) => {
  // Define un estilo para el contenedor del mensaje
  const messageStyle = {
    boxShadow:
      "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 5px 4px rgba(255, 255, 255, 0.25)",
    backgroundColor: "#E9E9E9",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: props.show ? 9999 : 0, // Si show es verdadero, muestra el mensaje con un alto nivel de importancia, sino, no lo muestra
    padding: "40px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: "50px",
    maxWidth: "70%",
  };

  const handleConfirmClick = useCallback(async () => {
    try {
      const response = await fetch("/reset_votes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        // Handle success case
        console.log("Votes reset successfully");
        props.fetchData(); 
      } else {
        // Handle error case
        console.error("Error resetting votes");
      }
    } catch (error) {
      console.error("Error resetting votes:", error);
    }
  
    if (props.onClick) {
      props.onClick();
    }
  }, [props]);

  // Renderiza el mensaje con los botones para cancelar o confirmar
  return (
    <Container style={messageStyle}>
      <Row style={{ margin: "0 0 20px" }}>{props.children}</Row>
      <Row>
        <Col
          md={6}
          className="d-flex flex-row mb-3 align-items-center justify-content-center"
        >
          {/* Botón para cancelar */}
          <SecondaryButton
            message="Cancelar"
            onClick={props.onClick}
          ></SecondaryButton>
        </Col>
        <Col
          md={6}
          className="d-flex flex-row mb-3 align-items-center justify-content-center"
        >
          {/* Botón para confirmar */}
          <PrimaryButton message="Confirmar" onClick={handleConfirmClick}></PrimaryButton>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetMessage;
