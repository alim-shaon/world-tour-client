import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';

const MySingleBooking = (props) => {
    const { _id, packageId, displayName, city, phone, email, status } = props.booking;
    const [packageDetail, setPackageDetail] = useState({});

    useEffect(() => {
        fetch(`https://spooky-zombie-00664.herokuapp.com/packages/${packageId}`)
            .then(res => res.json())
            .then(data => setPackageDetail(data));
    }, [packageId]);


    return (
        <Col>
            <div className="d-flex flex-column flex-md-row text-start">
                <img className="w-50 mx-3 border-0" src={packageDetail.img} alt="" />
                <div className="px-3">
                    <h1>{packageDetail.packageName}</h1>
                    <p>Name: {displayName}</p>
                    <p>Email: {email}</p>
                    <p>City: {city}</p>
                    <p>Phone: {phone}</p>
                    <p>Status: {status}</p>
                    <button className='common-button me-2' onClick={() => props.handelCancelBooking(_id)}>Cancel-booking</button>

                </div>
            </div>
        </Col >
    );
};

export default MySingleBooking;