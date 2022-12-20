import React, { useEffect, useState, useContext } from 'react'
import { Context } from '../App';

export default function ({ setisOpen, nama, audio }) {

  const [click, setclick] = useState(false)
  const { setIsAudio } = useContext(Context);

  useEffect(() => {
    if (click) {
      setTimeout(() => {
        setisOpen(true);
        setIsAudio(true);
      }, 750);
    }
  }, [click])

  return (
    <div className={`h-[100vh] max-h-[100vh] w-full fixed overflow-hidden ${click ? 'animate-moveToTop z-[-999]' : 'z-[999'} md:overflow-hidden bg-white`}>
      <img src="./assets/opening.webp" alt="opening" className='absolute w-full md:w-[75%] h-screen object-cover pointer-events-none z-0 md:mt-[50vh] md:mx-[12.5%]' />
      {/* <div className='absolute z-[1]'>
            p
        </div> */}
      <div id="c-text" className="h-[90vh] max-h-[90vh] relative flex flex-col items-center text-center z-[2]">
        <div className='h-[45vh] pt-14'>
          <p className='text-base md:text-2xl text-primary font-[Cinzel] mb-4'>WEDDING INVITATION</p>
          <h2 className='relative text-primary text-4xl md:text-5xl font-[Cinzel] font-bold px-12 pb-5 rounded-full'>Rio & Yenny</h2>
          <p className='text-xl md:text-3xl text-primary font-[Lora] mb-8 mx-4'>#ourstoRY</p>
          {/* <p className='text-xl md:text-3xl text-primary font-[Alegreya] mb-8 mx-4'>with great joy, we are pleased to cordially invite you to celebrate the mariage of</p> */}
        </div>

        <div className='h-[35vh] md:h-[15vh] flex flex-col justify-end px-4'>
          <p className='text-lg md:text-3xl text-primary  font-[Cinzel] mb-4'>DEAR, <br />
            <span className='text-2xl font-bold'>
              {nama}
            </span>
          </p>
          <button onClick={() => { setclick(true); audio.play(); }} className='flex items-center bg-[#272726] text-white font-[Cinzel] text-lg px-4 py-2 mb-0 rounded-full'>
            {/* <img className='w-4 h-4 mr-2' src="./assets/undangan.svg" alt="" /> */}
            OPEN INVITATION
          </button>
        </div>
      </div>
    </div>
  )
}
