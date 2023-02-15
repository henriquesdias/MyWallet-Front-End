import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import UserContext from "../context/userContext";
import { IconExit } from "../styles/icons";
import { deleteSession } from "../services/axios";

export default function HelloUser({ name }) {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  return (
    <span>
      <p>Olá, {name}</p>
      <IconExit
        onClick={() => {
          const answer = window.confirm("Deseja sair da conta ?");
          if (answer) {
            deleteSession({
              headers: { Authorization: `Bearer ${user.token}` },
            })
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
