import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

function ClickOutsideDetector({ children, show, setShow, alwaysShow }) {
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  const handleClickOutside = (event) => {
    if (!ref.current.contains(event.target)) {
      setShow(false);
    }
  };

  return (
    <div className={!alwaysShow ? (show ? "" : "hidden") : ""} ref={ref}>
      {children}
    </div>
  );
}

ClickOutsideDetector.propTypes = {
  children: PropTypes.object,
  show: PropTypes.bool,
  setShow: PropTypes.func,
  alwaysShow: PropTypes.bool,
};

export default ClickOutsideDetector;
