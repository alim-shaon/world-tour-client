import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SinglePackage = ({ eachPackage }) => {
    const { _id, packageName, img, description, duration, price } = eachPackage;
    const history = useHistory();

    const handelPackage = () => {
        history.push(`/serviceBooking/${_id}`)
    }
    return (
        <Col>
            <Card className="rounded h-100 shadow">
                <Card.Img className="w-100 h-50 mx-auto" variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="my-3">{packageName}</Card.Title>
                    <Card.Text className="text-start h-50">
                        {description.slice(0, 198)}...
                    </Card.Text>
                    <button onClick={handelPackage} className="common-button">Book-Now  <FontAwesomeIcon icon={faArrowRight} /></button>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-around">
                    <p>Duration:{duration}</p>
                    <p>Price: ${price}</p>
                </Card.Footer>

            </Card>
        </Col>

    );
};

export default SinglePackage;