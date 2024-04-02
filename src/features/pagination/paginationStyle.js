import styled from "styled-components";

const paginationStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 20px;
  width: 100%;

  .label-left {
    width: 150px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .label-center {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .label-right {
    width: 150px;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 10px;
  }

  @media only screen and (min-width: 1200px) {
    .filter-btn {
      display: none;
    }
  }

  @media only screen and (max-width: 600px) {
    .page-text {
      display: none;
    }
  }
`;

export default paginationStyle;
