import { useState, useEffect } from "react";
import NavBar from "../UI/NavBar";
import PrimaryButton from "../UI/PrimaryButton";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Link } from "react-router-dom";
import EditCandidate from "./EditCandidate";

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

  const candidacies = [
    { id: 1, name: "Diputados Federales" },
    { id: 2, name: "Diputados Locales" },
    { id: 3, name: "Gobernatura" },
  ];

  const [selectedOption, setSelectedOption] = useState(0);
  const [selectedCandidate, setSelectedCandidate] = useState(0);
  const [showCandidates, setShowCandidates] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    axios
      .get(`/candidates?type=${selectedOption}`)
      .then((response) => {
        setCandidates(response.data);
      })
      .catch((error) => {
        console.error("Error fetching candidates:", error);
      });
  }, [selectedOption]);

  const handleOption = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    setShowCandidates(value !== "0");
  };
  
  const handleCandidateOption = (event) => {
    const value = event.target.value;
    setSelectedCandidate(value);
    setShowEdit(value !== "0");
  };

  return (
    <div>
      <NavBar activeCandidates="true" />
      <h1 style={{ textAlign: "center", margin: "50px" }}>Candidaturas</h1>
      <Container style={messageStyle}>
        <Row style={{ margin: "0 0 10px" }}>
          {/* Título */}
          <h3>Selecciona la votación a editar</h3>
        </Row>
        <Form>
          <Row>
            <Col>
              {/* Selección de candidaturas */}
              <Form.Select onChange={handleOption}>
                <option value="0">Selecciona una candidatura</option>
                {candidacies.map((candidacy) => (
                  <option key={candidacy.id} value={candidacy.id}>
                    {candidacy.name}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>
        </Form>
        {showCandidates ? (
          <div style={{ margin: "20px 0px" }}>
            <Row>
              <Col className="col-12 col-sm-6">
                <Row style={{ margin: "0 0 10px" }}>
                  {/* Título */}
                  <h3>Selecciona el candidato a editar</h3>
                </Row>
                <Form.Select onChange={handleCandidateOption}>
                  <option value="0">Selecciona un candidato</option>
                  {candidates.map((candidate) => (
                    <option key={candidate.id} value={candidate.id}>
                      {candidate.name + ", " + candidate.owner}
                    </option>
                  ))}
                </Form.Select>
              </Col>
              <Col className="col-12 col-sm-6">
                <h3>Crear nuevo candidato</h3>
                <Link to={`/create-candidate/${selectedOption}`}>
                    <PrimaryButton message="Crear nuevo candidato"></PrimaryButton>
                </Link>
              </Col>
            </Row>
          </div>
        ) : null}
        {showEdit && showCandidates ? (
          <EditCandidate id={selectedCandidate} option={selectedOption}/>
        ) : null}
      </Container>
    </div>
  );
};

export default Candidates;
