import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import Rating from 'react-rating';
import './Course.css'

const Course = (props) => {
    const { category, title, img, free, instructor } = props.course;
    const { star, starCount } = instructor;
    console.log(props);
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
                    <Card.Footer className='border-0 bg-white d-flex justify-content-between align-items-center'>

                        {/* button for event handler */}
                        <button
                            onClick={() => props.handleAddToCart(props.course)}
                            className="btn-regular me-5"
                        ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>

                        <div className="btn btn-success">Details</div>

                    </Card.Footer>
                </Card>
            </Col>
        </div>

    );
};

export default Course;