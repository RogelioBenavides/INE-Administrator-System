import Table from 'react-bootstrap/Table';

const BallotTable = () => {
    const data = [{ id: "TAM6132", location: "Tamaulipas\nDistrito Federal: 6\nDistrito Local: 3\nSección: 2", votes: 750, registeredVotes: 710, status: "Activa" }, { id: "TAM6132", location: "Tamaulipas\nDistrito Federal: 6\nDistrito Local: 3\nSección: 2", votes: 750, registeredVotes: 710, status: "Activa" }, { id: "TAM6132", location: "Tamaulipas\nDistrito Federal: 6\nDistrito Local: 3\nSección: 2", votes: 750, registeredVotes: 710, status: "Activa" }, { id: "TAM6132", location: "Tamaulipas\nDistrito Federal: 6\nDistrito Local: 3\nSección: 2", votes: 750, registeredVotes: 710, status: "Activa" }, { id: "TAM6132", location: "Tamaulipas\nDistrito Federal: 6\nDistrito Local: 3\nSección: 2", votes: 750, registeredVotes: 710, status: "Activa" }, { id: "TAM6132", location: "Tamaulipas\nDistrito Federal: 6\nDistrito Local: 3\nSección: 2", votes: 750, registeredVotes: 710, status: "Activa" }, { id: "TAM6132", location: "Tamaulipas\nDistrito Federal: 6\nDistrito Local: 3\nSección: 2", votes: 750, registeredVotes: 710, status: "Activa" }, { id: "TAM6132", location: "Tamaulipas\nDistrito Federal: 6\nDistrito Local: 3\nSección: 2", votes: 750, registeredVotes: 710, status: "Activa" }, { id: "TAM6132", location: "Tamaulipas\nDistrito Federal: 6\nDistrito Local: 3\nSección: 2", votes: 750, registeredVotes: 710, status: "Activa" }, { id: "TAM6132", location: "Tamaulipas\nDistrito Federal: 6\nDistrito Local: 3\nSección: 2", votes: 750, registeredVotes: 710, status: "Activa" }]
    const rows = data.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.location.split('\n').map((line, index) => {
                    return <div key={index}>{line}</div>;
                })}</td>
                <td>{item.votes}</td>
                <td>{item.registeredVotes}</td>
                <td>{item.status}</td>
            </tr>
        );
    });
    return (
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

export default BallotTable;