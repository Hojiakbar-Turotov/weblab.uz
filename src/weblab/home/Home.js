import React, { useState, useEffect } from 'react';
import { Nav, Navbar, NavbarToggler, NavItem, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';




export default function Home() {

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

    return (
        <>
                   <Navbar className={x.join(" ")} light expand="md">
            <Link to="/" className="navbar-brand">
                WEB<b>LAB</b>UZ
            </Link>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav>
                    <NavItem>
                        <Link to="/">HoMe</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/labs">LaBS</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/">CoNTaCT</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/">ABouT</Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        </>
    )
}
