import React, { useState, useEffect } from 'react';
import { Nav, Navbar, NavbarToggler, NavItem, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';

const NavSec = () => {

    const [isOpen, setIsOpen] = useState(false); 

    const toggle = () => setIsOpen(!isOpen);

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;

        if(offset > 200){
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    let x = ['navbar'];
    if(scrolled){
        x.push('fixed');
    }


    return(
        <>
        <Navbar className={x.join(" ")} light expand="md">
            <Link to="/" className="navbar-brand">
                WEB<b>LAB</b>UZ
            </Link>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="navbar-nav">
                    <NavItem className="nav-item">
                        <Link to="/">Home</Link>
                    </NavItem>
                    <NavItem className="nav-item">
                        <Link to="/portfolio">Portfolio</Link>
                    </NavItem>
                    <NavItem className="nav-item">
                        <Link to="/">SetUp</Link>
                    </NavItem>
                    <NavItem className="nav-item">
                        <Link to="/">About me</Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        </>
    )
}

export default NavSec;