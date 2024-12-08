/* eslint-disable no-unused-vars */
import { createFileRoute, Link } from "@tanstack/react-router";
import React, { useEffect, useState } from "react";
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
  Form,
} from "react-bootstrap";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/vote.css";
import CodesItem from "../components/Vote/CodeItem";
import { useSpring, animated } from "@react-spring/web";
import pemilu_1 from "../assets/pemilu-1.png";
import pemilu_2 from "../assets/pemilu-2.png";
import pemilu_3 from "../assets/pemilu-3.png";
import pemilu_4 from "../assets/pemilu-4.png";
import { event } from "../service/event";

export const Route = createFileRoute("/vote")({
  component: Index,
});

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(false);
  const [eventData, setEventData] = useState([]);
  const [selectedCode, setSelectedCode] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      const data = await event();
      setEventData(data);
    };
    fetchEventData();
  }, []);

  const handleEventSubmit = async (eventCode) => {
    setSelectedCode(eventCode);
    setSelectedEvent(true);
  };

  const formAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 200, friction: 20 },
  });
  return (
    <div className="Votes py-5 " style={{ background: "#e7edf0" }}>
      <Container className="vh-100">
        {!selectedEvent ? (
          <>
            <Row className="justify-content-center mb-4  ">
              <Card
                className=" p-4 border-0 "
                style={{ background: "#000000" }}
              >
                <h1
                  className="fw-bold voting-header text-center text-light "
                  style={{ textShadow: "2px 2px 10px  #000000" }}
                >
                  {" "}
                  Pilih Event Voting{" "}
                </h1>
              </Card>
            </Row>

            <animated.div style={formAnimation}>
              <Row className="justify-content-center d-flex">
                <Card style={{ width: "80%" }} className=" text-center">
                  <Card.Body>
                    <animated.div style={formAnimation}>
                      <Row className="justify-content-center">
                        {eventData.map((event) => (
                          <Col
                            key={event.id}
                            md={4}
                            sm={4}
                            xs={6}
                            className="mb-4 d-flex align-items-stretch"
                          >
                            <Card
                              className="voting-card shadow-lg"
                              style={{ cursor: "pointer" }}
                              onClick={() => handleEventSubmit(event.code)}
                            >
                              <div className="image-wrapper">
                                <Card.Img
                                  variant="top"
                                  src={event.image || pemilu_1}
                                  alt={event.name}
                                />
                              </div>
                              <Card.Body className="text-center">
                                <Card.Title className="m-0 fw-bold fs-2">
                                  {event.name}
                                </Card.Title>
                                <Card.Text className="mt-3">{event.description}</Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </animated.div>
                  </Card.Body>
                </Card>
              </Row>
            </animated.div>
          </>
        ) : (
          <CodesItem
            code={selectedCode}
            onBack={() => setSelectedEvent(false)}
          />
        )}
      </Container>
    </div>
  );
};

function Index() {
  return (
    <>
      <NavigationBar />
      <Events />
      <Footer />
    </>
  );
}
