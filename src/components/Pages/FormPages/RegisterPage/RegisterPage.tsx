"use client"

import FormPage from "@/components/Pages/FormPages/FormPage/FormPage";
import FormLayout from "../FormLayout/FormLayout";
import Input from "@/components/Inputs/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/schemas/register.schema";
import { TRegister } from "@/interfaces/register.interface";


const RegisterPage = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<TRegister>({
        resolver: zodResolver(registerSchema)
    });
    
    const submitLogin = (data: TRegister) => {
        console.log(data);
    }

    console.log(errors);
    return(
        <FormPage>
            <FormLayout title="Olá, Nome do Usuário!">
                <form className="flex flex-col gap-5 mb-8" onSubmit={handleSubmit(submitLogin)}>
                    <Input label="Telefone" id="name" type="text" placeholder="Insira o Número de Telefone" register={register("phone")}/>
                    {
                        errors.phone && <small className="-translate-y-4 text-error-200">{errors.phone.message}</small>
                    }
                    <Input label="Senha" id="email" type="password" placeholder="Insira sua Senha" register={register("password")}/>
                    {
                        errors.password && <small className="-translate-y-4 text-error-200">{errors.password.message}</small>
                    }
                    <Input label="Confirmação de Senha" id="password-confirm" type="password" placeholder="Confirme sua Senha" register={register("confirmPassword")}/>
                    {
                        errors.confirmPassword && <small className="-translate-y-4 text-error-200">{errors.confirmPassword.message}</small>
                    }
                    <button className='py-4 rounded-lg uppercase font-default-font text-center text-base text-white-primary font-bold bg-brand-200' type="submit">Cadastrar</button>
                </form>
            </FormLayout>
        </FormPage>
    )
}

export default RegisterPage;