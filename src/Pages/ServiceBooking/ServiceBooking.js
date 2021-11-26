import React, { useEffect, useState } from 'react';
import { Card, Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';


const ServiceBooking = () => {
    const { packageId } = useParams();
    const [packageDetail, setPackageDetail] = useState({});
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://spooky-zombie-00664.herokuapp.com/packages/${packageId}`)
            .then(res => res.json())
            .then(data => setPackageDetail(data));
    }, [packageId]);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        const newData = { packageId: packageId, status: "pending", ...data }
        // console.log(newData);
        const url = `https://spooky-zombie-00664.herokuapp.com/bookpackage`;
        axios.post(url, newData)
            .then(res => {
                if (res.data.insertedId);
                alert('Successfully added');
                reset();
            })
            ;
    }

    return (
        <div>
            <Container className="py-5">
                <h1 className="my-4">Book your Tour</h1>
                {
                    !packageDetail._id ? <Spinner animation="border" role="status">
                        < span className="visually-hidden" > Loading...</span >
                    </Spinner >
                        :
                        <div>
                            <Card className="rounded h-100 shadow">
                                <Card.Img className="w-100 mx-auto booking-img" variant="top" src={packageDetail.img} />
                                <Card.Body>
                                    <Card.Title className="my-3">{packageDetail.packageName}</Card.Title>
                                    <Card.Text className="text-start h-50">
                                        {packageDetail.description} <br /><br />
                                        <span className="fw-bold"> Duration: </span>{packageDetail.duration} <br />
                                        <span className="fw-bold"> Price:</span> ${packageDetail.price}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                }

                <h1 className="mt-5">Your Information</h1>
                <form className="d-flex flex-column justify-content-center align-items-center
                " onSubmit={handleSubmit(onSubmit)}>

                    <input className="form-control mt-5 mb-3 w-50" type="email" defaultValue={user.email} placeholder="e-mail" {...register("email", { required: true })} />
                    {errors.email?.type === 'required' && "This Field is required"}

                    <input className="form-control my-3  w-50" type="text" defaultValue={user.displayName} placeholder="Name" {...register("displayName", { required: true })} />
                    {errors.displayName?.type === 'required' && "This Field is required"}

                    <input className="form-control my-3  w-50" type="text" placeholder="nationality" {...register("nationality", { required: true })} />
                    {errors.nationality?.type === 'required' && "This Field is required"}

                    <input className="form-control my-3  w-50" type="text" placeholder="City" {...register("city", { required: true })} />
                    {errors.city?.type === 'required' && "This Field is required"}

                    <input className="form-control my-3  w-50" type="number" placeholder="Phone" {...register("phone", { required: true })} />
                    {errors.phone?.type === 'required' && "This Field is required"}
                    <input className="w-50 common-button" type="submit" />
                </form>

            </Container>
        </div>
    );
};

export default ServiceBooking;