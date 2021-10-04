import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>

                    <Nav className="me-auto">
                        <NavLink to='/home' className='nav-item' activeStyle={activeStyle}>Home</NavLink>
                        <NavLink to='/about' className='nav-item' activeStyle={activeStyle}>About</NavLink>
                        <NavLink to='/services' className='nav-item' activeStyle={activeStyle}>Services</NavLink>
                        <NavLink to='/ourteam' className='nav-item' activeStyle={activeStyle}>Our Team</NavLink>
                        <NavLink to='/instructor' className='nav-item' activeStyle={activeStyle}>Instructor</NavLink>

                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;