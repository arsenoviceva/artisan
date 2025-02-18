import { Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/contact");
  };
  return (
    <Container className="home-page-container">
      <Row>
        <Col
          sm={7}
          className="  px-4 mb-3 d-flex flex-column  justify-content-center align-items-start  "
        >
          <p className="home-info">
            Let’s work together to create designs that inspire and leave a
            lasting impression.
          </p>
          <button onClick={onClickHandler} className="px-3 py-1 rounded-5">
            {" "}
            CONTACT US
          </button>
        </Col>
        <Col
          sm={5}
          className="d-none mb-3 d-sm-flex align-items-center justify-content-center"
        >
          <img src="/images/biglogo.png" className="home-logo" />
        </Col>
      </Row>
    </Container>
  );
};
