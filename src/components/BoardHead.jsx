import styled from "styled-components";

const BoardHeadBlock = styled.div`
  padding-top: 42px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 20px;
  border: 1px solid black;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    margin-bottom: 8px;
    font-size: 36px;
    color: #343a40;
  }
`;

function BoardHead() {
  return (
    <BoardHeadBlock>
      <h1>Title</h1>
    </BoardHeadBlock>
  );
}

export default BoardHead;
