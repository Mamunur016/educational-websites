import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { faPlayCircle, faStar, faUser, faUserTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Instructor.css'

const Instructor = (props) => {
    const { name, job, img, star, details, starCount, students, courses } = props.instructor;
    return (
        <div className='ma'>
            <Col>
                <Card className='p-3 border-0 shadow rounded-3 card' style={{ minHeight: "800px" }}>

                    <Card.Body>
                        <Card.Title className='text-success'>{name}</Card.Title>
                        <Card.Text>
                            <p>{job}</p>
                            <div className='d-flex align-items-center'>



                                <Image src={img} roundedCircle></Image>

                                <div className='ms-5'>

                                    <div className='d-flex'>

                                        <p className='me-3'> <FontAwesomeIcon icon={faStar} /></p>
                                        <p>{star} instructor ratings </p>
                                    </div>


                                    <div className='d-flex'>

                                        <p className='me-3'> <FontAwesomeIcon icon={faUserTag} /></p>

                                        <p>{starCount} people reviews</p>
                                    </div>
                                    <div className='d-flex'>

                                        <p className='me-3'> <FontAwesomeIcon icon={faUser} /></p>

                                        <p>{students}  students</p>
                                    </div>
                                    <div className='d-flex'>

                                        <p className='me-3'> <FontAwesomeIcon icon={faPlayCircle} /></p>

                                        <p>{courses} courses</p>
                                    </div>

                                </div>


                            </div>
                            <p className='mt-3'>{details}</p>
                        </Card.Text>
                    </Card.Body>

                </Card>
            </Col>
        </div>
    )
}

export default Instructor;