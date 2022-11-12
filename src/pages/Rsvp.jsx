import React from 'react'

export default function Rsvp() {
    return (
        <div className='w-full mt-20 md:mt-40'>
            <h2 className='text-4xl md:text-5xl font-[Alice] mb-4 text-center text-white'>RSVP</h2>
            <p className='text-2xl md:text-3xl font-[Alice] mb-16 text-center text-white'>Silahkan Konfirmasi Kehadiran Anda</p>
            <div className='flex flex-col md:flex-row'>
                <div className="flex flex-col p-4 w-[90%] md:w-[80%] mx-[5%] md:mx-[10%] bg-custom-white-sm py-8 md:py-10 text-[#282828] rounded-2xl md:rounded-xl mb-10" data-aos="zoom-in">
                    <div className='mb-4'>
                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama</label>
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="John" />
                    </div>
                    <div className='mb-4'>
                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Alamat</label>
                        <textarea rows={5} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="John" />
                    </div>
                    <div className='mb-4'>
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Konfirmasi</label>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5">
                            <option value="tidak-hadir" selected>Tidak Hadir</option>
                            <option value="hadir">Hadir</option>
                        </select>
                    </div>
                    <button className='w-full md:w-[25%] lg:w-[15%] bg-[#272726] text-white font-[Alegreya] text-2xl px-4 py-2 rounded-full'>Reservation via Whatsapp</button>
                    {/* <Countdown tanggal={'2023-01-14'} /> */}
                </div>
            </div>
        </div>
    )
}
