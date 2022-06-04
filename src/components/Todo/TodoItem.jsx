import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
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
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function TodoItem({ todo }) {
  const [isDone, setIsDone] = useState(todo.done);
  const [newTodo, setNewTodo] = useState(todo);

  useEffect(() => {
    setNewTodo(todo);
  }, [todo]);

  function onRemove() {
    fetch(`http://localhost:3001/initialTodos/${todo.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setNewTodo({
          ...newTodo,
          id: 0,
        });
      }
    });
  }

  function onToggleCheck() {
    fetch(`http://localhost:3001/initialTodos/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: todo.id,
        text: todo.text,
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
        {/* {done && <MdDone />} */}
        {isDone === true ? <MdDone /> : todo.done}
      </CheckCircle>
      <Text done={isDone}>{todo.text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;