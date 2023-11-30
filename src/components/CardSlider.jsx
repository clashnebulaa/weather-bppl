import { useContext } from 'react';
import css from '../style/app.module.css'
import { MexicoCitiesContext } from '../context/GroupWeatherContext';
import { WeatherContext } from '../context/WeatherContext';



const CardSlider = () => {
  const {groupData} = useContext(MexicoCitiesContext)
  const { setDynamicRoute } = useContext(WeatherContext)

  const handleSetCity = async (name) => {
    setDynamicRoute(`https://api.openweathermap.org/data/2.5/weather?q=${name}`);
  
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

    return ( 
    <>
    {
      groupData &&
      <div className={`${css.sliderBg} overflow-x-scroll`}>
        <div className='flex gap-3 items-center relative w-[200%]'>
          {groupData.list.map((city) => 
          <div key={city.id} className='h-auto px-4 py-4'>
            <div className={`${css.sliderCard} py-3 px-4 flex gap-3 min-w-[18rem] rounded-lg items-center cursor-pointer`} onClick={() => handleSetCity(city.name)}>
              <div>
                <div>
                  <p className={`${css.interfont} text-[1.25rem] font-bold whitespace-nowrap`}>
                    {city.name}
                  </p>
                </div>
                <div>{city.weather[0].main}</div>
              </div>
              <div style={{ flex: "0 1 auto", width: "4.5rem" }}> {/* Agregado estilo para evitar el cambio de tamaño */}
                <img
                  id="wicon"
                  src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
                  alt="Weather icon"
                  style={{ width: "2.5rem", height: "2.5rem" }} // Establecer el ancho y alto deseado
                />
              </div>
              <div>
                <div className="flex flex-col">
                  <div className="flex gap-[1.5rem]">
                    <div className='flex items-center'>
                      <p className="text-[2rem] font-bold">{city.main.temp}°</p>
                    </div>
                    <div className="items-center flex flex-row">
                      <div className="flex gap-x-2 gap-0 flex-wrap">
                        <div className="">
                          <p className={`text-[.75rem] font-light ${css.interfont} w-max`}>H: {city.main.temp_max}°</p>
                        </div>
                        <div>
                          <p className={`text-[.75rem] font-light ${css.interfont} w-max`}>L: {city.main.temp_min}°</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          )}
        </div>
      </div>
    }
    </> 
  );
}
 
export default CardSlider;