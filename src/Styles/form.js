import styled from "styled-components";

const FormStyle = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 330px;
  width: 100%;
  input {
    background-color: #ffffff;
    border-radius: 5px;
    max-width: 326px;
    width: 100%;
    height: 58px;
    color: black;
    font-size: 20px;
    outline: none;
    border: none;
    margin: 6.5px 0;
    font-family: "Raleway", sans-serif;
  }
  input::placeholder {
    color: black;
    font-size: 20px;
  }
`;

export default FormStyle;
