import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
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
