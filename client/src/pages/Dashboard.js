import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import { Row, Col, Container } from "../components/Grid";
//import { StartBtn } from "../components/Buttons";
import LogWorkout  from "../components/Cards/LogWorkout";
import AddContacts from "../components/Cards/AddContacts";
//import Location from "../components/Cards/Location";

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
                        <Col size="lg-2" />
                        <Col size="lg-4">

                            <Jumbotron>
                                <br />
                                <LogWorkout />
                                <br />
                            </Jumbotron>
                        </Col>
                        <Col size="lg-4">
                            <Jumbotron>
                                <br />
                                <AddContacts />
                                <br />
                            </Jumbotron>
                        </Col>
                        <Col size="lg-2" />
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

