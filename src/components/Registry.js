import { useContext } from "react";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { IconExclude } from "../styles/icons";
import UserContext from "../context/userContext";
import { deleteRegistry } from "../services/axios";

export default function Registry({
  date,
  description,
  value,
  isOutput,
  id,
  registries,
  setRegistries,
}) {
  const idRegistry = id;
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  function excludeRegistry() {
    deleteRegistry(idRegistry, {
      headers: { Authorization: `Bearer ${user.token}` },
    })
      .catch((answer) => console.log(answer))
      .then(() => {
        setRegistries([...registries.filter((e) => e._id !== id)]);
        navigate("/principal-page");
      });
  }
  return (
    <RegistryStyle isOutput={isOutput}>
      <div>
        <span>{date}</span>
        <span
          onClick={() => {
            if (isOutput) {
              navigate("/output-update", { state: { id } });
            } else {
              navigate("/entry-update", { state: { id } });
            }
          }}
        >
          {description}
        </span>
      </div>
      <span>
        {value.toFixed(2).replace(".", ",")}
        <IconExclude
          onClick={() => {
            const confirm = window.confirm("Deseja apagar esse registro ?");
            if (confirm) {
              excludeRegistry();
            }
          }}
        ></IconExclude>
      </span>
    </RegistryStyle>
  );
}
const RegistryStyle = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  div {
    display: flex;
    align-items: center;
    span:first-child {
      color: #c6c6c6;
      margin-right: 6px;
    }
  }
  > span {
    display: flex;
    align-items: center;
    color: ${(props) => (props.isOutput ? "red" : "green")};
  }
`;
