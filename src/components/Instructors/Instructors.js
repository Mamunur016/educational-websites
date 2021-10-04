import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import './Instructors.css'

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('./instructor.JSON')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div className='instructor-container'>
            <Container>
                <h4 className='text-center pt-3 pb-5 text-success'>Meet Our Instructor</h4>
                <Row xs={1} md={2} className="g-4">
                    {
                        instructors.map(instructor => <Instructor
                            instructor={instructor}
                            key={instructor.name}
                        ></Instructor>)



                    }
                </Row>

            </Container>
        </div>
    );
};
const Instructor = (props) => {
    const { name, job, img, star, details, starCount } = props.instructor;
    return (
        <div>
            <Col>
                <Card className='p-3 border-0 shadow rounded-3' style={{ minHeight: "800px" }}>

                    <Card.Body>
                        <Card.Title className='text-success'>{name}</Card.Title>
                        <Card.Text>
                            <p>{job}</p>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div >
                                    <Image src={img} roundedCircle></Image>
                                </div>
                                <div>
                                    <h5>

                                        Rating: {star}<Rating
                                            initialRating={star}
                                            emptySymbol="far fa-star icon-color"
                                            fullSymbol="fas fa-star icon-color"
                                            readonly></Rating>
                                    </h5>
                                    <h5>Reviews:{starCount}</h5>
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

export default Instructors;