import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const WebDesign = ({ id, title }) => {
  const websites = [
    { id: 1, name: "Projekat ba", src: "images/mockup-projekat.jpg" },
    { id: 2, name: "Jana Apartman", src: "images/mockup-jana.jpg" },
  ];

  const navigate = useNavigate();

  return (
    <Container>
      <div className="border-bottom border-2 my-5" id={id}>
        <p className="categories-title "> {title}</p>
      </div>
      <Row>
        {websites?.map((website) => {
          return (
            <Col
              lg={4}
              md={6}
              key={website.id}
              onClick={() => navigate(`/work/${website.id}`)}
            >
              <div className="img-container">
                <img
                  src={website.src}
                  className="img-thumbnail"
                  alt={website.name}
                />
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
