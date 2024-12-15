import { Row, Col, Card } from "react-bootstrap";
import Swal from "sweetalert2";
import "../../styles/vote.css";
import { useSpring, animated } from "@react-spring/web";
import React, { useEffect, useState } from "react";
import { candidateByEvent } from "../../service/event";
import { vote } from "../../service/vote";
import { useNavigate } from "@tanstack/react-router";

const VoteItem = (inputCode) => {
  const navigate = useNavigate();
  const [votingData, setvotingData] = useState([]);

  const handleVote = (candidate) => {
    Swal.fire({
      title: `Konfirmasi Pilihan`,
      text: `Apakah Anda yakin memilih ${candidate.name} (${candidate.label})?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#ef8f2e",
      cancelButtonColor: "#cfcccc",
      confirmButtonText: "Ya, pilih!",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const request = {
            code: inputCode.inputCode,
            candidate_id: candidate.id,
          };
          const response = await vote(request);
          if (response.message) {
            Swal.fire({
              title: "Terima Kasih!",
              text: `Pilihan Anda untuk ${candidate.name} (${candidate.label}) telah diterima.`,
              icon: "success",
              confirmButtonColor: "#ef8f2e",
            }).then(() => {
              navigate({ to: "/" });
            });
          } else {
            Swal.fire({
              title: "Gagal",
              text: "Terjadi kesalahan, coba lagi nanti.",
              icon: "error",
            });
          }
        } catch (error) {
          Swal.fire({
            title: "Gagal",
            text: "Terjadi kesalahan, coba lagi nanti.",
            icon: "error",
          });
        }
      }
    });
  };

  useEffect(() => {
    const fetchvotingData = async () => {
      try {
        if (inputCode) {
          const data = await candidateByEvent(inputCode);
          const formattedData = data.map((candidate, index) => ({
            id: index + 1,
            name: candidate.name,
            label: `Nomor Urut ${candidate.nomor_urut}`,
            // image: `https://via.placeholder.com/150?text=${candidate.name}`,
            visi: candidate.visi,
            misi: candidate.misi,
          }));
          setvotingData(formattedData);
        }
      } catch (error) {
        console.error("Gagal mengambil data kandidat:", error);
      }
    };

    fetchvotingData();
  }, [inputCode]);

  const formAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 200, friction: 20 },
  });
  return (
    <animated.div style={formAnimation}>
      <Row className="justify-content-center">
        {votingData.map((candidate) => (
          <Col
            key={candidate.id}
            md={4}
            sm={4}
            xs={6}
            className="mb-4 d-flex align-items-stretch"
          >
            <Card
              className="voting-card shadow-lg"
              style={{ cursor: "pointer" }}
              onClick={() => handleVote(candidate)}
            >
              <div className="image-wrapper">
                <Card.Img
                  variant="top"
                  src={candidate.image}
                  alt={candidate.name}
                />
              </div>
              <Card.Body className="text-center">
                <Card.Title className="m-0 fw-bold fs-2">
                  {candidate.name}
                </Card.Title>
                <Card.Text className="text-muted">{candidate.label}</Card.Text>
                <Card.Text>
                  <strong>Visi:</strong> {candidate.visi}
                </Card.Text>
                <Card.Text>
                  <strong>Misi:</strong> {candidate.misi}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </animated.div>
  );
};
export default VoteItem;
