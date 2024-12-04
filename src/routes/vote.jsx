/* eslint-disable no-unused-vars */
import { createFileRoute, Link } from "@tanstack/react-router";
import React from "react";
import {
  Button,
  Container,
  Carousel,
  Row,
  Col,
  ListGroup,
  Card,
  Accordion,
  DropdownButton,
  Navbar,
} from "react-bootstrap";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/vote.css";
import person from "../assets/person.png";
import person_1 from "../assets/person_1.png";
import person_2 from "../assets/person_2.png";
// import person_3 from "../assets/person_3.png";

export const Route = createFileRoute("/vote")({
  component: Index,
});

const Votes = () => {
  const votingData = [
    {
      id: 1,
      name: "aa",
      image: person,
      label: "A1",
    },
    {
      id: 2,
      name: "aa",
      image: person_1,
      label: "A2",
    },
    {
      id: 3,
      name: "aa",
      image: person_2,
      label: "A3",
    },
    {
      id: 4,
      name: "Azril",
      image: "https://via.placeholder.com/150",
      label: "No 4",
    },
    {
      id: 5,
      name: "Azril",
      image: "https://via.placeholder.com/150",
      label: "A5",
    },
  ];
  return (
    <div className="Votes py-5">
      <Container className="mt-5">
        <Row className="justify-content-center mb-4 ">
          <Card className=" p-4 border-0" style={{ background: "#ef8f2e" }}>
            <h1 className="fw-bold voting-header text-center text-light">
              {" "}
              Tentukan Pilihanmu Sekarang!{" "}
            </h1>
          </Card>
        </Row>
        <Row className="justify-content-center">
          {votingData.map((candidate) => (
            <Col
              key={candidate.id}
              md={3}
              sm={4}
              xs={6}
              className="mb-4 d-flex align-items-stretch"
            >
              <Card
                className="voting-card shadow"
                style={{ cursor: "pointer" }}
              >
                <div className="image-wrapper">
                  <Card.Img
                    variant="top"
                    src={candidate.image}
                    alt={candidate.name}
                  />
                </div>
                <Card.Body className="text-center">
                  <Card.Title className="m-0">{candidate.label}</Card.Title>
                  <Card.Text className="fw-bold">{candidate.name}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

function Index() {
  return (
    <>
      <NavigationBar />
      <Votes />
      <Footer />
    </>
  );
}
