import styled from "styled-components";

const WeatherTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  position: absolute;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 70rem;

  margin-top: 70px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
`;

function WeatherTemplate({ children }) {
  return <WeatherTemplateBlock>{children}</WeatherTemplateBlock>;
}

export default WeatherTemplate;
