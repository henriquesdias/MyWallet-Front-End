import { useNavigate } from "react-router-dom";

import { IconExclude } from "../styles/icons";
import { deleteRegistry } from "../services/axios";
import RegistryStyle from "../styles/registryStyle";

export default function Registry({ registry, registries, setRegistries }) {
  const idRegistry = registry._id;
  const navigate = useNavigate();
  function excludeRegistry() {
    deleteRegistry(idRegistry)
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
        {registry.value}
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
