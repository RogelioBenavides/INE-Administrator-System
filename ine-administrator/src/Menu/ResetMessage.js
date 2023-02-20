import PrimaryButton from "../UI/PrimaryButton";
import SecondaryButton from "../UI/SecondaryButton";
import { Container, Row, Col } from "react-bootstrap";

const ResetMessage = (props) => {
    const messageStyle = {
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 5px 4px rgba(255, 255, 255, 0.25)",
        backgroundColor: "#E9E9E9",
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: props.show ? 9999 : 0,
        padding: "40px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: "50px",
        maxWidth: "90%"
    }
    return (
        <Container style={messageStyle}>
            <Row>
                <h1>{props.children}</h1>
            </Row>
            <Row>
                <Col md={6} className='d-flex flex-row mb-3 align-items-center justify-content-center'>
                    <SecondaryButton message="Cancelar" onClick={props.onClick}></SecondaryButton>
                </Col>
                <Col md={6} className='d-flex flex-row mb-3 align-items-center justify-content-center'>
                    <PrimaryButton message="Confirmar" onClick={props.onClick}></PrimaryButton>
                </Col>
            </Row>
        </Container>
    );
}

export default ResetMessage;