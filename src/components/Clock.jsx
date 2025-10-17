import React, { useEffect, useState } from 'react'

function Clock() {

    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() =>{
       const interval = setInterval(() =>{
        setTime(new Date().toLocaleTimeString())
       },1000)

       return () => clearInterval(interval)

    },[])
  return (
    <div>
        <p className='text-6xl text-black font-extrabold border rounded-xl rounded-t-none flex items-center justify-center mx-auto min-h-screen text-center bg-gray-100 hover:bg-blue-300 overflow-hidden cursor-pointer'>{time}</p>
    </div>
  )
}

export default Clock;