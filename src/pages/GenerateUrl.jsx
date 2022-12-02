import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast'

export default function GenerateUrl() {

    const [nama, setNama] = useState('')
    const [listGenerated, setListGenerated] = useState([]);
    const [pesan, setPesan] = useState(`Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i [nama] untuk menghadiri acara kami.

*Berikut link undangan kami*, untuk info lengkap dari acara bisa kunjungi :
    
[link-undangan]
    
Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.
    
*Mohon maaf perihal undangan hanya di bagikan melalui pesan ini.*
    
Dan karena suasana masih pandemi, diharapkan untuk *tetap menggunakan masker dan datang pada jam yang telah ditentukan.*
    
Terima kasih banyak atas perhatiannya.`);

    const sendMessage = () => {
        if (nama !== '') {
            const msg = `Hai, saya ${nama} ingin konfirmasi kehadiran pada undangan pernikahan digital bahwa, ? 'saya akan datang' : 'Maaf, saya tidak bisa datang'}. Terima kasih ya.`
            const url = `https://wa.me/6282334334914/?text=${encodeURI(msg)}`
            window.open(url, '_blank');
        } else {
            toast.error('Harap isi semua field', { position: 'bottom-center' })
        }
    }

    const generate = () => {
        setListGenerated([]);

        if (nama != '' && pesan != '') {
            const daftar = nama.split(/\r?\n/).filter(el => el)

            daftar.forEach((e,i) => {
                let msg;
                msg = pesan.replace('[nama]', `${e}`).replace('[link-undangan]', `https://cece-invitation.vercel.app/${e}`)
                setListGenerated((prev) => [...prev,
                {
                    id: i+1,
                    pesan: msg,
                    nama: e,
                    link: `https://api.whatsapp.com/send?phone=&text=${encodeURI(msg)}`
                }
                ]);
            });
        }
    }

    const deleteListGenerate = (id) => {
        setListGenerated(listGenerated.filter(f => f.id != id));
    }

    useEffect(() => {
        console.log(listGenerated);
    }, [listGenerated])


    return (
        <>
            <Toaster />
            <div className='w-full min-h-screen py-8 bg-primary'>
                <h2 className='text-3xl md:text-4xl font-[Cinzel] mb-4 text-center text-white'>Kirim Undangan Untuk Para Tamu</h2>
                <p className='px-[15%] text-xl md:text-xl font-[Cinzel] mb-16 text-center text-white'>Buat undangan jadi lebih ekslusif dan personal di setiap undangan yang akan dikirimkan. Silahkan Generate Link nya di bawah ini:</p>
                <div className='flex flex-col'>
                    <div className="flex flex-col p-4 w-[90%] md:w-[80%] mx-[5%] md:mx-[10%] bg-custom-white-sm py-8 md:py-10 text-[#282828] rounded-2xl md:rounded-xl mb-10">
                        {/* <div className='mb-4'>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Nama" onChange={(e) => setNama(e.target.value)} />
                    </div> */}
                        <div className='mb-4'>
                            <label htmlFor="first_name" className="block text-lg font-medium text-gray-300">Nama Tamu</label>
                            <p className='text-xs text-gray-300 mb-3'>* Gunakan baris baru (↵) untuk memisahkan nama yang akan Anda undang.</p>
                            <textarea rows={5} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Nama Tamu" onChange={(e) => setNama(e.target.value)} />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="first_name" className="block mb-2 text-lg font-medium text-gray-300">Text Pengantar</label>
                            <p className='text-xs text-gray-300 mb-3'>
                                * Isikan text ini [link-undangan] pada text pengantar agar otomatis tercantumkan link kehalaman undangan. <br />
                                * Anda juga bisa menggunakan [nama] untuk menyertakan nama yang Anda undang.</p>
                            <textarea rows={5} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Text Pengantar" value={pesan} onChange={(e) => setPesan(e.target.value)} />
                        </div>
                        {/* <div className='mb-4'>
                        <label htmlFor="konfirmasi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Konfirmasi</label>
                        <select id="konfirmasi" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" onChange={(e) => setkonfirmasi(e.target.value)}>
                            <option value="tidak-hadir" >Tidak Hadir</option>
                            <option value="hadir">Hadir</option>
                        </select>
                    </div> */}
                        <button onClick={() => generate()} className='w-full md:w-[40%] lg:w-[30%] bg-custom-white-md text-white font-[Cinzel] text-2xl px-4 py-2 rounded-full'>Generate</button>
                        {/* <Countdown tanggal={'2023-01-14'} /> */}
                    </div>

                    <div className="flex flex-col p-4 w-[90%] md:w-[80%] mx-[5%] md:mx-[10%] bg-custom-white-sm py-8 md:py-10 text-[#282828] rounded-2xl md:rounded-xl mb-10">
                        <h2 htmlFor="first_name" className="block font-[Cinzel] text-xl font-medium text-gray-300 mb-4">Nama Tamu</h2>

                        <div className='flex flex-col'>
                            {listGenerated && listGenerated.map((e, i) => (
                                <div className='bg-white px-4 py-8 mb-4 rounded-md' key={i}>
                                    <label htmlFor="first_name" className="block mb-4 text-lg font-medium text-[#282828]">Nama Tamu : {e.nama}</label>
                                    {/* <div className='flex'> */}
                                    <a href={e.link} target={'_blank'} className='w-fit md:w-[40%] lg:w-[30%] bg-[#272726] text-white font-[Cinzel] text-lg px-4 py-2 rounded-full'>Share Whatsapp</a>
                                    <button onClick={() => deleteListGenerate(e.id)} className='w-fit md:w-[40%] lg:w-[30%] bg-[#272726] text-white font-[Cinzel] text-lg px-4 py-2 rounded-full'>hapus</button>
                                    {/* </div> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
