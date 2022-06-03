import BoardTemplateBlock from "./BoardTemplate";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import dummy from "../../db/dummy.json";

const BoardReadTitle = styled.div`
  width: 65%;
  padding-top: 12px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`;

const BoardReadText = styled.div`
  width: 70%;
  margin-top: 5rem;
  font-size: 20px;
  text-align: left;
`;

function BoardReadPage() {
  const data = dummy.board;
  let { id } = useParams();

  return (
    <BoardTemplateBlock>
      <BoardReadTitle>
        <h2>{data[id - 1].title}</h2>
      </BoardReadTitle>
      <BoardReadText>{data[id - 1].text}</BoardReadText>
    </BoardTemplateBlock>
  );
}

export default BoardReadPage;
