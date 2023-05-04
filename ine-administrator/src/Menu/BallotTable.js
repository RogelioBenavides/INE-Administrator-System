import { useState, useEffect } from "react";
import { Table, Pagination } from "react-bootstrap";

const BallotTable = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    props.fetchData();
  }, [props]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = props.ballotBoxes.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const rows = currentItems.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.code + item.id}</td>
        <td>
          {item.location.split("\\n").map((line, i) => (
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
    <div>

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
      <Pagination>
        {[...Array(Math.ceil(props.ballotBoxes.length / itemsPerPage)).keys()].map(
          (page) => (
            <Pagination.Item
              key={page + 1}
              active={page + 1 === currentPage}
              onClick={() => handlePageChange(page + 1)}
            >
              {page + 1}
            </Pagination.Item>
          )
        )}
      </Pagination>
    </div>
);
};

export default BallotTable;
