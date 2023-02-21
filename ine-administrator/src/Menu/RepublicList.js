import PrimaryButton from "../UI/PrimaryButton";
import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useState } from "react";

const RepublicList = (props) => {
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
    const [selectedOption, setSelectedOption] = useState(props.data[0].id);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        props.onChildStateChange(selectedOption);
    }

    return (
        <Container style={messageStyle}>
            <Row style={{ margin: "0 0 20px" }}>
                <h3>Selecciona un estado de la república</h3>
            </Row>
            <Form>
                <Row>
                    <Col>
                        <Form.Select id="select-options" value={selectedOption} onChange={handleOptionChange}>
                            {props.data.map((option) => (
                                <option key={option.id} value={option.id}>{option.city}</option>
                            ))}
                        </Form.Select>
                    </Col>
                </Row>
                <Row style={{ marginTop: "20px" }}>
                    <Col className="d-flex justify-content-center">
                        <PrimaryButton message="Confirmar" onClick={props.onClick}></PrimaryButton>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default RepublicList;