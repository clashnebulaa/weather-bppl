import css from '../../style/app.module.css'


const SliderCard = ({title, wind, icon}) => {

  function kilometersSpeed(speedms) {
    const kilometersSpeed = speedms * 3.6;
    return kilometersSpeed.toFixed(2);
  }


  return ( 
    <>
      <div className={`rounded-lg ${css.sliderCard} px-4 py-5  `}>
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
              <p className='text-[1.125rem] font-bold text-[#514F4F]'>Degrees</p>
              <p className='text-[2rem] font-normal'>{wind.deg}°</p>
            </div>
          </div>
        </>
        }
      </div>
    </>
   );
}
 
export default SliderCard;