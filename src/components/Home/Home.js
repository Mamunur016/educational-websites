import React from 'react';
import { Card, Col, Container, FormControl, Image, InputGroup, Row } from 'react-bootstrap';
//  import backgroundImage from '../../images/giphy.gif';
import { Link } from 'react-router-dom';
import useCourses from '../../Hooks/useCourses';
import HomeCourse from '../HomeCourse/HomeCourse';


const Home = () => {
    // useCourses function
    let [courses] = useCourses();
    const backgroundImage = 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZWR1Y2F0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';

    // https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZWR1Y2F0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60

    courses = courses.slice(0, 4); /// array slice
    return (
        <div className='home'>

            {/* welcome text */}
            <div className=" d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    color: "white",
                    minHeight: '500px'

                }}>
                <Container>
                    <div className="welcome-text  text-center pt-5 pb-5">
                        <h1> WELCOME TO GoStudy</h1>
                        <h6> We Are GoStudy An Online Learning Center</h6>
                        <h1>Over 1500+ courses with
                            professional global certificate</h1>
                        <p>You can start and finish one of these popular courses in under a day - for free!
                            Check out the list below.. Take the course for free</p>
                        <InputGroup className="mt-5">

                            <FormControl
                                placeholder="what do you want to learn?"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </div>
                </Container>
            </div>

            {/* info area */}
            <div className='info pt-5 pb-5 bg-light'>
                <Container>
                    <Row>
                        <Col md={4}>
                            <Row>
                                <Col sm={3}>
                                    <img src="https://raistheme.com/wp/gostudy/learnpress/wp-content/uploads/sites/2/2021/02/737123.png" alt="" />
                                </Col>
                                <Col sm={9}>
                                    <h4>20K + Courses</h4>
                                    <p>You can start and finish one of these popular courses.</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4}>
                            <Row>
                                <Col sm={3}>
                                    <img src="https://raistheme.com/wp/gostudy/learnpress/wp-content/uploads/sites/2/2021/02/98622.png" alt="" />
                                </Col>
                                <Col sm={9}>
                                    <h4>Expert Instructor</h4>
                                    <p>You can start and finish one of these popular courses in under Expert instructore</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4}>
                            <Row>
                                <Col sm={3}>
                                    <img src="https://raistheme.com/wp/gostudy/learnpress/wp-content/uploads/sites/2/2021/02/89631.png" alt="" />
                                </Col>
                                <Col sm={9}>
                                    <h4>
                                        Lifetime Access</h4>
                                    <p>You can access this content Lifetime.</p>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>
            </div>
            {/* home images */}
            <div className='pt-5 pb-5'>
                <Container>
                    <Row>
                        <Col md={6}>
                            <Row>
                                <Col md={6}>
                                    <Image src="https://raistheme.com/wp/gostudy/learnpress/wp-content/uploads/sites/2/2021/06/PRO721.jpg" fluid rounded />
                                    <Image src="https://raistheme.com/wp/gostudy/learnpress/wp-content/uploads/sites/2/2021/06/PRO027.jpg" fluid rounded />
                                </Col>
                                <Col md={6}>
                                    <Image src="https://raistheme.com/wp/gostudy/learnpress/wp-content/uploads/sites/2/2021/09/BILA3.jpeg" fluid rounded />

                                </Col>
                            </Row>

                        </Col>
                        <Col md={6}>
                            <h4>For professional development report, career benefits</h4>
                            <p>You can start and finish one of these popular courses in under a day – for free! Check out the list below.. Take the course for free</p>
                            <li>Get unlimited access to 1500+ of our top courses</li>
                            <li>Explore a variety of fresh topics</li>
                            <li>Find the right instructor for you</li>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* learn section */}
            <div className="learn-section pt-5 pb-5 text-center bg-light">
                <Container>
                    <span className='text-primary fw-bold'><small>START LEARNING TODAY</small></span>
                    <h1>Pick Your Course</h1>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            courses.map(course => <HomeCourse
                                course={course}
                                key={course.key}
                            ></HomeCourse>)
                        }
                    </Row>
                    <div className="pt-5 pb-5">
                        <Link to='/services'>
                            <div className="btn btn-success ">See All Courses</div>
                        </Link>
                    </div>

                </Container>
            </div>

        </div>
    );
};


export default Home;