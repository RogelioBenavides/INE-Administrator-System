import NavBar from "../UI/NavBar";
import PrimaryButton from "../UI/PrimaryButton";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Candidates = () => {
  // Estilo para el contenedor
  const messageStyle = {
    boxShadow:
      "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 5px 4px rgba(255, 255, 255, 0.25)",
    backgroundColor: "#E9E9E9",
    padding: "40px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: "50px",
    maxWidth: "70%",
  };

  const [candidacies, setCandidacies] = useState([]);

  useEffect(() => {
    fetchCandidacies();
  }, []);

  const fetchCandidacies = async () => {
    try {
      const response = await fetch("http://localhost:3001/candidacies");
      const data = await response.json();
      setCandidacies(data);
    } catch (error) {
      console.error("Error fetching candidacies:", error);
    }
  };

  return (
    <div>
      <NavBar activeCandidates="true" />
      <h1 style={{ textAlign: "center", margin: "50px" }}>Candidaturas</h1>
      <Container style={messageStyle}>
        <Row style={{ margin: "0 0 20px" }}>
          {/* Título */}
          <h3>Selecciona la votación a editar</h3>
        </Row>
        <Form>
          <Row>
            <Col>
              {/* Selección de candidaturas */}
              <Form.Select>
                <option value="">Selecciona una candidatura</option>
                {candidacies.map((candidacy) => (
                  <option key={candidacy.id} value={candidacy.id}>
                    {candidacy.name}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col className="d-flex justify-content-center">
              {/* Botón de confirmación */}
              <PrimaryButton message="Confirmar"></PrimaryButton>
            </Col>
          </Row>
        </Form>
        <h3 style={{ marginTop: "50px" }}>
          ¿Deseas crear una nueva candidatura?
        </h3>
        <Row>
          <Col className="d-flex justify-content-center">
            {/* Botón de confirmación */}
            <Link to="/candidacy">
              <PrimaryButton message="Crear"></PrimaryButton>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Candidates;
