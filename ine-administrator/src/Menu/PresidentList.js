import Table from 'react-bootstrap/Table';

const PresidentList = (props) => {
    // Se crea una constante "rows" que mapea los datos del componente padre
    const rows = props.data.map((item, index) => {
        // Se retorna una fila con los valores del item actual
        return (
            <tr key={index}>
                <td>{item.code + item.id}</td>
                <td>{item.user}</td>
                <td>{item.password}</td>
            </tr>
        );
    });
    // Se retorna una tabla con los datos
    return (
        <Table striped hover bordered responsive className='rounded-4' style={{width: "80%", margin: "30px auto"}}>
            <thead>
                <tr>
                    <th>Urna</th>
                    <th>Usuario</th>
                    <th>Contraseña</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </Table>
    );
}

// Se exporta el componente como un módulo para su uso en otros componentes
export default PresidentList;