import { Container, Row, Col } from "react-bootstrap";

export const Archviz = ({ id, title }) => {
  return (
    <Container>
      <div className="border-bottom border-2 my-5" id={id}>
        <p className="categories-title "> {title}</p>
      </div>
    </Container>
  );
};
