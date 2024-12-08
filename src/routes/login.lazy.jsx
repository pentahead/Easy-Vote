import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../redux/slices/auth"; // Import setUser action
import { Container } from "react-bootstrap";
import { pulse } from "react-animations";
import styled, { keyframes } from "styled-components";
import { IoArrowBack } from "react-icons/io5";
import { login } from "../service/auth";
import toast, { Toaster } from "react-hot-toast";

export const Route = createLazyFileRoute("/login")({
  component: Login,
});

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token, user } = useSelector((state) => state.auth);

  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Redirect based on role_id if token and user exist
    if (token && user) {
      if (user.role_id === 1) {
        navigate({ to: "/" });
      } else if (user.role_id === 2) {
        navigate({ to: "/" });
      }
    }
  }, [navigate, token, user]);

  const onSubmit = async (event) => {
    event.preventDefault();

    const body = {
      nim,
      password,
    };

    const result = await login(body);

    if (result) {
      const user = result?.user;

      dispatch(setToken(result?.token));
      dispatch(setUser(user));
      toast.success(result?.message);
      navigate({ to: "/" });
    } else {
      toast.success(result.message);
    }
  };

  const PulseAnimation = keyframes`${pulse}`;
  const AnimatedImage = styled.img`
    animation: ${PulseAnimation} 2s infinite; /* 2s durasi animasi, infinite berarti terus berulang */
  `;

  const handleBack = () => {
    navigate({ to: "/" });
  };

  return (
    <section className="d-flex z-1 bg-light  justify-content-center align-items-center vh-100 bg-login position-relative overflow-hidden">
      <Container>
        <Toaster position="top-right" reverseOrder={false} />
        <Row className="justify-content-center position-relative">
          <Col
            md={6}
            lg={4}
            style={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              borderRadius: "0.5rem",
            }}
            className="bg-trasnparent rounded-4 shadow-lg p-4 position-relative"
          >
            <IoArrowBack
              onClick={handleBack}
              style={{
                cursor: "pointer",
                fontSize: "1.5rem",
                marginRight: "20px",
              }}
            />
            <div className="text-center mt-4">
              <h2 className="fw-bold">Login</h2>
            </div>

            <Form onSubmit={onSubmit} className="z-3 p-5">
              <Form.Group className="mb-3">
                <Form.Label>NIM</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Nim"
                  value={nim}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value >= 0) {
                      setNim(value);
                    }
                  }}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.5")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Login
              </Button>
            </Form>
          </Col>
          <div className="decoration position-absolute top-50 z-n1 start-100 translate-middle">
            <AnimatedImage
              src="img/box.png"
              alt="Decoration"
              className="img-fluid"
            />
          </div>
        </Row>
      </Container>
    </section>
  );
}
