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
    <div className={`h-screen relative ${click ? 'animate-moveToTop z-[-999]' : 'z-[999'} md:overflow-hidden bg-white`}>
        <img src="/assets/opening.webp" alt="opening" className='absolute w-full md:w-[75%] h-screen object-cover pointer-events-none z-0 md:mt-[50vh] md:mx-[12.5%]' />
        {/* <div className='absolute z-[1]'>
            p
        </div> */}
        <div id="c-text" className="h-screen relative flex flex-col items-center text-center z-[2] py-6">
            <div className='h-[50vh]'>
              <p className='text-2xl md:text-5xl text-primary font-[Cinzel] mb-4'>WEDDING INVITATION</p>
              <p className='text-2xl md:text-5xl text-primary font-[Cinzel] mb-4'>DEAR <br />{nama}</p>
              <p className='text-xl md:text-3xl text-primary font-[Alegreya] mb-8 mx-4'>with great joy, we are pleased to cordially invite you to celebrate the mariage of</p>
            </div>
            
            <div className='h-[50vh] md:h-[15vh] flex flex-col justify-end px-4'>
              <h2 className='relative text-primary text-2xl md:text-5xl font-[Cinzel] font-bold px-12 pb-5 rounded-full'>Rio & Yenny</h2>
              <button onClick={() => setclick(true)} className='bg-[#272726] text-white font-[Cinzel] text-lg px-4 py-2 mt-2 mb-14 rounded-full'>OPEN INVITATION</button>
            </div>
        </div>
    </div>
  )
}
