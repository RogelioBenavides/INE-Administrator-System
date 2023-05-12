import PrimaryButton from "../UI/PrimaryButton";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const RepublicList = (props) => {
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
  // Estado para el estado seleccionado
  const [selectedOption, setSelectedOption] = useState(props.data[0].id);
  const [ballotBoxQuantity, setBallotBoxQuantity] = useState('');

  // Función para manejar el cambio en la selección de estado
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Función para manejar el cambio en la cantidad de urnas
  const handleBallotBoxQuantityChange = (event) => {
    setBallotBoxQuantity(event.target.value);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onClick(selectedOption, ballotBoxQuantity);
  };

  return (
    <Container style={messageStyle}>
      <Row style={{ margin: "0 0 10px" }}>
        {/* Título */}
        <h3>Selecciona un estado de la república</h3>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            {/* Selección de estados */}
            <Form.Select
              id="select-options"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              {props.data.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.city}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row style={{ margin: "20px 0 10px" }}>
                {/* Título */}
                <h3>Selecciona la cantidad de urnas</h3>
            </Row>
            <Form.Control
              type="number"
              placeholder="Cantidad de urnas"
              value={ballotBoxQuantity}
              onChange={handleBallotBoxQuantityChange}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col className="d-flex justify-content-center">
            {/* Botón de confirmación */}
            <PrimaryButton
              message="Confirmar"
              type="submit"
            ></PrimaryButton>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

// Exportar el componente
export default RepublicList;
