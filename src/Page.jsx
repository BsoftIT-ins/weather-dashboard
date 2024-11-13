import { useContext, useState, useEffect } from "react";
import Header from "./assets/components/header/Header";
import WeatherBoard from "./assets/components/weather/WeatherBoard";
import { WeatherContext } from "./context";

// Import background images
import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import ScatteredCloudsImage from "./assets/backgrounds/scattered-clouds.jpg";
import ShowerRainImage from "./assets/backgrounds/shower-rain.jpg";
import SnowImage from "./assets/backgrounds/snow.jpg";
import SunnyImage from "./assets/backgrounds/sunny.jpg";
import ThunderStormImage from "./assets/backgrounds/thunderstorm.jpg";
import WinterImage from "./assets/backgrounds/winter.jpg";

function Page() {
  const { weatherData, loading } = useContext(WeatherContext);
  const [climateImage, setClimateImage] = useState("");

  // Function to get the background image based on the climate
  function getBackgroundImage(climate) {
    switch (climate) {
      case "Clear Sky":
        return ClearSkyImage;
      case "Haze":
        return FewCloudsImage;
      case "Mist":
        return MistImage;
      case "Rainy Day":
        return RainyDayImage;
      case "Scattered Clouds":
        return ScatteredCloudsImage;
      case "Shower Rain":
        return ShowerRainImage;
      case "Snow":
        return SnowImage;
      case "Sunny":
        return SunnyImage;
      case "Thunder":
        return ThunderStormImage;
      case "Fog":
        return WinterImage;
      default:
        return ClearSkyImage;
    }
  }

  // Set background image whenever the climate changes
  useEffect(() => {
    if (weatherData && weatherData.climate) {
      const bgImage = getBackgroundImage(weatherData.climate);
      setClimateImage(bgImage);
    }
  }, [weatherData.climate]);

  return (
    <>
      {loading.state ? (
        <div className=" flex bg-grey-200 rounded-md w-96 mt-14 p-8 mx-auto">
          <p className="text-center text-3xl text-black">{loading.message}</p>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url('${climateImage}')` }}
          className="grid place-items-center h-screen bg-no-repeat bg-cover"
        >
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
}

export default Page;
