import React from 'react';
import { Card, Col, Container, FormControl, Image, InputGroup, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import useCourses from '../../Hooks/useCourses';


const Home = () => {
    // useCourses function
    let [courses] = useCourses();
    courses = courses.slice(0, 6); /// array slice
    return (
        <div className='home'>
            {/* welcome text */}
            <div className="welcome-text  text-center pt-5 pb-5">
                <h1> WELCOME TO GoStudy</h1>
                <h6> We Are GoStudy An Online Learning Center</h6>
                <h1>Over 1500+ courses with
                    professional global certificate</h1>
                <p>You can start and finish one of these popular courses in under a day - for free!
                    Check out the list below.. Take the course for free</p>
            </div>
            <Container>

                <InputGroup className="mb-3">

                    <FormControl
                        placeholder="what do you want to learn?"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </Container>
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
                            <li>Get unlimited access to 4,000+ of our top courses</li>
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
                    <Row xs={1} md={3} className="g-4">
                        {
                            courses.map(course => <Cour
                                course={course}
                                key={course.key}
                            ></Cour>)
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

// cour components

const Cour = (props) => {
    const { category, title, img, free, instructor, key } = props.course;
    const { star, starCount } = instructor;

    return (
        <div className=''>

            <Col>
                <Card className='p-3 border-0 shadow rounded-3 course' style={{ minHeight: "550px" }}>
                    <div className='text-center'>
                        <Card.Img variant="top" src={img} style={{
                            width: '250px', height: '200px',
                            borderRadius: "5px"
                        }} />
                    </div>
                    <Card.Body>
                        <Card.Title className='text-success'>{category}</Card.Title>
                        <Card.Text>
                            <h6><small>{title}</small></h6>
                            <h4>Course Free:$ {free}</h4>
                            <h4>

                                {star}<Rating
                                    initialRating={star}
                                    emptySymbol="far fa-star icon-color"
                                    fullSymbol="fas fa-star icon-color"
                                    readonly></Rating>({starCount})
                            </h4>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='border-0 bg-white text-center '>


                        {/* to={`/services/${key}`} */}
                        <Link to='' >
                            <button className="btn btn-success ps-5 pe-5">Details</button>
                        </Link>

                    </Card.Footer>
                </Card>
            </Col>
        </div>

    );
};

export default Home;