import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useCourses from '../../Hooks/useCourses';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './Services.css'

const Services = () => {

    const [cart, setCart] = useState([]);
    const [displaycart, setDisplayCart] = useState([]);
    const [courses, setCourses] = useCourses();

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
                <Row xs={1} md={2} lg={3} className="g-4">
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