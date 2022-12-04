import React from 'react'

export default function Footer() {
    return (
        // <div className='w-full mt-20 md:mt-40 custom-linear-gradient'>
        <div className='w-full mt-20 md:mt-40 '>
            <div className="flex flex-col justify-between items-center w-full text-white">
                <div className='w-full flex flex-col items-center justify-center my-14' data-aos="zoom-in" >
                    <img src="/assets/logo.svg" alt="logo" className='w-[40%] md:w-[25%]'/>
                    <a href='https://www.instagram.com/dejitaruinvitation/' target={"_blank"} className='flex mt-14 justify-center items-center'>
                        <img src="/assets/ig.svg" alt="logo" className=' w-[10%] md:w-[15%] mr-4'/>
                        <p className='text-white'>@dejitaruinvitation</p>
                    </a>
                </div>

                <p className='text-xs md:text-xl text-white mb-2'>Copyright © 2022 By Dejitaru Invitation</p>
                {/* <img src="/assets/footer.svg" alt="" className='w-full' /> */}
            </div>
        </div>
    )
}
