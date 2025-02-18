import { Row, Col, Container } from "react-bootstrap";
import { Logos } from "./Logos";
import { useState } from "react";
import { ImageModal } from "./ImageModal";

export const LogoBrending = ({ title, id }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <Container>
      <div className="border-bottom border-2 my-5" id={id}>
        <p className="categories-title "> {title}</p>
      </div>
      <Row>
        {Logos?.map((logo) => {
          return (
            <Col
              lg={4}
              md={6}
              key={logo?.id}
              className="d-block align-items-center justify-content-evenly py-2"
            >
              <div className="img-container">
                <img
                  src={logo.src}
                  className="img-thumbnail"
                  alt="image-logo"
                  onClick={() => openModal(logo)}
                />
              </div>
              {selectedImage && (
                <div className="modal" onClick={closeModal}>
                  <span className="close" onClick={closeModal}>
                    &times;
                  </span>
                  <img
                    className="modal-content"
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                  />
                  <div className="caption">{selectedImage.alt}</div>
                </div>
              )}
            </Col>
          );
        })}
      </Row>
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img
            className="modal-content"
            src={selectedImage.src}
            alt={selectedImage.alt}
          />
          <div className="caption">{selectedImage.alt}</div>
        </div>
      )}
    </Container>
  );
};
