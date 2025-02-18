import { Row, Col, Container } from "react-bootstrap";
import ContactForm from "./ContactForm";
import { HiOutlineMapPin } from "react-icons/hi2";
import { HiOutlinePhone } from "react-icons/hi2";
import { HiOutlineEnvelope } from "react-icons/hi2";


export const Contact = () =>{
    return (
        <Container className="contact-container">
            <Row className="gap-5">
                <Col className="me-5">
                <h3 className="border-bottom border-3 py-1"> GET IN TOUCH</h3>
                <ContactForm />
                </Col>
                <Col className="ms-lg-5 ">
                <iframe  src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Neznanih%20junaka,%20Bijeljina+(Artisan)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    width="600"
                    height="350"
                    style={{ border: 0, maxWidth:'inherit' }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                />
                <div className="d-flex gap-2 my-2 align-items-center  ">
                <HiOutlineMapPin className="footer-icon"/>
                <p className="footer-info"> Neznanih junaka, Bijeljina </p>
                </div>
                <div className="d-flex gap-2 my-2 align-items-center  ">

                <HiOutlinePhone className="footer-icon"/>
                <p className="footer-info"> +387 65 22 55 77 </p>

                </div>
                <div className="d-flex gap-2 my-2 align-items-center  ">

                <HiOutlineEnvelope className="footer-icon" />
                <p className="footer-info"> artisan@artisanstudio.com </p>


                </div>
                </Col>
            </Row>

        </Container>
    )
}