import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>

                    <Nav className="me-auto">
                        <NavLink to='/home' className='nav-item'>Home</NavLink>
                        <NavLink to='/about' className='nav-item'>About</NavLink>
                        <NavLink to='/services' className='nav-item'>Services</NavLink>
                        <NavLink to='/ourteam' className='nav-item'>Our Team</NavLink>


                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;