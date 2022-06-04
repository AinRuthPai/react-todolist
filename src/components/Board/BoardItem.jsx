import styled from "styled-components";
import { Link } from "react-router-dom";

const BoardItemBlock = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 16px;
  width: 100%;
  overflow: auto;
`;

const Text = styled.div`
  font-size: 20px;
  cursor: pointer;
  border-bottom: 1px solid #e9ecef;
`;

const BoardLink = styled(Link)`
  text-decoration: none;
  color: #495057;
  &:hover {
    color: #38d9a9;
  }
`;

function BoardItem({ data }) {
  return (
    <BoardItemBlock>
      <Text>
        <BoardLink to={`/${data.id}`}>{data.title}</BoardLink>
      </Text>
    </BoardItemBlock>
  );
}

export default BoardItem;
