import React, { lazy, useEffect, useRef, useState } from 'react'
import Gift from './Gift'

const Pembukaan = lazy(() => import('./Pembukaan'))
const Ayat = lazy(() => import('./Ayat'))
const RangkaianAcara = lazy(() => import('./RangkaianAcara'))
const Ucapan = lazy(() => import('./Ucapan'))
const Rsvp = lazy(() => import('./Rsvp'))
const Protokol = lazy(() => import('./Protokol'))
const Footer = lazy(() => import('./Footer'))

export default function Main() {

    const bg1 = useRef(0);
    const bg2 = useRef(0);
    // const text = useRef(0);
    const myAudio = useRef(null);

    const [isPlayingAudio, setisPlayingAudio] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            bg1.current.style.top = -currentScrollY * 0.15 + 'px';
            bg2.current.style.top = currentScrollY * 0.25 + 'px';
            // text.current.style.top = currentScrollY * 0.25 + 'px';
            
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (myAudio.current) {
            // myAudio.current.play();
            console.log('render');
        }
    }, [])
    

    const handleAudio = () => {
        if (myAudio && isPlayingAudio) {
            myAudio.current.pause();
            setisPlayingAudio(false)
        } else {
            myAudio.current.play();
            setisPlayingAudio(true)
        }
    }

    return (
        <div className='min-h-[2500px]'>
            <div className='fixed w-full top-0 flex justify-center z-[5] pt-4'>
                <audio ref={myAudio} src="./assets/backsound.mp3" loop />
                <button onClick={() => handleAudio()} className="w-auto bg-transparent text-white border-none cursor-pointer">
                    { isPlayingAudio ? (<svg id="btn-pause" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>) :
                    (<svg id="btn-play" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                    </svg>)}
                </button>
            </div>
            <section className='relative w-full h-[130vh] overflow-hidden flex flex-col justify-between items-center'>
                <img ref={bg1} src="./assets/bg_wed1.1.svg" alt="paralax1" className='absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-[1]' />
                <img ref={bg2} src="./assets/bg_wed2.svg" alt="paralax2" className='absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-0 mt-[-140px]' />
                <div className="relative flex flex-col justify-center items-center mt-[20vh] md:mt-[30vh] z-[2]">
                    <p className='text-5xl md:text-7xl text-white font-[Alegreya] mb-4'>The Weeding of</p>
                    <h1 className='hidden md:block text-white text-9xl font-[Cinzel] text-center bg-custom-overlay px-12 pb-1 md:pb-5 rounded-full'>Yenny & Rio</h1>
                    <h1 className='block md:hidden text-white text-7xl font-[Cinzel] text-center bg-custom-overlay py-20 px-4 rounded-full'>Yenny <br/> & <br /> Rio</h1>
                </div>
                <div className="w-full h-[17.5vh] bg-[#304221] z-[2]">
                    <div className="flex justify-center items-center hidden">
                        <div className="w-1/5 h-[20vh] flex justify-center items-center">
                            <a href="#" className='text-lg text-white decoration-none bg-[#98B66E] py-2 px-7 rounded-full'>
                                Home
                            </a>
                        </div>
                        <div className="w-1/5 h-[20vh] flex justify-center items-center">
                            <a href="#" className='text-lg text-white decoration-none bg-[#98B66E] py-2 px-7 rounded-full'>
                                Acara
                            </a>
                        </div>
                        <div className="w-1/5 h-[20vh] flex justify-center items-center">
                            <a href="#" className='text-lg text-white decoration-none bg-[#98B66E] py-2 px-7 rounded-full'>
                                Gift
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <main className='w-full bg-[#304221] z-[4]'>
                <Pembukaan />
                <Ayat />
                <RangkaianAcara />
                <Ucapan />
                <Rsvp />
                <Gift />
                <Protokol />
                <Footer />
            </main>
        </div>
    )
}
