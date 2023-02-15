import { useEffect, useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import PrincipalPageStyle from "../styles/principal-page";
import AreaRegistriesStyle from "../styles/registries";
import ListOfRegistriesStyle from "../styles/list-registries";
import { IconIn, IconOut } from "../styles/icons";
import Registry from "../components/Registry";
import { getRegistries } from "../services/axios";
import OperationsStyle from "../styles/operations";
import UserContext from "../context/userContext";
import HelloUser from "../components/Hello-User";
import TotalValue from "../components/Total-value";

export default function PrincipalPage() {
  const [registries, setRegistries] = useState([]);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    getRegistries({ headers: { Authorization: `Bearer ${user.token}` } })
      .then((answer) => {
        setRegistries(answer.data.reverse());
      })
      .catch((answer) => {
        console.log(answer);
      });
  }, []);
  return (
    <PrincipalPageStyle>
      <HelloUser name={user.name}></HelloUser>
      <AreaRegistriesStyle>
        {registries.length === 0 ? (
          <p>Não há registros de entrada ou saída</p>
        ) : (
          <>
            <ListOfRegistriesStyle>
              {registries.map((e, index) => (
                <Registry
                  key={index}
                  date={e.date}
                  description={e.description}
                  value={Number(e.value)}
                  isOutput={e.isOutput}
                  id={e._id}
                  registries={registries}
                  setRegistries={setRegistries}
                ></Registry>
              ))}
            </ListOfRegistriesStyle>
            <div>
              <span>SALDO</span>
              <TotalValue registries={registries} />
            </div>
          </>
        )}
      </AreaRegistriesStyle>
      <OperationsStyle>
        <div onClick={() => navigate("/new-entry")}>
          <IconIn></IconIn> <span>Nova entrada</span>
        </div>
        <div onClick={() => navigate("/new-output")}>
          <IconOut></IconOut> <span>Nova saída</span>
        </div>
      </OperationsStyle>
    </PrincipalPageStyle>
  );
}
