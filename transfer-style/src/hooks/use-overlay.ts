import { useEffect } from "react";

interface Props{
    onClick:() => void;
}

export function useOverlay({onClick}:Props) {
     useEffect(() => {
    const clickHandler = () => {
      onClick()
    };

    document.addEventListener('click', clickHandler);
    return () => {
      document.removeEventListener('click', clickHandler);
    }


  },[])

}