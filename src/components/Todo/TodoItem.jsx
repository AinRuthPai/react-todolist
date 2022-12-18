import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { useState } from "react";

const Remove = styled.div`
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  margin-right: 20px;
  &:hover {
    color: #ff6b6b;
  }
`;

const TodoItemBlock = styled.div`
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: inline-block;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: black;
  margin-bottom: 20px;
  ${(props) =>
    props.done &&
    css`
      color: #868e96;
    `}
`;

function TodoItem({ todoData }) {
  const [isDone, setIsDone] = useState(todoData.done);

  function onRemove() {
    fetch(`http://localhost:3001/initialTodos/${todoData.id}`, {
      method: "DELETE",
    }).then((res) => {
      window.location.reload();
      return res.json();
    });
  }

  function onToggleCheck() {
    fetch(`http://localhost:3001/initialTodos/${todoData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: todoData.id,
        text: todoData.text,
        done: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  }

  return (
    <TodoItemBlock>
      <CheckCircle onClick={onToggleCheck} done={isDone}>
        {isDone === true ? <MdDone /> : null}
      </CheckCircle>
      <Text done={isDone}>{todoData.text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
