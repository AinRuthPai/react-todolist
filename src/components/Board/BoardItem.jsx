import styled from "styled-components";
import { Link } from "react-router-dom";

const BoardItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const Text = styled.div`
  flex: 1;
  margin-top: 0.5rem;
  font-size: 21px;
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
