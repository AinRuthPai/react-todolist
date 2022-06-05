import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./components/MainPage";
import BoardWritePage from "./components/Board/BoardWritePage";
import ScrollToTop from "./ScrollToTop";
import BoardReadPage from "./components/Board/BoardReadPage";
import useFetch from "./useFetch";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const MainHeaderBlock = styled.div`
  width: 100%;
  height: 70px;
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

const HomeLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function App() {
  const data = useFetch(`http://localhost:3001/board/`);
  const boardData = [...data].reverse();

  const todoData = useFetch(`http://localhost:3001/initialTodos/`);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalStyle />

      <MainHeaderBlock>
        <HomeLink to='/'>
          <h1>BETWEEN</h1>
        </HomeLink>
      </MainHeaderBlock>

      <Routes>
        <Route path='/' element={<MainPage boardData={boardData} todoData={todoData} />} />
        <Route path='/write' element={<BoardWritePage boardData={boardData} />} />
        <Route path='/:id' element={<BoardReadPage boardData={boardData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
