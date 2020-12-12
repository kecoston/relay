import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "../components/Login/Login"
import { Row, Col, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

export default class Landing extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="lg-3"></Col>
                    <Col size="lg-6">
                        <Jumbotron>
                            <h4>Welcome to Relay</h4>
                            <p className="text-muted" style={{fontStyle: "italic"}}>Slogan</p>
                            <hr />
                            <Login />
                            <hr />
                            <p>Not a member? Sign up <Link
                          to="/user"
                          style={{
                            borderRadius: "3px",
                            letterSpacing: "1.5px",
                            paddingRight: "10px"
                          }}
                        >
                        here
                        </Link></p>
                        </Jumbotron>

                    </Col>
                    <Col size="lg-3"></Col>
                </Row>
            </Container>
        )
    }
}

