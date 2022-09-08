import PrincipalPageStyle from "../../Styles/principal-page";
import AreaTransitionStyle from "../../Styles/transitions";
import ListOfTransitionsStyle from "../../Styles/list-transitions";
import { useLocation } from "react-router-dom";
import {
  IoAddCircleOutline,
  IoExitOutline,
  IoRemoveCircleOutline,
} from "react-icons/io5";
import styled from "styled-components";
import Transition from "../Transition";
import { useState } from "react";
export default function PrincipalPage() {
  const [transitions, setTransitions] = useState({});
  const { state } = useLocation();
  return (
    <PrincipalPageStyle>
      <span>
        <p>Olá, {state.name}</p>
        <IconExit></IconExit>
      </span>
      <AreaTransitionStyle>
        {/* <p>Não há registros de entrada ou saída</p> */}
        <ListOfTransitionsStyle>
          <Transition></Transition>
          <Transition></Transition>
          <Transition></Transition>
        </ListOfTransitionsStyle>
        <div>
          <span>SALDO</span>
          <span>2849.90</span>
        </div>
      </AreaTransitionStyle>
      <OperationsStyle>
        <div>
          <IconIn></IconIn> <span>Nova entrada</span>
        </div>
        <div>
          <IconOut></IconOut> <span>Nova saída</span>
        </div>
      </OperationsStyle>
    </PrincipalPageStyle>
  );
}
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
