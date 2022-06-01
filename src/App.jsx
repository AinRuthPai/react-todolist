import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import WeatherTemplate from "./components/WeatherTemplate";
import BoardTemplate from "./components/BoardTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import Weather from "./components/Weather";
import BoardHead from "./components/BoardHead";
import BoardList from "./components/BoardList";
import BoardWirtePage from "./components/BoardWritePage";

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

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <MainHeaderBlock>
        <h1>BETWEEN</h1>
      </MainHeaderBlock>

      <Wrapper>
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>

        <WeatherTemplate>
          <Weather />
        </WeatherTemplate>
      </Wrapper>

      <BoardTemplate>
        <BoardHead />
        <BoardList />
      </BoardTemplate>

      <Routes>
        <Route path='/write' element={<BoardWirtePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
