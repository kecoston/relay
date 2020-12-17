import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Row, Col, Container } from "../components/Grid";
import TimerBtn from "../components/TimerBtn";
import Timer from "../components/Timer";

export default class Workout extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col size="lg-3">
                           
                        </Col>
                        <Col size="lg-6">
                            <Jumbotron>
                                <hr />
                                <Timer />
                                <hr />
                                <TimerBtn />
                            </Jumbotron>
                        
                        </Col>
                        <Col size="lg-6">
                           
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}

