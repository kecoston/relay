import React, { Component } from "react";
import Nav from "../components/Nav";
//import Jumbotron from "../components/Jumbotron";
import { Row, Col, Container } from "../components/Grid";
//import { StartBtn } from "../components/Buttons";
import { Welcome } from "../components/Sections";

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Welcome />
                <Container>
                    <Row>
                        <Col size="lg-1">
                        
                        </Col>
                        <Col size="lg-6">
                           
                        </Col>
                        <Col size="lg-5">
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

