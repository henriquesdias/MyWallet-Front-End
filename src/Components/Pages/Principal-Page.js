import PrincipalPageStyle from "../../Styles/principal-page";
import AreaRegistriesStyle from "../../Styles/registries";
import ListOfRegistriesStyle from "../../Styles/list-registries";
import { IconIn, IconExit, IconOut } from "../../Styles/icons";
import styled from "styled-components";
import Registry from "../Registry";
import { useEffect, useState, useContext } from "react";
import { getRegistries } from "../../Services/axios";
import { useNavigate } from "react-router-dom";
import OperationsStyle from "../../Styles/operations";
import UserContext from "../context/userContext";

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
  function total() {
    let totalValue = registries.reduce((total, element) => {
      if (element.isOutput) {
        total -= Number(element.value);
      } else {
        total += Number(element.value);
      }
      return total;
    }, 0);
    totalValue = totalValue.toFixed(2).replace(".", ",");
    return totalValue;
  }
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
                  value={e.value}
                  isOutput={e.isOutput}
                  id={e._id}
                  registries={registries}
                  setRegistries={setRegistries}
                ></Registry>
              ))}
            </ListOfRegistriesStyle>
            <div>
              <span>SALDO</span>
              <TotalValue>{total()}</TotalValue>
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
function TotalValue(props) {
  const total = Number(props.children.replace(",", "."));
  return <TotalvalueStyle color={total}>{props.children}</TotalvalueStyle>;
}
function HelloUser({ name }) {
  const navigate = useNavigate();
  return (
    <span>
      <p>Olá, {name}</p>
      <IconExit
        onClick={() => {
          const answer = window.confirm("Deseja sair da conta ?");
          if (answer) {
            localStorage.removeItem("user");
            navigate("/");
          }
        }}
      ></IconExit>
    </span>
  );
}
const TotalvalueStyle = styled.span`
  color: ${(props) => (props.color >= 0 ? "green" : "red")};
`;
