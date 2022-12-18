import styled from "styled-components";

export const BoardTemplateBlock = styled.div`
  width: 60%;
  height: 700px;

  background: white;

  margin: 0 auto;
  overflow-y: auto;

  margin-top: 30px;
  margin-bottom: 20px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function BoardTemplate({ children }) {
  return <BoardTemplateBlock>{children}</BoardTemplateBlock>;
}

export default BoardTemplate;
