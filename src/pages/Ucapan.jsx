import React, {useEffect, useState} from 'react'
import GreetingService from '../service/greeting.service'
import toast,{ Toaster } from 'react-hot-toast'

export default function Ucapan() {

    const [greeting, setGreeting] = useState([])

    const [namaTamu, setNamaTamu] = useState('')
    const [konfirmasi, setKonfirmasi] = useState(false)
    const [pesan, setPesan] = useState('')

    const createGreeting = () => {
        if (namaTamu !== '' && pesan !== '') {
            GreetingService.createGreeting({id_user: 1, nama_tamu: namaTamu, konfirmasi: konfirmasi, pesan: pesan}).then(res => {
                getAllGreeting();
                toast.success('Data berhasil dibuat', { position: 'bottom-center'});
              }, (err) => {
                console.log(err);
              })
        } else {
            toast.error('Harap Lengkapi htmlForm', { position: 'bottom-center'});
        }
    }

    const getAllGreeting = () => {
        GreetingService.getGreetingByUserId(1).then(res => {
            setGreeting(res.data.data);
            console.log(res.data.data);
        }, (error => {
            console.log("Private page", error.response);
        }));
    }

    useEffect(() => {
        getAllGreeting();
    }, [])
    

    return (
        <>
        <Toaster />
            <div className='flex justify-between mb-8 overflow-hidden py-10'>
                <img src="/assets/flower-left.svg" alt="" className='w-1/2 lg:h-[80vh] -ml-[20%] animate-rotatee delay-500' />
                <img src="/assets/flower-right.svg" alt="" className='w-[40%] lg:h-[90vh] -mr-[20%] animate-rotatee delay-1000' />
            </div>
        <div className='w-full mt-5 md:mt-4'>
            <div className='pb-[0] md:py-[10%]'>
                <h2 className='text-3xl md:text-5xl font-[Cinzel] mb-16 text-center text-white mx-4 md:mx-0'>Ucapkan Sesuatu Untuk Kami Berdua</h2>
                <div className='flex flex-col md:flex-row' data-aos="zoom-in">
                    <div className="flex flex-col p-4 w-[90%] md:w-[80%] mx-[5%] md:mx-[10%] bg-custom-white-sm py-8 md:py-10 text-[#282828] rounded-2xl md:rounded-xl mb-10">
                        <div className='mb-4'>
                            <label htmlFor="nama" className="block mb-2 text-sm font-medium text-gray-300">Nama</label>
                            <input onChange={(e) => setNamaTamu(e.target.value)} type="text" id="nama" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="John" />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="konfirmasi" className="block mb-2 text-sm font-medium text-gray-300">Konfirmasi</label>
                            <select id="konfirmasi" onChange={(e) => setKonfirmasi(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5">
                                <option value={false}>Tidak Hadir</option>
                                <option value={true} >Hadir</option>
                            </select>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="pesan" className="block mb-2 text-sm font-medium text-gray-300">Ucapan & Doa</label>
                            <textarea onChange={(e) => setPesan(e.target.value)} rows={5} type="text" id="pesan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Masukan pesan" />
                        </div>
                        <button onClick={() => createGreeting()} className='w-full md:w-[25%] lg:w-[15%] bg-custom-white-md text-white font-[Cinzel] text-2xl px-4 py-2 rounded-full'>Kirim</button>
                        {/* <Countdown tanggal={'2023-01-14'} /> */}

                        <div className='h-[50vh] overflow-y-auto bg-white flex flex-col items-center mt-8 rounded-lg py-4'>
                            {greeting.map((e,i) => (
                                <div key={i} className='bg-[#D9D9D9] w-[90%] px-[5%] mb-4 rounded p-4'>
                                    <div className='flex justify-between items-center mb-4'>
                                        <h4 className='text-sm'>From: {e?.nama_tamu}</h4>
                                        <h4 className={`text-xs ${e?.konfirmasi ? 'bg-green-600' : 'bg-red-600'}  text-white px-3 py-[2px] rounded`}>{e?.konfirmasi ? 'Hadir' : 'Tidak Hadir'}</h4>
                                    </div>
                                    <p className='text-base font-medium'>
                                        {e?.pesan}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
