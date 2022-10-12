import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import MainPage from "./components/MainPage";
import BoardWritePage from "./components/Board/BoardWritePage";
import ScrollToTop from "./ScrollToTop";
import BoardReadPage from "./components/Board/BoardReadPage";
import useFetch from "./useFetch";
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut } from "firebase/auth";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    width: 80%;
    background: #e9ecef;
  }
`;

const MainHeaderBlock = styled.div`
  position: relative;
  width: 80%;
  height: 60px;
  margin: 0 auto;
  margin-top: 8px;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  h1 {
    font-size: 28px;
  }
  div {
    font-size: 19px;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  ul > li {
    margin-left: 32px;
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

const LoginButton = styled.button`
  position: absolute;
  right: 0;
  top: 12px;
  background-color: #20c997;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  border-radius: 10px;
  padding: 0.5rem 0.7rem;
  border: none;
`;

function App() {
  const data = useFetch(`http://localhost:3001/board/`);
  const boardData = [...data].reverse();
  const todoData = useFetch(`http://localhost:3001/initialTodos/`);

  const auth = getAuth();
  const [userData, setUserData] = useState(null);

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        setUserData(data.user);
        alert("로그인 완료!");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleGoogleLogout() {
    signOut(auth)
      .then(() => {
        setUserData(null);
        alert("로그아웃 완료!");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalStyle />

      <MainHeaderBlock>
        <HomeLink to='/'>BETWEEN</HomeLink>
        <ul>
          <li>
            {userData ? null : <LoginButton onClick={handleGoogleLogin}>New Account / Login</LoginButton>}
            {userData ? <LoginButton onClick={handleGoogleLogout}>LogOut</LoginButton> : null}
            {userData ? userData.displayName : null}
          </li>
        </ul>
      </MainHeaderBlock>

      <Routes>
        <Route path='/' element={<MainPage boardData={boardData} todoData={todoData} />} />
        <Route path='/write' element={<BoardWritePage data={data} />} />
        <Route path='/:id' element={<BoardReadPage boardData={boardData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
