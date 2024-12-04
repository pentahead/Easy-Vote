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
import Swal from "sweetalert2";

import person from "../assets/person.png";
import person_1 from "../assets/person_1.png";
import person_2 from "../assets/person_2.png";
// import person_3 from "../assets/person_3.png";

export const Route = createFileRoute("/vote")({
  component: Index,
});

const Votes = () => {
  const handleVote = (candidate) => {
    Swal.fire({
      title: `Konfirmasi Pilihan`,
      text: `Apakah Anda yakin memilih ${candidate.name} (${candidate.label})?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#ef8f2e",
      cancelButtonColor: "#cfcccc",
      confirmButtonText: "Ya, pilih!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Terima Kasih!",
          text: `Pilihan Anda untuk ${candidate.name} (${candidate.label}) telah diterima.`,
          icon: "success",
          confirmButtonColor: "#ef8f2e",
        });
      }
    });
  };

  const votingData = [
    {
      id: 1,
      name: "Faruq",
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
  ];
  return (
    <div className="Votes py-5" style={{ background: "#e7edf0" }}>
      <Container>
        <Row className="justify-content-center mb-4 ">
          <Card className=" p-4 border-0" style={{ background: "#000000" }}>
            <h1
              className="fw-bold voting-header text-center text-light "
              style={{ textShadow: "2px 2px 10px  #000000" }}
            >
              {" "}
              Tentukan Pilihanmu Sekarang!{" "}
            </h1>
          </Card>
        </Row>
        <Row className="justify-content-center">
          {votingData.map((candidate) => (
            <Col
              key={candidate.id}
              md={4}
              sm={4}
              xs={6}
              className="mb-4 d-flex align-items-stretch"
            >
              <Card
                className="voting-card shadow-lg"
                style={{ cursor: "pointer" }}
                onClick={() => handleVote(candidate)}
              >
                <div className="image-wrapper">
                  <Card.Img
                    variant="top"
                    src={candidate.image}
                    alt={candidate.name}
                  />
                </div>
                <Card.Body className="text-center">
                  <Card.Title className="m-0 fw-bold fs-2">
                    {candidate.name}
                  </Card.Title>
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
