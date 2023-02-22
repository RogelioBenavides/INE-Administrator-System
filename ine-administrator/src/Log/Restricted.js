import Card from "../UI/Card";

// La función Restricted se utiliza como componente para la página de acceso restringido.
const Restricted = () => {
  return (
    // Se crea un contenedor de fondo para la página.
    <div className="background">
      {/* Se utiliza el componente Card para crear una tarjeta que contiene el mensaje de acceso restringido. */}
      <Card
        className="logIn"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {/* Título de la tarjeta */}
        <h1>Acceso restringido</h1>
        <br />
        {/* Mensaje de la tarjeta */}
        <h6>Por favor contactar a personal autorizado</h6>
      </Card>
    </div>
  );
};

// Se exporta la función Restricted como un componente.
export default Restricted;
