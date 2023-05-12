import NavBar from "../UI/NavBar";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import PrimaryButton from "../UI/PrimaryButton";
import { Col } from "react-bootstrap";
import { useState } from "react";
import dayjs from "dayjs";

const CreateCandidacy = () => {
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

  const [name, setName] = useState("");
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Formatear la fecha a 'YYYY-MM-DD'
    const formattedDate = selectedDate.format('YYYY-MM-DD');

    // Enviar los datos al servidor
    try {
      const response = await fetch("http://localhost:3001/candidacy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, date: formattedDate }),
      });

      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }

      alert("Candidacy created successfully");
    } catch (error) {
      console.log(error);
      alert("Failed to create candidacy");
    }
  };

  return (
    <div>
      <NavBar activeCandidates="true" />
      <h1 style={{ textAlign: "center", margin: "50px" }}>Candidaturas</h1>
      <Form onSubmit={handleSubmit}>
        <Container style={messageStyle}>
          <h3>Nombre:</h3>
          <TextField
            // Campo para el usuario
            InputProps={{
              style: {
                marginTop: "0px",
                backgroundColor: "white",
              },
            }}
            placeholder="Ingresar Candidatura"
            variant="outlined"
            margin="normal"
            fullWidth
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <h3 style={{ margin: "20px 0" }}>
            Elige la fecha de la candidatura:
          </h3>
          <DatePicker
            value={selectedDate}
            onChange={handleDateChange}
            disablePast
            format="DD/MM/YYYY"
            sx={{
              bgcolor: "white",
              marginBottom: "20px",
            }}
          />
          <Col className="d-flex justify-content-center">
            <PrimaryButton message="Crear Candidatura"></PrimaryButton>
          </Col>
        </Container>
      </Form>
    </div>
  );
};

export default CreateCandidacy;
