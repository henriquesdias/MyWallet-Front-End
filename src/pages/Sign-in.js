import { useState, useContext, useEffect } from "react";

import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import FormStyle from "../styles/form";
import ButtonStyle from "../styles/button";
import { signIn } from "../services/axios";
import UserContext from "../context/userContext";

export default function SignIn() {
  const [isBlocked, setIsBlocked] = useState(false);
  const { setUser } = useContext(UserContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setUser(JSON.parse(localStorage.getItem("user")));
      navigate("/principal-page");
    }
  }, []);
  function submitData(event) {
    event.preventDefault();
    setIsBlocked(true);
    signIn(form)
      .then((answer) => {
        setIsBlocked(false);
        setUser({ ...answer.data, name: answer.data.name });
        localStorage.setItem(
          "user",
          JSON.stringify({
            email: form.email,
            password: form.password,
            token: answer.data.token,
            name: answer.data.name,
          })
        );
        navigate("/principal-page");
      })
      .catch(() => {
        setIsBlocked(false);
        alert("Dados inválidos");
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
          onChange={(e) =>
            setForm({
              ...form,
              [e.target.name]: e.target.value,
            })
          }
          readOnly={isBlocked}
        />
        <input
          type="password"
          placeholder="Senha"
          name="password"
          required
          value={form.password}
          onChange={(e) =>
            setForm({
              ...form,
              [e.target.name]: e.target.value,
            })
          }
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
