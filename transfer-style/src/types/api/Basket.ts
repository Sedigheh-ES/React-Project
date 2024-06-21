import internal from "stream"
import { EntityType } from "./Response";
import { ProductType } from "./Product";

export interface Basketype{
    uuid: any,
    basket_items:Array<BasketItemType>
}

export interface BasketItemType {
    id: number;
    quantity: number;
    product: {
          data:EntityType<ProductType>
    }
}