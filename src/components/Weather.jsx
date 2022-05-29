// dd5237e3e7a45113f1c351c16d291a57
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

import styled from "styled-components";
import { useEffect, useState } from "react";

const WeatherBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
`;

function Weather() {
  const [data, setData] = useState({});

  const api = {
    key: "dd5237e3e7a45113f1c351c16d291a57",
    base: "https://api.openweathermap.org/data/2.5/",
    city: "seoul",
  };

  useEffect(() => {
    fetch(`${api.base}weather?q=${api.city}&appid=${api.key}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData({
          id: data.weather[0].id,
          currentTemp: data.main.temp,
          city: data.name,
          maxTemp: data.main.temp_max,
          minTemp: data.main.temp_min,
          main: data.weather[0].main,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const changeTemp = data.currentTemp - (273.15).toFixed(2);
  const changeMaxTemp = data.maxTemp - (273.15).toFixed(2);
  const changeMinTemp = data.minTemp - (273.15).toFixed(2);

  return (
    <>
      <WeatherBlock>
        <h1>현재 날씨</h1>
        {/* {data && ( */}
        <div>
          <h2>도시 : {data.city}</h2>
          <h3>날씨 : {data.main}</h3>
          <div>현재 온도 : {changeTemp}</div>
          <div>최고 온도 : {changeMaxTemp}</div>
          <div>최저 온도 : {changeMinTemp}</div>
        </div>
        {/* )} */}
      </WeatherBlock>
    </>
  );
}

export default Weather;
