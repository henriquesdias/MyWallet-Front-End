import { useEffect, useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import PrincipalPageStyle from "../styles/principal-page";
import AreaRegistriesStyle from "../styles/registries";
import ListOfRegistriesStyle from "../styles/list-registries";
import Registry from "../components/Registry";
import { getRegistries } from "../services/axios";
import UserContext from "../context/userContext";
import HelloUser from "../components/Hello-User";
import TotalValue from "../components/Total-value";
import Operations from "../components/Operations";

export default function PrincipalPage() {
  const [registries, setRegistries] = useState([]);
  const { user } = useContext(UserContext);
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
                  registry={e}
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
      <Operations />
    </PrincipalPageStyle>
  );
}
