import "./NavBar.css"
import React, { useEffect, useState } from 'react';
import logo from "../../assets/logo.png";
import { Link, Element } from 'react-scroll';

function Navbar()
{
    const [sticky,setSticky]=useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY>500 ?setSticky(true):setSticky(false);
        })
    },[])

    return(
        <nav className={`container ${sticky && 'dark-nav'}`}>
            <img src={logo} alt="logo" className="logo"/>
            <ul>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='about' smooth={true} offset={0} duration={500}>About</Link></li>
                <li><Link to='programs' smooth={true} offset={0} duration={500}>Programs</Link></li>
                <li><Link to='campus' smooth={true} offset={0} duration={500}>Campus</Link></li>
                <li><Link to='testimonials' smooth={true} offset={0} duration={500}>Testimonials</Link></li>
                <li><Link to='contact' smooth={true} offset={0} duration={500} className="btn">Contact Us</Link></li>
                
            </ul>
        </nav>
    );
}

export default Navbar;