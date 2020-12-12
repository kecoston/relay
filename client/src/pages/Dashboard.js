import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import { Row, Col, Container } from "../components/Grid";
import { StartBtn } from "../components/Buttons";

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Container>
                    <Row>
                        <Col size="lg-3">
                        
                        </Col>
                        <Col size="lg-6">
                        <Jumbotron>
                                <h3>Log Workout</h3>
                                <hr />
                                <p>(Workout form goes here)</p>
                                <br />
                                <StartBtn />
                            </Jumbotron>
                        </Col>
                        <Col size="lg-3">
                            
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}

