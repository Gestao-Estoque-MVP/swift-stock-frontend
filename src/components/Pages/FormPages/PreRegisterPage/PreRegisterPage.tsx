"use client"

import FormPage from "@/components/Pages/FormPages/FormPage/FormPage";
import FormLayout from "../FormLayout/FormLayout";
import Input from "@/components/Inputs/Input";
import nookies from "nookies";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { preRegisterSchema } from "@/schemas/pre-register.schema";
import { TPreRegister } from "@/app/interfaces/pre-register.interface";
import { useRouter } from "next/navigation";


const PreRegisterPage = () => {
    const userToken = nookies.get()["@swift-stock: user-token"];
    const router = useRouter();


    if(!userToken){
        router.push("/login");
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<TPreRegister>({
        resolver: zodResolver(preRegisterSchema)
    });
    
    const submitLogin = (data: TPreRegister) => {
        console.log(data);
    }

    return(
        <FormPage>
            <FormLayout>
                <form className="flex flex-col gap-5 mb-8" onSubmit={handleSubmit(submitLogin)}>
                    <Input label="Nome" id="name" type="text" placeholder="Insira o Nome do Usuário" register={register("name")}/>
                    {
                        errors.name && <small className="-translate-y-4 text-error-200">{errors.name.message}</small>
                    }
                    <Input label="email" id="email" type="email" placeholder="Insira o Email do Usuário" register={register("email")}/>
                    {
                        errors.email && <small className="-translate-y-4 text-error-200">{errors.email.message}</small>
                    }

                    <button className='py-4 rounded-lg uppercase font-default-font text-center text-base text-white-primary font-bold bg-brand-200'>Pré Cadastrar</button>
                </form>
            </FormLayout>
        </FormPage>
    )
}

export default PreRegisterPage;