import React, {useEffect, useState} from 'react'

export default function ({ setisOpen}) {
    
    const [click, setclick] = useState(false)
    
    useEffect(() => {
        if (click) {
            setTimeout(() => {
              setisOpen(true);
            }, 750);
        }
    }, [click])
    
  return (
    <div className={`relative ${click ? 'animate-moveToTop z-[-999]' : 'z-[999'}`}>
        <img src="./assets/opening-2.svg" alt="opening" className='absolute w-full h-screen object-cover pointer-events-none z-0' />
        {/* <div className='absolute z-[1]'>
            p
        </div> */}
        <div id="c-text" className="h-screen relative flex flex-col justify-center items-center text-center z-[2]">
            <h2 className='relative text-white text-5xl md:text-9xl font-[Alice] px-12 pb-5 rounded-full'>Yenny & Rio</h2>
            <p className='text-2xl md:text-5xl text-white font-[Alegreya] mb-8'>Kepada Bapak/Ibu/Saudara/i</p>
            <p className='text-3xl md:text-7xl text-white font-[Alegreya] mb-8'>User1</p>
            <p className='text-xl md:text-3xl text-white font-[Alegreya] mb-8'>Kami mengundang Anda untuk menghadiri acara pernikahan kami.</p>
            <button onClick={() => setclick(true)} className='bg-[#272726] text-white font-[Alegreya] text-2xl px-4 py-2 rounded-full'>Buka Undangan</button>
        </div>
    </div>
  )
}
