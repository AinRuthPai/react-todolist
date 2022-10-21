import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  width: 32rem;
  height: 48rem;

  background: #393f47;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(255, 255, 255, 0.5);

  position: relative;

  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1200px) {
    margin-bottom: 5rem;
  }
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
