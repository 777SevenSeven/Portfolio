import React from 'react';

//import woman image
import AndreImg from '../assets/img/eu.png';

const Hero = () => {
    return (
        <section id='' className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
            <div className='container mx-auto h-full'>
                <div className='flex items-center h-full pt-8'>
                    {/*left-side*/}
                    <div className='flex-1 flex-col items-center lg:items-start'>
                        <p className='text-lg text-accent mb-[22px]'>Hey, I'm André </p>
                        <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>I Create Solutions & <br /> Help you boost your Business!</h1>
                        <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>Building Solutions, Building Sucess.</p>
                        <button className='btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all text-black'>Download my CV</button>
                    </div>
                    {/*right side*/}
                    <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
                        <img src={AndreImg} alt='' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;