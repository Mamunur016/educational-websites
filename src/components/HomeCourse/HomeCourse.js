// Home course

import { Card, Col } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const HomeCourse = (props) => {
    const { title, subTitle, img, free, instructor, key } = props.course;
    const { star, starCount } = instructor;

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
                        <Card.Title className='text-success'>{title}</Card.Title>
                        <Card.Text>
                            <h6><small>{subTitle}</small></h6>
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
                    <Card.Footer className='border-0 bg-white text-center '>


                        {/* to={`/services/${key}`} */}
                        <Link to='' >
                            <button className="btn btn-success ps-5 pe-5">Details</button>
                        </Link>

                    </Card.Footer>
                </Card>
            </Col>
        </div>

    );
};
export default HomeCourse;
