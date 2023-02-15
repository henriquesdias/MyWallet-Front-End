import FormStyle from "../styles/form";
import ButtonStyle from "../styles/button";
import NewMovimentationStyle from "../styles/new-Movimentation";
import { ThreeDots } from "react-loader-spinner";
import { useState, useContext } from "react";
import UserContext from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { sendRegistry } from "../services/axios";

export default function NewEntry() {
  const [isBlocked, setIsBlocked] = useState(false);
  const { user } = useContext(UserContext);
  const [form, setForm] = useState({
    value: "",
    description: "",
    isOutput: false,
  });
  const navigate = useNavigate();
  function submitData(event) {
    event.preventDefault();
    form.value = form.value.replace(",", ".");
    if (isNaN(form.value) || form.value < 0) {
      alert("Digite um valor válido");
      return;
    }
    setIsBlocked(true);
    sendRegistry(form, {
      headers: { Authorization: `Bearer ${user.token}` },
    })
      .then(() => {
        navigate("/principal-page");
      })
      .catch((answer) => {
        setIsBlocked(false);
        console.log(answer);
        alert("Preencha os campos corretamente");
      });
  }
  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <NewMovimentationStyle>
      <FormStyle onSubmit={submitData}>
        <h1>Nova entrada</h1>
        <input
          type="text"
          placeholder="Valor"
          name="value"
          required
          value={form.name}
          onChange={handleForm}
          readOnly={isBlocked}
        />
        <input
          type="text"
          placeholder="Descrição"
          name="description"
          required
          value={form.email}
          onChange={handleForm}
          readOnly={isBlocked}
        />
        <ButtonStyle type="submit" disabled={isBlocked}>
          {isBlocked ? (
            <ThreeDots color="#FFFFFF" height={80} width={80} />
          ) : (
            "Salvar entrada"
          )}
        </ButtonStyle>
      </FormStyle>
    </NewMovimentationStyle>
  );
}
