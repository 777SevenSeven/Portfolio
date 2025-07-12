import React from 'react'

//import components
import TestimonialSlider from '../components/TestimonialSlider';

function Testimonials() {
  return (
    <section id='testimonials' className='section bg-secondary'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center text-center'>
                <h2 className='section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block'>What other people say</h2>
                <p className='subtitle'>My clients appreciate the results I deliver. Here’s what they have to say:</p>
            </div>
            <TestimonialSlider />
        </div>
    </section>
  );
};

export default Testimonials
