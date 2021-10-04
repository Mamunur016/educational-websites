import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div>

            <div className='about-text pt-5 pb-5 text-center bg-light'>
                <Container>
                    <h4>About GoStudy</h4>
                    <p>GoStudy is where smart and enthusiastic Bangladeshi people, who are lifelong learners, come to get the skills they need and to transform their lives as they want. We are a community of enthusiastic learners united in a shared objective of life transformation through self-learning.</p>
                </Container>

            </div>
            <div className='mission pt-5 pb-5' style={{ backgroundColor: "#E1EBED" }}>
                <Container>
                    <Row>
                        <Col md={6}>
                            <Row xs={1} md={3} className="g-3">
                                <Col >
                                    <Image src='https://bohubrihi.com/wp-content/uploads/2018/03/Tulie-150x150.jpg' rounded fluid></Image>
                                </Col>
                                <Col >
                                    <Image src='https://bohubrihi.com/wp-content/uploads/2018/02/Bohubrihi-Discussion-Forums-150x150.jpg' rounded fluid></Image>
                                </Col>
                                <Col >
                                    <Image src='https://bohubrihi.com/wp-content/uploads/2017/07/woman-typing-writing-windows-compressed-150x150.jpg' rounded fluid></Image>
                                </Col>
                                <Col >
                                    <Image src='https://bohubrihi.com/wp-content/uploads/2018/09/Bohubrihi-Bangla-Online-Courses-150x150.jpg' rounded fluid></Image>
                                </Col>
                                <Col >
                                    <Image src='https://bohubrihi.com/wp-content/uploads/2017/05/ebrtyyjwpry-radek-grzybowski-150x150.jpg' rounded fluid></Image>
                                </Col>
                                <Col >
                                    <Image src='https://bohubrihi.com/wp-content/uploads/2018/02/Bohubrihi-Discussion-Forums-150x150.jpg' rounded fluid></Image>
                                </Col>


                            </Row>
                        </Col>
                        <Col md={6}>
                            <Card style={{
                                backgroundColor: "#8D6399",
                                marginBottom: '15px',
                                borderRadius: '5px'
                            }}>
                                <Card.Body>
                                    <Card.Title>Our Mission</Card.Title>

                                    <Card.Text>
                                        Our mission is to even up education through the offering of high-quality learning opportunities that are accessible, flexible, and affordable. Virtually anyone anywhere in Bangladesh with an internet connection and a determination of self-learning can come to GoStudy, master an array of skills, and start working to pursue his dreams.
                                    </Card.Text>

                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='vission-future pt-5 pb-5 bg-light ' >
                <Container>
                    <Row>
                        <Col md={6}>
                            <Card style={{ backgroundColor: "#6BA5A2", borderRadius: '5px' }}>
                                <Card.Body>
                                    <Card.Title>Our Vision</Card.Title>

                                    <Card.Text>
                                        GoStudy is where motivated learners will come to learn the skills they need, to pursue the jobs they wish, to build things they want and to lead the lives they deserve. Students will be offered with opportunity to do some close to real-world projects curated by experts. These will help them to have the experience and portfolio for future. The online courses will come from not only individuals but rather renowned and established organizations of many different sectors- to provide the best quality education and recognition to the people of Bangladesh. Our goal is to grow exponentially and to engage and educate 1 million people by 2022.
                                    </Card.Text>

                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md={6}>
                            <Card style={{ backgroundColor: "#6CA6A3", borderRadius: '5px' }}>
                                <Card.Body>
                                    <Card.Title>What's In The Future?</Card.Title>

                                    <Card.Text>
                                        Our future learning models and personalized support system will enable an unimaginable degree of engagement with our students and instructors. And, we will be with them through every phase of their learning graph: from the time the social media team may reply a query on Facebook Page, to the fulfilling moment when the career-counselling team will get the email that a learner has found a job or started something new with the knowledge he gained here. Our priority is always the betterment of our students, and this flare will always inspire us to offer high-quality practical education to as many people as we can reach through internet.
                                    </Card.Text>

                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='about-bottom pb-5 pt-5 text-center' style={{ backgroundColor: "#E1EBED" }}>
                <Container>
                    <p>Whether you are a recent graduate trying to land your first job, or a mid-level professional eager for advancement, or just a person wanting to learn about an emerging subject, GoStudy is and will be for everyone.

                        Just go to the course of your choice and hit the ‘enroll’ button. That’s how easy it is to start learning on GoStudy!</p>
                </Container>
            </div>

        </div>
    );
};

export default About;