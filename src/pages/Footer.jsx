import React from 'react'

export default function Footer() {
    return (
        <div className='w-full mt-20 md:mt-40 custom-linear-gradient'>
            <div className="flex flex-col justify-between items-center w-full pt-20 text-white">
                <div className='w-full flex justify-center mt-14' data-aos="zoom-in" >
                    <img src="/assets/logo.svg" alt="logo" className='w-[50%] md:w-[25%]'/>
                </div>
                <img src="/assets/footer.svg" alt="" className='w-full' />
            </div>
        </div>
    )
}