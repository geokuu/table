import PaginationStyle from "./paginationStyle.js";
import LeftArrowIcon from "../../assets/icons/left-arrow.svg?react";
import RightArrowIcon from "../../assets/icons/right-arrow.svg?react";
import SortIcon from "../../assets/icons/sort.svg?react";
import FilterIcon from "../../assets/icons/filter.svg?react";
import PropTypes from "prop-types";

const Pagination = ({
  totalRows,
  rowsPerPage,
  currentPage,
  setCurrentPage,
  setRowsPerPage,
  showFilter,
  setShowFilter,
  showSort,
  setShowSort,
}) => {
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const handleChangePage = (newPage) => {
    setCurrentPage(newPage);
  };
  const handleChangeRowsPerPage = ({ target }) => {
    setRowsPerPage(parseInt(target.value, 10));
    setCurrentPage(1);
  };

  return (
    <PaginationStyle>
      <div className="label-left">
        <p className="text--S page-text">Results per page</p>
        <select
          className="drop-down text--S"
          value={rowsPerPage}
          onChange={handleChangeRowsPerPage}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
      <div className="label-center">
        <button
          className="button"
          onClick={() => handleChangePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <LeftArrowIcon />
        </button>
        <p>
          {currentPage}/{totalPages}
        </p>
        <button
          className="button"
          onClick={() => handleChangePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <RightArrowIcon />
        </button>
      </div>
      <div className="label-right">
        <button
          className={showSort ? "button no-click" : "button"}
          onClick={() => setShowSort(!showSort)}
        >
          <SortIcon />
        </button>
        <button
          className={
            showFilter ? "button filter-btn no-click" : "button filter-btn"
          }
          onClick={() => setShowFilter(!showFilter)}
        >
          <FilterIcon />
        </button>
      </div>
    </PaginationStyle>
  );
};

Pagination.propTypes = {
  totalRows: PropTypes.number,
  rowsPerPage: PropTypes.number,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  setRowsPerPage: PropTypes.func,
  showFilter: PropTypes.bool,
  setShowFilter: PropTypes.func,
  showSort: PropTypes.bool,
  setShowSort: PropTypes.func,
};

export default Pagination;
