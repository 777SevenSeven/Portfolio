import React, {useState, useEffect} from 'react'

//import social data
import {social} from '../data';

const Socials = () => {
    return <ul className='flex space-x-6'>{social.map((item,index)=> {
            return <li className='flex justify-center items-center text-socials' key={index}>
                <a className='text-base' href={item.href} target='_blank'>
                    {item.icon}
                </a>
            </li>
            })}
        </ul>;
    
};

export default Socials