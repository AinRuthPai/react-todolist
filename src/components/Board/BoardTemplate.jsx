import styled from "styled-components";

export const BoardTemplateBlock = styled.div`
  width: 65%;
  height: 720px;

  background: white;

  margin: 0 auto;
  overflow-y: auto;

  margin-top: 50px;
  margin-bottom: 70px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function BoardTemplate({ children }) {
  return <BoardTemplateBlock>{children}</BoardTemplateBlock>;
}

export default BoardTemplate;
