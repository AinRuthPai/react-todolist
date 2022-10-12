import { Link } from "react-router-dom";
import styled from "styled-components";

export const BoardHeadBlock = styled.div`
  width: 65%;
  padding-top: 42px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 20px;
  text-align: center;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  h1 {
    margin: 0;
    margin-bottom: 8px;
    font-size: 32px;
    color: #343a40;
  }
`;

const StyledLink = styled(Link)`
  position: absolute;
  right: 0;
  background-color: #20c997;
  color: white;
  cursor: pointer;
  font-size: 1.1rem;
  border-radius: 10px;
  padding: 0.5rem;
  text-decoration: none;
`;

function BoardHead() {
  return (
    <BoardHeadBlock>
      <h1>게시판</h1>
      <StyledLink to='/write'>글 작성</StyledLink>
    </BoardHeadBlock>
  );
}

export default BoardHead;
