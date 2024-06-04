
import { useId } from "react";
import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";
import { ErrorMessage } from "./ErrorMessage";

interface Props extends React.HTMLAttributes<HTMLInputElement>{
    type?: "text" | "password" | "email" | "tel" | "number";
    label?: string;
   
    register: UseFormRegisterReturn<any>;
    errors: FieldErrors<any>;
 
}

export function Input({ type = "text", label, placeholder = "", register , errors,...rest}: Props) {
    const id = useId();
    const name = register.name;
  return (
      <div>
           <div className="flex flex-col gap-4 font-serif text-xl">
         {label && <label htmlFor={id}>{label}</label>}
          <input  className={"p-4 rounded-md text-gray-400"} id={id} type={type}  placeholder={placeholder} {...register}  />
          </div>
          <ErrorMessage errors={errors} name={name} />
          
   </div>
  )
};

