import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useCourses from '../../Hooks/useCourses';

const CourseDetails = () => {
    const [display, setDisplay] = useState();
    const { servicesKey } = useParams();
    const [courses] = useCourses();

    return (
        <div>
            {
                courses[0].key
            }

        </div>
    );
};



export default CourseDetails;