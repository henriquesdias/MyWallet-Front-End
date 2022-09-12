import styled from "styled-components";
const OperationsStyle = styled.footer`
  max-width: 600px;
  width: 100%;
  margin: 13px auto 0 auto;
  display: flex;
  justify-content: center;
  font-family: "Raleway", sans-serif;
  div {
    width: 50%;
    height: 114px;
    background-color: #a96bd6;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    span {
      font-size: 17px;
      font-weight: bold;
      color: white;
    }
  }
  div:first-child {
    margin-right: 15px;
  }
`;
export default OperationsStyle;
