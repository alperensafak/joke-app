import React, {useState} from 'react';
import {Wrapper,Row,Header,Image,Form,Search} from "./components/styled/index"
import Lottie from 'react-lottie';
import animationData from './lotties/laugh.json';

const App = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
            <Wrapper>
                <Row>
                    <Header>JOKE APP</Header>
                    <Image> <Lottie options={defaultOptions} /></Image>
                </Row>

                <Form onSubmit={}>
                    <Search type="text" placeholder="Search..." value={} onChange={handleChange}/>
                </Form>

            </Wrapper>
        </div>
    );
};

export default App;