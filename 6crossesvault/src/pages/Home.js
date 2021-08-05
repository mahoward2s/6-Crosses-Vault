import React from "react";
import { Image, Container, Row, } from 'react-bootstrap'


function Home() {
    return (
        <div>
            <Container>
                <Row className="justify-content-center">
                    <Image
                        src={process.env.PUBLIC_URL + "/images/Six Cross Vault.png"}
                        style={{
                            height: '100vh',
                            width: '100vw',
                            margin: '0',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            position: 'absolute'
                        }}
                    />
                </Row>
            </Container>
        </div >
    );
}

export default Home;