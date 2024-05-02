import { ImageView } from "../../image-view";

interface Props{
    data: {
        image: string;
        title: string;
        rate: number;
        price: number;
        sale_price: number;
    };
}
 
export function MiniProductCard({data}:Props) {
  return (
       <div className="flex gap-3 lg:gap-5">
                  <ImageView src={data.image} width={120} height={120} alt={"slider product card"} />
                  <div className="flex flex-col justify-between">
                    <div>
                  <div className="text-heading6 text-blue-300 mb-1">{data.title}</div>
                      <div className="flex gap-4">
                        <ul className="flex gap-1">
                          <li className="flex"><i className="icon-star-full text-[12px]"></i></li>
                          <li className="flex"><i className="icon-star-full text-[12px]"></i></li>
                          <li className="flex"><i className="icon-star-full text-[12px]"></i></li>
                          <li className="flex"><i className="icon-star-full text-[12px]"></i></li>
                          <li className="flex"><i className="icon-star-empty text-[12px]"></i></li>
                        </ul>
            <div className="text-xsmall text-gray-500 font-lato">{data.rate}</div>
                      </div>
                    </div>
                    <div>
          <span className="text-heading5 text-green-200"> {data.price} </span>
          <span className="text-heading-sm line-through text-gray-500">{data.sale_price} </span>
                    </div>
                  </div>
                </div>
  )
};

