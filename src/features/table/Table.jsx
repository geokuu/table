import TableStyle from "./tableStyle.js";
import Pagination from "../pagination/Pagination.jsx";
import { useEffect, useState } from "react";
import Sort from "../sort/Sort.jsx";
import Filter from "../filter/Filter.jsx";
import ClickOutsideDetector from "../ClickOutsideDetector.jsx";
import Note from "../note/Note.jsx";
import $ from "jquery";
import PropTypes from "prop-types";

const Table = ({ tasks }) => {
  const [filteredData, setFilteredData] = useState(tasks);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [filterAlwaysOn, setFilterAlwaysOn] = useState(false);

  const totalRows = filteredData.length;
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentRows = filteredData.slice(startIndex, endIndex);

  useEffect(() => {
    setFilteredData(tasks);
  }, [tasks]);

  useEffect(() => {
    const handleResize = () => {
      setFilterAlwaysOn($(window).width() > 1200);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const day = dateObject.getDate();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObject.getFullYear().toString().slice(2);
    return `${day}.${month}.${year}`;
  };

  return (
    <TableStyle>
      <h1 className="heading--L">Cleaning</h1>
      <Pagination
        totalRows={totalRows}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        showSort={showSort}
        setShowSort={setShowSort}
      />
      <table>
        <thead>
          <tr className="header-table">
            <th>Type</th>
            <th>Location</th>
            <th>Date</th>
            <th>Employee</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((task, index) => {
            return (
              <tr key={index}>
                <td>{task.type}</td>
                <td>
                  <div className="location-container">
                    <p className="no-wrap">{task.building}</p>
                    <p>{task.room}</p>
                  </div>
                </td>
                <td>{formatDate(task.date)}</td>
                <td>{task.employee}</td>
                <Note note={task.notes} />
              </tr>
            );
          })}
        </tbody>
      </table>
      <ClickOutsideDetector
        show={showFilter}
        setShow={setShowFilter}
        alwaysShow={filterAlwaysOn}
      >
        <Filter
          tasks={tasks}
          setFilteredData={setFilteredData}
          setCurrentPage={setCurrentPage}
        />
      </ClickOutsideDetector>
      <ClickOutsideDetector show={showSort} setShow={setShowSort}>
        <Sort filteredData={filteredData} setFilteredData={setFilteredData} />
      </ClickOutsideDetector>
    </TableStyle>
  );
};

Table.propTypes = {
  tasks: PropTypes.array,
};

export default Table;
