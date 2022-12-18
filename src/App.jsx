import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import useFetch from "./useFetch";
import MainPage from "./components/MainPage";
import BoardWritePage from "./components/Board/BoardWritePage";
import BoardReadPage from "./components/Board/BoardReadPage";
import Weather from "./components/Weather/Weather";
import BoardTemplate from "./components/Board/BoardTemplate";
import BoardHead from "./components/Board/BoardHead";
import BoardList from "./components/Board/BoardList";
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #F0EFE9;
    font-family: "Pretendard-Regular";

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }

  button,
  input,
  textarea {
  font-family: "Pretendard-Regular";
  }
`;

function App() {
  const data = useFetch(`http://localhost:3001/board/`);
  const boardData = [...data].reverse();
  const todoData = useFetch(`http://localhost:3001/initialTodos/`);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path='/react-todolist' element={<MainPage todoData={todoData} />} />
        <Route path='/react-todolist/weather' element={<Weather />} />
        <Route
          path='/react-todolist/board'
          element={
            <BoardTemplate>
              <BoardHead />
              <BoardList boardData={boardData} />
            </BoardTemplate>
          }
        />
        <Route path='/react-todolist/write' element={<BoardWritePage data={data} />} />
        <Route path='/react-todolist/:id' element={<BoardReadPage boardData={boardData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
