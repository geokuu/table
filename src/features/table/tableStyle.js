import styled from "styled-components";

const TableStyle = styled.div`
  position: relative;
  margin: 65px auto 120px;
  width: fit-content;

  table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    border-radius: 22.5px;
    box-shadow: 8px 8px 43px -8px hsla(0, 0%, 0%, 12%);
  }

  tr {
    position: relative;
    height: 57px;
    align-items: center;
  }

  .header-table {
    height: 45px;
    width: 100%;
    text-align: left;
  }

  th {
    background: var(--yellow);
  }

  th:first-child {
    border-top-left-radius: 22.5px;
    border-bottom-left-radius: 22.5px;
  }

  th:last-child {
    border-top-right-radius: 22.5px;
    border-bottom-right-radius: 22.5px;
  }

  tr td:last-child,
  th:last-child {
    padding-right: min(24px);
  }

  tr td:first-child,
  th:first-child {
    padding-left: min(24px);
    text-transform: capitalize;
  }

  th,
  td {
    padding: 0 20px 0 20px;
    white-space: nowrap;
  }

  tr:not(:last-child):after {
    content: "";
    background: #dcdcdc;
    position: absolute;
    bottom: 0;
    left: 0;
    margin-left: min(24px);
    margin-right: min(24px);
    height: 1px;
    width: calc(100% - min(48px));
  }

  .location-container {
    display: flex;
    gap: 5px;
  }

  @media only screen and (max-width: 800px) {
    td,
    th {
      padding: 0 1.5vw 0 1.5vw;
      white-space: normal;
    }
    tr {
      height: 66px;
    }
    .location-container {
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 100%;

    td button {
      width: 100%;
    }
    th:last-child {
      font-size: 0;
    }
    td,
    th {
      padding: 0 1vw 0 1vw;
    }
  }

  @media only screen and (max-width: 1200px) {
    .filter {
      display: none;
    }
  }
`;

export default TableStyle;
