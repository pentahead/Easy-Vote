import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../../redux/slices/auth";
import { profile } from "../../service/auth";
import "../../styles/navbar.css";

const NavigationBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, token } = useSelector((state) => state.auth);

  useEffect(() => {
    const getProfile = async () => {
      // fetch get profile
      const result = await profile();
      if (result.success) {
        // set the user state here
        dispatch(setUser(result.data));
        return;
      }

      // If not success
      // delete the local storage here
      dispatch(setUser(null));
      dispatch(setToken(null));

      // redirect to login
      navigate({ to: "/login" });
    };

    if (token) {
      // hit api auth get profile and pass the token to the function
      getProfile();
    }
  }, [dispatch, navigate, token]);

  const logout = (event) => {
    event.preventDefault();

    // delete the local storage here
    dispatch(setUser(null));
    dispatch(setToken(null));

    // redirect to login
    navigate({ to: "/login" });
  };

  const handleBrandClick = () => {
    // Check user's role_id and redirect accordingly
    if (user?.role_id === 1) {
      navigate({ to: "/dashboard" });
    } else if (user?.role_id === 2) {
      navigate({ to: "/" });
    } else {
      navigate({ to: "/" });
    }
  };

  return (
    <>
      {["xxl"].map((expand) => (
        <Navbar
          style={{ background: "#ef8f2e" }}
          key={expand}
          expand={expand}
          className="mb-0 shadow "
        >
          <Container>
            <Navbar.Brand
              as="div"
              onClick={handleBrandClick}
              style={{ cursor: "pointer", fontWeight: "bold", color: "white" }}
            >
              EasyVote
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  EasyVote
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 fw-bold">
                  <Nav.Link
                    as={Link}
                    to="/candidate"
                    className="custom-nav-link"
                  >
                    Candidates
                  </Nav.Link>
                  <Nav.Link as={Link} to="/vote" className="custom-nav-link">
                    Votes
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/statistic"
                    className="custom-nav-link"
                  >
                    Statistics
                  </Nav.Link>
                  <Nav.Link as={Link} to="/profile" className="custom-nav-link">
                    Profile
                  </Nav.Link>

                  {user ? (
                    <>
                      {/* Profile Dropdown */}
                      <Dropdown align="end">
                        <Dropdown.Toggle
                          variant="link"
                          id="profile-dropdown"
                          className="d-flex align-items-center text-decoration-none"
                          style={{ color: "black" }}
                          bsPrefix="dropdown"
                        >
                          <Image
                            src={user?.profile_picture}
                            fluid
                            style={{
                              width: "30px",
                              height: "30px",
                              display: "inline-block",
                              overflow: "hidden",
                              borderRadius: "50%",
                              marginRight: "0.5rem",
                            }}
                          />{" "}
                          {user?.name}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          {user?.role_id === 1 && (
                            <Dropdown.Item as={Link} to="/dashboard">
                              Dashboard
                            </Dropdown.Item>
                          )}

                          <Dropdown.Item as={Link} to="/profile">
                            Profile
                          </Dropdown.Item>
                          <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </>
                  ) : (
                    <>
                      <Nav.Link
                        as={Link}
                        to="/login"
                        className=" fw-bold text-light"
                        style={{
                          background: "black",
                          border: "none",
                          transition: "opacity 0.3s ease",
                          borderRadius: "9px",
                          paddingInline: "16px",
                          marginLeft: "8px",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.opacity = "0.5")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.opacity = "1")
                        }
                      >
                        Login
                      </Nav.Link>
                    </>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavigationBar;
