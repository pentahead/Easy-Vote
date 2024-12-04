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
export const Route = createFileRoute("/profile")({
  component: Index,
});

const Profile = () => {
  return <div className="Profile ">


  <div className="container" style={{ width: "100vh",height: "100vh",marginTop:"10vh", justifyContent: "center", display: "flex" }}>
    <Card style={{ width: "50%", height: "50%", borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center"  }}>
      <h2>NAMA</h2>
        <div style={{width: "90%", height: "15%", borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center",border: "1px solid black", margin:"5%"}}>
          <h3>
            NUR BASHORI RAHMAT NUR 
          </h3>  
        </div>
      <h2>NIM</h2>
        <div style={{width: "90%", height: "15%", borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center",border: "1px solid black", margin:"5%"}}>
          <h3>KOntol</h3>
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
