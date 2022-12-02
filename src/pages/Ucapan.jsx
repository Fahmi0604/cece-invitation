import React from 'react'

export default function Ucapan() {
    return (
        <div className='w-full mt-20 md:mt-40 '>
            <div className='pt-[25%] pb-[0] md:py-[10%]'>
                <h2 className='text-3xl md:text-5xl font-[Cinzel] mb-16 text-center text-white'>Ucapkan Sesuatu Untuk Kami Berdua</h2>
                <div className='flex flex-col md:flex-row'>
                    <div className="flex flex-col p-4 w-[90%] md:w-[80%] mx-[5%] md:mx-[10%] bg-custom-white-sm py-8 md:py-10 text-[#282828] rounded-2xl md:rounded-xl mb-10" data-aos="zoom-in">
                        <div className='mb-4'>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama</label>
                            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="John" />
                        </div>
                        <div className='mb-4'>
                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Konfirmasi</label>
                            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5">
                                <option value="tidak-hadir" selected>Tidak Hadir</option>
                                <option value="hadir">Hadir</option>
                            </select>
                        </div>
                        <div className='mb-4'>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ucapan & Doa</label>
                            <textarea rows={5} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="John" />
                        </div>
                        <button className='w-full md:w-[25%] lg:w-[15%] bg-custom-white-md text-white font-[Cinzel] text-2xl px-4 py-2 rounded-full'>Kirim</button>
                        {/* <Countdown tanggal={'2023-01-14'} /> */}

                        <div className='bg-white flex flex-col items-center mt-8 rounded-lg py-4'>
                            <div className='bg-[#D9D9D9] w-[90%] px-[5%] mb-4 rounded p-4'>
                                <h4 className='text-base'>From: Nurus</h4>
                                <p className='text-lg font-medium'>
                                    Selamat yaa, semoga menjadi keluarga yang harmonis
                                </p>
                            </div>
                            <div className='bg-[#D9D9D9] w-[90%] px-[5%] mb-4 rounded p-4'>
                                <h4 className='text-base'>From: Nurus</h4>
                                <p className='text-lg font-medium'>
                                    Selamat yaa, semoga menjadi keluarga yang harmonis
                                </p>
                            </div>
                            <div className='bg-[#D9D9D9] w-[90%] px-[5%] mb-4 rounded p-4'>
                                <h4 className='text-base'>From: Nurus</h4>
                                <p className='text-lg font-medium'>
                                    Selamat yaa, semoga menjadi keluarga yang harmonis
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
