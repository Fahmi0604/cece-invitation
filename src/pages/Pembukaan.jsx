import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Pembukaan() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='w-full mt-10'>
      <div className=" w-[90%] md:w-full mx-[5%] md:mx-0 text-center py-4 text-white rounded-2xl md:rounded-none">
        <h2 className='text-3xl md:text-5xl font-[Cinzel] mb-14'>Groom & Bride</h2>

        <div className='flex flex-col md:flex-row md:mt-20'>

          <div className='flex flex-col items-center mb-14 md:w-1/2' data-aos="zoom-in">
            <img src="./assets/groom.svg" alt="groom" className='mb-8' />
            <p className='text-3xl md:text-4xl font-[Cinzel] mb-4'>Robertus Romario Harvey Kurniawan</p>
            <p className='text-xl md:text-2xl font-[Cinzel]'>Putra dari <br /> Rudy H. Kurniawan <br /> dan <br /> Sri Susanti Indri Purwati</p>
          </div>
          {/* <p className='text-5xl font-[Cinzel] mb-4'>&</p> */}

          <div className='flex flex-col items-center md:w-1/2' data-aos="zoom-in">
            <img src="./assets/bride.svg" alt="bride" className='mb-8' />
            <p className='text-3xl md:text-4xl font-[Cinzel] mb-4'>Yenny Chandrawati Salim</p>
            <p className='text-xl md:text-2xl font-[Cinzel]'>Putri dari <br /> Pendi Salim <br /> dan <br /> Indrajayani Soetrisno</p>
          </div>
        </div>

        {/* <h4 className='text-2xl mt-8 md:text-2xl font-[Cinzel]'>#ourstoRY</h4> */}
      </div>
    </div>
  )
}
