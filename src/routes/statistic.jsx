/* eslint-disable no-unused-vars */
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Button,
  Form,
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
import React, { useState } from "react";
import Swal from "sweetalert2";

import { event } from "../service/event";
import { statistic } from "../service/statiscic";

export const Route = createFileRoute("/statistic")({
  component: Index,
});

const Statistics = () => {
  const [inputCode, setInputCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [dataChart, setDataChart] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const fetchedData = await statistic(inputCode);
      if (fetchedData.length > 0) {
        setDataChart(fetchedData);
        Swal.fire("Success", "Data berhasil dimuat", "success");
      } else {
        Swal.fire("Error", "Kode event tidak ditemukan", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Terjadi kesalahan, coba lagi nanti", "error");
    } finally {
      setLoading(false);
    }
  };

  const calculatePercentage = (data) => {
    if (!data || data.length === 0) return [];
    const totalVotes = data.reduce((sum, item) => sum + item.vote_count, 0);
    return data.map((item) => ({
      ...item,
      percentage: ((item.vote_count / totalVotes) * 100).toFixed(2),
    }));
  };

  const addColorToData = (data) => {
    const colors = ["#ef8f2e", "#a77220", "#efca2e", "#2196F3"];

    return data.map((item, index) => ({
      ...item,
      color: colors[index % colors.length],
    }));
  };

  const chartData = dataChart
    ? addColorToData(calculatePercentage(dataChart))
    : [];

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
          maxWidth: "900px",
          width: "100%",
          textAlign: "center",
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Container>
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
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.5")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              disabled={loading}
            >
              {loading ? "Loading..." : "Kirim Kode"}
            </Button>
          </Form>
        </Container>

        {dataChart ? (
          <>
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
                      data: chartData.map((item) => ({
                        value: item.vote_count,
                        color: item.color,
                        name: item.name || `Option ${item.id}`,
                      })),
                      innerRadius: 60,
                    },
                  ]}
                  width={400}
                  height={400}
                />
              </div>
              <div style={{ flex: 1, minWidth: "200px" }}>
                <ul
                  style={{ listStyle: "none", padding: 0, textAlign: "left" }}
                >
                  {chartData.map((item) => (
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
                        {item.name || `Option ${item.id}`}:
                      </span>
                      <span>
                        {item.vote_count} votes ({item.percentage}%)
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        ) : (
          <p>Masukkan kode event untuk melihat statistik.</p>
        )}
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
