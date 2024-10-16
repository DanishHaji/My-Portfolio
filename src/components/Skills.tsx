import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center' data-aos="zoom-in-up">
      <div>
        <h2 className='text-4xl md:text-5xl mb-5'>Technologies I Work With...</h2>
        <p className='text-gray-500 pt-2 text-lg text-justify'>
        As a passionate and dedicated learner, I am currently immersed in the field of Cloud Applied Generative AI Engineering, where I harness the power of cutting-edge technologies to create innovative solutions. My journey in Python programming equips me with the essential skills to develop robust applications and analyze complex data sets. I am eager to expand my expertise into web development and data science, merging creativity with analytical prowess. With a strong foundation in these disciplines, I am committed to leveraging my knowledge to build intelligent applications and drive meaningful insights that can transform industries.
        </p>
      </div>
      <div className='ml-20 mt-20'>
        <div className='grid grid-cols-2 text-accent text-4xl sm:text-4xl'>
        <div className='space-y-6'>
          <h2 className='mb-10' data-aos="zoom-in-up">Python</h2>
          <h2 className='mb-10' data-aos="zoom-in-up">React.JS</h2>
          <h2 className='mb-10' data-aos="zoom-in-up">Next.JS</h2>
        </div>
        <div className='space-y-6'>
          <h2 className='mb-10' data-aos="zoom-in-up">Typescript</h2>
          <h2 className='mb-10' data-aos="zoom-in-up">Tailwind</h2>
          <h2 className='mb-10' data-aos="zoom-in-up">Node.JS</h2>
        </div>
      </div>
      </div>
      </div>
      
    </div>
  )
}

export default Skills
