import { Container, Row, Col } from "react-bootstrap";

export const About = () => {
  return (
    <Container>
      <Row>
        <Col lg={8}>
          <p className="text-white mt-5 py-5">
            {" "}
            We transform ideas into visually compelling designs that resonate.
            Whether you’re looking to elevate your brand, create a stunning
            website, or craft memorable marketing materials, our team of
            experienced designers is here to bring your vision to life. <br />
            <br />
            With a passion for creativity and an eye for detail, we specialize
            in graphic design services including branding, logo design, print
            media, digital design, and more. Our approach is simple – we
            collaborate closely with you to understand your goals, ensuring
            every project we undertake not only meets but exceeds expectations.
          </p>
        </Col>
        <Col
          lg={4}
          className="d-none d-md-flex align-items-center justify-content-center"
        >
          <img src="/images/biglogo.png" className="home-logo" />
        </Col>
      </Row>
    </Container>
  );
};
