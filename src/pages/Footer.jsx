import React from 'react'

export default function Footer() {
    return (
        // <div className='w-full mt-20 md:mt-40 custom-linear-gradient'>
        <div className='w-full mt-20 md:mt-40 '>
            <div className="flex flex-col justify-between items-center w-full text-white">
                <div className='w-full flex justify-center my-14' data-aos="zoom-in" >
                    <img src="/assets/logo.svg" alt="logo" className='w-[50%] md:w-[25%]'/>
                </div>
                {/* <img src="/assets/footer.svg" alt="" className='w-full' /> */}
            </div>
        </div>
    )
}
