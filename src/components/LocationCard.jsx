import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import WindCard from "./WindCard";
import css from '../style/app.module.css'
import Forecast from "./Forecast/Forecast";
import Wind from "./Layout/Icons/Wind";
import Humidity from "./Layout/Icons/Humidity";
import Precipitation from "./Layout/Icons/Precipitation";
import Cloudiness from "./Layout/Icons/Cloudiness";
import Visibility from "./Layout/Icons/Visibility";
import Pressure from "./Layout/Icons/Pressure";
import clear_sky from '../assets/clear_sky.jpeg'
import few_clouds from '../assets/few_clouds.jpeg'
import mist from '../assets/mist.jpeg'
import rain from '../assets/rain.jpeg'
import shower_rain from '../assets/shower_rain.jpeg'
import snow from '../assets/snow.jpeg'
import thunderstorm from '../assets/thunderstorm.jpeg'



const LocationCard = () => {
  const { weatherData } = useContext(WeatherContext);
  console.log(weatherData)

  const setBgImg = (iconCode) => {
    switch (true) {
      case iconCode.includes('01'):
        return clear_sky;
      case iconCode.includes('02'):
        return few_clouds;
      case iconCode.includes('03'):
        return few_clouds;
      case iconCode.includes('04'):
        return few_clouds;
      case iconCode.includes('09'):
        return shower_rain;
      case iconCode.includes('10'):
        return rain;
      case iconCode.includes('11'):
        return thunderstorm;
      case iconCode.includes('13'):
        return snow;
      case iconCode.includes('50'):
        return mist;
      default:
        return '';
    }
  };
  

  return weatherData ? (
    <>
      <div className={`${css.blur} w-full h-screen fixed top-0 left-0 z-20`}></div>
      <div className={`fixed w-full h-screen top-0 left-0 z-10`}
      style={{
        backgroundImage: `url(${setBgImg(weatherData.weather[0].icon)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>

      </div>
      <div className="p-2 flex flex-col gap-[1.19rem] relative z-30">
        <div className="flex flex-col w-full h-auto">
          <div className="flex gap-4 items-center">
            <div id="icon">
              <img
                id="wicon"
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt="Weather icon"
              />
            </div>
            <div>
              <p className="text-[1.125rem] font-bold">{`${weatherData.weather[0].main}`}
                <br />
              </p>
              
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className={`${css.interfont} text-[3rem] font-bold text-[#2C2C2C]`}>{weatherData.name}</h1>
            <div className="flex gap-[1.5rem]">
              <div>
                <p className="text-[3.5rem] font-bold">{weatherData.main.temp}°</p>
              </div>
              <div className="items-center flex flex-row">
                <div className="flex gap-x-2 gap-y-[.75rem] flex-wrap">
                  <div className="">
                    <p className={`text-[1.25rem] font-bold ${css.interfont} w-max`}>H: {weatherData.main.temp_max}°</p>
                  </div>
                  <div>
                  <p className={`text-[1.25rem] font-bold ${css.interfont} w-max`}>L: {weatherData.main.temp_min}°</p>
                  </div>
                  <div>
                    <p className={`text-[1rem] font-bold ${css.interfont} w-max`}>Feels like: {weatherData.main.feels_like}°</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[1.25rem]">
          <div className="col-span-3">
            <WindCard icon={<Wind />} title={'Wind'} wind={weatherData.wind}/>
          </div>
          <div className="col-span-3">
            <WindCard icon={<Humidity />} title={'Humidity'} humidity={weatherData.main.humidity}/>
          </div>
          { weatherData.precipitation &&
            <div className="col-span-3">
              <WindCard icon={<Precipitation />} title={'Precipitation'} precipitation={weatherData.precipitation ? weatherData.precipitation : null}/>
            </div>
          }
          { weatherData.clouds &&
            <div className="col-span-3">
              <WindCard icon={<Cloudiness />} title={'Cloudiness'} clouds={weatherData.clouds ? weatherData.clouds : null}/>
            </div>
          }
          <div className="col-span-3">
            <div className="grid grid-cols-2 gap-4">
              { weatherData.visibility &&
                <div className="col-span-1">
                  <WindCard icon={<Visibility />} title={'Visibility'} visibility={weatherData.visibility ? weatherData.visibility : null}/>
                </div>
              }
              { weatherData.main.pressure &&
                <div className="col-span-1">
                  <WindCard icon={<Pressure />} title={'Pressure'} pressure={weatherData.main.pressure ? weatherData.main.pressure : null}/>
                </div>
              }
            </div>
          </div>
        </div>
        <div>
          <Forecast />
        </div>
      </div>
    </>
  ) : null;
};

export default LocationCard;
