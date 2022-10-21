import TodoTemplate from "./Todo/TodoTemplate";
import TodoHead from "./Todo/TodoHead";
import TodoList from "./Todo/TodoList";
import TodoCreate from "./Todo/TodoCreate";

import styled from "styled-components";

export const WrapperBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
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
