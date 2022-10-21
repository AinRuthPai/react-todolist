import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./fbase";
import { useState } from "react";
import useFetch from "./useFetch";
import ScrollToTop from "./ScrollToTop";
import MainPage from "./components/MainPage";
import BoardWritePage from "./components/Board/BoardWritePage";
import BoardReadPage from "./components/Board/BoardReadPage";
import WeatherTemplate from "./components/Weather/WeatherTemplate";
import Weather from "./components/Weather/Weather";
import BoardTemplate from "./components/Board/BoardTemplate";
import BoardHead from "./components/Board/BoardHead";
import BoardList from "./components/Board/BoardList";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #393F47;
  }
`;

const MainHeaderBlock = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 8px 0 rgba(255, 255, 255, 0.5);

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
    align-items: center;
    margin: 0 10px;
  }
  ul > li {
    margin-left: 32px;
    color: white;
  }

  li:hover {
    transform: scale(1.02);
    transition: 0.1s ease-in;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  font-weight: 800;
  color: white;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  color: white;
`;

const LoginButton = styled.button`
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

  const [userData, setUserData] = useState(null);

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        setUserData(data.user);
        sessionStorage.setItem("uid", data.user.uid);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleGoogleLogout() {
    signOut(auth)
      .then(() => {
        setUserData(null);
        sessionStorage.removeItem("uid");
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
            <NavLink to='/'>To Do List</NavLink>
          </li>
          <li>
            <NavLink to='weather'>Weather</NavLink>
          </li>
          <li>
            <NavLink to='board'>Board</NavLink>
          </li>
          <li> {userData ? `WELCOME ${userData.displayName} !` : null}</li>
          <li>
            {userData ? null : <LoginButton onClick={handleGoogleLogin}>New Account / Login</LoginButton>}
            {userData ? <LoginButton onClick={handleGoogleLogout}>LogOut</LoginButton> : null}
          </li>
        </ul>
      </MainHeaderBlock>

      <Routes>
        <Route path='/' element={<MainPage todoData={todoData} />} />
        <Route
          path='weather'
          element={
            <WeatherTemplate>
              <Weather></Weather>
            </WeatherTemplate>
          }
        />
        <Route
          path='board'
          element={
            <BoardTemplate>
              <BoardHead />
              <BoardList boardData={boardData} />
            </BoardTemplate>
          }
        />
        <Route path='/write' element={<BoardWritePage data={data} />} />
        <Route path='/:id' element={<BoardReadPage boardData={boardData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
