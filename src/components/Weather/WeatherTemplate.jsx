import styled from "styled-components";
import { WrapperBlock } from "../MainPage";

const WeatherTemplateBlock = styled.div`
  width: 32rem;
  height: 48rem;

  background: #393f47;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(255, 255, 255, 0.5);
`;

function WeatherTemplate({ children }) {
  return (
    <WrapperBlock>
      <WeatherTemplateBlock>{children}</WeatherTemplateBlock>
    </WrapperBlock>
  );
}

export default WeatherTemplate;
