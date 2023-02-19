import styled from "styled-components";

const TotalvalueStyle = styled.span`
  color: ${(props) => (props.color >= 0 ? "green" : "red")};
`;
export default TotalvalueStyle;
