import styled from "styled-components";

const MainHeaderBlock = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  h1 {
    font-size: 28px;
  }
  div {
    font-size: 19px;
  }
`;

function MainHeader() {
  return (
    <MainHeaderBlock>
      <h1>To Do List</h1>
    </MainHeaderBlock>
  );
}

export default MainHeader;
