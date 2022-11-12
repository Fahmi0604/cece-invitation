import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Pembukaan() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='w-full mt-10'>
        {/* <div className=" w-[90%] md:w-full mx-[5%] md:mx-0 bg-frameFlower bg-no-repeat bg-cover bg-[55%] md:bg-[100%] text-center py-24 text-[#282828] rounded-2xl md:rounded-none">
            <h2 className='text-4xl md:text-5xl font-[Alegreya] mb-8'>Pembukaan</h2>

            <p className='text-3xl md:text-4xl font-[Alegreya]'>Yenny Candrawati SalimRobertus Romario</p>
            <p className='text-xl md:text-2xl font-[Alegreya] mb-4'>Putri dari Bapak Pendi Salim dan Ibu Susi</p>
            <p className='text-4xl font-[Alegreya] mb-4'>&</p>
            <p className='text-3xl md:text-4xl font-[Alegreya]'>Robertus Romario</p>
            <p className='text-xl md:text-2xl font-[Alegreya]'>Putra dari Bapak Rudi H.Kurniawan Salim dan Ibu </p>
        </div> */}
        <div className=" w-[90%] md:w-full mx-[5%] md:mx-0 bg-custom-white-md text-center py-4 text-white rounded-2xl md:rounded-none">
            <h2 className='text-4xl md:text-5xl font-[Alice] mb-8'>Groom & Bride</h2>
            
            <p className='text-3xl md:text-4xl font-[Alegreya]'>Robertus Romario Harvey Kurniawan</p>
            <p className='text-xl md:text-2xl font-[Alegreya] mb-4'>Putra dari Rudi Kurniawan Salim dan Susanti</p>
            <p className='text-5xl font-[Alegreya] mb-4'>&</p>
            <p className='text-3xl md:text-4xl font-[Alegreya]'>Yenny Chandrawati Salim</p>
            <p className='text-xl md:text-2xl font-[Alegreya]'>Putri dari Pendi Salim dan Indrajayani Soetrisno</p>
            
            <h4 className='text-2xl mt-8 md:text-2xl font-[Alegreya]'>#ourstoRY</h4>
        </div>
    </div>
  )
}
