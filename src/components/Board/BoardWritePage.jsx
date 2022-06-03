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
  width: 50vw;
  margin-top: 2rem;
  font-size: 22px;
  border-radius: 8px;
`;

const InputTextBlock = styled.textarea`
  width: 60vw;
  height: 30vw;
  outline: none;
  font-size: 20px;
  padding: 20px 10px;
  border-radius: 8px;
  margin: 2rem 0;
`;

const WriteBtnBlock = styled.button`
  position: absolute;
  left: 42%;
  margin-bottom: 2rem;
  padding: 12px 14px;
  border-radius: 10px;
  font-size: 18px;
  border: none;
  outline: none;
  color: white;
  background-color: #1db386;
  cursor: pointer;
`;

const CancelLink = styled(Link)`
  position: absolute;
  left: 54%;
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

function BoardWirtePage() {
  return (
    <>
      <BoardWrapperBlock>
        <InputTitleBlock />

        <InputTextBlock />
      </BoardWrapperBlock>
      <WriteBtnBlock>작성하기</WriteBtnBlock>
      <CancelLink to='/'>취소하기</CancelLink>
    </>
  );
}

export default BoardWirtePage;
