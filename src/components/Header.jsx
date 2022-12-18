import styled from "styled-components";
import { Link } from "react-router-dom";

const MainHeaderBlock = styled.div`
  /* position: relative; */
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  border-bottom: 1px solid white;
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
      <li>
        <NavLink to='/react-todolist'>TO DO LIST</NavLink>
      </li>
      <li>
        <NavLink to='/react-todolist/weather'>WEATHER</NavLink>
      </li>
      <li>
        <NavLink to='/react-todolist/board'>BOARD</NavLink>
      </li>
    </MainHeaderBlock>
  );
}

export default Header;
