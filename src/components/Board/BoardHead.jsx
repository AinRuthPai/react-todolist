import { CancelBtn } from "./BoardWritePage";
import styled from "styled-components";

export const BoardHeadBlock = styled.div`
  width: 65%;
  padding-top: 32px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 16px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;

  h1 {
    margin: 0;
    margin-bottom: 8px;
    font-size: 24px;
  }
`;

export const WriteBtn = styled(CancelBtn)`
  position: absolute;
  right: 0;
  padding: 6px;
`;

function BoardHead() {
  return (
    <BoardHeadBlock>
      <h1>BOARD</h1>
      <WriteBtn to='/react-todolist/write'>글 작성</WriteBtn>
    </BoardHeadBlock>
  );
}

export default BoardHead;
