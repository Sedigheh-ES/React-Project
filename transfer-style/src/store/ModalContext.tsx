import { ReactNode, useContext, useState } from "react";
import { createContext } from "react";

interface Props { 
    children: ReactNode
}


interface ContextProps{
  currentModal: ModalType;
  openModal: (ModalName: ModalType) => void;
  closeModal: () => void;
}

type ModalType = "login" | "register" | null;


const ModalContext = createContext<ContextProps>({ currentModal: null, openModal: () => { }, closeModal: () => { } });

export const useModal = () =>useContext(ModalContext);

export function ModalContextProvider({ children }: Props) {
  const [showModal, setShowModal] = useState<ModalType>(null);
  
  const openModal = (ModalName: ModalType) => {
    setShowModal(ModalName);    
  }

  const closeModal = () => {
    setShowModal(null);
    
  }

  return (
    <ModalContext.Provider value={{ currentModal: showModal, openModal: openModal, closeModal: closeModal }} >
               {children}
      
   </ModalContext.Provider>
  )
};

