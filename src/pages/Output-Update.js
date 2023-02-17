import { useState, useContext } from "react";

import { useNavigate, useLocation } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import FormStyle from "../styles/form";
import ButtonStyle from "../styles/button";
import NewMovimentationStyle from "../styles/new-Movimentation";
import UserContext from "../context/userContext";
import { updateRegistry } from "../services/axios";

export default function OutputUpdate() {
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
  return (
    <NewMovimentationStyle>
      <FormStyle onSubmit={submitData}>
        <h1>Editar saída</h1>
        <input
          type="text"
          placeholder="Valor"
          name="value"
          required
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              [e.target.name]: e.target.value,
            })
          }
          readOnly={isBlocked}
        />
        <input
          type="text"
          placeholder="Descrição"
          name="description"
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
        <ButtonStyle type="submit" disabled={isBlocked}>
          {isBlocked ? (
            <ThreeDots color="#FFFFFF" height={80} width={80} />
          ) : (
            "Atualizar saída"
          )}
        </ButtonStyle>
      </FormStyle>
    </NewMovimentationStyle>
  );
}
