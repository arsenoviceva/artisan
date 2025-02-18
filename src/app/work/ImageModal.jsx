export const ImageModal = (closeModal, selectedImage) => {
  return (
    <div className="modal" onClick={closeModal}>
      <span className="close">&times;</span>
      <img
        className="modal-content"
        src={selectedImage.src}
        alt={selectedImage.alt}
      />
      <div className="caption">{selectedImage.alt}</div>
    </div>
  );
};
