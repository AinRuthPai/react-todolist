import styled from "styled-components";

export const BoardTemplateBlock = styled.div`
  width: 90%;
  height: 40rem;

  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

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
