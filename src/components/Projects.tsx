import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
    {
        id: 0,
        title: "Static Resume",
        desc: "A sleek and professional static resume designed using HTML, CSS, and TypeScript.",
        img: "/static-resume.jpeg",
        tags: ["Next.JS","Node","CSS","TS"],
    },
    {
        id: 1,
        title: "Todo App",
        desc: "A user-friendly To-Do application built with React that allows users to efficiently manage their tasks.",
        img: "/todo-app.jpeg",
        tags: ["React","Node","CSS","TS"],
    },
    {
        id: 2,
        title: "Shareable Resume",
        desc: "A dynamic and shareable resume created with HTML, CSS, and TypeScript that enables users to generate and download their personalized resumes.",
        img: "/shareable-resume.jpeg",
        tags: ["Next.JS","Node","Html","CSS","TS"],
    },
    {
        id: 3,
        title: "Birthday Wish Card",
        desc: "A delightful Birthday Wish Card application developed using Next.js, designed to create personalized birthday greetings.",
        img: "/birthday-wish.jpeg",
        tags: ["Next.JS","Node","Html","CSS","TS"],
    },
    {
        id: 4,
        title: "Countdown Timer",
        desc: "A sleek Countdown Timer application built with Next.js that allows users to set and track the time remaining for any event.",
        img: "/countdown-timer.jpeg",
        tags: ["Next.JS","Node","Html","CSS","TS"],
    },
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title='My Projects' />
        <div className='grid gap-40 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center h-auto'>
            {data.map((el) => (<Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}
            
    
        </div>
      
    </div>
  )
}

export default Projects
