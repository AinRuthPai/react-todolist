import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
  width: 50%;
  margin-top: 32px;
  font-size: 20px;
  outline: none;
`;

const InputTextBlock = styled.textarea`
  width: 50%;
  height: 500px;
  outline: none;
  font-size: 18px;
  padding: 10px 6px;
  margin: 16px 0;
`;

export const BtnWrapperBlock = styled.div`
  display: flex;
  justify-content: center;
`;

export const BtnBlock = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  margin-right: 16px;
  padding: 10px 12px;
  font-size: 18px;
  border: none;
  outline: none;
  color: white;
  background-color: #20c997;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #20c997;
  }
`;

export const CancelBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  margin-right: 16px;
  padding: 12px 14px;
  font-size: 18px;
  border: none;
  outline: none;
  color: white;
  background-color: #20c997;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: white;
    color: #20c997;
  }
`;

function BoardWritePage({ data }) {
  const titleRef = useRef();
  const textRef = useRef();
  const nav = useNavigate();
  const url = `http://localhost:3001/board/`;
  const { state } = useLocation();

  function onPostBoard() {
    if (titleRef.current.value && textRef.current.value) {
      if (state) {
        fetch(`http://localhost:3001/board/${data[state - 1].id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: state,
            title: titleRef.current.value,
            text: textRef.current.value,
          }),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            nav("/react-todolist/board");
            window.location.reload();
          })
          .catch((e) => {
            console.log(e);
          });
        return;
      }
    }
    if (titleRef.current.value && textRef.current.value) {
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
          nav("/react-todolist/board");
          window.location.reload();
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      alert("제목과 내용은 필수 입력입니다.");
    }
  }

  return (
    <>
      <BoardWrapperBlock>
        <InputTitleBlock type='text' maxLength='30' placeholder='제목을 입력하세요' ref={titleRef} />
        <InputTextBlock type='text' placeholder='내용을 입력하세요' ref={textRef} />
      </BoardWrapperBlock>
      <BtnWrapperBlock>
        <BtnBlock onClick={onPostBoard}>작성하기</BtnBlock>
        <CancelBtn to='/react-todolist/board'>뒤로가기</CancelBtn>
      </BtnWrapperBlock>
    </>
  );
}

export default BoardWritePage;
