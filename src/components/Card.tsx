import Image from 'next/image';
import React from 'react'

interface propsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];
  
}

const Card:React.FC<propsType> = ({title, desc, img, tags}) => {
  return (
    <div className='border border-accent w-[300px] sm:w-[350px] h-full flex flex-col' data-aos="zoom-in-up">
        <div className='overflow-hidden h-[250px]'>
           <Image className='w-full h-full object-cover'
           src={img}
           width={350}
           height={250}
           alt={title}
           /> 
        </div>

        <div className='p-4 flex-grow space-y-4'>
            <div className='text-2xl font-extralight text-b'>{title}</div>
            <div>{desc}</div>
            <div  className='flex flex-wrap gap-2'>
                {tags.map((el) => (
                    <div className='tags' key={el}>
                        {el}
                    </div>))}
            </div>
        </div>
    </div>
  )
}

export default Card
