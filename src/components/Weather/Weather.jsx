import { TiWeatherCloudy, TiWeatherSunny, TiWeatherShower, TiWeatherStormy, TiWeatherSnow } from "react-icons/ti";
import { BsFillCloudFogFill } from "react-icons/bs";
import { RiMistLine } from "react-icons/ri";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { TemplateBlock } from "../Todo/TodoTemplate";
import { WrapperBlock } from "../MainPage";

const IconsBlock = styled.div`
  margin: 30px;
  font-size: 200px;
`;

function Weather() {
  const [data, setData] = useState({});

  const api = {
    key: process.env.REACT_APP_WEATHER_API_KEY,
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
          currentTemp: (data.main.temp - 273.15).toFixed(1),
          city: data.name,
          maxTemp: (data.main.temp_max - 273.15).toFixed(1),
          minTemp: (data.main.temp_min - 273.15).toFixed(1),
          main: data.weather[0].main,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [api.base, api.city, api.key]);

  return (
    <WrapperBlock>
      <TemplateBlock>
        <h1>
          <IconsBlock>
            {data.main === "Clouds" ? <TiWeatherCloudy /> : null}
            {data.main === "Clear" ? <TiWeatherSunny /> : null}
            {data.main === "Thunderstorm" ? <TiWeatherStormy /> : null}
            {data.main === "Snow" ? <TiWeatherSnow /> : null}
            {data.main === "Rain" ? <TiWeatherShower /> : null}
            {data.main === "Fog" ? <BsFillCloudFogFill /> : null}
            {data.main === "Mist" ? <RiMistLine /> : null}
          </IconsBlock>
        </h1>
        <h2>{`${data.currentTemp} °C`}</h2>
        <h3>{data.main}</h3>
        <h4>{data.city}</h4>
        <p>
          today : {`${data.minTemp} °C`} / {`${data.maxTemp} °C`}
        </p>
      </TemplateBlock>
    </WrapperBlock>
  );
}

export default Weather;
