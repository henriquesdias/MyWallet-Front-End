import PrincipalPageStyle from "../../Styles/principal-page";
import AreaRegistriesStyle from "../../Styles/registries";
import ListOfRegistriesStyle from "../../Styles/list-registries";
import { useLocation } from "react-router-dom";
import {
  IoAddCircleOutline,
  IoExitOutline,
  IoRemoveCircleOutline,
} from "react-icons/io5";
import styled from "styled-components";
import Registry from "../Registry";
import { useEffect, useState } from "react";
import { getRegistries } from "../../Services/axios";
import { useNavigate } from "react-router-dom";

export default function PrincipalPage() {
  const [registries, setRegistries] = useState([]);
  const { state } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    getRegistries({ headers: { Authorization: `Bearer ${state.token}` } })
      .then((answer) => {
        setRegistries(answer.data);
      })
      .catch((answer) => {
        console.log(answer);
      });
  }, []);
  return (
    <PrincipalPageStyle>
      <span>
        <p>Olá, {state.name}</p>
        <IconExit
          onClick={() => {
            const answer = window.confirm("Deseja sair da conta ?");
            if (answer) {
              navigate("/");
            }
          }}
        ></IconExit>
      </span>
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
                ></Registry>
              ))}
            </ListOfRegistriesStyle>
            <div>
              <span>SALDO</span>
              <TotalValue>
                {registries.reduce((total, element) => {
                  if (element.isOutput) {
                    total -= Number(element.value);
                  } else {
                    total += Number(element.value);
                  }
                  return total;
                }, 0)}
              </TotalValue>
            </div>
          </>
        )}
      </AreaRegistriesStyle>
      <OperationsStyle>
        <div onClick={() => navigate("/new-entry", { state })}>
          <IconIn></IconIn> <span>Nova entrada</span>
        </div>
        <div onClick={() => navigate("/new-output", { state })}>
          <IconOut></IconOut> <span>Nova saída</span>
        </div>
      </OperationsStyle>
    </PrincipalPageStyle>
  );
}
function TotalValue(props) {
  const isPositive = Number(props.children) >= 0;
  return <TotalvalueStyle color={isPositive}>{props.children}</TotalvalueStyle>;
}
const TotalvalueStyle = styled.span`
  color: ${(props) => (props.color ? "green" : "red")};
`;
const OperationsStyle = styled.footer`
  max-width: 600px;
  width: 100%;
  margin: 13px auto;
  display: flex;
  justify-content: center;
  font-family: "Raleway", sans-serif;
  div {
    width: 50%;
    height: 114px;
    background-color: #a96bd6;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    span {
      font-size: 17px;
      font-weight: bold;
      color: white;
    }
  }
  div:first-child {
    margin-right: 15px;
  }
`;
const IconIn = styled(IoAddCircleOutline)`
  color: white;
  font-size: 25px;
`;
const IconOut = styled(IoRemoveCircleOutline)`
  color: white;
  font-size: 25px;
`;
const IconExit = styled(IoExitOutline)`
  color: white;
  font-size: 35px;
`;
