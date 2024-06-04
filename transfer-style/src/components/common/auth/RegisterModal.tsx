import { createPortal } from "react-dom";
import { Modal } from "../ui";
import { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../ui/form/Input";

interface Props  {
   onClose: () => void
}
 
interface formData{
  username: string;
  email: string;
  password:string
}


function RegisterModal({ onClose }: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm<formData>();

  const onSubmit = (data: formData) => {
    console.log(data);
    
  }
  return (
    <Modal title={"Register"} closeModal={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
      
        
        <div className="flex flex-col gap-4 p-6">
          <Input register={register('username', { required: "enter your username please" })}  errors={errors}  type={"text"} {...{placeholder:"enter username"}} label={"username:"} />
          <Input register={register('email', { required: "enter your email please" })}  errors={errors}  type={"email"} {...{placeholder:"enter username"}} label={"email:"} />
          <Input register={register('password', { required: "enter your password please" })} errors={errors} type={"password"}  {...{placeholder:"enter username"}} label={"password:"} />
                 
          <div className={"flex justify-center items-center"}>

            <button className={"mt-2 p-4 bg-lime-600   active:bg-lime-500 rounded-lg text-white  w-1/3"}>Submit</button>
            
            </div>
       </div>
      </form>
    </Modal>
  
  )
};

export default RegisterModal;