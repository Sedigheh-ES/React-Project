import { IconBox, Logo, Modal } from "@/components/common/ui"
import Link from "next/link";
import { SearchBox } from "./search-form";
import { Menu } from "./menu";
import { useEffect, useState,MouseEvent, useContext } from "react";
import { useOverlay } from "@/hooks/use-overlay";
import LoginModal from "@/components/common/auth/LoginModal";
import RegisterModal from "@/components/common/auth/RegisterModal";
import { useModal } from "@/store/ModalContext";
import { useUser } from "@/store/AuthContext";
import { toast } from "react-toastify";
import { BasketContext } from "@/store/BasketContext";
import { useBasket } from "@/hooks/use-basket";
import { QueryClient, useQueries, useQueryClient } from "@tanstack/react-query";


export function Header() {
  const { basketItems } = useBasket();
  console.log("basket-items:", basketItems);

  const queryClient = useQueryClient();
  
  //const basket = useContext(BasketContext);
  const { isLogin , logout} = useUser();
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
   
  const {currentModal , openModal,closeModal } = useModal();

  const menuBtnClickHandler = (e: MouseEvent) => {
    e.stopPropagation();
    setShowMobileMenu((prevState) => !prevState);
  }

   const menuBodyClickHandler = (e:MouseEvent) => {
    e.stopPropagation();
   };
  
  
  useOverlay({
    onClick: () => {
      setShowMobileMenu(false)
    },
    isOverFlowHidden: showMobileMenu
  });



  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
    return () => {
      document.body.style.overflowY = 'auto';
    }   
  }, [showMobileMenu]);


  const accountHandler = () => {
    if (isLogin) {
      logout();
            queryClient.invalidateQueries({ queryKey: ['get-basket'] });


      toast.success('شما با موفقیت از اکانت خود خارج شدید')
    } else {
      openModal('login');
    }
  }

    return ( 
      <header className="mb-[33px]">
       {currentModal  === "login" && <LoginModal onClose={closeModal}  />}
        {currentModal === "register" && <RegisterModal onClose={closeModal} />}


      <div  className=" container flex items-center justify-between py-4 md:py-6 xl:py-8">
                <Logo />

                    <div className="border-2 border-green-150  rounded-[5px] max-w-[700px] w-full mx-[15px] px-[15px] hidden lg:inline-block">
                    <SearchBox  inputClassName={"py-[15px]"}/>
                    </div>
        
                <ul className="hidden lg:flex gap-5">
                    <li onClick={() => {accountHandler()}}  className="flex gap-2 cursor-pointer" >
                        <IconBox icon={"icon-user"} size={24} title={`${isLogin ? 'logout' : 'login/register' }`} HideTitleOnMobile={true} link={'#'} titleClassName={"text-medium text-gray-500 font-lato"} />                     
                    </li>
                    <li className="flex gap-2 cursor-pointer">
                         <IconBox  icon={"icon-shopping-cart"} size={24} title={"Card"} HideTitleOnMobile={true} link={'#'}  badge={basketItems.length} titleClassName={"text-medium text-gray-500 font-lato"}/>                    
                   </li>
                </ul>
                
        <button onClick={menuBtnClickHandler} id="menu_btn" className="flex flex-col justify-between py-[4px] lg:hidden w-[24px] h-[24px]">
          <span className="w-full h-[1.5px] bg-black inline-block rounded"></span>
          <span className="w-full h-[1.5px] bg-black inline-block rounded"></span>
          <span className="w-full h-[1.5px] bg-black inline-block rounded"></span>
        </button>
      </div>

      <div className="border-gray-200 border-y h">
     <div onClick={menuBodyClickHandler} className={` ${showMobileMenu? 'left-0 fixed overflow-y-scroll' :'-left-[100%] absolute' }  container transition-all w-4/5 rounded-[24px] lg:rounded-[0px] lg:w-auto flex  top-0 bottom-0  lg:static flex-col lg:flex-row justify-start lg:justify-between items-start pt-[16px] pl-[24px] lg:py-[13px] lg:items-center h-[100vh] bg-white lg:h-[70px] mobile-menu z-50`}>
                    
                <Menu/>
                

                    <div className="hidden lg:flex items-center shrink-0 gap-3">     
                        <IconBox icon={"icon-headset xl:text-[32px] 2xl:text-[36px] aspect-square"} size={30} link={"#"} />
                        <div>
                        <Link href="tel:19008888" className="text-green-200 lg:text-heading6 xl:text-heading5 2xl:text-heading4">1900-8888</Link>
                        <div className="font-lato text-xsmall"><span className="hidden md:inline-block">24/7 </span>Support Center</div>
                        </div>
                    </div>
                </div>

        <div className="container flex justify-between lg:hidden pt-[20px] pb-[16px] items-center">
          <div className="border-[1px] border-green-150 rounded-[5px] w-full max-w-[220px] p-[6px]">
             <SearchBox/>
          </div>
                    
                    
          <ul className="flex gap-5">
                     <li className="flex gap-2 cursor-pointer"  onClick={() => setShowMobileMenu(true)}>
                        <IconBox icon={"icon-user"} size={24} title={"Account"} HideTitleOnMobile={false} link={'#'} titleClassName={"text-medium text-gray-500 font-lato"} />                     
                    </li>
                    <li className="flex gap-2 cursor-pointer">
                         <IconBox  icon={"icon-shopping-cart"} size={24} title={"Card"} HideTitleOnMobile={false} link={'#'}  badge={4} titleClassName={"text-medium text-gray-500 font-lato"}/>                    
                   </li>
            
          </ul>
        </div>
      </div>
    </header>
    
     );
}


