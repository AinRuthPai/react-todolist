import TodoTemplate from "./Todo/TodoTemplate";
import TodoHead from "./Todo/TodoHead";
import TodoList from "./Todo/TodoList";
import TodoCreate from "./Todo/TodoCreate";
import WeatherTemplate from "./Weather/WeatherTemplate";
import Weather from "./Weather/Weather";
import BoardTemplate from "./Board/BoardTemplate";
import BoardHead from "./Board/BoardHead";
import BoardList from "./Board/BoardList";

import styled from "styled-components";

const WrapperBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

function MainPage({ boardData, todoData }) {
  return (
    <>
      <WrapperBlock>
        <TodoTemplate>
          <TodoHead />
          <TodoList todoData={todoData} />
          <TodoCreate todoData={todoData} />
        </TodoTemplate>

        <WeatherTemplate>
          <Weather />
        </WeatherTemplate>
      </WrapperBlock>

      <BoardTemplate>
        <BoardHead />
        <BoardList boardData={boardData} />
      </BoardTemplate>
    </>
  );
}

export default MainPage;
