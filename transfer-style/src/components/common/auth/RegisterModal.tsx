import { createPortal } from "react-dom";
import { Modal } from "../ui";
import { ReactNode } from "react";

interface Props  {
   onClose: () => void
 }


function RegisterModal({onClose}: Props) {
  return (
    <Modal title={"Register"} closeModal={onClose}>
      <form>
       
      </form>
    </Modal>
  
  )
};

export default RegisterModal;