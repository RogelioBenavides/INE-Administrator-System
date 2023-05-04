import NavBar from "../UI/NavBar";
import PrimaryButton from "../UI/PrimaryButton";
import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useState } from "react";

const Candidates = () => {
    // Estilo para el contenedor
    const messageStyle = {
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 5px 4px rgba(255, 255, 255, 0.25)",
        backgroundColor: "#E9E9E9",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: "50px",
        maxWidth: "70%"
    }
    // Estado para el estado seleccionado
    const [selectedOption, setSelectedOption] = useState();

    // Función para manejar el cambio en la selección de estado
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    }
  return (
    <div>
      <NavBar activeCandidates="true" />
      <h1 style={{ textAlign: "center", margin: "50px" }}>
        Candidaturas
      </h1>
      <Container style={messageStyle}>
        <Row style={{ margin: "0 0 20px" }}>
          {/* Título */}
          <h3>Selecciona la votación a editar</h3>
        </Row>
        <Form>
          <Row>
            <Col>
              {/* Selección de estados */}
              <Form.Select
                id="select-options"
                value={selectedOption}
                onChange={handleOptionChange}
              >
              </Form.Select>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col className="d-flex justify-content-center">
              {/* Botón de confirmación */}
              <PrimaryButton
                message="Confirmar"
              ></PrimaryButton>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Candidates;
