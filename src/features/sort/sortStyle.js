import styled from "styled-components";

const SortStyle = styled.ul`
  position: absolute;
  right: -10px;
  top: 105px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  background: white;
  padding: 18px 16px;
  border-radius: 13px;
  box-shadow: 5px 5px 25px -4px hsla(0, 0%, 0%, 12%);
  width: fit-content;

  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
    text-transform: capitalize;
    width: 90px;
    cursor: pointer;
  }

  li:hover {
    transform: scale(1.03);
  }

  .active {
    background: var(--yellow);
    height: 25px;
    border-radius: 5px;
  }
`;

export default SortStyle;
