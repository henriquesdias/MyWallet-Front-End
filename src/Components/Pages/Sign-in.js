import FormStyle from "../../Styles/form";
import ButtonStyle from "../../Styles/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function SignIn() {
  return (
    <SignInStyle>
      <h1>MyWallet</h1>
      <FormStyle>
        <input type="email" placeholder="E-mail" name="email" required />
        <input type="password" placeholder="Senha" name="password" required />
        <ButtonStyle>Entrar</ButtonStyle>
        <Link to={"/sign-up"} style={{ textDecoration: "none" }}>
          <p>Primeira vez? Cadastre-se!</p>
        </Link>
      </FormStyle>
    </SignInStyle>
  );
}

const SignInStyle = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  h1 {
    font-size: 32px;
    color: white;
    margin: 0 auto 21.5px auto;
    font-family: "Saira Stencil One", cursive;
  }
  p {
    font-family: "Raleway", sans-serif;
    color: white;
    font-size: 15px;
    margin-top: 32px;
  }
`;
