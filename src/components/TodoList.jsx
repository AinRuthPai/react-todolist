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
  const url = `http://localhost:3001/initialTodos/`;

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, [url]);

  return (
    <TodoListBlock>
      {data.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </TodoListBlock>
  );
}

export default TodoList;
