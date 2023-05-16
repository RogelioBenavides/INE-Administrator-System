import { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import { TextField } from "@mui/material";
import PrimaryButton from "../UI/PrimaryButton";
import { Col } from "react-bootstrap";

const EditCandidate = (props) => {
  const [parties, setParties] = useState([]);
  const [selectedParty, setSelectedParty] = useState([]);
  const [owner, setOwner] = useState("");
  const [substitute, setSubstitute] = useState("");
  const [file, setFile] = useState(null);


  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/parties")
      .then((response) => {
        setParties(response.data);
      })
      .catch((error) => {
        console.error("Error fetching parties:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch representative
    axios
      .get(`http://localhost:3001/representatives/${props.id}`)
      .then((response) => {
        const rep = response.data;
        setSelectedParty(parties.find((party) => party.name === rep.name).id);
        setOwner(rep.owner);
        setSubstitute(rep.substitute);
      })
      .catch((error) => {
        console.error("Error fetching representative:", error);
      });
  }, [props.id, parties]);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    const party = parties.find((party) => party.id === Number(selectedParty));
    if (party) {
      const formData = new FormData();
      console.log(party.name);
      formData.append('name', party.name);
      formData.append('owner', owner);
      formData.append('substitute', substitute);
      formData.append('image', file);

      axios.put(`http://localhost:3001/representatives/${props.id}`, formData, {
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

  const handleOption = (e) => {
    setSelectedParty(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Selecciona el partido político</h3>
      <Form.Select onChange={handleOption} value={selectedParty}>
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
        value={owner}
      />
      <h3 style={{ margin: "20px 0 10px" }}>
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
        value={substitute}
      />
      <h3 style={{ margin: "0px 0 10px" }}>Ingresa la imagen del partido:</h3>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <Col className="d-flex justify-content-center">
        <PrimaryButton message="Actualizar Candidato"></PrimaryButton>
      </Col>
    </Form>
  );
};

export default EditCandidate;
