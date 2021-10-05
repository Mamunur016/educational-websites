import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import Member from '../Member/Member';
import './ourteam.css'

const OurTeam = () => {

    const [members, setMembers] = useState([]);

    // fetch the data 
    useEffect(() => {
        fetch('./ourteam.json')
            .then(res => res.json())
            .then(data => setMembers(data));
    }, []);

    return (
        <div className='our-team pt-5 pb-5 bg-light text-center'>
            <Container>
                <h4 className='text-center text-muted mb-5'> Meet Our Team</h4>
                <Row xs={1} lg={2} xl={3} className="g-4">
                    {
                        members.map(member => <Member member={member}
                            key={member.key}
                        ></Member>)
                    }
                </Row>
            </Container>
        </div>
    );
};



export default OurTeam;