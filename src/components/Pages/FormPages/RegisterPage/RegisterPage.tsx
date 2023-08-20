"use client"

import FormPage from "@/components/Pages/FormPages/FormPage/FormPage";
import FormLayout from "../FormLayout/FormLayout";
import {Input, SelectInput} from "@/components/Inputs/Input";
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

    return(
        <FormPage>
            <FormLayout title="Olá, Nome do Usuário!">
                <form className="flex flex-col gap-5 mb-8" onSubmit={handleSubmit(submitLogin)}>
                    <Input label="Telefone" id="name" type="text" placeholder="Insira o Número de Telefone" register={register("phone")}/>
                    {
                        errors.phone && <small className="-translate-y-4 text-error-200">{errors.phone.message}</small>
                    }
                    <SelectInput placeholder="Escolha o documento a ser informado" label="Documento" id="document" register={register("document_type")}>
                        <option value="cnpj">CNPJ</option>
                        <option value="cpf">CPF</option>
                        <option value="rg">RG</option>
                    </SelectInput>
                    {
                        errors["document_type"] && <small className="-translate-y-4 text-error-200">{errors["document_type"].message}</small>
                    }
                    <Input label="Número do Documento" id="name" type="select" placeholder="Insira o Número do documento" register={register("document_number")}/>
                    {
                        errors["document_number"] && <small className="-translate-y-4 text-error-200">{errors["document_number"].message}</small>
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