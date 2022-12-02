import React, {useState, useEffect} from 'react'


export default function Countdown({tanggal}) {
    const targetTime = new Date(tanggal).getTime();
    const [currentTime, setCurrentTime] = useState(Date.now());

    const timeBetween = targetTime - currentTime;
    const seconds = Math.floor((timeBetween / 1000) % 60);
    const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
    const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(Date.now());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

  return (
    <div className='w-full flex justify-between text-white mt-10 font-[Cinzel]'>
        <div className='w-[20%] mx-[2.5%] bg-[#272726] py-3 rounded'>
            <span className='text-2xl'>{days}</span> <br /> days
        </div>
        <div className='w-[20%] mx-[2.5%] bg-[#272726] py-3 rounded'>
            <span className='text-2xl'>{hours}</span> <br /> hours
        </div>
        <div className='w-[20%] mx-[2.5%] bg-[#272726] py-3 rounded'>
            <span className='text-2xl'>{minutes}</span> <br /> minutes
        </div>
        <div className='w-[20%] mx-[2.5%] bg-[#272726] py-3 rounded'>
            <span className='text-2xl'>{seconds}</span> <br /> second
        </div>
    </div>
  )
}
