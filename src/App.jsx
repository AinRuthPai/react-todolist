import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./components/MainPage";
import BoardWritePage from "./components/Board/BoardWritePage";
import ScrollToTop from "./ScrollToTop";
import BoardReadPage from "./components/Board/BoardReadPage";
import Login from "./components/Login";
import useFetch from "./useFetch";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #e9ecef;
  }
`;

const MainHeaderBlock = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-size: 24px;
  font-weight: 800;
  color: black;
`;

const LoginLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  color: black;
  margin-left: 20px;
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
        <HomeLink to='/'>BETWEEN</HomeLink>
        <LoginLink to='/login'>Login</LoginLink>
      </MainHeaderBlock>

      <Routes>
        <Route path='/' element={<MainPage boardData={boardData} todoData={todoData} />} />
        <Route path='/write' element={<BoardWritePage data={data} />} />
        <Route path='/:id' element={<BoardReadPage boardData={boardData} />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
