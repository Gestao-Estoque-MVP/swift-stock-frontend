"use client"

import FormLayout from "../FormLayout/FormLayout";
import {Input} from "../../../../my-app/src/components/Inputs/Text/Input";
import nookies from "nookies";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { preRegisterSchema } from "@/schemas/pre-register.schema";
import { useRouter } from "next/navigation";
import { TPreRegister } from "@/interfaces/pre-register.interface";
import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { PRE_USER_MUTATION } from "../../../../my-app/src/graphql/mutation/mutation";
import { cookies } from "next/dist/client/components/headers";
import FormPage from "../FormPage/FormPage";


const PreRegisterPage = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<TPreRegister>({
        resolver: zodResolver(preRegisterSchema)
    });
    

    const userToken = nookies.get()["@swift-stock: user-token"];
    
    const [createPreUser] = useMutation(PRE_USER_MUTATION)

    const submitLogin = async(data: TPreRegister) => {
        try{
            const res = await createPreUser({
                variables: {
                    name: data.name,
                    email: data.email,
                    status: "pre-users"
                },
                context: {
                    headers: {
                        Authorization: `Bearer ${userToken}`
                    }
                }
            }) 

            console.log(res)
        }catch(err){
            console.log(err)
        }
    }

    return(
        <>
        <FormPage>
            <FormLayout>
                <form className="flex flex-col gap-5 mb-8" onSubmit={handleSubmit(submitLogin)}>
                    <Input label="Nome" id="name" type="text" placeholder="Insira o Nome do Usuário" register={register("name")} value={""}/>
                    {
                        errors.name && <small className="-translate-y-4 text-error-200">{errors.name?.message}</small>
                    }
                    <Input label="email" id="email" type="email" placeholder="Insira o Email do Usuário" register={register("email")} value={""}/>
                    {
                        errors.email && <small className="-translate-y-4 text-error-200">{errors.email.message}</small>
                    }

                    <button className='py-4 rounded-lg uppercase font-default-font text-center text-base text-white-primary font-bold bg-brand-200'>Pré Cadastrar</button>
                </form>
            </FormLayout>
        </FormPage>
        </>
    )
}

export default PreRegisterPage;