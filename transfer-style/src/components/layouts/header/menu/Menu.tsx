import { getMenuApiCall } from "@/api/Menu";
import { IconBox } from "@/components/common";
import { useMenu } from "@/hooks/use-menu";
import { useOverlay } from "@/hooks/use-overlay";
import { browseCategroiesMock } from '@/mock/browsCategory';
import { menuMock } from '@/mock/menu';
import { EntityType, MenuItemType, MenuType, PopulateType } from "@/types";
import { useQuery } from "@tanstack/react-query";

import Link from "next/link";
import { useEffect, useState ,MouseEvent} from "react";

export function Menu() {
  const [showCategoryMenu, setShowCategoryMenu] = useState<boolean>(false);

  const { data: mainMenuItem } = useMenu({position: 'main_menu'});
  const { data: categoryMenuItems } = useMenu({ position: 'brows-category' });

  useOverlay({
    onClick: () => {
      setShowCategoryMenu(false)
    }
  });
  
  const categoryMenuClickHandler = (e:MouseEvent) => {
    e.stopPropagation();
    setShowCategoryMenu((prevState) => !prevState);
  };
  


  const categoryBodyClickHandler = (e:MouseEvent) => {
    e.stopPropagation();
  };


  
  

    return ( 

      <>
     
       
            <div id="all_categories" onClick={categoryMenuClickHandler} className="inline-flex relative cursor-pointer bg-green-200 gap-2.5 text-white px-4 py-3 rounded-[5px] items-center">    
                
                 <IconBox  linkClassName={"flex items-center gap-x-2"}  icon={"icon-apps"} size={24}  HideTitleOnMobile={true} link={'#'} title={"Browse All Categories"}/>   
                 <IconBox linkClassName={"flex items-center gap-x-1"}  icon={"icon-angle-small-down"} size={24} HideTitleOnMobile={false} link={'#'}  />  
                
            <div id="all_categories_box" onClick={categoryBodyClickHandler} className={`${showCategoryMenu ? 'flex':'hidden'} absolute z-20 bg-white left-0 top-16 w-[300px] lg:w-[500px] rounded-[5px] lg:border-[1px] border-green-300 p-[30px] hover:cursor-default`}>
                    <div id="all_cat_inner_box"  className="flex flex-wrap justify-between gap-y-[15px]">
              {
                categoryMenuItems &&
                categoryMenuItems.data.map((item: EntityType<MenuItemType>, index: number) => {
                  
                  return <IconBox key={index} link={item.attributes.link} icon={item.attributes.icon_name} size={30} title={item.attributes.title} titleClassName={"text-heading-sm text-blue-300"} path={item.attributes.icon_path} linkClassName={"flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5  basis-full lg:basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer"} />
                  

                })
                               
                         }
                                
                <div id="more_categories" className="cursor-pointer flex gap-4 items-center lg:justify-center w-full mt-[17px]">
                <i className="icon-add text-[24px]"></i>
                  <div className="text-heading-sm text-blue-300 ">More Categories</div>
                </div>
              </div>
            </div>
            </div>
    

          <nav id="main_menu">
         <ul className="flex flex-col lg:flex-row items-start lg:items-center text-heading6 lg:text-heading-sm 2xl:text-heading6 gap-[32px] mt-[32px] lg:mt-0 lg:gap-3 xl:gap-5 2xl:gap-10">
            {     
              mainMenuItem &&
              mainMenuItem.data.map((item: EntityType<MenuItemType>,index:number) => {
                
                return (<li key={index}>
                  {
                    item.attributes.icon_name ?
                      <IconBox link={item.attributes.link} icon={item.attributes.icon_name} title={item.attributes.title} size={24} />
                      :
                      <Link href={item.attributes.link} className="flex flex-row gap-2 items-center">{item.attributes.title}</Link>
                  }
                </li>);

              })


             }
                      

            
            </ul>
          </nav>
          
        
      </>
            

            );
}

