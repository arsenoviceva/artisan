import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

export const WebSite = () => {
  const websites = [
    {
      id: 1,
      name: "Projekat.ba",
      src: "images/projekat.ba.png",
      href: "https://www.projekat.ba/",
      images: [
        { src: "../../images/projekatba-1.png" },
        { src: "../../images/projekatba-2.png" },
        { src: "../../images/projekatba-3.png" },
        { src: "../../images/projekatba-4.jpg" },
      ],
    },
    {
      id: 2,
      name: "Apartman Jana",
      src: "images/jana.jpg",
      href: "https://www.apartmanjana.com/",

      images: [
        { src: "../../images/jana-1.png" },
        { src: "../../images/jana-2.png" },
        { src: "../../images/jana-3.png" },
        { src: "../../images/jana-4.png" },
      ],
    },
  ];
  const param = useParams();
  const currentWebSite = websites.find((website) => website.id === +param.id);
  return (
    <Container>
      <div className="text-white border-top-white ">
        <a
          className="text-white text-decoration-none fs-3  "
          href={currentWebSite.href}
          target="_blank"
        >
          {" "}
          {currentWebSite.name}{" "}
        </a>
      </div>
      <Row className="mb-5">
        {currentWebSite.images?.map((img) => {
          return (
            <Col md={6} className="p-3">
              <img src={img.src} className="website-img" />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
