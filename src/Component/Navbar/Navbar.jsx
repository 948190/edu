import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'

const Navbar = () => {

    const [sticky,setSticky]=useState(false);

    useEffect(()=>{
        window.addEventListener(scroll,()=>{
            window.scrollY>50?setSticky(true):setSticky(false);
        })
    },[]);

  return (
    <nav className={`container ${sticky? 'dark-nav' : ' '}`}>
        <img src={logo} className='logo'></img>
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About us</li>
            <li>Campus</li>
            <li>testominals</li>
            <li><button className='btn'>Contact us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar