import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import WeatherTemplate from "./components/WeatherTemplate";
import Weather from "./components/Weather";
import BoardTemplate from "./components/BoardTemplate";
import BoardHead from "./components/BoardHead";
// import Wrapper from "./components/Wrapper";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const MainHeaderBlock = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  h1 {
    font-size: 28px;
  }
  div {
    font-size: 19px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <MainHeaderBlock>
        <h1>To Do List</h1>
      </MainHeaderBlock>

      <WeatherTemplate>
        <Weather />
      </WeatherTemplate>
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>

      <BoardTemplate>
        <BoardHead />
      </BoardTemplate>
    </>
  );
}

export default App;
