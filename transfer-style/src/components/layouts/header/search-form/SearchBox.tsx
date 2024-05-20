import { getAllProductApiCall } from "@/api/Product";
import { IconBox } from "@/components/common";
import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface Props{
  inputClassName?: string;
}

interface FormInput{
  search_text: string
}

interface filterData{
  $containsi: string,
  title:string
}

export function SearchBox({inputClassName=''}:Props) {
  //TODO should implenet Search Form
  const [resultData, setResultData] = useState<Array<EntityType<ProductType>>>([]);
  const { register, handleSubmit } = useForm();
  const mutation = useMutation({ mutationFn: (data:filterData) => getAllProductApiCall({ filters: data }) });
  const onSubmit = (data:FormInput) => {
   

    mutation.mutate({
      title: {
        '$containsi': data.search_text
      }
    }, {
      onSuccess: (response) => {
       
        setResultData(response.data)
        
      }
      
    });

  }
 console.log('response', resultData);
    return (
      <div className={"relative"}>
         <form name="search-form" onSubmit={handleSubmit(onSubmit)} action="#" method="post" className="flex items-center">
                  <input type="text"  {...register('search_text')}  placeholder={`Search for items`}className={`text-xsmall text-gray-400 border-gray-300 w-full focus:outline-none  ${inputClassName}`} />
                <button type="submit"><IconBox icon={"icon-search"} size={22} /></button>
        </form>
        {
          resultData &&
          <div className={"absolute bg-white w-full left-0  right-0 top-14"}>
              <ul>
                 {
                resultData.map((item:EntityType<ProductType>, index) => {
                  return  <li className={" p-4 hover:bg-green-200 hover:text-white  cursor-pointer"}>{item.attributes.title }</li>
                })
               }
             </ul>
              
          </div>
        }
        
         </div>
     
      );
}

