import React from 'react'
import { useEffect } from 'react'

export default function Modal2({children, isOpenKonfirmasi, setIsOpenKonfirmasi, konfirmasi_nama, setkonfirmasi_nama, konfirmasi_hadiah, setkonfirmasi_hadiah, konfirmasi_pesan, setkonfirmasi_pesan}) {
    
    
    return (
        <>
        <button className={`${isOpenKonfirmasi ? 'block' : 'hidden'} fixed inset-0 bg-black bg-opacity-25 overflow-hidden h-screen`} />
        <div className={`${isOpenKonfirmasi ? 'block' : 'hidden'} flex flex-col justify-center items-center fixed inset-0 z-[7] p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen md:h-full`}>
            <div className="relative w-full h-auto max-w-md md:h-auto">
                <div className="relative bg-white rounded-lg shadow ">
                    <button onClick={() => setIsOpenKonfirmasi(false)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-6 text-center">
                        {children}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
