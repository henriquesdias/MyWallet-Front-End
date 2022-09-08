import { IoCloseOutline } from "react-icons/io5";
import styled from "styled-components";
export default function Transition({ date, description, value, isOutput }) {
  return (
    <TransitionStyle isOutput={isOutput}>
      <div>
        <span>30/11</span>
        <span>Almoço com a família</span>
      </div>
      <span>
        150
        <IconExclude></IconExclude>
      </span>
    </TransitionStyle>
  );
}
const TransitionStyle = styled.li`
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
const IconExclude = styled(IoCloseOutline)`
  color: #c6c6c6;
  font-size: 16px;
`;
