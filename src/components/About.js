import React from 'react'

//import image
import Image from '../assets/img/about.jpeg';

const About = () => {
  return <section className='section bg-secondary'>
    <div className='container mx-auto'>
        <div className="flex flex-col xl:flex-row gap-24">
            <img className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl' src={Image} alt='' />
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="flex flex-col">
                    <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>André Queiroz</h2>
                    <p className='mb-4 text-accent'>Product Owner</p>
                    <hr className='mb-8 opacity-5' />
                    <p className='mb-8'>
                    With 2 years of experience in Hackathons, programming and studies in Computer Engineering, I am a Product Owner specialized in creating solutions and managing products.

                     <br /><br /> "An important fact is that I do not act as an agency, but rather as a future partner dedicated to what I do."<br /><br />Let’s create something amazing together.
                    </p>
                </div>
                <button className='btn btn-md bg-accent hover:bg-accent-hover transition-all text-black'>Contact me</button>
            </div>
        </div>
    </div>
  </section>
  
}

export default About
