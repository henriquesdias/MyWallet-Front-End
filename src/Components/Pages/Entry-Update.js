import FormStyle from "../../Styles/form";
import ButtonStyle from "../../Styles/button";
import NewMovimentationStyle from "../../Styles/new-Movimentation";
import { ThreeDots } from "react-loader-spinner";
import { useState, useContext } from "react";
import UserContext from "../context/userContext";
import { useLocation, useNavigate } from "react-router-dom";
import { updateRegistry } from "../../Services/axios";

export default function EntryUpdate() {
  const [isBlocked, setIsBlocked] = useState(false);
  const { user } = useContext(UserContext);
  const { state } = useLocation();
  const [form, setForm] = useState({
    value: "",
    description: "",
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
    updateRegistry(state.id, form, {
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
        <h1>Editar entrada</h1>
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
            "Atualizar entrada"
          )}
        </ButtonStyle>
      </FormStyle>
    </NewMovimentationStyle>
  );
}
