import { ReactNode } from "react";

interface Props { 
    children: ReactNode
}

const ModalContext = ModalContext({});

function ModalContextProvider({children}: Props) {
    return <ModalContext.Provider>
      
  </ModalContext.Provider>
};

export default ModalContext;