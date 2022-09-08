import FormStyle from "../../Styles/form";
import ButtonStyle from "../../Styles/Button";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signIn } from "../../Services/axios";
import { ThreeDots } from "react-loader-spinner";

export default function SignIn() {
  const [isBlocked, setIsBlocked] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  function submitData(event) {
    event.preventDefault();
    setIsBlocked(true);
    signIn(form)
      .then((answer) => {
        setIsBlocked(false);
        console.log(answer);
        // navigate("/");
      })
      .catch((answer) => {
        setIsBlocked(false);
        alert("Dados inválidos");
      });
  }
  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <SignInStyle>
      <h1>MyWallet</h1>
      <FormStyle onSubmit={submitData}>
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          required
          value={form.email}
          onChange={handleForm}
          readOnly={isBlocked}
        />
        <input
          type="password"
          placeholder="Senha"
          name="password"
          required
          value={form.password}
          onChange={handleForm}
          readOnly={isBlocked}
        />
        <ButtonStyle type="submit" disabled={isBlocked}>
          {!isBlocked ? (
            "Entrar"
          ) : (
            <ThreeDots color="#FFFFFF" height={80} width={80} />
          )}
        </ButtonStyle>
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
