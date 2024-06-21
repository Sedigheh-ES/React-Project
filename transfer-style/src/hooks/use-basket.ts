import { basketApiCall, updateBasketApiCall ,UpdatebasketData} from "@/api/Basket";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {BasketItemType, Basketype} from '@/types/api/Basket'


export function useBasket() {
  const queryClient = useQueryClient();

  const { data: basketData } = useQuery({ queryKey: ['get-basket'], queryFn: basketApiCall });

 const mutate = useMutation({ mutationFn: updateBasketApiCall });

  const basketItems = basketData?.data.attributes.basket_items ?? [];
  console.log(basketItems);

  const addItemHandler = (productId: number) => { 

    const prepareUpdateData = basketItems.map((item) => {
     
      return {
             product: {
                    connect:[{id:item.product.data.id}]
                   },
              quantity: item.quantity
      }
    })
   
    prepareUpdateData.push({
             product: {
                    connect:[{id:productId}]
                   },
              quantity: 1
      })


    const updateData: UpdatebasketData = {
      basket_items : prepareUpdateData
            
    }


    mutate.mutate(updateData, {
      onSuccess: (response) => {
        queryClient.invalidateQueries({queryKey:['get-basket']});
      // console.log('response Data:',response);
      
    },});
  }

   const updateItemHandler = (productId: number, type:"increase" | "decrease") => { 

    const prepareUpdateData = basketItems.map((item) => {
     
      return {
             product: {
                    connect:[{id:item.product.data.id}]
                   },
              quantity: item.quantity
      }
    })
   
     prepareUpdateData.map((item) => {
       if (item.product.connect[0].id === productId) {
         if (type === "increase") {
           item.quantity = item.quantity + 1;
         } else {
           item.quantity = item.quantity - 1;
         }
       }
       return item;
     })

    const updateData: UpdatebasketData = {
      basket_items : prepareUpdateData
            
    }


    mutate.mutate(updateData, {
      onSuccess: (response) => {
        queryClient.invalidateQueries({queryKey:['get-basket']});
     
      
    },});
   }
  const getItemHandler = (productId: number):BasketItemType | undefined => {
    return basketItems.find((item) => item.product.data.id === productId )
  }

  return {basketItems:basketItems, addItem: addItemHandler , updateItem: updateItemHandler, getItem: getItemHandler}
};

