import { useNavigate } from "react-router";
import { Row, Col, Container, Offcanvas } from "react-bootstrap";
import { SocialIcons } from "./social-icons/SocialIcons";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Header = () => {
  const navigate = useNavigate();
  const onClickHandler = (path) => {
    navigate(path);
  };

  return (
    <Container>
      <Navbar bg="transparent" variant="dark" expand="lg" className="  mb-3">
        <Container fluid className="header-container">
          <Navbar.Brand href="/">
            <img
              src="/images/Asset2.svg"
              className="logo-img"
              onClick={() => onClickHandler("/")}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            className="bg-darkgrey"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel" className="text-white">
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link
                  href="/"
                  // onClick={() => onClickHandler("/work")}
                  className="nav-link"
                >
                  Home
                </Nav.Link>
                <Nav.Link href="/about" className="nav-link">
                  About
                </Nav.Link>
                <Nav.Link href="/work" className="nav-link">
                  Work
                </Nav.Link>
                <Nav.Link href="/contact" className="nav-link">
                  Contact
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </Container>

    // <Container className="pt-5">
    //   <Row className="align-items-center justify-content-between">
    //     <Col lg={2} xs={4}>
    //       <img
    //         src="/images/Asset2.svg"
    //         className="logo-img"
    //         onClick={() => onClickHandler("/")}
    //       />
    //     </Col>

    //     <Col
    //       lg={10}
    //       xs={8}
    //       className=" d-flex align-items-center justify-content-end gap-3"
    //     >
    //       <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
    //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //         <Navbar.Collapse id="responsive-navbar-nav">
    //           <Nav>
    //             <Nav.Link
    //               onClick={() => onClickHandler("/work")}
    //               className="nav-link"
    //             >
    //               WORK
    //             </Nav.Link>
    //             <Nav.Link
    //               onClick={() => onClickHandler("/about")}
    //               className="nav-link"
    //             >
    //               ABOUT
    //             </Nav.Link>
    //             <Nav.Link
    //               onClick={() => onClickHandler("/contact")}
    //               className="nav-link"
    //             >
    //               CONTACT
    //             </Nav.Link>
    //           </Nav>
    //         </Navbar.Collapse>
    //       </Navbar>
    //     </Col>
    //   </Row>
    //   <SocialIcons />
    // </Container>
  );
};

{
  /* <p onClick={() => onClickHandler("/work")} className="nav-link"> WORK </p>
<p onClick={() => onClickHandler("/about")} className="nav-link"> ABOUT </p>
<p onClick={() => onClickHandler("/contact")} className="nav-link"> CONTACT </p>
<div className="d-flex">
    <p onClick={() => onClickHandler("/work")} className="nav-link  pe-2 border-end border-2"> SR  </p>
    <p onClick={() => onClickHandler("/work")} className="nav-link ps-2"> ENG </p>
</div> */
}
