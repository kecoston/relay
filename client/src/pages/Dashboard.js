import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import { Row, Col, Container } from "../components/Grid";
import { StartBtn, UserBtns } from "../components/Buttons";

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Container>
                    <Row>
                        <Col size="lg-3"></Col>
                        <Col size="lg-6">
                            <br />
                            <div className="card">
                                <div className="card-header">
                                    User
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <hr />
                                    <UserBtns />
                                </div>
                            </div>
                            <br />
                        </Col>
                        <Col size="lg-3">
                            
                        </Col>
                    </Row>
                    <hr />
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

