import React, {useState} from 'react';
import toast,{Toaster} from 'react-hot-toast'

export default function Rsvp() {

    const [nama, setNama] = useState('')
    const [jumlahTamu, setjJumlahTamu] = useState('')
    const [alamat, setAlamat] = useState('');
    const [konfirmasi, setkonfirmasi] = useState('tidak-hadir')

    const sendMessage = () => {
        if (nama !== '' && jumlahTamu !== '' && konfirmasi !== '') {
            const msg =`Hai, saya ${nama} ingin konfirmasi kehadiran pada undangan pernikahan anda bahwa, ${(konfirmasi === 'hadir') ? `saya akan datang Bersama ${jumlahTamu} Orang` : 'Maaf, saya tidak bisa datang'}. Terima kasih ya.`
            const url = `https://wa.me/6282334334914/?text=${encodeURI(msg)}`
            window.open(url, '_blank');
        } else {
            toast.error('Harap Diisi Lengkap!', {position: 'bottom-center'})
        }
    }

    return (
        <>
        <Toaster />
        <div className='flex justify-between mb-8 overflow-hidden py-7'>
            <img src="./assets/flower-left.svg" alt="" className='w-[40%] lg:h-[80vh] -ml-[10%] animate-rotatee delay-500' />
            <img src="./assets/flower-right2.svg" alt="" className='w-[40%] lg:h-[80vh] -mr-[15%] animate-rotatee delay-1000' />
        </div>
        <div className='w-full -mt-24 md:mt-40'>
            <h2 className='text-3xl md:text-5xl font-[Cinzel] mb-4 text-center text-white'>RSVP</h2>
            <p className='text-2xl md:text-3xl font-[Cinzel] mb-16 text-center text-white mx-4'>Silahkan Konfirmasi Kehadiran Anda</p>
            <div className='flex flex-col md:flex-row'>
                <div className="flex flex-col p-4 w-[90%] md:w-[80%] mx-[5%] md:mx-[10%] bg-custom-white-sm py-8 md:py-10 text-[#282828] rounded-2xl md:rounded-xl mb-10" data-aos="zoom-in">
                    <div className='mb-4'>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-300">Nama</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Nama" onChange={(e) => setNama(e.target.value)} />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-300">Jumlah Tamu</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="1 Orang" onChange={(e) => setjJumlahTamu(e.target.value)} />
                    </div>
                    {/* <div className='mb-4'>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-300">Alamat</label>
                        <textarea rows={5} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Alamat" onChange={(e) => setAlamat(e.target.value)} />
                    </div> */}
                    <div className='mb-4'>
                        <label htmlFor="konfirmasi" className="block mb-2 text-sm font-medium text-gray-300">Konfirmasi</label>
                        <select value={konfirmasi} id="konfirmasi" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" onChange={(e) => setkonfirmasi(e.target.value)}>
                            <option value="tidak-hadir">Tidak Hadir</option>
                            <option value="hadir">Hadir</option>
                        </select>
                    </div>
                    <button onClick={() => sendMessage()} className='w-full md:w-[40%] lg:w-[30%] bg-custom-white-md text-white font-[Cinzel] text-lg md:text-2xl px-4 py-2 rounded-full'>Reservation via Whatsapp</button>
                    {/* <Countdown tanggal={'2023-01-14'} /> */}
                </div>
            </div>
        </div>
        </>
    )
}
