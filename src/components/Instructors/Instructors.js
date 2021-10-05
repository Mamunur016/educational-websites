
import React, { Component } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import Instructor from '../Instructor/Instructor';
import './Instructors.css'

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

    // fetch the data
    useEffect(() => {
        fetch('./instructor.JSON')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, []);

    return (
        <div className='instructor-container pt-2 pb-5'>
            <Container>
                <h4 className='text-center pt-3 pb-5 text-success'>Meet Our Instructor</h4>
                <Row xs={1} md={1} lg={2} className="g-4">
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
// single instructor Component


export default Instructors;