import styled from "styled-components";

export const BoardTemplateBlock = styled.div`
  width: 92rem;
  height: 60rem;

  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;

  margin-top: 70px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function BoardTemplate({ children }) {
  return <BoardTemplateBlock>{children}</BoardTemplateBlock>;
}

export default BoardTemplate;
