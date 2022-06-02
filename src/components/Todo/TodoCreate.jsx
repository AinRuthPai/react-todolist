import { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import { useRef } from "react";

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  font-size: 60px;
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const url = `http://localhost:3001/initialTodos`;
  const textTodo = useRef();

  function onSubmit() {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: textTodo.current.value,
        done: false,
      }),
    }).then((res) => {
      if (res.ok) {
      }
    });
  }

  const onToggle = () => setOpen(!open);

  return (
    <>
      {open && (
        <InsertFormPositioner onSubmit={onSubmit}>
          <InsertForm>
            <Input ref={textTodo} autoFocus placeholder='할 일을 입력 후, Enter를 누르세요' />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default TodoCreate;
