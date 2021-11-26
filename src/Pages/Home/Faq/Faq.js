import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import faqimg from '../../../Images/faq/faq.jpg'

const Faq = () => {
    return (
        <div>
            <Container className="my-5">
                <div className="d-flex align align-items-center my-4 pt-4">
                    <hr className="mx-3 opacity-100 flex-grow-1 common-color" />
                    <h1>Frequently Asked Qusetions</h1>
                    <hr className="mx-3 opacity-100 flex-grow-1 common-color" />
                </div>
                <Row xs={1} md={2} lg={2} className="g-4 align-items-center">
                    <Col className="my-5">
                        <img className="w-100" src={faqimg} alt="" />
                    </Col>
                    <Col>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>How do you ensure proper safety and htgiene in your tours</Accordion.Header>
                                <Accordion.Body>
                                    We take great pride in making sure our customers are safe throughout the whole duration of their trip, from start to finish. We follow the WHO hygienic guidelines and ensure that all our vehicles are properly disinfected with every ride. The use of masks is absolutely obligatory for all of our staff members. We have an on-arrival health screening and require a COVID-19 PCR test from all customers before travelling. There is limited contact or physical touching on all our tours as we always practice social distancing.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Is health insurance obligatory?</Accordion.Header>
                                <Accordion.Body>
                                    Although we don’t require health insurance to travel with us, in some cases health insurance may be obligatory as per the rules of the destination country’s government. Your travel consultant will inform you should this be the case for you.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Will I need to undergo any COVID-19 testing?</Accordion.Header>
                                <Accordion.Body>
                                    At the beginning of your tour, you will be screened for your health and asked to report any COVID-19 symptoms. Anyone displaying any symptoms or has any health concerns will be assisted to seek medical advice. All travellers are expected to continuously monitor their health throughout their travels and report any related symptoms to our local team immediately.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Will I be refunded if I am unwell before my trip and unable to travel?</Accordion.Header>
                                <Accordion.Body>
                                    If you fall ill and cannot make it on your tour, please refer to your travel consultant to let you know the alternative such as postponing or cancelling.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Faq;