import { useEffect, useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/initialTodos`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <TodoListBlock>
      {data.map((todo) => {
        return <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />;
      })}
    </TodoListBlock>
  );
}

export default TodoList;
