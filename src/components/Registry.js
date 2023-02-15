import { useContext } from "react";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { IconExclude } from "../styles/icons";
import UserContext from "../context/userContext";
import { deleteRegistry } from "../services/axios";

export default function Registry({ registry, registries, setRegistries }) {
  const idRegistry = registry._id;
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  function excludeRegistry() {
    deleteRegistry(idRegistry, {
      headers: { Authorization: `Bearer ${user.token}` },
    })
      .catch((answer) => console.log(answer))
      .then(() => {
        setRegistries([...registries.filter((e) => e._id !== registry._id)]);
        navigate("/principal-page");
      });
  }
  return (
    <RegistryStyle isOutput={registry.isOutput}>
      <div>
        <span>{registry.date}</span>
        <span
          onClick={() => {
            if (registry.isOutput) {
              navigate("/output-update", { state: { id: registry._id } });
            } else {
              navigate("/entry-update", { state: { id: registry._id } });
            }
          }}
        >
          {registry.description}
        </span>
      </div>
      <span>
        {registry.value.toFixed(2).replace(".", ",")}
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
