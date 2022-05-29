// dd5237e3e7a45113f1c351c16d291a57
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

import { TiWeatherCloudy, TiWeatherSunny, TiWeatherShower, TiWeatherStormy, TiWeatherSnow } from "react-icons/ti";
import styled from "styled-components";
import { useEffect, useState } from "react";

const WeatherBlock = styled.div`
  padding: 20px 32px;
  padding-bottom: 48px;
  text-align: center;

  h2 {
    margin: 2rem 0;
    font-size: 3rem;
  }
  h3 {
    margin: 2rem 0;
    font-size: 2rem;
  }
  p {
    margin: 1rem 0;
    font-size: 1.7rem;
  }
`;

const IconsBlock = styled.div`
  display: inline-block;
  font-size: 10rem;
  border-radius: 50%;
  padding: 0 1.7rem;
  padding-top: 0.5rem;
  box-shadow: 4px 4px 8px 0 #ff8787;
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
          //   id: data.weather[0].id,
          currentTemp: (data.main.temp - 273.15).toFixed(1),
          city: data.name,
          maxTemp: (data.main.temp_max - 273.15).toFixed(1),
          minTemp: (data.main.temp_min - 273.15).toFixed(1),
          main: data.weather[0].main,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <WeatherBlock>
        <>
          <h1>
            <IconsBlock>
              {data.main === "Clouds" ? <TiWeatherCloudy /> : null}
              {data.main === "Clear" ? <TiWeatherSunny /> : null}
              {data.main === "Thunderstorm" ? <TiWeatherStormy /> : null}
              {data.main === "Snow" ? <TiWeatherSnow /> : null}
              {data.main === "Rain" ? <TiWeatherShower /> : null}
            </IconsBlock>
          </h1>
          <h2>{`${data.currentTemp} °C`}</h2>
          <h3>{data.main}</h3>
          <h3>{data.city}</h3>
          <p>
            today : {`${data.minTemp} °C`} / {`${data.maxTemp} °C`}
          </p>
        </>
      </WeatherBlock>
    </>
  );
}

export default Weather;
