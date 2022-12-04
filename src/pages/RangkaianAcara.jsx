import React, {useEffect} from 'react'
import Countdown from '../component/Countdown'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function RangkaianAcara() {

    useEffect(() => {
        AOS.init();
      }, []);

    function openTab(url) {
        window.open(url);
    }

    return (
        <div className='w-full mt-0 md:mt-40'>
            <h2 className='text-3xl md:text-5xl font-[Cinzel] mb-16 text-center text-white'>Rangkaian Acara</h2>
            <div className='flex flex-col md:flex-row'>
                <div className="flex flex-col items-center w-[90%] md:w-[30%] mx-[5%] md:mx-[1.5%] bg-custom-white-md text-center py-8 px-4 md:py-10 text-white rounded-2xl md:rounded-xl mb-10" data-aos="zoom-in">

                    <img src="./assets/cincin.svg" alt="cincin" className='w-[25%] mb-4' />

                    <p className='text-2xl md:text-4xl font-[Cinzel] mb-4'>Pemberkatan Nikah </p>
                    <p className='text-lg md:text-3xl font-[Cinzel] mb-2'>Sabtu, 14 Januari 2023 </p>
                    <p className='text-lg md:text-2xl font-[Cinzel] mb-8 mx-4 md:mx-0'>Gereja Katolik St. Albertus de Trapani, Malang</p>
                    <div className="relative text-right h-[300px] md:h-[400px] w-[95%] rounded flex justify-center mb-8">
                        <div className="gmap_canvas h-[300px] md:h-[400px] w-[95%] rounded">
                            <iframe title='maps1' width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Gereja%20Katolik%20St.%20Albertus%20de%20Trapani,%20Malang&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                            {/* <a href="https://www.embedgooglemap.net"></a> */}
                        </div>
                    </div>
                    <button onClick={() => openTab('https://www.google.com/maps/place/Gereja+Katolik+Paroki+St.+Albertus+de+Trapani,+Jl.+A.+Yani+No.22,+Blimbing,+Malang+City,+East+Java+65126/@-7.9423064,112.642214,17z/data=!4m6!3m5!1s0x2dd629c0433c5ccb:0x75690d6c79ab08f0!8m2!3d-7.9423064!4d112.642214!16s%2Fg%2F1hc8l758b')} className='bg-[#272726] text-white font-[Cinzel] text-lg px-4 py-2 rounded-full'>Buka Maps</button>
                    <Countdown tanggal={'2023-01-14'} />
                </div>
                <div className="flex flex-col items-center w-[90%] md:w-[30%] mx-[5%] md:mx-[1.5%] bg-custom-white-md text-center py-8 px-4 md:py-10 text-white rounded-2xl md:rounded-xl mb-10" data-aos="zoom-in">
                    
                    <img src="./assets/drink.svg" alt="cincin" className='w-[25%] mb-4' />

                    <p className='text-2xl md:text-4xl font-[Cinzel] mb-4'>Resepsi</p>
                    <p className='text-lg md:text-3xl font-[Cinzel] mb-2'>Sabtu, 14 Januari 2023 </p>
                    <p className='text-lg md:text-2xl font-[Cinzel] mb-8 mx-4 md:mx-0'>Hall Setyaningjanji Waroeng Tani Jl. TPST, Mulyoagung, Dau, Malang</p>
                    <div className="relative text-right h-[300px] md:h-[400px] w-[95%] rounded flex justify-center mb-8">
                        <div className="gmap_canvas h-[300px] md:h-[400px] w-[95%] rounded">
                        <iframe title='maps2' width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Hall%20Setyaningjanji%20Waroeng%20Tani%20%20Jl.%20TPST,%20Mulyoagung,%20Dau,%20Malang&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                            {/* <a href="https://www.embedgooglemap.net"></a> */}
                        </div>
                    </div>
                    
                    <button onClick={() => openTab('https://g.page/waroengtani?share')} className='bg-[#272726] text-white font-[Cinzel] text-lg px-4 py-2 rounded-full'>Buka Maps</button>
                    <Countdown tanggal={'2023-01-14'} />
                </div>
                <div className="flex flex-col items-center w-[90%] md:w-[30%] mx-[5%] md:mx-[1.5%] bg-custom-white-md text-center py-8 px-4 md:py-10 text-white rounded-2xl md:rounded-xl mb-10" data-aos="zoom-in">
                    
                    <img src="./assets/terompet.svg" alt="cincin" className='w-[25%] mb-4' />
                    
                    <p className='text-2xl md:text-4xl font-[Cinzel] mb-4'>Ngunduh Mantu</p>
                    <p className='text-lg md:text-3xl font-[Cinzel] mb-2'>Minggu, 15 Januari 2023 </p>
                    <p className='text-lg md:text-2xl font-[Cinzel] mb-8 mx-4 md:mx-0'>Gedung PGSD UM,<br /> Blitar </p>
                    <div className="relative text-right h-[300px] md:h-[400px] w-[95%] rounded flex justify-center mb-8">
                        <div className="gmap_canvas h-[300px] md:h-[400px] w-[95%] rounded">
                        <iframe title='maps3' width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Gedung%20PGSD%20UM,%20Blitar&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                            {/* <a href="https://www.embedgooglemap.net"></a> */}
                        </div>
                    </div>
                    <button onClick={() => openTab('https://www.google.com/maps/place/W53C%2BQMX+Gedung+PGSD,+Kepanjen+Lor,+Kec.+Kepanjenkidul,+Kota+Blitar,+Jawa+Timur+66117/@-8.0955031,112.1717422,17z/data=!4m6!3m5!1s0x2e78ec6c0d190d67:0x32bad3884c2afc29!8m2!3d-8.0955031!4d112.1717422!16s%2Fg%2F11c6rh93zt')} className='bg-[#272726] text-white font-[Cinzel] text-lg px-4 py-2 rounded-full'>Buka Maps</button>
                    <Countdown tanggal={'2023-01-15'} />
                </div>
            </div>
        </div>
    )
}
