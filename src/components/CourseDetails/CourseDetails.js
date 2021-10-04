import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useCourses from '../../Hooks/useCourses';

const CourseDetails = () => {
    const [display, setDisplay] = useState();
    const { servicesKey } = useParams();
    const [courses] = useCourses();

    return (
        <div>
            <h1>gh</h1>

        </div>
    );
};



export default CourseDetails;