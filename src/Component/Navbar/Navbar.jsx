import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'
import { Link } from 'react-scroll';

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
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={0} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={0} duration={500}>About us</Link></li>
            <li><Link to='campus' smooth={true} offset={0} duration={500}>Campus</Link></li>
            <li><Link to='testonimals' smooth={true} offset={0} duration={500}>testominals</Link></li>
            <li><Link to='contact' smooth={true} offset={0} duration={500}><button className='btn'>Contact us</button></Link></li>
        </ul>
    </nav>
  )
}

export default Navbar