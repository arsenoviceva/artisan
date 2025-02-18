import { Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import { HiOutlineMapPin } from "react-icons/hi2";
import { HiOutlinePhone } from "react-icons/hi2";
import { HiOutlineEnvelope } from "react-icons/hi2";

export const Footer = () => {
  const navigate = useNavigate();
  const onClickHandler = (path) => {
    navigate(path);
  };
  return (
    <div className="border-top border-2 footer ">
      <Container>
        <Row className="px-5 justify-content-between">
          <Col sm={2} className="pb-2">
            <img src="/images/footer-logo.png" className="footer-logo my-2" />
          </Col>
          <Col
            xs={6}
            className="d-flex align-items-center justify-content-lg-start justify-content-xs-end"
          >
            <div>
              <div className="d-flex gap-2 my-2 align-items-center">
                <HiOutlineMapPin className="footer-icon" />
                <p className="footer-info"> Neznanih junaka, Bijeljina </p>
              </div>
              <div className="d-flex gap-2 my-2 align-items-center">
                <HiOutlinePhone className="footer-icon" />
                <p className="footer-info"> +387 65 22 55 77 </p>
              </div>
              <div className="d-flex gap-2 my-2 align-items-center min-width-0">
                <HiOutlineEnvelope className="footer-icon" />
                <p className="footer-info"> artisan@artisanstudio.com </p>
              </div>
            </div>
          </Col>
          <Col md={2} className="d-none d-lg-block">
            <div className="my-2 d-flex justify-content-end">
              <p
                className="footer-menu"
                onClick={() => onClickHandler("/work")}
              >
                WORK
              </p>
            </div>
            <div className="my-2 d-flex justify-content-end">
              <p
                className="footer-menu"
                onClick={() => onClickHandler("/about")}
              >
                ABOUT
              </p>
            </div>
            <div className="my-2 d-flex justify-content-end">
              <p
                className="footer-menu"
                onClick={() => onClickHandler("/contact")}
              >
                CONTACT
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
