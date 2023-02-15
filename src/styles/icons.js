import {
  IoAddCircleOutline,
  IoExitOutline,
  IoRemoveCircleOutline,
  IoCloseOutline,
} from "react-icons/io5";
import styled from "styled-components";
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
const IconExclude = styled(IoCloseOutline)`
  color: #c6c6c6;
  font-size: 16px;
`;
export { IconIn, IconOut, IconExit, IconExclude };
