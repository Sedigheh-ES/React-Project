import { createPortal } from "react-dom";
import { Modal } from "../ui";
import { Dispatch, SetStateAction } from "react";
import { useModal } from "@/store/ModalContext";

interface Props {
  onClose: () => void
}

function LoginModal({ onClose }: Props) {
  const { openModal } = useModal();
  return (
    <Modal title={"login"} closeModal={onClose}>
      <form>
        
      </form>
      <span onClick={()=>openModal('register')}>go to register</span>
    </Modal>
  
  )
};

export default LoginModal;