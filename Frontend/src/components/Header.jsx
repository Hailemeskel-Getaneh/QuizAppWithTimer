import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/componentstyle/Header.css'

export default function Header() {
  return (
    <>
     <div className='header'>
     <div className='links'>
          <div className='one-links'>
            <Link  className='link'to='/'>Home</Link>
            </div>
            <div className='one-links'>
            <Link className='link' to='/about'>About</Link>
            </div>  
            <div className='one-links'>
            <Link className='link' to='/help'>Help</Link>
            </div>       
            <div className='one-links'>
            <Link className='link' to='/contact'>Contact</Link>
            </div>
            
            <button className='button1'>login</button>

        </div>
        </div>
    </>
   
  )
}
