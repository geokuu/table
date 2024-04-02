import styled from "styled-components";

const NoteStyle = styled.td`

  
  
  .note-content {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #6d6d6d;
    max-width: 200px;
  }

  .note-content:hover{
    transform: scale(1.03);
  }
  
  .note-icon {
    display: none;
  }

  .note-popup {
    position: absolute;
    top: 11%;
    right: 4px;
    display: flex;
    max-width: 35%;
    border-radius: 16px;
    padding: 14px 14px;
    box-shadow: 5px 5px 20px 1px hsla(0, 0%, 0%, 12%);
    background: white;
    z-index: 1;
  }

  @media only screen and (max-width: 800px) {
    .note-content {
      max-width: 70px;
    }
  }

  @media only screen and (max-width: 600px) {
    .note-icon {
      display: inline;
    }
    .note-content {
      display: none;
    }
`;

export default NoteStyle;
