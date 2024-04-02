import { useState, useEffect } from "react";
import SortStyle from "./sortStyle.js";
import ArrowUpIcon from "../../assets/icons/arrow-up.svg?react";
import ArrowDownIcon from "../../assets/icons/arrow-down.svg?react";
import PropTypes from "prop-types";

const Sort = ({ filteredData, setFilteredData }) => {
  const [sortTypes] = useState(filteredData[0]);
  const [sortKey, setSortKey] = useState("date");
  const [sortDirection, setSortDirection] = useState("desc");

  useEffect(() => {
    if (sortKey) {
      const sortedData = [...filteredData].sort((a, b) => {
        const valueA = a[sortKey].toString().toLowerCase();
        const valueB = b[sortKey].toString().toLowerCase();
        if (valueA < valueB) return sortDirection === "asc" ? 1 : -1;
        if (valueA > valueB) return sortDirection === "asc" ? -1 : 1;
        return 0;
      });
      setFilteredData(sortedData);
    }
  }, [sortKey, sortDirection]);

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  return (
    <SortStyle>
      {Object.keys(sortTypes).map(
        (parameter, index) =>
          parameter !== "notes" && (
            <li
              key={index}
              className={
                sortKey === parameter ? "list-item active" : "list-item"
              }
              onClick={() => handleSort(parameter)}
            >
              {parameter}{" "}
              {sortKey === parameter &&
                (sortDirection === "asc" ? <ArrowUpIcon /> : <ArrowDownIcon />)}
            </li>
          ),
      )}
    </SortStyle>
  );
};

Sort.propTypes = {
  filteredData: PropTypes.array,
  setFilteredData: PropTypes.func,
};
export default Sort;
