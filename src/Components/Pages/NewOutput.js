import FormStyle from "../../Styles/form";
import ButtonStyle from "../../Styles/Button";
import NewMovimentationStyle from "../../Styles/newMovimentation";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { sendTransition } from "../../Services/axios";
export default function NewOutput() {
  const [isBlocked, setIsBlocked] = useState(false);
  const { state } = useLocation();
  const [form, setForm] = useState({
    value: "",
    description: "",
    isOutput: true,
  });
  const navigate = useNavigate();
  function submitData(event) {
    event.preventDefault();
    setIsBlocked(true);
    sendTransition(form, {
      headers: { Authorization: `Bearer ${state.token}` },
    })
      .then((answer) => {
        navigate("/principal-page", { state });
      })
      .catch((answer) => {
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
          Salvar saída
        </ButtonStyle>
      </FormStyle>
    </NewMovimentationStyle>
  );
}
