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
export const Route = createFileRoute("/profile")({
  component: Index,
});

const Profile = () => {
  return <div className="Profile ">


  <div className="container" style={{ width: "100vh",height: "100vh",marginTop:"10vh", justifyContent: "center", display: "flex" }}>
    <Card style={{ width: "70%", height: "70%", borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center"  }}>
      <p style={{fontSize:"5vh",fontWeight:"bold", alignContent:"center", justifyContent:"center", margin:"0"}}>
        PROFILE</p>
      <img src={Pic} alt="user" style={{ width: "40%", height: "40%", borderRadius: "20px", padding:"5%" }} />
      <h2>NAMA</h2>
        <div style={{width: "90%", height: "10%", borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center",border: "1px solid black",  padding:"5%", margin:"2.5%"}}>
          <p style={{fontSize:"3vh",fontWeight:"bold", alignContent:"center", justifyContent:"center", margin:"0"}}>
            NUR BASHORI RAHMAT NUR 
          </p>  
        </div>
      <h2>NIM</h2>
        <div style={{width: "90%", height: "10%", borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center",border: "1px solid black", padding:"5%", margin:"2.5%"}}>
          <p style={{fontSize:"3vh",fontWeight:"bold", alignContent:"center", justifyContent:"center",margin:"0"}}>222410102037</p>
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
