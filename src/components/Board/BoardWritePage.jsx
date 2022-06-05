import styled from "styled-components";
import { Link } from "react-router-dom";

const BoardWrapperBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputTitleBlock = styled.input`
  width: 60%;
  margin-top: 2rem;
  font-size: 22px;
  border-radius: 8px;
`;

const InputTextBlock = styled.textarea`
  width: 60%;
  height: 30vw;
  outline: none;
  font-size: 20px;
  padding: 20px 10px;
  border-radius: 8px;
  margin: 2rem 0;
`;

const BtnWrapperBlock = styled.div`
  display: flex;
  justify-content: center;
`;

const WriteBtnBlock = styled.button`
  margin-bottom: 2rem;
  margin-right: 1rem;
  padding: 12px 14px;
  border-radius: 10px;
  font-size: 18px;
  border: none;
  outline: none;
  color: white;
  background-color: #1db386;
  cursor: pointer;
`;

export const CancelLink = styled(Link)`
  display: inline-block;
  margin-bottom: 2rem;
  padding: 12px 14px;
  border-radius: 10px;
  font-size: 18px;
  border: none;
  outline: none;
  text-decoration: none;
  color: white;
  background-color: #20c997;
  cursor: pointer;
`;

function BoardWritePage({ boardData }) {
  return (
    <>
      <BoardWrapperBlock>
        <InputTitleBlock maxLength='30' placeholder='제목을 입력하세요' />
        <InputTextBlock placeholder='내용을 입력하세요' />
      </BoardWrapperBlock>
      <BtnWrapperBlock>
        <WriteBtnBlock>작성하기</WriteBtnBlock>
        <CancelLink to='/'>뒤로가기</CancelLink>
      </BtnWrapperBlock>
    </>
  );
}

export default BoardWritePage;
