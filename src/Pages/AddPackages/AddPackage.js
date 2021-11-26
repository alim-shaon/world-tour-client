import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Container } from 'react-bootstrap';

const AddPackage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        const newData = { ...data }
        const url = `https://spooky-zombie-00664.herokuapp.com/addPackage`;
        axios.post(url, newData)
            .then(res => {
                if (res.data.insertedId);
                alert('Successfully added');
                reset();
            });
    }
    return (
        <div>
            <Container className="my-5">
                <h1 className="mt-5">Add New Packages</h1>
                <form className="d-flex flex-column justify-content-center align-items-center
                " onSubmit={handleSubmit(onSubmit)}>

                    <input className="form-control mt-5 mb-3 w-50" type="text" placeholder="packageName" {...register("packageName", { required: true })} />
                    {errors.packageName?.type === 'required' && "This Field is required"}

                    <input className="form-control my-3  w-50" type="text" placeholder="Image-Url" {...register("img", { required: true })} />
                    {errors.img?.type === 'required' && "This Field is required"}

                    <input className="form-control my-3  w-50" type="text" placeholder="Duration" {...register("duration", { required: true })} />
                    {errors.duration?.type === 'required' && "This Field is required"}

                    <input className="form-control my-3  w-50" type="number" placeholder="Price" {...register("price", { required: true })} />
                    {errors.price?.type === 'required' && "This Field is required"}

                    <textarea placeholder="Description" className="form-control my-3  w-50 "{...register("description", {})} />
                    {errors.description?.type === 'required' && "This Field is required"}
                    <input className="w-50 common-button mb-5" type="submit" />
                </form>
            </Container>
        </div>
    );
};

export default AddPackage;