import FormStyle from "../styles/form";
import ButtonStyle from "../styles/button";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUp } from "../services/axios";
import { ThreeDots } from "react-loader-spinner";

export default function SignUp() {
  const [isBlocked, setIsBlocked] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  function submitData(event) {
    event.preventDefault();
    setIsBlocked(true);
    const { name, email, password, confirmPassword } = form;
    if (password !== confirmPassword) {
      alert("As senhas fornecidas devem ser iguais");
      setIsBlocked(false);
      return;
    }
    signUp({ name, email, password })
      .then(() => {
        setIsBlocked(false);
        navigate("/");
      })
      .catch((answer) => {
        console.log(answer);
        alert("Preencha todos os campos corretamente");
        if (answer.response.status === 409) {
          alert(answer.response.data);
        }
        setIsBlocked(false);
      });
  }
  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <SignUpStyle>
      <h1>MyWallet</h1>
      <FormStyle onSubmit={submitData}>
        <input
          type="name"
          placeholder="Nome"
          name="name"
          required
          value={form.name}
          onChange={handleForm}
          readOnly={isBlocked}
        />
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
        <input
          type="password"
          placeholder="Confirme a senha"
          name="confirmPassword"
          required
          value={form.confirmPassword}
          onChange={handleForm}
          readOnly={isBlocked}
        />
        <ButtonStyle type="submit" disabled={isBlocked}>
          {!isBlocked ? (
            "Cadastrar"
          ) : (
            <ThreeDots color="#FFFFFF" height={80} width={80} />
          )}
        </ButtonStyle>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <p>Já tem uma conta? Entre agora!</p>
        </Link>
      </FormStyle>
    </SignUpStyle>
  );
}

const SignUpStyle = styled.div`
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
