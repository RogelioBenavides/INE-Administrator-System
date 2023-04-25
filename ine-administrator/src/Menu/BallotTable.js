import { useEffect } from "react";
import { Table } from "react-bootstrap";

const BallotTable = (props) => {
  useEffect(() => {
    props.fetchData();
  }, [props]);

  const rows = props.ballotBoxes.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.code + item.id}</td>
        <td>
          {item.location.split('\\n').map((line, i) => (
            <p key={i} style={{ margin: 0 }}>
              {line}
            </p>
          ))}
        </td>
        <td>{item.totalvotes}</td>
        <td>{item.votes}</td>
      </tr>
    );
  });
  
  
  

  return (
    <Table striped hover bordered responsive className="rounded-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Ubicación</th>
          <th>Votos totales</th>
          <th>Votos registrados</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default BallotTable;