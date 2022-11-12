import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Ayat() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='w-full mt-20 md:mt-40'>
        <div className="flex flex-col justify-center items-center w-[90%] md:w-full mx-[5%] md:mx-0 bg-frameFlower bg-no-repeat bg-cover bg-[55%] md:bg-[100%] text-center py-16 md:py-28 text-[#282828] rounded-2xl md:rounded-none border-8 border-[#98B66E] md:border-none">

            <p className='w-[80%] md:w-[50%] text-3xl md:text-4xl font-[Alegreya] mb-4' data-aos="fade-up">
            “Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia.”
            </p>
            <p className='text-xl md:text-3xl font-[Alegreya]' data-aos="fade-up">Matius 19:6 TB</p>
        </div>
    </div>
  )
}
