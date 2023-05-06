import { useState, useEffect } from "react";
import { Table, Pagination } from "react-bootstrap";

const BallotTable = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [leftPageBound, setLeftPageBound] = useState(0);
  const [rightPageBound, setRightPageBound] = useState(10);

  useEffect(() => {
    props.fetchData();
  }, [props]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = props.ballotBoxes.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(props.ballotBoxes.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (pageNumber > rightPageBound) {
      setLeftPageBound(leftPageBound + 5);
      setRightPageBound(rightPageBound + 5);
    }
    if (pageNumber < leftPageBound) {
      setLeftPageBound(leftPageBound - 5);
      setRightPageBound(rightPageBound - 5);
    }
  };

  const handleNextbtn = () => {
    if (currentPage + 1 > rightPageBound) {
      setLeftPageBound(leftPageBound + 5);
      setRightPageBound(rightPageBound + 5);
    }
    if (currentPage + 1 <= totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevbtn = () => {
    if ((currentPage - 1) % 5 === 0) {
      setLeftPageBound(leftPageBound - 5);
      setRightPageBound(rightPageBound - 5);
    }
    if (currentPage - 1 >= 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const rows = currentItems.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.code + item.id}</td>
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
            <th>Votos totales</th>
            <th>Votos registrados</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      <Pagination style={{ margin: "20px auto", display: "flex", justifyContent: "center" }}>
        <Pagination.Prev
          onClick={handlePrevbtn}
          disabled={currentPage === 1}
        />
        {[...Array(totalPages).keys()].map((page) =>
          page + 1 > leftPageBound && page + 1 <= rightPageBound ? (
            <Pagination.Item
              key={page + 1}
              active={page + 1 === currentPage}
              onClick={() => handlePageChange(page + 1)}
            >
              {page + 1}
            </Pagination.Item>
          ) : null
        )}
        <Pagination.Next
          onClick={handleNextbtn}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </div>
  );
};

export default BallotTable;
