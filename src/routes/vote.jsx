/* eslint-disable no-unused-vars */
import { createFileRoute, Link } from "@tanstack/react-router";
import React, { useState } from "react";
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
import VoteItem from "../components/Vote/VoteItem";
import { useSpring, animated } from "@react-spring/web";

export const Route = createFileRoute("/vote")({
  component: Index,
});

const Votes = () => {
  const [code, setCode] = useState("");
  const [voteComponent, setVoteComponent] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    const body = {
      code,
    };
    setVoteComponent(true);
  };

  const formAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 200, friction: 20 },
  });
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
        {!voteComponent ? (
          <>
            <animated.div style={formAnimation}>
              <Row className="justify-content-center d-flex">
                <Card style={{ width: "80%" }} className=" text-center">
                  <Card.Body>
                    <Form onSubmit={onSubmit} className="z-3 p-5">
                      <h5 className="mb-4">Masukkan kode event</h5>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Masukkan kode"
                          value={code}
                          onChange={(e) => {
                            const value = e.target.value;
                            if (value >= 0) {
                              setCode(value);
                            }
                          }}
                          required
                        />
                      </Form.Group>

                      <Button
                        variant=""
                        type="submit"
                        className="w-100 mb-3 fw-bold text-light"
                        style={{
                          backgroundColor: "#ef8f2e",
                          border: "none",
                          transition: "opacity 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.opacity = "0.5")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.opacity = "1")
                        }
                      >
                        Kirim Kode
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Row>
            </animated.div>
          </>
        ) : (
          <VoteItem />
        )}
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
