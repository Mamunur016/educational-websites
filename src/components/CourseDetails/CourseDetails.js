import React, { useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { useParams } from 'react-router';

import useCourses from '../../Hooks/useCourses';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUser, faStar, faPlay, faBath, faUserGraduate, faUserTag, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import './CourseDetails.css'
import { Link } from 'react-router-dom';

const CourseDetails = () => {


    const { servicesKey } = useParams();
    const [courseDetails, setCourseDetails] = useState([]);
    // const [courses, setCourses] = useCourses();

    const [courses, setCourses] = useState([]);



    useEffect(() => {

        fetch('https://api.jsonbin.io/b/615c697d9548541c29be5818')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    // console.log(courses);


    useEffect(() => {

        for (const course of courses) {
            if (course.key === servicesKey) {
                // console.log(course);
                setCourseDetails(course);
            }
        }

    }, [courses]);


    // console.log(courseDetails.key);
    const { title, subTitle, img, free, instructor, learn, requirements } = courseDetails;


    return (
        <div className='courseDetails-container pt-5 pb-5 bg-light '>
            <Container>
                <h1 className='text-success fw-normal mb-3 '>CourseDetails</h1>
                <div className="courseDetails">

                    <Image src={img} rounded></Image>

                    <div className='pt-3 pb-3'>
                        <h4>{title}.</h4>
                        <h5>{subTitle}</h5>
                        <h4>Course-free:$ {free}</h4>
                    </div>



                    <div className='pt-3 pb-3'>
                        <h2>Why to learn:</h2>
                        <p className='text-center'>{learn}.</p>
                    </div>
                    <div className='pt-3 pb-3'>
                        <h2 > Requirements: </h2>
                        <p> {requirements}</p>
                    </div>
                    <div className='pt-3 pb-3'>
                        <h2>
                            <u> Instructor:</u>
                        </h2>
                        <h4 className='text-primary mt-3'>{instructor?.name}</h4>

                        <h6>{instructor?.job}</h6>

                        <div className='d-flex align-items-center'>

                            <Image src={instructor?.img} roundedCircle></Image>

                            <div className='ms-5'>

                                <div className='d-flex'>

                                    <p className='me-3'> <FontAwesomeIcon icon={faStar} /></p>
                                    <p>{instructor?.star} instructor ratings </p>
                                </div>


                                <div className='d-flex'>

                                    <p className='me-3'> <FontAwesomeIcon icon={faUserTag} /></p>

                                    <p>{instructor?.starCount} people reviews</p>
                                </div>
                                <div className='d-flex'>

                                    <p className='me-3'> <FontAwesomeIcon icon={faUser} /></p>

                                    <p>{instructor?.students}  students</p>
                                </div>
                                <div className='d-flex'>

                                    <p className='me-3'> <FontAwesomeIcon icon={faPlayCircle} /></p>

                                    <p>{instructor?.courses} courses</p>
                                </div>

                            </div>

                        </div>
                        <p><b>Details:</b>{instructor?.details}</p>

                    </div>
                </div>

                <div className="pt-5 pb-5 text-center">
                    <Link to='/services'>
                        <div className="btn btn-success ">See All Courses</div>
                    </Link>
                </div>

            </Container>



        </div>
    );
};




export default CourseDetails;