import NoteStyle from "./noteStyle.js";
import NoteIcon from "../../assets/icons/note.svg?react";
import { useState } from "react";
import ClickOutsideDetector from "../ClickOutsideDetector.jsx";
import PropTypes from "prop-types";
const Note = ({ note }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <NoteStyle>
      {note && (
        <button
          onClick={() => setShowPopup(!showPopup)}
          className={showPopup ? "invisible" : ""}
        >
          <p className="note-content">{note}</p>
          <NoteIcon className="note-icon" />
        </button>
      )}
      {showPopup && (
        <ClickOutsideDetector show={showPopup} setShow={setShowPopup}>
          <div className="note-popup">{note}</div>
        </ClickOutsideDetector>
      )}
    </NoteStyle>
  );
};

Note.propTypes = {
  note: PropTypes.string,
};

export default Note;
