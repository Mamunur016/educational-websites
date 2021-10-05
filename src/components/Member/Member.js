import { Card, Col, Image } from "react-bootstrap";

// single Member handle component
const Member = (props) => {
    const { name, img, position } = props.member;
    return (
        <div>
            <Col>
                <Card className='p-3 border-0 shadow rounded-3' style={{ minHeight: "400px" }}>
                    <div className='text-center'>
                        <Image src={img} roundedCircle style={{ height: '200px', width: '200px' }}></Image>
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
export default Member