import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import useBookings from '../../Hooks/useBookings';
import MySingleBooking from './MySingleBooking/MySingleBooking';

const MyBookings = () => {
    const [bookings, setBookings] = useBookings();

    const { user } = useAuth();

    let currentUserBookings = [];
    bookings.length ? currentUserBookings = bookings.filter(booking => booking.email === user.email) : currentUserBookings = [];

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

    return (
        <div>
            <Container className="my-5">
                <h1 className="my-5">My Bookings</h1>
                <Row xs={1} md={1} className="g-4">
                    {
                        currentUserBookings?.map(booking => <MySingleBooking
                            key={booking._id}
                            booking={booking}
                            handelCancelBooking={handelCancelBooking}
                        >
                        </MySingleBooking>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default MyBookings;