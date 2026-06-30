import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleSubscribe = async () => {
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    try {
      setLoading(true);

      await axios.post("https://scholarhub-l1ct.vercel.app/api/subscriber", {
        email,
      });

      alert("Subscribed successfully!");
      setEmail("");
    } catch (error) {
      alert(error.response?.data?.message || "Subscription failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .newsletter-card{
          background:#ffffff;
          border-radius:18px;
          padding:40px;
          margin-bottom:60px;
        }

        .newsletter-input{
          height:55px;
          border-radius:10px;
          border:1px solid #ced4da;
        }

        .newsletter-input:focus{
          border-color:#0d6efd;
          box-shadow:none;
        }

        .newsletter-btn{
          height:55px;
          min-width:160px;
          border-radius:10px;
          font-weight:600;
        }

        footer a{
          transition:.3s;
        }

        footer a:hover{
          color:#ffc107 !important;
        }

        @media(max-width:991px){

          .newsletter-card{
            padding:30px 20px;
          }

          .newsletter-form{
            flex-direction:column;
          }

          .newsletter-btn{
            width:100%;
            margin-left:0!important;
            margin-top:15px;
          }
        }
      `}</style>

      <footer
        style={{
          backgroundColor: "#0d6efd",
          color: "#fff",
          marginTop: "60px",
          paddingTop: "60px",
          paddingBottom: "20px",
        }}
      >
        <Container>

          {/* Newsletter */}

          <Row className="mb-5">
            <Col lg={12}>
              <div className="newsletter-card">

                <Row className="align-items-center">

                  <Col lg={6}>
                    <span className="text-primary fw-semibold">
                      📩 Stay Updated
                    </span>

                    <h2 className="fw-bold text-dark mt-2 mb-3">
                      Subscribe to our Newsletter
                    </h2>

                    <p className="text-muted mb-0">
                      Get the latest scholarships, internships,
                      government jobs and educational opportunities
                      delivered directly to your inbox.
                    </p>
                  </Col>

                  <Col lg={6}>
                    <div className="d-flex newsletter-form mt-4 mt-lg-0">

                      <Form.Control
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="newsletter-input"
                      />

                      <Button
                        variant="primary"
                        className="newsletter-btn ms-2"
                        onClick={handleSubscribe}
                        disabled={loading}
                      >
                        {loading ? "Please Wait..." : "Subscribe"}
                      </Button>

                    </div>
                  </Col>

                </Row>

              </div>
            </Col>
          </Row>

          {/* Footer Content */}

          <Row className="gy-4">

            {/* Company */}

            <Col lg={4} md={6}>
              <h4 className="fw-bold mb-3">
                ScholarHub
              </h4>

              <p style={{ lineHeight: "1.8" }}>
                ScholarHub is a platform dedicated to sharing
                educational resources, scholarships,
                internships, government jobs and valuable
                learning opportunities from around the world.
              </p>
            </Col>
                        {/* Quick Links */}

            <Col lg={2} md={6}>
              <h5 className="fw-bold mb-3">
                Quick Links
              </h5>

              <ul className="list-unstyled">

                <li className="mb-2">
                  <Link
                    to="/"
                    onClick={scrollToTop}
                    className="text-white text-decoration-none"
                  >
                    Home
                  </Link>
                </li>

                <li className="mb-2">
                  <Link
                    to="/blogs"
                    onClick={scrollToTop}
                    className="text-white text-decoration-none"
                  >
                    Blogs
                  </Link>
                </li>

                <li className="mb-2">
                  <Link
                    to="/govt-jobs"
                    onClick={scrollToTop}
                    className="text-white text-decoration-none"
                  >
                    Govt Jobs
                  </Link>
                </li>

                <li className="mb-2">
                  <Link
                    to="/contact"
                    onClick={scrollToTop}
                    className="text-white text-decoration-none"
                  >
                    Contact
                  </Link>
                </li>

              </ul>
            </Col>

            {/* Company Links */}

            <Col lg={3} md={6}>
              <h5 className="fw-bold mb-3">
                Company
              </h5>

              <ul className="list-unstyled">

                <li className="mb-2">
                  <Link
                    to="/about"
                    onClick={scrollToTop}
                    className="text-white text-decoration-none"
                  >
                    About Us
                  </Link>
                </li>

                <li className="mb-2">
                  <Link
                    to="/privacy-policy"
                    onClick={scrollToTop}
                    className="text-white text-decoration-none"
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li className="mb-2">
                  <Link
                    to="/terms-and-conditions"
                    onClick={scrollToTop}
                    className="text-white text-decoration-none"
                  >
                    Terms & Conditions
                  </Link>
                </li>

                <li className="mb-2">
                  <Link
                    to="/disclaimer"
                    onClick={scrollToTop}
                    className="text-white text-decoration-none"
                  >
                    Disclaimer
                  </Link>
                </li>

              </ul>
            </Col>

            {/* Contact */}

            <Col lg={3} md={6}>

              <h5 className="fw-bold mb-3">
                Contact
              </h5>

              <p>
                <FaMapMarkerAlt className="me-2" />
                Faisalabad, Pakistan
              </p>

              <p>
                <FaPhoneAlt className="me-2" />
                +92 3099229243
              </p>

              <p>
                <FaEnvelope className="me-2" />
                muhammadusmanaslam76@gmail.com
              </p>

              <div className="mt-4">

                <a
                  href="#"
                  className="text-white me-3 fs-5"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="text-white me-3 fs-5"
                >
                  <FaTwitter />
                </a>

                <a
                  href="#"
                  className="text-white me-3 fs-5"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.linkedin.com/in/muhammad-usman-aslam-a81a58337/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white fs-5"
                >
                  <FaLinkedinIn />
                </a>

              </div>

            </Col>

          </Row>

          <hr className="border-light mt-5" />

          <Row>
            <Col className="text-center">
              © {year} <strong>ScholarHub</strong>. All Rights Reserved.
            </Col>
          </Row>

        </Container>
      </footer>
    </>
  );
};

export default Footer;