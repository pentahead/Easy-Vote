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
import Swal from "sweetalert2";
import "../../styles/vote.css";
import { useSpring, animated } from "@react-spring/web";

import person from "../../assets/person.png";
import person_1 from "../../assets/person_1.png";
import person_2 from "../../assets/person_2.png";
// import person_3 from "../assets/person_3.png";

const VoteItem = () => {
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
      name: "Fawait",
      image: person_1,
      label: "A2",
    },
    {
      id: 3,
      name: "Zai",
      image: person_2,
      label: "A3",
    },
  ];
  const formAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 200, friction: 20 },
  });
  return (
    <animated.div style={formAnimation}>
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
    </animated.div>
  );
};
export default VoteItem;
