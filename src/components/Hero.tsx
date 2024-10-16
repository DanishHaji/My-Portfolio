import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
  <div id='hero' className='min-h-screen bg-no-report bg-left bg-cover'
  style={{
    backgroundImage: "url('/profile.png')",
    backgroundSize: '500px', // Adjust this size to your preference
    backgroundPosition: 'calc(10% + 2px) center', // Center the image vertically
    backgroundRepeat: 'no-repeat', // Ensure it doesn't repeat
    filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.4))',
    animation: 'pulse 2s infinite',
    
    
  }}

    >
      <Navbar/>
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        {/* <div className='text-[300px] sm:text-[130px] font-bold leading-tight flex justify-center items-center'></div> */}
        <div className='flex flex-col justify-center items-start p-8'>
          <p style={{ fontSize: '10rem', lineHeight: '1.2' }} className='font-semibold' data-aos="zoom-in-up">I&apos;m</p>
          <p style={{ fontSize: '11rem', lineHeight: '1' }} className='font-bold' data-aos="zoom-in-up">Danish</p>
        </div>
      </div>
  </div>
  )
}

export default Hero
