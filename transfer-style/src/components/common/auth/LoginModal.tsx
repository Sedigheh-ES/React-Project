import { createPortal } from "react-dom";
import { Input, Modal } from "../ui";
import { Dispatch, SetStateAction } from "react";
import { useModal } from "@/store/ModalContext";
import { loginApiCall } from "@/api/Auth";
import { useMutation } from "@tanstack/react-query";
import { useUser } from "@/store/AuthContext";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

interface Props {
  onClose: () => void
}

interface formData{
  identifier: string;
  password:string
}

function LoginModal({ onClose }: Props) {
  const { openModal, closeModal } = useModal();

  const {login} = useUser();

  const { register, handleSubmit, formState: { errors } } = useForm<formData>();

  const mutate = useMutation({ mutationFn: loginApiCall });

  const onSubmit = (data: formData) => {
    mutate.mutate(data, {
      onSuccess: (response) => {
        console.log('response', response);
        login(response.jwt, response.user);
        toast.success('شما با  موفقیت لاگین شدید');
        closeModal();
    }});
    
  }
  
  return (
    <Modal title={"login"} closeModal={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
 
        <div className="flex flex-col gap-4 p-6">
          <Input register={register('identifier', { required: "enter your username please" })}  errors={errors}  type={"text"} {...{placeholder:"enter username"}} label={"username:"} />
          <Input register={register('password', { required: "enter your password please" })} errors={errors} type={"password"}  {...{placeholder:"enter username"}} label={"password:"} />
                 
          <div className={"flex justify-center items-center"}>

            <button className={"mt-2 p-4 bg-lime-600   active:bg-lime-500 rounded-lg text-white  w-1/3"}>Submit</button>
            
            </div>
       </div>
      </form>
      <span onClick={()=>openModal('register')}>go to register</span>
    </Modal>
  
  )
};

export default LoginModal;