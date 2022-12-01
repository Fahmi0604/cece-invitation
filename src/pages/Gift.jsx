import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import toast,{Toaster} from 'react-hot-toast'

export default function Gift() {
    let [isOpen, setIsOpen] = useState(false)
    const [nama, setNama] = useState('')
    const [norek, setNorek] = useState('')

    function closeModal() {
        setIsOpen(false);
    }

    function openModal(norek, nama) {
        setNama(nama);
        setNorek(norek);
        setIsOpen(true);
    }

    const copy = () => {
        navigator.clipboard.writeText(norek).then(() => {
            toast.success('Berhasil copy', { position: 'bottom-center' })
            closeModal();
            /* Resolved - text copied to clipboard successfully */
          },() => {
            console.error('Failed to copy');
            /* Rejected - text failed to copy to the clipboard */
          });
    }

    return (
        <>
            <Toaster />
            <div className='w-full mt-20 md:mt-40'>
                <h2 className='text-4xl md:text-5xl font-[Cinzel] mb-16 text-center text-white'>Wedding Gift</h2>
                <div className="flex flex-col md:flex-row justify-center md:justify-around items-center w-[100%] text-center py-8 md:py-10 text-[#282828] rounded-2xl md:rounded-xl mb-10" data-aos="zoom-in">
                    <button onClick={() => openModal("8160507382","Yenny Chandrawati S")} className='w-[50%] md:w-[30%] bg-[#272726] text-white font-[Alegreya] text-2xl px-4 py-2 rounded-full mb-8'>Yenny</button>
                    <button onClick={() => openModal("8705278462", "Robertus Romario Harvey K")} className='w-[50%] md:w-[30%] bg-[#272726] text-white font-[Alegreya] text-2xl px-4 py-2 rounded-full mb-8'>Rio</button>
                </div>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="flex justify-center text-lg font-medium leading-6 text-gray-900"
                                    >
                                        <img src="/assets/bca.svg" alt="bca" />
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
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
