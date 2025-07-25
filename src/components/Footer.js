import React from 'react'

//import social data
import {social} from '../data'

const Footer = () => {
  return (
    <footer className='bg-tertiary py-12'>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
            {/*social icons*/}
            <div className='flex space-x-6 items-center justify-center'>
                {social.map((item,index) => {
                    const {href, icon} = item;
                    return (
                        <a className='text-socials text-base' href={href} key={index} target='_blank'>
                            {icon}
                        </a>
                    );
                })}
                </div>

                {/*icon*/}
                <div>
                    <h2 className='text-3xl'>André Queiroz</h2>
                </div>

                {/*copyright*/}
                <p>&copy; 2025 André Queiroz. All rights reserved.</p>

            </div>
        </div>
    </footer>
  )
}

export default Footer
