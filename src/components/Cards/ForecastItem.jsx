import css from '../../style/app.module.css'

const ForecastItem = ({data}) => {

  function castTimestampToDayName(timestamp) {
    const date = new Date(timestamp * 1000);
    const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
    return dayName.toLowerCase();
  }

  return ( 
    <>
      <div className="flex gap-3">
        <div className="flex items-center">
          <img 
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
          alt="Icon"/>
        </div>
        <div className="flex items-center w-full">
          <div className="flex flex-col w-full">
            <p className="text-[1.25rem] font-bold">
              {castTimestampToDayName(data.dt)}
            </p>
            <div className="grid grid-cols-2">
              <p>
                {data.weather[0].main}
              </p>
              <div className="flex gap-4">
                <p className={`${css.interfont} text-[#514F4F] text-[.75rem]`}>H:{data.temp.max}°</p>
                <p className={`${css.interfont} text-[#514F4F] text-[.75rem]`}>L:{data.temp.min}°</p>

              </div>
            
            </div>
          </div>
        </div>
      </div>
    </>
   );
}
 
export default ForecastItem;