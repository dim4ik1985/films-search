import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { errorState } from "../../store/slices/searchSlice.ts";

interface ModalErrorProps {
  title?: string;
  error?: string;
}

export const ModalError = ({ error, title }: ModalErrorProps) => {
  const dispatch = useAppDispatch();

  const [show, setShow] = useState("block");

  const handleClose = () => {
    setShow("none");
    dispatch(errorState(""));
  };

  return (
    <div className="modal show" style={{ display: show, position: "absolute", top: "10%" }}>
      <Modal.Dialog>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>{error}</div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};
