import styled from "styled-components";
import { Link } from "react-router-dom";

const BoardItemBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
  overflow: auto;
  position: relative;
`;

const Text = styled.div`
  font-size: 20px;
  width: 100%;
  text-align: center;
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.3); */
  border-bottom: 1px solid #38d9a9;
  line-height: 150%;
`;

const BoardLink = styled(Link)`
  color: black;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: #38d9a9;
  }
`;

const TextNumber = styled.div`
  position: absolute;
  left: 0;
`;

function BoardItem({ boardData }) {
  return (
    <BoardItemBlock>
      <Text>
        <TextNumber>{`No : ${boardData.id}`}</TextNumber>
        <BoardLink to={`/react-todolist/${boardData.id}`}>{boardData.title}</BoardLink>
      </Text>
    </BoardItemBlock>
  );
}

export default BoardItem;
