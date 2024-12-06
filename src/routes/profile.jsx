/* eslint-disable no-unused-vars */
import { createFileRoute, Link } from "@tanstack/react-router";
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
import Pic from "../assets/user.png";
import "../styles/profile.css";
export const Route = createFileRoute("/profile")({
  component: Index,
});

const Profile = () => {
  return <div className="Profile ">


  <div className="container-prof" >
    <Card className="Card" >
      <div className="Rectangle">
      <p className="Title">
      PROFILE
      </p>
      </div>
      <img src={Pic} alt="user" className="Pic" />
      <h2>NAMA</h2>
        <div className="Information" >
          <p >
            BUZZ LIGHYEAR
          </p>  
        </div>
      <h2>NIM</h2>
        <div className="Information" >
          <p >222410102037</p>
        </div>
    </Card>
  </div>
  </div>;
  
};

function Index() {
  return (
    <>
      <NavigationBar />
      <Profile />
      <Footer />
    </>
  );
}
