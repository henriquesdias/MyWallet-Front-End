import styled from "styled-components";

const PrincipalPageStyle = styled.main`
  width: 95%;
  max-width: 600px;
  margin: 0 auto;
  height: 100vh;
  overflow: hidden;
  > span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
    > p {
      font-size: 26px;
      font-weight: bold;
      color: white;
      font-family: "Raleway", sans-serif;
    }
  }
`;
export default PrincipalPageStyle;
