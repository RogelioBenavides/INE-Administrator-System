import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../UI/NavBar";
import PrimaryButton from "../UI/PrimaryButton";
import BallotTable from "./BallotTable";
import { useState } from "react";
import ResetMessage from "./ResetMessage"

const Reset = () =>{
    const [showResetBallots, setShowResetBallots] = useState(false);
    const handleButtonClick = () => {
        setShowResetBallots(!showResetBallots);
    }
    return(
        <div>
            <NavBar activeReset = 'true'/>
            <Container>
                <Row style={{margin: "0 0 30px"}}>
                    <Col s={12} md={6} className='d-flex flex-row mb-3 align-items-center justify-content-center' style={{"marginTop": "30px"}}>
                        <h1>Reseteo de Urnas</h1>
                    </Col>
                    <Col s={12} md={6} className='d-flex flex-row mb-3 align-items-center justify-content-center' style={{"marginTop": "30px"}}>
                        <PrimaryButton message='Resetear urnas' onClick={handleButtonClick} show={showResetBallots}/>
                    </Col>
                </Row>
                <BallotTable/>
            </Container>
            {showResetBallots ? <ResetMessage onClick={handleButtonClick}><p style={{textAlign: "center"}}>Seguro que quieres resetear los votos de <strong>todas</strong> las urnas?</p></ResetMessage> : null}
        </div>
    ); 
    
}

export default Reset;