import TodoTemplate from "./Todo/TodoTemplate";
import TodoHead from "./Todo/TodoHead";
import TodoList from "./Todo/TodoList";
import TodoCreate from "./Todo/TodoCreate";

import styled from "styled-components";

export const WrapperBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 48px;
`;

function MainPage({ todoData }) {
  return (
    <>
      <WrapperBlock>
        <TodoTemplate>
          <TodoHead />
          <TodoList todoData={todoData} />
          <TodoCreate todoData={todoData} />
        </TodoTemplate>
      </WrapperBlock>
    </>
  );
}

export default MainPage;
