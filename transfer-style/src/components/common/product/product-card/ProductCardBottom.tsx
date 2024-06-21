import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";
import { IconBox } from "../../ui";
import { useContext } from "react";
import { BasketContext } from "@/store/BasketContext";
import { useBasket } from "@/hooks/use-basket";

interface Props {
  productData: EntityType<ProductType>;
}

export function ProductCardBottom({ productData }: Props) {
  
  const { addItem, updateItem, getItem } = useBasket();
  
  const basketItem = getItem(productData.id);

  // const basket = useContext(BasketContext);

  // const currentProductInBasket = basket.getItem(productData.id);

  return (
    <div className="add-product">
      
      {
       basketItem ?
          <div className="input-product__container  border-[1px] w-[80px] flex justify-between  items-center pt-2 rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px]">
             
                  <div className="flex flex-col justify-between cursor-pointer">
                     <IconBox icon={"up icon-angle-small-up"} size={10} onClick={()=> updateItem(productData.id,"increase")}  />    
                     <IconBox icon={"down icon-angle-small-down"} size={10} onClick= {() =>updateItem(productData.id,"decrease")} />                          
                 </div>
                 {basketItem.quantity}
          </div>
          :
          <button onClick={() => addItem(productData.id)} className="flex items-center justify-center text-heading-sm text-green-200 border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">Adds +</button>

      }
        </div>
  )
};

