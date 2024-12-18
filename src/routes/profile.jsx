/* eslint-disable no-unused-vars */
import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "react-bootstrap";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import Pic from "../assets/user.png";
import "../styles/profile.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/profile")({
  component: Index,
});

const Profile = () => {
  const { user, token } = useSelector((state) => state.auth);
  const [localUser, setLocalUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate({ to: "/login" });
    } else {
      setLocalUser(user);
    }
  }, [navigate, token, user]);

  if (!user) {
    navigate({ to: "/login" });
  }
  return (
    <div className="Profile ">
      <div className="container-prof">
        <Card className="Card">
          <div className="Rectangle">
            <p className="Title">PROFILE</p>
          </div>
          <img src={Pic} alt="user" className="Pic" />
          <h2>NAMA</h2>
          <div className="Information">
            <p>{user.name}</p>
          </div>
          <h2>NIM</h2>
          <div className="Information">
            <p>{user.nim}</p>
          </div>
        </Card>
      </div>
    </div>
  );
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
