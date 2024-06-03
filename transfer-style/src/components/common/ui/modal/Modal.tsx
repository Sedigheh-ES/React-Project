import { ReactNode } from "react"
import { Portal } from "../portal";

interface Props
{ 
    children: ReactNode;
    title: string;
    closeModal: () => void;
   
};

export  function Modal({children,title,closeModal}: Props) {
    return (
   <Portal onClose={closeModal} >
      <div className={" z-10  min-w-[100vw]  md:min-w-[50vw] max-w-[50vw] min-h-[100vh] md:min-h-[50vh] max-h-[100vh] overflow-hidden bg-neutral-200 border-gray-700"}>
          <div className={" flex justify-between rounded bg-white p-8  text-[22px]"}>
                    <div onClick={closeModal} className={"cursor-pointer"} >             
                          *
                   </div>
              {title}
              
          </div>
          <div className={"p-8 text-[18px]"}>
              {children}
          </div>
          
        </div>
  </Portal>
  )
};

