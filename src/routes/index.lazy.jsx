/* eslint-disable no-unused-vars */
import { createLazyFileRoute, Link } from "@tanstack/react-router";
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
export const Route = createLazyFileRoute("/")({
  component: Index,
});

const Homepage = () => {
  return <div className="homepage"></div>;
};

function Index() {
  return (
    <>
      <NavigationBar />
      <Homepage />
      <Footer />
    </>
  );
}
