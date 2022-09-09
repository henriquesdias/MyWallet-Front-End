import FormStyle from "../../Styles/form";
import ButtonStyle from "../../Styles/Button";
import NewMovimentationStyle from "../../Styles/newMovimentation";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { sendRegistry } from "../../Services/axios";
export default function NewEntry() {
  const [isBlocked, setIsBlocked] = useState(false);
  const { state } = useLocation();
  const [form, setForm] = useState({
    value: "",
    description: "",
    isOutput: false,
  });
  const navigate = useNavigate();
  function submitData(event) {
    event.preventDefault();
    if (isNaN(form.value)) {
      alert("Digite um valor válido");
    }
    setIsBlocked(true);
    sendRegistry(form, {
      headers: { Authorization: `Bearer ${state.token}` },
    })
      .then((answer) => {
        navigate("/principal-page", { state });
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
