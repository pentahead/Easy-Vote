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
import { PieChart } from "@mui/x-charts";
import * as React from "react";

export const Route = createFileRoute("/statistic")({
  component: Index,
});

const Statistics = () => {
  const data = [
    { id: 0, value: 1023, color: "#ef8f2e" },
    { id: 1, value: 1002, color: "#a77220" },
    { id: 2, value: 1051, color: "#efca2e" },
  ];

  const totalVotes = data.reduce((sum, item) => sum + item.value, 0);
  const dataWithPercentage = data.map((item) => ({
    ...item,
    percentage: ((item.value / totalVotes) * 100).toFixed(2),
  }));

  return (
    <div
      className="Statistics d-flex flex-column align-items-center justify-content-center"
      style={{
        minHeight: "80vh",
        backgroundColor: "#f8f9fa",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px", // Memperbesar lebar container
          width: "100%",
          textAlign: "center",
          backgroundColor: "#fff",
          padding: "30px", // Menambah padding
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3 style={{ marginBottom: "20px", fontWeight: "bold" }}>
          Hasil Perhitungan Sementara
        </h3>
        <div
          className="d-flex flex-wrap justify-content-between align-items-center"
          style={{ gap: "20px" }}
        >
          <div style={{ flex: 2, minWidth: "300px" }}>
            <PieChart
              series={[
                {
                  data: dataWithPercentage.map((item) => ({
                    ...item,
                  })),
                  innerRadius: 60,
                },
              ]}
              width={400}
              height={400}
            />
          </div>
          <div style={{ flex: 1, minWidth: "200px" }}>
            <ul style={{ listStyle: "none", padding: 0, textAlign: "left" }}>
              {dataWithPercentage.map((item) => (
                <li
                  key={item.id}
                  style={{
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "15px",
                      height: "15px",
                      backgroundColor: item.color,
                      borderRadius: "3px",
                      marginRight: "10px",
                    }}
                  ></span>
                  <span style={{ fontWeight: "bold", marginRight: "5px" }}>
                    {item.label}:
                  </span>
                  <span>
                    {item.value} votes ({item.percentage}%)
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

function Index() {
  return (
    <>
      <NavigationBar />
      <Statistics />
      <Footer />
    </>
  );
}
