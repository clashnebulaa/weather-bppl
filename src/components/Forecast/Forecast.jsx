import { useContext } from "react";
import { ForecastContext } from "../../context/ForecastContext";
import Calendar from "../Layout/Icons/Calendar";
import css from '../../style/app.module.css'
import ForecastItem from "../Cards/ForecastItem";



const Forecast = () => {

  const { forecastData } = useContext(ForecastContext)
  return ( 
    <>
      <div className={`${css.card} rounded-lg flex py-[1.25rem] px-[1rem] flex-col gap-4 w-11/12 mx-auto`}>
        <div className="w-full flex items-center gap-2">
          <Calendar /> 
          <h1 className={`${css.interfont} text-[1.5rem] font-bold`}>8-Day Forecast</h1>
        </div>
        { forecastData &&
          forecastData.map((item) => 
            <ForecastItem key={item.dt} data={item}/>
          )
        }
      </div>
    </>
   );
}
 
export default Forecast;