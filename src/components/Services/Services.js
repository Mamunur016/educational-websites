import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './Services.css'

const Services = () => {
    const [courses, setCourses] = useState([]);
    const [cart, setCart] = useState([]);
    const [displaycart, setDisplayCart] = useState([]);

    // fetch the data
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    //  set unique value of array of object
    useEffect(() => {

        const key = 'key';

        const arrayUniqueByKey = [...new Map(cart.map(item => [item[key], item])).values()];
        setDisplayCart(arrayUniqueByKey);
    }, [cart])
    // event handler
    const handleAddToCart = (developer) => {
        const newCart = [...cart, developer];
        setCart(newCart);



    }

    return (
        <div className='courses-container'>

            <div className='course-container'>
                <Row xs={1} md={3} className="g-4">
                    {
                        courses.map(course => <Course
                            course={course}
                            key={course.key}
                            handleAddToCart={handleAddToCart}
                        ></Course>)
                    }
                </Row>
            </div>

            <div className="cart-container">
                <Cart cart={displaycart}></Cart>

            </div>


        </div>
    );
};

export default Services;