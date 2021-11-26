import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle, setIsLoading } = useAuth();
    const [error, setError] = useState("");

    const location = useLocation();
    const history = useHistory();
    const redirectUri = location.state?.from || '/home';

    const handelGoogleSignin = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirectUri);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
    return (
        <div>
            <Container className="my-5">
                <Card className="my-5 py-5 rounded w-100 w-lg-50 mx-auto shadow login-card">
                    <Card.Body>
                        <Card.Title className="my-5 fw-bolder fs-3">Hello!! Welcome to WorldTour</Card.Title>
                        <Card.Text className=" h-50">
                            <span className="fw-bold fs-5 ">Log-In-Here</span> <br />
                            <button onClick={handelGoogleSignin} className="common-button my-4">Log-In-With-Google</button>
                            {error}
                        </Card.Text>

                    </Card.Body>

                </Card>
            </Container>
        </div>
    );
};

export default Login;