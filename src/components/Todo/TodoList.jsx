import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  overflow-y: auto;
  margin: 20px 0;
  width: 80%;
`;

function TodoList({ todoData }) {
  return (
    <TodoListBlock>
      {todoData.map((todoData) => {
        return <TodoItem key={todoData.id} todoData={todoData} />;
      })}
    </TodoListBlock>
  );
}

export default TodoList;
