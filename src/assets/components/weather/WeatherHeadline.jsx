
import SnowIcon from "../../icons/snow.svg";
import SunnyIcon from "../../icons/sunny.svg";
import HazeIcon from "../../haze.svg";
import CloudIcon from "../../cloud.svg";
import RainyIcon from "../../rainy.svg";
import ThunderIcon from "../../thunder.svg";
import PinImg from "../../pin.svg";
import { useContext } from "react";
import { WeatherContext } from "../../../context";
import { getFormatDate } from "../../../utils/date-util";

export default function WeatherHeadline() {
  const { weatherData } = useContext(WeatherContext);
  const { climate, location, temperature, time} = weatherData;

  function getWeatherIcon(){
    switch (climate) {
      case "Rain":
        return RainyIcon;
      case "Clouds":
        return CloudIcon;
      case "Clear":
        return SunnyIcon;
      case "Snow":
        return SnowIcon;
      case "Thunder":
        return ThunderIcon;
      case "Fog":
        return HazeIcon;
      case "Haze":
        return HazeIcon;
      case "Mist":
        return HazeIcon;
      default:
        return SunnyIcon;
    }
  }
  return (
    <>
      <div>
        <div className="max-md:flex items-center justify-between md:-mt-10">
          <img src={getWeatherIcon(climate)} alt="Climate" />
          <div className="max-md:flex items-center max-md:space-x-4">
            <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
              {Math.round(temperature)}°
            </h1>
            <div className="flex items-center space-x-4 md:mb-4">
              <img src={PinImg} />
              <h2 className="text-2xl lg:text-[50px]">{location}</h2>
            </div>
          </div>
        </div>
        <p className="text-sm lg:text-lg">{getFormatDate(time, "time", false)} - {getFormatDate(time, "date", false)}</p>
      </div>
    </>
  );
}
