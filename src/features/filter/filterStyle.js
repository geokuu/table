import styled from "styled-components";

const FilterStyle = styled.ul`
  position: absolute;
  right: -10px;
  top: 105px;

  display: flex;
  flex-direction: column;
  gap: 12px;

  width: fit-content;
  min-width: 130px;
  background: white;
  padding: 20px 20px;
  border-radius: 13px;
  box-shadow: 5px 5px 25px -4px hsla(0, 0%, 0%, 12%);
  white-space: nowrap;

  .list-item {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    gap: 4px;
  }

  .filter-name {
    display: flex;
    align-items: center;
    gap: 6px;
    justify-content: space-between;
    text-transform: capitalize;
  }

  .filter-name:hover {
    transform: scale(1.03);
  }

  .filter-content {
    display: flex;
    gap: 8px;
    cursor: pointer;
    text-transform: capitalize;
  }

  .content-name:hover {
    transform: scale(1.03);
  }

  input {
    cursor: pointer;
    accent-color: var(--yellow);
  }

  @media only screen and (min-width: 1200px) {
    left: calc(100% + 20px);
    top: 117px;
  }
`;

export default FilterStyle;
