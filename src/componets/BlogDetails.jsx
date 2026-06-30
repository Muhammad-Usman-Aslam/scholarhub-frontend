import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Container,
  Card,
  Spinner,
  Alert,
  Badge,
  Row,
  Col,
  Button,
} from "react-bootstrap";

const BlogDetails = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getBlog();
  }, [id]);

  const getBlog = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get(
        `https://scholarhub-l1ct.vercel.app/api/getblog/${id}`
      );

      setBlog(res.data);
    } catch (err) {
      console.log(err);
      setError("Blog details could not be loaded.");
      setBlog(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <Container className="my-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Card className="shadow-lg border-0 overflow-hidden">
        {/* Blog Image */}
        <div
          style={{
            background: "#fff",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <img
            src={`https://scholarhub-l1ct.vercel.app/api/img/${blog._id}`}
            alt={blog.title}
            className="img-fluid"
            style={{
              width: "100%",
              maxHeight: "700px",
              objectFit: "contain",
              borderRadius: "10px",
            }}
          />
        </div>

        <Card.Body className="p-4 p-lg-5">
          <Badge bg="success" className="mb-3 fs-6">
            {blog.category}
          </Badge>

          <h2 className="fw-bold mb-4">{blog.title}</h2>

          <Row className="mb-4">
            <Col md={4}>
              <p>
                <strong>Country:</strong> {blog.country}
              </p>
            </Col>

            <Col md={4}>
              <p>
                <strong>Deadline:</strong> {blog.deadline}
              </p>
            </Col>

            <Col md={4}>
              <p>
                <strong>Posted:</strong>{" "}
                {new Date(blog.createdAt).toLocaleDateString()}
              </p>
            </Col>
          </Row>

          <hr />

          <h4 className="fw-bold">Description</h4>
          <p style={{ lineHeight: "2", textAlign: "justify" }}>
            {blog.description}
          </p>

          <hr />

          <h4 className="fw-bold">Benefits</h4>
          <ul>
            {blog.benefit?.split("\n").map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>

          <hr />

          <h4 className="fw-bold">Eligibility Criteria</h4>
          <p style={{ lineHeight: "2", textAlign: "justify" }}>
            {blog.criteria}
          </p>

          <hr />

          <h4 className="fw-bold">Required Documents</h4>
          <ul>
            {blog.document?.split("\n").map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>

          <hr />

          <h4 className="fw-bold">How to Apply</h4>
          <ol>
            {blog.apply?.split("\n").map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ol>

          <hr />

          <h4 className="fw-bold">Official Website</h4>

          {blog.website ? (
            <div className="mt-4 text-center">
              <Button
                variant="primary"
                size="lg"
                href={blog.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                🌐 Visit Official Website
              </Button>

              <p
                className="mt-3 text-muted"
                style={{ lineHeight: "1.8" }}
              >
                We recommend submitting your application only through the
                official website. Please carefully review the eligibility
                criteria, required documents, deadlines, and application
                instructions before applying.
              </p>
            </div>
          ) : (
            <Alert variant="warning" className="mt-3">
              Official website link is not available.
            </Alert>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default BlogDetails;  