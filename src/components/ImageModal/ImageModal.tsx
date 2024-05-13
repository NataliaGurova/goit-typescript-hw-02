import { useEffect } from 'react';
import Modal from 'react-modal';
import { FC } from 'react';

const customStyles = {

  overlay: {
    position: "fixed",
    backgroundColor: "rgba(0, 0, 0, 0.7)",

  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "90vw",
    maxHeight: "90vh",
    // overflow: "auto",
    overflow: "hidden",
    objectFit: "cover",
    border: "none",
    borderRadius: "0",
    padding: "0",
    margin: "20px",
    
  },
};

Modal.setAppElement('#root');

interface ImageModalProps {
    modalImage: string;
    isOpen: boolean;
    onRequestClose: () => void;
}

export const ImageModal: FC<ImageModalProps> = ({ modalImage, isOpen, onRequestClose }) => {
console.log(modalImage);

  useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
		<Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      style={customStyles}
    >
      <div style={{ overflow: 'hidden' }}>
                <img src={modalImage} alt="Selected Image" />
            </div>
    </Modal>
  )
}