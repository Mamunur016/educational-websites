import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
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
        <div className='our-team pt-5 pb-5 bg-light'>
            <Container>
                <h4 className='text-center text-muted mb-5'> Meet Our Team</h4>
                <Row xs={1} md={3} className="g-4">
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

// single Member handle component
const Member = (props) => {
    const { name, img, position } = props.member;
    return (
        <div>
            <Col>
                <Card className='p-3 border-0 shadow rounded-3' style={{ minHeight: "450px" }}>
                    <div className='text-center'>
                        <Card.Img variant="top" src={img} style={{
                            width: '302px', height: '260px',
                            borderRadius: "5px"
                        }} />
                    </div>
                    <Card.Body>
                        <Card.Title className='text-success'>{name}</Card.Title>
                        <Card.Text>
                            {position}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='border-0 bg-white'>

                        <div className="icon">
                            <a href=""><i className="fas fa-link"></i></a>
                            <a href=""><i className="fab fa-linkedin-in"></i></a>
                            <a href=""><i className="fab fa-facebook"></i></a>
                        </div>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
}

export default OurTeam;