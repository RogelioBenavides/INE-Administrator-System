import Table from 'react-bootstrap/Table';

// La función BallotTable se utiliza como componente para crear una tabla de votación.
const BallotTable = () => {
  // Se crea un arreglo de datos de ejemplo.
  const data = [
    { id: "TAM6132", location: "Tamaulipas\nDistrito Federal: 6\nDistrito Local: 3\nSección: 2", votes: 750, registeredVotes: 710, status: "Activa" },
    { id: "TAM6132", location: "Tamaulipas\nDistrito Federal: 6\nDistrito Local: 3\nSección: 2", votes: 750, registeredVotes: 710, status: "Activa" },
    { id: "TAM6132", location: "Tamaulipas\nDistrito Federal: 6\nDistrito Local: 3\nSección: 2", votes: 750, registeredVotes: 710, status: "Activa" },
    { id: "TAM6132", location: "Tamaulipas\nDistrito Federal: 6\nDistrito Local: 3\nSección: 2", votes: 750, registeredVotes: 710, status: "Activa" },
    { id: "TAM6132", location: "Tamaulipas\nDistrito Federal: 6\nDistrito Local: 3\nSección: 2", votes: 750, registeredVotes: 710, status: "Activa" },
    { id: "TAM6132", location: "Tamaulipas\nDistrito Federal: 6\nDistrito Local: 3\nSección: 2", votes: 750, registeredVotes: 710, status: "Activa" },
    { id: "TAM6132", location: "Tamaulipas\nDistrito Federal: 6\nDistrito Local: 3\nSección: 2", votes: 750, registeredVotes: 710, status: "Activa" },
    { id: "TAM6132", location: "Tamaulipas\nDistrito Federal: 6\nDistrito Local: 3\nSección: 2", votes: 750, registeredVotes: 710, status: "Activa" },
    { id: "TAM6132", location: "Tamaulipas\nDistrito Federal: 6\nDistrito Local: 3\nSección: 2", votes: 750, registeredVotes: 710, status: "Activa" },
    { id: "TAM6132", location: "Tamaulipas\nDistrito Federal: 6\nDistrito Local: 3\nSección: 2", votes: 750, registeredVotes: 710, status: "Activa" }
  ]
  // Se crean filas para la tabla a partir de los datos.
  const rows = data.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.id}</td>
        <td>
          {/* Se separa la ubicación por líneas y se crean elementos div para cada línea */}
           {item.location.split('\n').map((line, index) => {
            return <div key={index}>{line}</div>;
          })}
        </td>
        <td>{item.votes}</td>
        <td>{item.registeredVotes}</td>
        <td>{item.status}</td>
      </tr>
    );
  });
  return (
    // Se utiliza la librería react-bootstrap para crear la tabla con estilos.
    <Table striped hover bordered responsive className='rounded-4'>
      <thead>
        <tr>
          <th>Código</th>
          <th>Ubicación</th>
          <th>Votos totales</th>
          <th>Votos registrados</th>
          <th>Estatus</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </Table>
  );
}

// Se exporta la función BallotTable como un componente.
export default BallotTable;