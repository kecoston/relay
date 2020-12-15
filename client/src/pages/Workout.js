import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Row, Col, Container } from "../components/Grid";
import { DashBtns } from "../components/Buttons";
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
                                <DashBtns />
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

