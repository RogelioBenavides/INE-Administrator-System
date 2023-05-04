import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { saveAs } from "file-saver";
import Papa from "papaparse";
import PrimaryButton from "../UI/PrimaryButton";

const PresidentList = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [leftPageBound, setLeftPageBound] = useState(0);
  const [rightPageBound, setRightPageBound] = useState(10);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = props.data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(props.data.length / itemsPerPage);

  const rows = currentItems.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.code + item.id}</td>
        <td>{item.user}</td>
        <td>{item.password}</td>
      </tr>
    );
  });

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
  const downloadCSV = () => {
    const csv = Papa.unparse(props.data);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "president_list.csv");
  };

  return (
    <div>
      <Table
        striped
        hover
        bordered
        responsive
        className="rounded-4"
        style={{ width: "80%", margin: "30px auto" }}
      >
        <thead>
          <tr>
            <th>Urna</th>
            <th>Usuario</th>
            <th>Contraseña</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      <Container
        className="justify-content-center text-center"
      >
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
        <PrimaryButton
          onClick={downloadCSV}
          message="Download CSV"
        ></PrimaryButton>
      </Container>
    </div>
  );
};

export default PresidentList;
