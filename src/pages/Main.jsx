import React, { lazy, useEffect, useRef, useState } from 'react'
import Gift from './Gift'
import { Context } from '../App'
import { useContext } from 'react'

const Pembukaan = lazy(() => import('./Pembukaan'))
const Ayat = lazy(() => import('./Ayat'))
const Galeri = lazy(() => import('./Galeri'))
const RangkaianAcara = lazy(() => import('./RangkaianAcara'))
const Ucapan = lazy(() => import('./Ucapan'))
const Rsvp = lazy(() => import('./Rsvp'))
const Protokol = lazy(() => import('./Protokol'))
const Footer = lazy(() => import('./Footer'))

export default function Main({handleAudio}) {

    const bg1 = useRef(0);
    const bg2 = useRef(0);
    // const text = useRef(0);
    // const myAudio = useRef(null);
    const { isAudio: isPlayingAudio, setIsAudio: setisPlayingAudio } = useContext(Context);

    // const [isPlayingAudio, setisPlayingAudio] = useState(true);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const currentScrollY = window.scrollY;

    //         bg1.current.style.top = -currentScrollY * 0.15 + 'px';
    //         bg2.current.style.top = currentScrollY * 0.25 + 'px';
    //         // text.current.style.top = currentScrollY * 0.25 + 'px';
            
    //     };

    //     window.addEventListener("scroll", handleScroll, { passive: true });

    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    // useEffect(() => {
    //     if (myAudio.current) {
    //         myAudio.current.play();
    //         console.log('render');
    //     }
    // }, [isPlayingAudio])
    

    // const handleAudio = () => {
    //     if (myAudio && isPlayingAudio) {
    //         myAudio.current.pause();
    //         setisPlayingAudio(false)
    //     } else {
    //         myAudio.current.play();
    //         setisPlayingAudio(true)
    //     }
    // }

    return (
        <div className='min-h-[2500px]'>
            <div className='fixed w-full bottom-0 flex justify-end z-[10] pb-4 pr-4'>
                {/* <audio ref={myAudio} src="./assets/backsound2.mp3" loop /> */}
                <button onClick={() => handleAudio()} className="w-auto bg-transparent text-white border-none cursor-pointer">
                    { isPlayingAudio ? (<svg id="btn-pause" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>) :
                    (<svg id="btn-play" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                    </svg>)}
                </button>
            </div>
            <section className='relative w-full h-[110vh] overflow-hidden flex flex-col justify-between items-center'>
                <img src="./assets/home-mobile.webp" alt="" className='absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-[1] hidden md:block' />
                <img src="./assets/home-mobile.webp" alt="" className='absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-[1] block md:hidden' />
                <div className="relative flex flex-col justify-center items-center mt-[10vh] md:mt-[8vh] z-[2]">
                    <p className='text-2xl md:text-4xl text-primary font-[Cinzel] mb-4'>The Wedding of</p>
                    <h1 className='hidden md:block text-primary text-9xl font-[Cinzel] text-center px-12 pb-1 md:pb-5 rounded-full'>Rio & Yenny</h1>
                    <h1 className='block md:hidden text-primary text-5xl font-[Cinzel] text-center px-4 rounded-full'>Rio <br/> & <br /> Yenny</h1>
                </div>
                {/* <div className="w-full h-[17.5vh] bg-[#304221] z-[2]">
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
                </div> */}
            </section>
            <main className='w-full bg-primary z-[4]'>
                <Ayat />
                <Pembukaan />
                <Galeri />
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
