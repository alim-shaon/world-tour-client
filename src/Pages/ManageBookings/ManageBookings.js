import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useBookings from '../../Hooks/useBookings';
import SingleBooking from './SingleBooking/SingleBooking';

const ManageBookings = () => {
    const [bookings, setBookings] = useBookings();


    const handelCancelBooking = (id) => {

        const proceed = window.confirm('Are you sure you want to cancle this');
        if (proceed) {
            const url = `https://spooky-zombie-00664.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount) {
                        alert('deleted succesfully');
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                })
        }


    }
    const handelChangeStatus = (id) => {
        const book = bookings.find(booking => booking._id === id);
        const bookingUpdate = { ...book };
        bookingUpdate.status = "approved"
        const url = `https://spooky-zombie-00664.herokuapp.com/bookings/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingUpdate)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);

                if (data.modifiedCount > 0) {
                    alert('status Updated');

                    // the browser will do a complete page refresh from the server and not from the cached version of the page to show the status change.
                    window.location.reload(false);
                }
            })
    }

    return (
        <div>
            <Container className="my-5">
                <h1 className="my-5">Booked Packages</h1>
                <Row xs={1} md={1} className="g-4">
                    {
                        bookings.map(booking => <SingleBooking
                            key={booking._id}
                            booking={booking}
                            handelCancelBooking={handelCancelBooking}
                            handelChangeStatus={handelChangeStatus}
                        >

                        </SingleBooking>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ManageBookings;