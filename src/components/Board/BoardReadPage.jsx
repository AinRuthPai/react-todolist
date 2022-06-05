import BoardTemplateBlock from "./BoardTemplate";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { CancelLink } from "./BoardWritePage";

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
`;

const BoardReadText = styled.div`
  flex: 1;
  width: 90%;
  margin-top: 5rem;
  font-size: 20px;
  text-align: left;
  word-break: break-all;
`;

function BoardReadPage({ data }) {
  let { id } = useParams();
  console.log(data);

  return (
    <>
      <BoardTemplateBlock>
        <BoardReadTitle>{id}</BoardReadTitle>
        <BoardReadText></BoardReadText>
      </BoardTemplateBlock>
      <CancelLink to='/'>뒤로가기</CancelLink>
    </>
  );
}

export default BoardReadPage;
