import FormStyle from "../../Styles/form";
import ButtonStyle from "../../Styles/Button";
import NewMovimentationStyle from "../../Styles/newMovimentation";
import { useState, useContext } from "react";
import UserContext from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { sendRegistry } from "../../Services/axios";
import { ThreeDots } from "react-loader-spinner";

export default function NewOutput() {
  const [isBlocked, setIsBlocked] = useState(false);
  const { user } = useContext(UserContext);
  const [form, setForm] = useState({
    value: "",
    description: "",
    isOutput: true,
  });
  const navigate = useNavigate();
  function submitData(event) {
    event.preventDefault();
    if (isNaN(form.value)) {
      alert("Digite um valor válido");
    }
    setIsBlocked(true);
    sendRegistry(form, {
      headers: { Authorization: `Bearer ${user.token}` },
    })
      .then((answer) => {
        navigate("/principal-page");
      })
      .catch((answer) => {
        setIsBlocked(false);
        console.log(answer);
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
        <h1>Nova saída</h1>

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
            "Salvar saída"
          )}
        </ButtonStyle>
      </FormStyle>
    </NewMovimentationStyle>
  );
}
