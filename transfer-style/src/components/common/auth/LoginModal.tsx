import { createPortal } from "react-dom";
import { Modal } from "../ui";
import { Dispatch, SetStateAction } from "react";

interface Props {
  onClose: () => void,
  setShowModal: Dispatch<SetStateAction<"login" | "register" | null >>
}

function LoginModal({onClose,setShowModal}: Props) {
  return (
    <Modal title={"login"} closeModal={onClose}>
      <form>
        
      </form>
      <span onClick={()=>setShowModal('register')}>go to register</span>
    </Modal>
  
  )
};

export default LoginModal;