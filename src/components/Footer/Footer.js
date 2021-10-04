import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (

        <div className='footer'>
            <Container>
                <Row>
                    <Col xs={6} md={3}>
                        <h4>GoStudy</h4>
                        <p>We support programs that create advancement opportunities for people.</p>
                    </Col>
                    <Col xs={6} md={3}>
                        <h4>Useful links</h4>

                        <p>  <Link to='/about' className='nav-item-footer'>
                            About Us
                        </Link></p>
                        <p>  <Link to='/ourteam' className='nav-item-footer'>
                            Our Team
                        </Link></p>
                        <p>  <Link to='/instructor' className='nav-item-footer'>
                            Instructor
                        </Link></p>

                    </Col>
                    <Col xs={6} md={3}>
                        <h4>
                            Learning</h4>
                        <p><Link className='nav-item-footer'>Project Management</Link></p>
                        <p><Link className='nav-item-footer'>WordPress Development</Link></p>
                        <p><Link className='nav-item-footer'>Business Strategy</Link></p>
                        <p><Link className='nav-item-footer'>Software Development</Link></p>

                    </Col>
                    <Col xs={6} md={3}>
                        <h4>

                            Contact Us</h4>
                        <p>
                            House 82, Road 10/1, Block D, Niketan, Gulshan 1, Dhaka - 1212.
                        </p>
                        <p>+91 458 654 528</p>
                        <p>gostudy@gmail.com</p>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={6}>Designed & Developed by GoStudy</Col>
                    <Col md={6} >
                        <p className="text-end">
                            © Copyright 2021 Gostudy All rights reserved.
                        </p>

                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default Footer;