import React from 'react'
import { FiMail } from "react-icons/fi";
import { FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-xl font-bold' data-aos="zoom-in-up">Contact Me</h2>
                <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-in-up">Feel free to reach out if you have any questions or need assistance with anything on my portfolio.</p>
                <div className='flex gap-3 items-center' data-aos="zoom-in-up"> <FiMail size={18} />
                <a href='mailto:danish.haji115@gmail.com' className='border-2 px-4 py-1 rounded-md text-white hover:bg-blue-600'>danish.haji115@gmail.com</a>
            </div>
            <div className='flex gap-3 items-center' data-aos="zoom-in-up"> <FaPhone size={18} />
            +92-3172745680
            </div>
        </div>
        <div className='space-y-8'>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="name">Name</label>
                <input type="text"
                className='h-[40px] bg-transparent border border-accent'
                id='name'/>
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="email">Email</label>
                <input type="text"
                className='h-[40px] bg-transparent border border-accent'
                id='email'/>
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="msg">Message</label>
                <textarea
                className='bg-transparent border border-accent'
                id='msg' rows={8}>
                </textarea>
            </div>
            <button className='bg-accent p-2 px-6' data-aos="zoom-in-up">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
