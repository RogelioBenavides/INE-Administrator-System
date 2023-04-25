import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../UI/NavBar";
import PrimaryButton from "../UI/PrimaryButton";
import BallotTable from "./BallotTable";
import { useState, useEffect } from "react";
import ResetMessage from "./ResetMessage";
import axios from "axios";

const Reset = () => {
  // Use State hook to control the visibility of the reset message component
  const [showResetBallots, setShowResetBallots] = useState(false);

  const [ballotBoxes, setBallotBoxes] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/ballotboxes');
      setBallotBoxes(response.data);
    } catch (error) {
      console.error('Error fetching ballot boxes:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Function to handle the click event on the reset button
  const handleButtonClick = () => {
    // toggle the showResetBallots state
    setShowResetBallots(!showResetBallots);
  };

  return (
    <div>
      {/* Import and render the NavBar component */}
      <NavBar activeReset="true" />
      <Container>
        <Row style={{ margin: "0 0 30px" }}>
          {/* Use bootstrap grid system to arrange the reset button and the reset heading */}
          <Col
            s={12}
            md={6}
            className="d-flex flex-row mb-3 align-items-center justify-content-center"
            style={{ marginTop: "30px" }}
          >
            <h1>Reseteo de Urnas</h1>
          </Col>
          <Col
            s={12}
            md={6}
            className="d-flex flex-row mb-3 align-items-center justify-content-center"
            style={{ marginTop: "30px" }}
          >
            {/* Render the reset button component */}
            <PrimaryButton
              message="Resetear urnas"
              onClick={handleButtonClick}
              show={showResetBallots}
            />
          </Col>
        </Row>
        {/* Render the BallotTable component */}
        <BallotTable ballotBoxes={ballotBoxes} fetchData={fetchData} />
      </Container>
      {/* Conditionally render the ResetMessage component based on the showResetBallots state */}
      {showResetBallots ? (
        <ResetMessage onClick={handleButtonClick} fetchData={fetchData} >
          <h1 style={{ textAlign: "center" }}>
            Seguro que quieres resetear los votos de <strong>todas</strong> las
            urnas?
          </h1>
        </ResetMessage>
      ) : null}
    </div>
  );
};

export default Reset;
