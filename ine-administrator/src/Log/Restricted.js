import Card from "../UI/Card";

const Restricted = () => {
    return (
        <div className="background">
          <Card className="logIn" style={{display: "flex", flexDirection: "column"}}>
            <h1>Acceso restringido</h1>
            <br/>
            <h6>Por favor contactar a personal autorizado</h6>
          </Card>
        </div>
      );
}

export default Restricted;