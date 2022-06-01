import styled from "styled-components";

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
  color: #495057;
  cursor: pointer;
  border-bottom: 1px solid #e9ecef;
  &:hover {
    color: #38d9a9;
  }
`;

function BoardItem({ data }) {
  return (
    <BoardItemBlock>
      <Text>
        {data.id} {data.title}
      </Text>
    </BoardItemBlock>
  );
}

export default BoardItem;
