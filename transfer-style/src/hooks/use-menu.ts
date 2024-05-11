import { getMenuApiCall } from "@/api/Menu";
import { EntityType, MenuItemType, PopulateType } from "@/types";
import { useQuery } from "@tanstack/react-query";

interface Prop{
    position:string
}
export function useMenu({position}:Prop) {
 const { data: menuData } = useQuery({ queryKey: [getMenuApiCall.name], queryFn: () => getMenuApiCall() });
  let MenuItem: null | PopulateType<MenuItemType> = null;

  if (menuData) {
    const findMenu = menuData.data.filter((item :EntityType<MenuType> ) => item.attributes.position === position)
  
    if (findMenu.length > 0) {
  
      MenuItem = findMenu[0].attributes.menu_items;
      MenuItem?.data.sort((a: EntityType<MenuItemType>, b: EntityType<MenuItemType>) => {
        if (a.attributes.rank < b.attributes.rank)
          return -1;

        if (a.attributes.rank > b.attributes.rank)
          return 1;

        return 0;
        
      })
    }
    
    
 
  }
return {data:MenuItem}
  
}
