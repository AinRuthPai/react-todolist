import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";

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

export const BtnWrapperBlock = styled.div`
  display: flex;
  justify-content: center;
`;

export const WriteBtnBlock = styled.button`
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

function BoardWritePage() {
  const titleRef = useRef();
  const textRef = useRef();
  const nav = useNavigate();
  const url = `http://localhost:3001/board/`;

  function postBoard() {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: titleRef.current.value,
        text: textRef.current.value,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        nav("/");
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <>
      <BoardWrapperBlock>
        <InputTitleBlock type='text' maxLength='30' placeholder='제목을 입력하세요' ref={titleRef} />
        <InputTextBlock type='text' placeholder='내용을 입력하세요' ref={textRef} />
      </BoardWrapperBlock>
      <BtnWrapperBlock>
        <WriteBtnBlock onClick={postBoard}>작성하기</WriteBtnBlock>
        <CancelLink to='/'>뒤로가기</CancelLink>
      </BtnWrapperBlock>
    </>
  );
}

export default BoardWritePage;
