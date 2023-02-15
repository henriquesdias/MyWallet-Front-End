import { useNavigate } from "react-router-dom";

import { OperationStyle } from "../styles/Operations-style";

export default function OperationButton({ children, isOutPut }) {
  const navigate = useNavigate();
  return (
    <OperationStyle
      onClick={() => {
        if (isOutPut) {
          return navigate("/new-output");
        }
        navigate("/new-entry");
      }}
    >
      {children}
    </OperationStyle>
  );
}
