import styled from "styled-components";
import BoardItem from "./BoardItem";

const BoardListBlock = styled.div`
  flex: 1;
  width: 80%;
  padding: 20px 32px;
  padding-bottom: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function BoardList({ boardData }) {
  return (
    <>
      <BoardListBlock>
        {boardData.map((boardData) => (
          <BoardItem key={boardData.id} boardData={boardData} />
        ))}
      </BoardListBlock>
    </>
  );
}

export default BoardList;
