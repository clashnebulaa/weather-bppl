import css from '../style/app.module.css'


const WindCard = ({title, wind, humidity, precipitation, clouds, visibility, pressure, icon}) => {

  function kilometersSpeed(speedms) {
    const kilometersSpeed = speedms * 3.6;
    return kilometersSpeed.toFixed(2);
  }

  function metersToKm(meters){
    return (meters/1000)
  }

  return ( 
    <>
      <div className={`rounded-lg ${css.card} px-4 py-5  `}>
        { wind && 
        <>
        <div className="flex items-center gap-2">
          {icon}
          <p className={`${css.interfont} text-[1.5rem] font-bold `}>{title}</p>
        </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <p className='text-[1.125rem] font-bold text-[#514F4F]'>Speed</p>
              <p className='text-[2rem] font-normal'>{kilometersSpeed(wind.speed)} Km/h</p>
            </div>
            <div>
              <p className='text-[1.125rem] font-bold text-[#514F4F]'>Gust</p>
              <p className='text-[2rem] font-normal'>{kilometersSpeed(wind.gust)} Km/h</p>
            </div>
            <div>
              <p className='text-[1.125rem] font-bold text-[#514F4F]'>Degrees</p>
              <p className='text-[2rem] font-normal'>{wind.deg}°</p>
            </div>
          </div>
        </>
        }
        { humidity && 
        <>
        <div className="flex items-center gap-2">
          {icon}
          <p className={`${css.interfont} text-[1.5rem] font-bold `}>{title}</p>
        </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <p className='text-[2rem] font-normal'>{humidity}%</p>
            </div>
          </div>
        </>
        }
        { precipitation &&
        <>
        <div className="flex items-center gap-2">
          {icon}
          <p className={`${css.interfont} text-[1.5rem] font-bold `}>{title}</p>
        </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <p className='text-[1.125rem] font-bold text-[#514F4F]'>Last Hour</p>
              <p className='text-[2rem] font-normal'></p>
            </div>
            <div>
              <p className='text-[1.125rem] font-bold text-[#514F4F]'>Last 3 Hours</p>
              <p className='text-[2rem] font-normal'></p>
            </div>
          </div>
        </>
        }
        { clouds &&
        <>
        <div className="flex items-center gap-2">
          {icon}
          <p className={`${css.interfont} text-[1.5rem] font-bold `}>{title}</p>
        </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <p className='text-[2rem] font-normal'>{clouds.all}%</p>
            </div>
          </div>
        </>
        }
        { visibility &&
        <>
        <div className="flex items-center gap-2">
          {icon}
          <p className={`${css.interfont} text-[1.5rem] font-bold `}>{title}</p>
        </div>
          <p className='text-[2rem] font-normal'>{metersToKm(visibility)} Km</p>
        </>
        }
        { pressure &&
        <>
        <div className="flex items-center gap-2">
          {icon}
          <p className={`${css.interfont} text-[1.5rem] font-bold `}>{title}</p>
        </div>
          <p className='text-[2rem] font-normal'>{pressure}hPa</p>
        </>
        }
      </div>
    </>
   );
}
 
export default WindCard;