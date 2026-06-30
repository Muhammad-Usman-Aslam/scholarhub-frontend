import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";

const CountryBlogs = () => {
  const { country } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://scholarhub-l1ct.vercel.app/api/getblog")
      .then((res) => {
        const filtered = res.data.filter(
          (item) =>
            item.country.toLowerCase() === country.toLowerCase()
        );
        setBlogs(filtered);
      })
      .finally(() => setLoading(false));
  }, [country]);

  if (loading) return <Spinner animation="border" />;

  return (
    <Container className="my-5">
      <h2 className="mb-4">{country} Scholarships</h2>

      <Row>
        {blogs.map((blog) => (
          <Col lg={4} md={6} key={blog._id}>
            <Link
              to={`/blog/${blog._id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card className="mb-4">
                <Card.Img
                  src={`https://scholarhub-l1ct.vercel.app/api/img/${blog._id}`}
                  style={{ height: 220, objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CountryBlogs;