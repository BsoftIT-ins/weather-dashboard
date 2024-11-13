import { useContext } from 'react'
import { WeatherContext } from '../../../context'

import TempMaxImg from '../../icons/temp-max.svg'
import TempMinImg from '../../icons/temp-min.svg'
import HumidityImg from '../../icons/humidity.svg'
import CloudImg from '../../icons/cloud.svg'
import WindImg from '../../icons/wind.svg'

export default function WeatherCondition() {
  const { weatherData } = useContext(WeatherContext);
  const {
    maxTemperature,
    minTemperature,
    humidity,
    cloudPercentage,
    wind,
    climate,
  } = weatherData;
  return (
    <>
    <div>
    <p className="text-sm lg:text-lg font-bold uppercase mb-8">The Climate is <u>{climate}</u></p>
    <ul className="space-y-6 lg:space-y-6">
      <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
        <span>Temp max</span>
        <div className="inline-flex space-x-4">
          <p>{Math.round(maxTemperature)}°</p>
          <img src={TempMaxImg} alt="temp-max" />
        </div>
      </li>
      <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
        <span>Temp min</span>
        <div className="inline-flex space-x-4">
          <p>{Math.round(minTemperature)}°</p>
          <img src={TempMinImg} alt="temp-min" />
        </div>
      </li>
      <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
        <span>Humadity</span>
        <div className="inline-flex space-x-4">
          <p>{humidity}%</p>
          <img src={HumidityImg} alt="humidity" />
        </div>
      </li>
      <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
        <span>Cloudy</span>
        <div className="inline-flex space-x-4">
          <p>{cloudPercentage}%</p>
          <img src={CloudImg} alt="cloudy" />
        </div>
      </li>
      <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
        <span>Wind</span>
        <div className="inline-flex space-x-4">
          <p>{wind}/h</p>
          <img src={WindImg} alt="wind" />
        </div>
      </li>
    </ul>
  </div>
    </>
  )
}
