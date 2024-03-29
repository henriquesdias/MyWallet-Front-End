import styled from "styled-components";

const RegistryStyle = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  div {
    display: flex;
    align-items: center;
    span:first-child {
      color: #c6c6c6;
      margin-right: 6px;
    }
  }
  > span {
    display: flex;
    align-items: center;
    color: ${(props) => (props.isOutput ? "red" : "green")};
  }
`;

export default RegistryStyle;
