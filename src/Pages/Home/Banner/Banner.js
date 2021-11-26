import React from 'react';
import { Container } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
    return (
        <div className="banner pb-5">
            <Container className="py-5 mb-5 text-white">
                <h1 className="pt-5 mt-5">Welcome to <span className="fw-bolder common-color">World-Tour</span></h1>
                <p className="py-4 fw-bold">We offer a wide range of oppertunities to attact our Coustomer <br />
                    Book your Next Adventure From World-Tour</p>
                <HashLink to="/home#packages"><button className="common-button">Book-Now  <FontAwesomeIcon icon={faArrowRight} /> </button></HashLink>

            </Container>

        </div>
    );
};

export default Banner;