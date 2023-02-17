import { useEffect, useState, useContext } from "react";

import PrincipalPageStyle from "../styles/principal-page";
import AreaRegistriesStyle from "../styles/registries";
import { getRegistries } from "../services/axios";
import UserContext from "../context/userContext";
import HelloUser from "../components/Hello-User";
import TotalValue from "../components/Total-value";
import Operations from "../components/Operations";
import ListOfRegistries from "../components/List-Of-Registries";

export default function PrincipalPage() {
  const [registries, setRegistries] = useState([]);
  const { user } = useContext(UserContext);
  useEffect(() => {
    getRegistries()
      .then((answer) => {
        setRegistries(answer.data.reverse());
      })
      .catch((answer) => {
        console.log(answer);
      });
  }, []);
  return (
    <PrincipalPageStyle>
      <HelloUser name={user.name} />
      <AreaRegistriesStyle>
        {registries.length === 0 ? (
          <p>Não há registros de entrada ou saída</p>
        ) : (
          <>
            <ListOfRegistries
              registries={registries}
              setRegistries={setRegistries}
            />
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
