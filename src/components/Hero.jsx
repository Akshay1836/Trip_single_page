import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <img className='top-0 left-0 w-full h-screen object-cover' src="../src/assets/bg1.jpg" alt="" />
        <div className='bg-black/60 w-full h-screen top-0 left-0 absolute'/>
        <div className='w-full h-full absolute top-0 flex flex-col justify-center text-white '>
                <div className='md:left-[10%] max-w-[1100px] m-auto p-4 absolute'>
                        <p className=''>All inclusive</p>
                        <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private beach & Getaways</h1>
                        <p className='max-w-[600px] text-xl py-2 drop-shadow-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, et id sequi odit incidunt a! Natus, vero nostrum fugiat earum possimus sunt illo, dignissimos id mollitia praesentium, animi quia exercitationem?</p>
                        <button className='bg-white text-sm  text-black hover:bg-gray-300/45 '>Click</button>
                </div>
        </div>
    </div>
    
  )
}

export default Hero