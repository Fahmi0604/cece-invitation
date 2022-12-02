import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Ayat() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='relative w-full mt-20 md:mt-40 '>
      <div className="flex flex-col justify-center bg-custom-white-md items-center w-[90%] mx-[5%] md:mx-0 text-center py-16 md:py-28 text-[#f5f5f5] rounded-2xl md:rounded-none md:rounded-br-2xl md:rounded-tr-2xl" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">

        <p className='w-[80%] md:w-[50%] text-2xl md:text-4xl font-[Cinzel] mb-4' data-aos="fade-up">
          “Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia.”
        </p>
        <p className='text-xl md:text-3xl font-[Cinzel]' data-aos="fade-up">Matius 19:6 TB</p>
      </div>
    </div>
  )
}
