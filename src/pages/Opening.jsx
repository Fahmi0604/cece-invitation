import React, {useEffect, useState} from 'react'

export default function ({ setisOpen, nama}) {
    
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
        <img src="./assets/opening.jpg" alt="opening" className='absolute w-full h-screen object-cover pointer-events-none z-0' />
        {/* <div className='absolute z-[1]'>
            p
        </div> */}
        <div id="c-text" className="h-screen relative flex flex-col items-center text-center z-[2] py-6">
            <div className='h-[50vh]'>
              <p className='text-2xl md:text-5xl text-primary font-[Cinzel] mb-4'>WEDDING INVITATION</p>
              <p className='text-2xl md:text-7xl text-primary font-[Cinzel] mb-4'>DEAR <br />{nama}</p>
              <p className='text-xl md:text-3xl text-primary font-[Alegreya] mb-8 mx-4'>with great joy, we are pleased to cordially invite you to celebrate the mariage of</p>
            </div>
            
            <div className='h-[50vh] flex flex-col justify-end px-4'>
              <h2 className='relative text-primary text-2xl md:text-5xl font-[Cinzel] font-bold px-12 pb-5 rounded-full'>Rio & Yenny</h2>
              <button onClick={() => setclick(true)} className='bg-[#272726] text-white font-[Cinzel] text-2xl px-4 py-2 mt-2 mb-14 rounded-full'>OPEN INVITATION</button>
            </div>
        </div>
    </div>
  )
}
