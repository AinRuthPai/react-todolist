import styled from "styled-components";
import { Link } from "react-router-dom";

const MainHeaderBlock = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;

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
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  color: black;
  margin: 0 10px;

  &:hover {
    color: #38d9a9;
  }
`;

function Header() {
  return (
    <MainHeaderBlock>
      <ul>
        <li>
          <NavLink to='/react-todolist'>TO DO LIST</NavLink>
        </li>
        <li>
          <NavLink to='/react-todolist/weather'>WEATHER</NavLink>
        </li>
        <li>
          <NavLink to='/react-todolist/board'>BOARD</NavLink>
        </li>
      </ul>
    </MainHeaderBlock>
  );
}

export default Header;
