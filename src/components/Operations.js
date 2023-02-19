import OperationsStyle from "../styles/operations";
import OperationButton from "./Operation-Button";
import { IconIn, IconOut } from "../styles/icons";

export default function Operations() {
  return (
    <OperationsStyle>
      <OperationButton isOutPut={false}>
        <IconIn /> <span>Nova entrada</span>
      </OperationButton>
      <OperationButton isOutPut={true}>
        <IconOut />
        <span>Nova saída</span>
      </OperationButton>
    </OperationsStyle>
  );
}
