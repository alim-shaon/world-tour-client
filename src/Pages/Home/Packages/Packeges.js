import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import usePackages from '../../../Hooks/usePackages';
import SinglePackage from '../SinglePackage/SinglePackage';



const Packeges = () => {
    const [packages] = usePackages();
    return (
        <div id="packages">
            {!packages.length ? <Spinner animation="border" role="status">
                < span className="visually-hidden" > Loading...</span >
            </Spinner > :

                <Container className="my-5">
                    <div className="d-flex align align-items-center my-4 pt-4">
                        <hr className="mx-3 opacity-100 flex-grow-1 common-color" />
                        <h1>Our Packages</h1>
                        <hr className="mx-3 opacity-100 flex-grow-1 common-color" />
                    </div>
                    <Row xs={1} md={2} className="g-4">
                        {
                            packages.map(eachPackage => <SinglePackage
                                key={eachPackage._id}
                                eachPackage={eachPackage}
                            >

                            </SinglePackage>)
                        }
                    </Row>
                </Container>


            }
        </div>


    );
};

export default Packeges;