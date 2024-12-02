import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../redux/slices/auth"; // Import setUser action
import { login } from "../service/auth";
import { Container } from "react-bootstrap";

export const Route = createLazyFileRoute("/login")({
  component: Login,
});

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token, user } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Redirect based on role_id if token and user exist
    if (token && user) {
      if (user.role_id === 1) {
        navigate({ to: "/dashboard" });
      } else if (user.role_id === 2) {
        navigate({ to: "/" });
      }
    }
  }, [navigate, token, user]);

  const onSubmit = async (event) => {
    event.preventDefault();

    const body = {
      email,
      password,
    };

    const result = await login(body);

    if (result.success) {
      const user = result.data.user; // Get user data, including role_id

      // Save the token and user in Redux state
      dispatch(setToken(result.data.token));
      dispatch(setUser(user)); // Store user with role_id
    } else {
      alert(result.message); // Show error if login fails
    }
  };

  return (
    <section className="d-flex z-1 bg-light  justify-content-center align-items-center vh-100 bg-login position-relative overflow-hidden">
      <Container>
        <Row className="justify-content-center position-relative">
          <Col
            md={6}
            lg={4}
            style={{
              backdropFilter: "blur(10px)", // Gunakan camelCase untuk backdropFilter
              backgroundColor: "rgba(255, 255, 255, 0.7)", // Gunakan camelCase untuk backgroundColor
              borderRadius: "0.5rem", // Sesuaikan ukuran border-radius jika diperlukan
            }}
            className="bg-trasnparent rounded-4 shadow-lg p-4 position-relative"
          >
            <div className="text-center mt-4">
              <h2 className="fw-bold">Login</h2>
            </div>

            <Form onSubmit={onSubmit} className="z-3 p-5">
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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

              <Button variant="dark" type="submit" className="w-100 mt-3">
                Login
              </Button>
            </Form>
          </Col>
          <div className="decoration position-absolute top-50 z-n1 start-100  translate-middle">
            <img src="img/car.png" alt="Decoration" className="img-fluid" />
          </div>
        </Row>
      </Container>
    </section>
  );
}
