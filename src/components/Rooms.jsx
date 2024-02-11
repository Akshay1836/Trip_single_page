import React from 'react'

const Rooms = () => {
  return (
    <div className='max-w-[1400px] lg:h-[500px] bg-blue-100 grid gap-4 md:mx-8 lg:grid-cols-2 mb-[20%] lg:mb-[20%] md:mb-[35%] my-20'>
        <div className='m-2 p-4'>
                <h2 className='font-bold text-3xl'>Heading</h2>
                <p className='font-serif text-sm pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquam eum recusandae, sint harum reiciendis dolore repellendus laborum amet accusantium eveniet sequi repellat placeat ratione cupiditate. Perferendis reprehenderit nihil aliquam.</p>
        </div>
        <div className='grid grid-cols-2 gap-4 cols-span-2 mt-4 md:mt-6 mr-8 mb-24'>
        <img className="object-cover w-full h-full " src="../src/assets/img5.jpg" alt="" />
        <img className="row-span-2 object-cover w-full h-full " src="../src/assets/img4.jpg" alt="" />
        <img className="object-cover w-full h-full " src="../src/assets/img2.jpg" alt="" />  
        </div>
    </div>
  )
}

export default Rooms