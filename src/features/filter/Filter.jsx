import { useState, useEffect } from "react";
import FilterStyle from "./filterStyle.js";
import ChevronUpIcon from "../../assets/icons/chevron-up.svg?react";
import ChevronDownIcon from "../../assets/icons/chevron-down.svg?react";
import PropTypes from "prop-types";

const Filter = ({ tasks, setFilteredData, setCurrentPage }) => {
  const [filters, setFilters] = useState({});
  const [visibleFilters, setVisibleFilters] = useState({});

  useEffect(() => {
    const extractedFilters = {};
    tasks.forEach((task) => {
      Object.keys(task).forEach((key) => {
        if (!extractedFilters[key]) {
          extractedFilters[key] = {};
        }
        extractedFilters[key][task[key]] = false;
        setVisibleFilters((prevState) => ({ ...prevState, [key]: false }));
      });
    });
    setFilters(extractedFilters);
  }, [tasks]);

  useEffect(() => {
    const filtered = tasks.filter((task) =>
      Object.keys(filters).every((key) => {
        return (
          !Object.values(filters[key]).some(Boolean) || filters[key][task[key]]
        );
      }),
    );
    setFilteredData(filtered);
  }, [tasks, filters, setFilteredData]);

  const handleCheckboxChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: {
        ...prevFilters[name],
        [value]: !prevFilters[name][value],
      },
    }));
    setCurrentPage(1);
  };

  const handleFilter = (key) => {
    setVisibleFilters({ ...visibleFilters, [key]: !visibleFilters[key] });
  };

  return (
    <FilterStyle>
      {Object.keys(filters).map(
        (key) =>
          key !== "todo_at" &&
          key !== "room" &&
          key !== "date" &&
          key !== "notes" && (
            <li className="list-item" key={key}>
              <button className="filter-name" onClick={() => handleFilter(key)}>
                {key}
                {visibleFilters[key] ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </button>
              {visibleFilters[key] &&
                Object.keys(filters[key]).map((filterValue, index) => (
                  <label className="filter-content" key={index}>
                    <input
                      type="checkbox"
                      name={key}
                      value={filterValue}
                      checked={filters[key][filterValue]}
                      onChange={handleCheckboxChange}
                    />
                    <p className="content-name">{filterValue}</p>
                  </label>
                ))}
            </li>
          ),
      )}
    </FilterStyle>
  );
};

Filter.propTypes = {
  tasks: PropTypes.array,
  setFilteredData: PropTypes.func,
  setCurrentPage: PropTypes.func,
};

export default Filter;
