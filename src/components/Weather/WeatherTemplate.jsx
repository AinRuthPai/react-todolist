import styled from "styled-components";

const WeatherTemplateBlock = styled.div`
  width: 32rem;
  height: 48rem;

  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;

function WeatherTemplate({ children }) {
  return <WeatherTemplateBlock>{children}</WeatherTemplateBlock>;
}

export default WeatherTemplate;
