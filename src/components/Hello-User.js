import { useNavigate } from "react-router-dom";

import { IconExit } from "../styles/icons";
import { deleteSession } from "../services/axios";

export default function HelloUser({ name }) {
  const navigate = useNavigate();
  return (
    <span>
      <p>Olá, {name}</p>
      <IconExit
        onClick={() => {
          const answer = window.confirm("Deseja sair da conta ?");
          if (answer) {
            deleteSession()
              .catch((answer) => console.log(answer))
              .then(() => {
                localStorage.removeItem("user");
                navigate("/");
              });
          }
        }}
      ></IconExit>
    </span>
  );
}
