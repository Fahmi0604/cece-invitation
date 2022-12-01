import React, { useState } from 'react'
import toast, {Toaster} from 'react-hot-toast'

export default function Protokol() {

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <Toaster />
            <div className='w-full mt-20 md:mt-40'>
                <div className="flex flex-col p-4 w-[90%] md:w-[80%] mx-[5%] md:mx-[10%] bg-custom-white-sm py-8 md:py-10 text-[#282828] rounded-2xl md:rounded-xl mb-10" data-aos="zoom-in">
                    <h2 className='text-3xl md:text-5xl font-[Cinzel] mb-4 text-center text-white'>Protokol Kesehatan</h2>
                    <p className='text-md md:text-xl font-[Cinzel] text-center text-white'>Sehubungan dengan situasi pandemi Covid-19, tanpa mengurangi rasa hormat, kami menghimbau kepada seluruh tamu undangan untuk menerapkan protokol kesehatan.</p>
                    <div className='flex flex-col md:flex-row mt-8 text-center'>
                        <div className='w-full md:w-[30%] md:mx-[1.5%] flex flex-col justify-center items-center mb-8'>
                            <h4 className='text-white text-lg font-[Cinzel] mb-4'>Cuci Tangan</h4>
                            <img src="/assets/protokol1.svg" alt="p1" className='w-20 h-20 md:w-40 md:h-40' />
                        </div>
                        <div className='w-full md:w-[30%] md:mx-[1.5%] flex flex-col justify-center items-center mb-8'>
                            <h4 className='text-white text-lg font-[Cinzel] mb-4'>Gunakan Masker</h4>
                            <img src="/assets/protokol2.svg" alt="p1" className='w-20 h-20 md:w-40 md:h-40' />
                        </div>
                        <div className='w-full md:w-[30%] md:mx-[1.5%] flex flex-col justify-center items-center mb-8'>
                            <h4 className='text-white text-lg font-[Cinzel] mb-4'>Jaga Jarak</h4>
                            <img src="/assets/protokol3.svg" alt="p1" className='w-20 h-20 md:w-40 md:h-40'  />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
