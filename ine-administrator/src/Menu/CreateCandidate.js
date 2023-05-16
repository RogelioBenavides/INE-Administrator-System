import NavBar from "../UI/NavBar";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { TextField } from "@mui/material";
import PrimaryButton from "../UI/PrimaryButton";
import { Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CreateCandidate = () => {
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
  const selectedOption = useParams();
  const [parties, setParties] = useState([]);
  const [selectedParty, setSelectedParty] = useState([]);

  const [owner, setOwner] = useState("");
  const [substitute, setSubstitute] = useState("");

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    const party = parties.find((party) => party.id === Number(selectedParty));
    if (party) {
      const formData = new FormData();
      formData.append('name', party.name);
      formData.append('owner', owner);
      formData.append('substitute', substitute);
      formData.append('image', file);
      formData.append('type', selectedOption.option);

      axios.post("http://localhost:3001/representatives", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response) => {
        console.log("Representative created:", response);
      })
      .catch((error) => {
        console.error("Error creating representative:", error);
      });
    } else console.log("Party not found");
    window.location.replace("http://localhost:3000/candidates");
  };

  const handleOption = (event) => {
    setSelectedParty(event.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/parties") // assuming your server is running on port 3001
      .then((response) => {
        setParties(response.data);
      })
      .catch((error) => {
        console.error("Error fetching parties:", error);
      });
  }, []);

  return (
    <div>
      <NavBar activeCandidates="true" />
      <h1 style={{ textAlign: "center", margin: "50px" }}>Candidaturas</h1>
      <Form onSubmit={handleSubmit}>
        <Container style={messageStyle}>
          <h3>Selecciona el partido político</h3>
          <Form.Select onChange={handleOption}>
            <option value="0">Partido Político</option>
            {parties.map((party) => (
              <option key={party.id} value={party.id}>
                {party.name}
              </option>
            ))}
          </Form.Select>
          <h3 style={{ margin: "20px 0 10px" }}>
            Ingresa el nombre del representante:
          </h3>
          <TextField
            // Campo para el usuario
            InputProps={{
              style: {
                backgroundColor: "white",
              },
            }}
            placeholder="Representante"
            variant="outlined"
            fullWidth
            onChange={(e) => setOwner(e.target.value)}
          />
          <h3 style={{ margin: "20px 0 0px" }}>
            Ingresa el nombre del substituto:
          </h3>
          <TextField
            // Campo para el usuario
            InputProps={{
              style: {
                marginBottom: "20px",
                backgroundColor: "white",
              },
            }}
            placeholder="Substituto"
            variant="outlined"
            fullWidth
            onChange={(e) => setSubstitute(e.target.value)}
          />
          <h3 style={{ margin: "0px 0 10px" }}>
            Ingresa la imagen del partido:
          </h3>
          <input type="file" accept="image/*" onChange={handleFileChange}/>
          <Col className="d-flex justify-content-center">
            <PrimaryButton message="Ingresar Candidato"></PrimaryButton>
          </Col>
        </Container>
      </Form>
    </div>
  );
};

export default CreateCandidate;
