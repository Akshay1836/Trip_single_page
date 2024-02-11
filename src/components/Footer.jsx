import React from 'react'
import { FaWhatsappSquare,FaFacebookSquare,FaInstagramSquare,FaTwitterSquare  } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='w-max-[1440px] h-full bg-gray-900 text-white px-2 py-4 mt-20'>
        <div className='grid grid-cols-2 md:grid-cols-6'>
                <div className='m-2 p-2'>
                        <h6 className='font-bold text-md'>Solutions</h6>
                        <ul>
                                <li className='py-1'>Travel</li>
                                <li className='py-1'>Booking</li>
                                <li className='py-1'>Flights</li>
                                <li className='py-1'>Cruises</li>
                                <li className='py-1'>Ground</li>
                        </ul>
                </div>
                <div className='m-2 p-2'>
                        <h6 className='font-bold text-md'>Solutions</h6>
                        <ul>
                                <li className='py-1'>Travel</li>
                                <li className='py-1'>Booking</li>
                                <li className='py-1'>Flights</li>
                                <li className='py-1'>Cruises</li>
                                <li className='py-1'>Ground</li>
                        </ul>
                </div>
                <div className='m-2 p-2'>
                        <h6 className='font-bold text-md'>Solutions</h6>
                        <ul>
                                <li className='py-1'>Travel</li>
                                <li className='py-1'>Booking</li>
                                <li className='py-1'>Flights</li>
                                <li className='py-1'>Cruises</li>
                                <li className='py-1'>Ground</li>
                        </ul>
                </div>
                <div className='m-2 p-2'>
                        <h6 className='font-bold text-md'>Solutions</h6>
                        <ul>
                                <li className='py-1'>Travel</li>
                                <li className='py-1'>Booking</li>
                                <li className='py-1'>Flights</li>
                                <li className='py-1'>Cruises</li>
                                <li className='py-1'>Ground</li>
                        </ul>
                </div>
                
                <div className='grid col-span-2 py-8 md:py-2 px-4 my-2'>
                        <p className='font-bold uppercase mb-4'>Subscribe to our newsletters</p>
                        <p>The latest deals,articles, and resources sent to your inbox weekly.</p>
                        <form action="" className='flex flex-col py-2'>
                                <input type="email" placeholder='Enter the mail address' className='mb-2 py-2 px-4 w-full text-black' />
                                <button className='hover:bg-gray-800'>Subscribe</button>
                        </form>
                </div>
        </div>
        <div className='flex flex-col items-center justify-center m-8'>
                <p>2002 experiences, LLC. All rights reserved.</p>
                <div className='flex justify-between p-2'>
                        <FaFacebookSquare/>
                        <FaInstagramSquare/>
                        <FaTwitterSquare/>
                        <FaWhatsappSquare/>
                        
                </div>
        </div>
    </div>
  )
}

export default Footer