import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faMountain, faTrophy, faStar } from '@fortawesome/free-solid-svg-icons';
import './ChooseUs.css';



const ChooseUs = () => {
    return (
        <div>
            <Container className="my-5">
                <div className="d-flex align align-items-center my-5 py-5">
                    <hr className="mx-3 opacity-100 flex-grow-1 common-color" />
                    <h1>Why Choose Us</h1>
                    <hr className="mx-3 opacity-100 flex-grow-1 common-color" />
                </div>
                <Row xs={1} md={2} lg={4} className="g-4">
                    <Col className="choose-us-content shadow">
                        <FontAwesomeIcon className="custom-icon" icon={faMoneyBill} />
                        <h3 className="mt-4">Ultimate flexibility</h3>
                        <p>You’re in control, with free cancellation and payment options to satisfy any plan or budget.</p>
                    </Col>
                    <Col className="choose-us-content shadow">
                        <FontAwesomeIcon className="custom-icon" icon={faMountain} />
                        <h3 className="mt-4">Memorable experiences</h3>
                        <p>Browse and book tours and activities so incredible, you’ll want to tell your friends.</p>
                    </Col>
                    <Col className="choose-us-content shadow">
                        <FontAwesomeIcon className="custom-icon" icon={faStar} />
                        <h3 className="mt-4">Quality at our core</h3>
                        <p>High quality standards. Millions of reviews. A Tripadvisor company.</p>
                    </Col>
                    <Col className="choose-us-content shadow">
                        <FontAwesomeIcon className="custom-icon" icon={faTrophy} />
                        <h3 className="mt-4">Award-winning support</h3>
                        <p>New price? New plan? No problem. We’re here to help, 24/7.</p>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default ChooseUs;