import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Pembukaan() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className='flex justify-between overflow-hidden py-7'>
        <img src="./assets/flower-left.svg" alt="" className='w-[40%] lg:h-[80vh] -ml-[10%] invisible animate-rotatee delay-500' />
        <img src="./assets/flower-right2.svg" alt="" className='w-[40%] lg:h-[80vh] -mr-[15%] animate-rotatee delay-1000' />
      </div>
      <div className='w-full -mt-24'>
        <div className=" w-[90%] md:w-full mx-[5%] md:mx-0 text-center py-4 text-white rounded-2xl md:rounded-none">
          <h2 className='text-3xl md:text-5xl font-[Cinzel] mb-14'>Groom & Bride</h2>

          <div className='flex flex-col md:flex-row md:mt-20'>

            <div className='flex flex-col items-center mb-14 md:w-1/2' data-aos="zoom-in">
              <img src="./assets/groom.png" alt="groom" className='w-48 h-48 mb-8' />
              <p className='text-2xl md:text-4xl font-[Cinzel] mb-4'>Robertus Romario <br /> Harvey Kurniawan</p>
              <p className='text-xl md:text-2xl source-sans-pro'>Putra dari <br /> Bapak Rudy H. Kurniawan <br /> dan <br />Ibu Sri Susanti Indri Purwati</p>
            </div>
            {/* <p className='text-5xl font-[Cinzel] mb-4'>&</p> */}

            <div className='flex flex-col items-center md:w-1/2' data-aos="zoom-in">
              <img src="./assets/bride.png" alt="bride" className='w-48 h-48 mb-8' />
              <p className='text-2xl md:text-4xl font-[Cinzel] mb-4'>Yenny Chandrawati <br /> Salim</p>
              <p className='text-xl md:text-2xl source-sans-pro'>Putri dari <br />Bapak Pendi Salim <br /> dan <br />Ibu Indrajayani Soetrisno</p>
            </div>
          </div>

          {/* <h4 className='text-2xl mt-8 md:text-2xl font-[Cinzel]'>#ourstoRY</h4> */}
        </div>
        <div className='flex justify-between overflow-hidden py-7 -mt-14'>
          <img src="./assets/flower-left.svg" alt="" className='w-[40%] lg:h-[80vh] -ml-[10%] animate-rotatee delay-500' />
          {/* <img src="./assets/flower-right2.svg" alt="" className='w-[40%] lg:h-[80vh] -mr-[15%] animate-rotatee delay-1000' /> */}
        </div>
      </div>
    </>
  )
}
