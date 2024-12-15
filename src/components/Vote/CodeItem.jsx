import React, { useState } from "react";
import { Button, Container, Row, Card, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import "../../styles/vote.css";
import { useSpring, animated } from "@react-spring/web";
import VoteItem from "./VoteItem";
import { IoArrowBack } from "react-icons/io5";
import { eventByCode } from "../../service/event";

const CodesItem = ({ code, onBack }) => {
  const [inputCode, setInputCode] = useState("");
  const [voteComponent, setVoteComponent] = useState(false);
  const [eventDetails, setEventDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (inputCode !== code) {
      setLoading(false);
      Swal.fire("Error", "Kode event tidak ditemukan", "error");
      return;
    }
    try {
      const data = await eventByCode(inputCode);
      if (data?.start_date) {
        setEventDetails(data);
        setVoteComponent(true);
      } else {
        Swal.fire("Error", "Kode event tidak ditemukan", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Terjadi kesalahan, coba lagi nanti", "error");
    } finally {
      setLoading(false);
    }
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
          <Card className="p-4 border-0" style={{ background: "#000000" }}>
            <h1
              className="fw-bold voting-header text-center text-light"
              style={{ textShadow: "2px 2px 10px #000000" }}
            >
              Tentukan Pilihanmu Sekarang!
            </h1>
          </Card>
        </Row>

        {!voteComponent ? (
          <>
            <animated.div style={formAnimation}>
              <Row className="justify-content-center d-flex">
                <Card style={{ width: "80%" }} className="text-center">
                  <Card.Body>
                    <div className="d-flex justify-content-start">
                      <IoArrowBack
                        onClick={onBack}
                        style={{
                          cursor: "pointer",
                          fontSize: "1.5rem",
                          marginTop: "20px",
                          marginLeft: "10px",
                        }}
                      />
                    </div>
                    <Form onSubmit={onSubmit} className="z-3 p-5">
                      <h5 className="mb-4">Masukkan kode event</h5>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Masukkan kode"
                          value={inputCode}
                          onChange={(e) => setInputCode(e.target.value)}
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
                        disabled={loading}
                        g
                      >
                        {loading ? "Loading..." : "Kirim Kode"}
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Row>
            </animated.div>
          </>
        ) : (
          <VoteItem
            inputCode={inputCode}
            onBack={() => setVoteComponent(false)}
          />
        )}
      </Container>
    </div>
  );
};

export default CodesItem;
