import { basketApiCall, updateBasketApiCall ,UpdatebasketData, UUID2userApiCall} from "@/api/Basket";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {BasketItemType, Basketype} from '@/types/api/Basket'


export function useBasket() {
  const queryClient = useQueryClient();

  const { data: basketData } = useQuery({ queryKey: ['get-basket'], queryFn: basketApiCall });

 const mutate = useMutation({ mutationFn: updateBasketApiCall });
  const mutateUUIDuser = useMutation({
    mutationFn: UUID2userApiCall, onSuccess: (response) => {
      console.log('response',response);
      window.localStorage.removeItem('uuid');
      queryClient.invalidateQueries({ queryKey: ['get-basket'] });
   
 } });

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

  const uuid2userHandler = () => {
    const token = window.localStorage.getItem('token');
    const uuid = window.localStorage.getItem('uuid');

    if (token && uuid) {
      if (basketItems.length > 0) {
        mutateUUIDuser.mutate(uuid);
        
      }else {
        window.localStorage.removeItem('uuid');
      }
     
    }
    
  }

  return {basketItems:basketItems, addItem: addItemHandler , updateItem: updateItemHandler, getItem: getItemHandler, uuid2user:uuid2userHandler}
};

