import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import { Row, Col, Container } from "../components/Grid";
//import { StartBtn } from "../components/Buttons";
import LogWorkout  from "../components/Cards/LogWorkout";
import AddContacts from "../components/Cards/AddContacts";
import BeginWorkout from "../components/Cards/BeginWorkout";

export default class Dashboard extends Component {

    render() {
        return (
            <div>
                <Nav />
                <Container>
                    <Row>
                        <Col size="lg-4">
                        <br />
                        <br />
                            <h5 style={{textAlign: "left", fontFamily: "Quicksand, sans-serif", fontWeight: 500}}>Welcome to your dashboard!</h5>
                            <p className="text-muted" style={{textAlign: "left", fontFamily: "Quicksand, sans-serif", fontStyle: "italic"}}>Take a look around</p>
                        </Col>
                        <Col size="lg-7">
                           
                        </Col>
                        <Col size="lg-1">

                        </Col>
                    </Row>

                    <hr />
                    <Row>
                    <h3 style={{textAlign: "center"}}>How It Works</h3>

                        <Col size="lg-4">

                            <Jumbotron>
                                <LogWorkout />
                            </Jumbotron>
                        </Col>
                        <Col size="lg-4">
                            <Jumbotron>
                                <AddContacts />
                            </Jumbotron>
                        </Col>
                        <Col size="lg-4">
                            <Jumbotron>
                                <BeginWorkout />
                            </Jumbotron>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col size="lg-3"></Col>
                        <Col size="lg-6">
                            <Jumbotron />
                        </Col>
                        <Col size="lg-3"></Col>
                    </Row>
                    <hr />

                </Container>
            </div>
        )
    }
}

