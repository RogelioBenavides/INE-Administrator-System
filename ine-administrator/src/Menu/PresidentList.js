import Table from 'react-bootstrap/Table';

const PresidentList = (props) => {
    const rows = props.data.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.code}</td>
                <td>{item.user}</td>
                <td>{item.password}</td>
            </tr>
        );
    });
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

export default PresidentList;