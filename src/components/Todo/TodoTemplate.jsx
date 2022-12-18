import styled from "styled-components";

export const TemplateBlock = styled.div`
  width: 35%;
  height: 700px;

  background: white;
  margin-bottom: 40px;
  position: relative;

  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function TodoTemplate({ children }) {
  return <TemplateBlock>{children}</TemplateBlock>;
}

export default TodoTemplate;
