import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Modal from '../component/Modal'
import Modal2 from '../component/Modal2'

export default function Gift() {
    let [isOpen, setIsOpen] = useState(false)
    const [nama, setNama] = useState('')
    const [nama2, setNama2] = useState('')
    const [norek, setNorek] = useState('')
    const [norek2, setNorek2] = useState('')

    // form konfirmasi
    const [isOpenKonfirmasi, setIsOpenKonfirmasi] = useState(false)
    const [konfirmasi_nama, setkonfirmasi_nama] = useState('')
    const [konfirmasi_hadiah, setkonfirmasi_hadiah] = useState('')
    const [konfirmasi_pesan, setkonfirmasi_pesan] = useState('')
    const [konfirmasi, setkonfirmasi] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal(norek, nama, norek2 = '', nama2 = '') {
        setNama(nama);
        setNorek(norek);
        setNama2(nama2);
        setNorek2(norek2);
        setIsOpen(true);
    }

    const copy = () => {
        navigator.clipboard.writeText(norek).then(() => {
            toast.success('Berhasil copy', { position: 'bottom-center' })
            closeModal();
            /* Resolved - text copied to clipboard successfully */
        }, () => {
            console.error('Failed to copy');
            /* Rejected - text failed to copy to the clipboard */
        });
    }

    const copy2 = () => {
        navigator.clipboard.writeText(norek2).then(() => {
            toast.success('Berhasil copy', { position: 'bottom-center' })
            closeModal();
            /* Resolved - text copied to clipboard successfully */
        }, () => {
            console.error('Failed to copy');
            /* Rejected - text failed to copy to the clipboard */
        });
    }

    const sendMessage = () => {
        if (konfirmasi_nama !== '' && konfirmasi_hadiah !== '' && konfirmasi_pesan !== '') {
            // const msg = `Hai, saya *${konfirmasi_nama}* ingin konfirmasi memberikan tanda kasih berupa, ${(konfirmasi === 'uang') ? 'Transfer Uang Rp. ' : 'Kirim Hadiah'} ${konfirmasi_hadiah}. 
            const msg = `Hai, saya *${konfirmasi_nama}* ingin konfirmasi memberikan tanda kasih berupa, Transfer Uang Rp. ${konfirmasi_hadiah}

${konfirmasi_pesan}

Terima kasih ya.`
            const url = `https://wa.me/6282143159599/?text=${encodeURI(msg)}`
            window.open(url, '_blank');
        } else {
            toast.error('Harap Diisi Lengkap!', { position: 'bottom-center' })
        }
    }

    // function currencyFormat(num) {
    //     return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    // }

    return (
        <>
            <Toaster />
            <div className='flex justify-between mb-8 overflow-hidden py-7'>
                <img src="./assets/flower-left.svg" alt="" className='w-[40%] lg:h-[80vh] -ml-[10%] animate-rotatee delay-500' />
                <img src="./assets/flower-right2.svg" alt="" className='w-[40%] lg:h-[80vh] -mr-[15%] animate-rotatee delay-1000' />
            </div>
            <div className='w-full -mt-24 md:mt-40'>
                <h2 className='text-3xl md:text-5xl font-[Cinzel] mb-16 text-center text-white'>Wedding Gift</h2>
                <div className="flex flex-col md:flex-row justify-center md:justify-around items-center w-[100%] text-center md:pt-10 text-[#282828] rounded-2xl md:rounded-xl" data-aos="zoom-in">
                    <button onClick={() => openModal("8160507382", "Yenny Chandrawati S")} className='w-[50%] md:w-[30%] bg-custom-white-md text-white font-[Cinzel] text-2xl px-4 py-2 rounded-full mb-8'>Yenny</button>
                    <button onClick={() => openModal("8705278462", "Robertus Romario Harvey K", '0900941048', 'Rudy H Kurniawan')} className='w-[50%] md:w-[30%] bg-custom-white-md text-white font-[Cinzel] text-2xl px-4 py-2 rounded-full mb-8'>Rio</button>

                </div>
                <div className='flex justify-center mb-10'>
                    <button onClick={() => setIsOpenKonfirmasi(true)} className='text-white source-sans-pro'><u>
                        Silahkan melakukan Konfirmasi hadiah <br />
                        <strong>klik disini</strong>
                    </u></button>
                </div>
            </div>

            <Modal isOpen={isOpen} setIsOpen={(e) => setIsOpen(e)}>
                <div className='flex justify-center'>
                    <img src="./assets/bca.svg" alt="bca" />
                </div>

                <div className="mt-6">
                    <p className="text-lg font-sans font-medium text-center text-[#282828]">
                        {norek} <br />
                        {nama}
                    </p>
                </div>

                <div className="mt-4 flex justify-center">
                    <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => copy()}
                    >
                        Copy No Rekening
                    </button>
                </div>

                {norek2 !== '' && nama2 !== '' &&
                    (<>
                        <div className="mt-6">
                            <p className="text-lg font-sans font-medium text-center text-[#282828] mt-4">
                                {norek2} <br />
                                {nama2}
                            </p>
                        </div>

                        <div className="mt-4 flex justify-center">
                            <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={() => copy2()}
                            >
                                Copy No Rekening
                            </button>
                        </div>
                    </>)}
            </Modal>
            {/* <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-1000"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-1000"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-500"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="flex justify-center text-lg font-medium leading-6 text-gray-900"
                                    >
                                        <img src="./assets/bca.svg" alt="bca" />
                                    </Dialog.Title>
                                    <div className="mt-6">
                                        <p className="text-lg font-sans font-medium text-center text-[#282828]">
                                            {norek} <br />
                                            {nama}
                                        </p>
                                    </div>

                                    <div className="mt-4 flex justify-center">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={() => copy()}
                                        >
                                            Copy No Rekening
                                        </button>
                                    </div>

                                    {norek2 !== '' && nama2 !== '' &&
                                        (<>
                                            <div className="mt-6">
                                                <p className="text-lg font-sans font-medium text-center text-[#282828] mt-4">
                                                    {norek2} <br />
                                                    {nama2}
                                                </p>
                                            </div>

                                            <div className="mt-4 flex justify-center">
                                                <button
                                                    type="button"
                                                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                    onClick={() => copy2()}
                                                >
                                                    Copy No Rekening
                                                </button>
                                            </div>
                                        </>)}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition> */}

            <Modal2 isOpenKonfirmasi={isOpenKonfirmasi} setIsOpenKonfirmasi={(e) => setIsOpenKonfirmasi(e)} konfirmasi_nama={konfirmasi_nama} setkonfirmasi_nama={(e) => setkonfirmasi_nama(e)} konfirmasi_hadiah={konfirmasi_hadiah} setkonfirmasi_hadiah={(e) => setkonfirmasi_hadiah(e)} konfirmasi_pesan={konfirmasi_pesan} setkonfirmasi_pesan={(e) => setkonfirmasi_pesan(e)}>
                <h2 className='text-2xl md:text-3xl font-[Cinzel] font-semibold mb-0 text-center text-gray-500'>Konfirmasi Hadiah</h2>
                <div className='flex flex-col md:flex-row'>
                    <div className="w-full flex flex-col p-4 bg-custom-white-sm text-[#282828] rounded-2xl md:rounded-xl" data-aos="zoom-in">
                        <div className='mb-4'>
                            {/* <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-300">Nama</label> */}
                            <input type="text" id="first_name" className="bg-custom-overlay border border-gray-400 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Nama" onChange={(e) => setkonfirmasi_nama(e.target.value)} />
                        </div>
                        <div className='mb-4'>
                            {/* <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-300">Nama</label> */}
                            <input type="text" id="first_name" className="bg-custom-overlay border border-gray-400 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Nominal/Hadiah" onChange={(e) => setkonfirmasi_hadiah(e.target.value)} />
                        </div>
                        <div className='mb-4'>
                            {/* <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-300">Pesan</label> */}
                            <textarea rows={5} type="text" className="bg-custom-overlay border border-gray-400 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Pesan" onChange={(e) => setkonfirmasi_pesan(e.target.value)} />
                        </div>
                        <button onClick={() => sendMessage()} className='w-full md:w-[40%] lg:w-[30%] bg-primary text-white font-[Cinzel] text-lg md:text-2xl px-4 py-2 rounded-full'>Kirim</button>
                        {/* <Countdown tanggal={'2023-01-14'} /> */}
                    </div>
                </div>
            </Modal2>
            {/* Modal konfirmasi */}
            {/* <Transition appear show={isOpenKonfirmasi} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setIsOpenKonfirmasi(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-1000"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-1000"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-500"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="div"
                                        className="flex flex-col justify-center text-lg font-medium leading-6 text-gray-900"
                                    >
                                        <h2 className='text-2xl md:text-3xl font-[Cinzel] font-semibold mb-0 text-center text-gray-500'>Konfirmasi Hadiah</h2>
                                    </Dialog.Title>
                                    <div className='flex flex-col md:flex-row'>
                                        <div className="w-full flex flex-col p-4 bg-custom-white-sm text-[#282828] rounded-2xl md:rounded-xl" data-aos="zoom-in">
                                            <div className='mb-4'>
                                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-300">Nama</label>
                                                <input type="text" id="first_name" className="bg-custom-overlay border border-gray-400 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Nama" onChange={(e) => setkonfirmasi_nama(e.target.value)} />
                                            </div>
                                            <div className='mb-4'>
                                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-300">Nama</label>
                                                <input type="text" id="first_name" className="bg-custom-overlay border border-gray-400 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Nominal/Hadiah" onChange={(e) => setkonfirmasi_hadiah(e.target.value)} />
                                            </div>
                                            <div className='mb-4'>
                                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-300">Pesan</label>
                                                <textarea rows={5} type="text" className="bg-custom-overlay border border-gray-400 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Pesan" onChange={(e) => setkonfirmasi_pesan(e.target.value)} />
                                            </div>
                                            <div className='mb-4'>
                                                <label htmlFor="konfirmasi" className="block mb-2 text-sm font-medium text-gray-500">Konfirmasi</label>
                                                <select id="konfirmasi" className="bg-custom-overlay border border-gray-400 text-gray-900 text-sm rounded-lg w-full p-2.5" onChange={(e) => setkonfirmasi(e.target.value)}>
                                                    <option value="tidak-hadir">Tidak Hadir</option>
                                                    <option value="hadir">Hadir</option>
                                                </select>

                                                <div class="flex items-center mb-2">
                                                    <input id="default-radio-1" type="radio" value="uang" name="konfirmasi" className="w-4 h-4 text-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600" onChange={(e) => setkonfirmasi(e.target.value)} />
                                                    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-500">Transfer Uang</label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input checked id="default-radio-2" type="radio" value="hadiah" name="konfirmasi" className="w-4 h-4 text-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600" onChange={(e) => setkonfirmasi(e.target.value)} />
                                                    <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-500">Kirim Hadiah</label>
                                                </div>

                                            </div>
                                            <button onClick={() => sendMessage()} className='w-full md:w-[40%] lg:w-[30%] bg-primary text-white font-[Cinzel] text-lg md:text-2xl px-4 py-2 rounded-full'>Kirim</button>
                                        </div>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition> */}
        </>
    )
}
