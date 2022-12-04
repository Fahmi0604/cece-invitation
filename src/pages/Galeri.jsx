import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Galeri() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='relative w-full mt-0 md:mt-40 '>
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between w-[90%] mx-[5%] md:w-[90%] md:mx-[5%] text-center py-16 md:py-28 text-[#f5f5f5] rounded-2xl md:rounded-none md:rounded-br-2xl md:rounded-tr-2xl">
        <img src="./assets/foto2.svg" alt="" className='w-full md:w-[30%] mb-4 rounded' data-aos="zoom-in" />
        <img src="./assets/foto1.svg" alt="" className='w-full md:w-[30%] mb-4 rounded' data-aos="zoom-in" />
        <img src="./assets/foto3.svg" alt="" className='w-full md:w-[30%] mb-4 rounded' data-aos="zoom-in" />
      </div>
    </div>
  )
}
