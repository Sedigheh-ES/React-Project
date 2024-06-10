import { Children, ReactNode, createContext, useState } from "react";

interface Props {
    children: ReactNode;
}

interface ProductItem{
    productId: number;
    title: string;
    price: number;
    img: string;
    quantity: number;
}

export const BasketContext = createContext<
    {
        basketItem: Array<ProductItem>,
         addItem: (product:ProductItem) =>void,
    increaseItem: (productId: number) => void,
    decreaseItem: (productId: number) => void,
    deleteItem: (productId: number) => void


     }>
    ({

    basketItem: [],
    addItem: (product:ProductItem) =>{},
    increaseItem: (productId: number) => { },
    decreaseItem: (productId: number) => { },
    deleteItem: (productId: number) => { }
    

});

export const BasketContextProvider = (props: Props) => {
    const [basketItem, setBasketitem] = useState<Array<ProductItem>>([]);

    const addItemHandler = (product:ProductItem) => {

     }
    
    const increamentItemHandler = (productId: number) => {
        
    }

    const decreamentItemHandler = (productId: number) => {
        
    }

    const deleteItemHandler = (productId: number) => {
        
    }
    
    return (
        <BasketContext.Provider value={{basketItem: basketItem, addItem:addItemHandler , increaseItem: increamentItemHandler , decreaseItem:decreamentItemHandler, deleteItem:deleteItemHandler }}  >
            {props.children}
        </BasketContext.Provider>
    )
}
