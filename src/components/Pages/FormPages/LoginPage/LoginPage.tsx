'use client'

import React from 'react'
import FormPage from '../FormPage/FormPage'
import Input from '../../../Inputs/Input'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { TLogin } from '@/interfaces/login.interface'
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from '@/schemas/login.schema'
import FormLayout from '../FormLayout/FormLayout'
import { useMutation } from '@apollo/client'
import { LOGIN_MUTATION } from '@/graphql/mutation/mutation'
import { toast } from 'react-toastify'


const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm<TLogin>({
    resolver: zodResolver(loginSchema)
  });

  const [login] = useMutation(LOGIN_MUTATION);

  const submitLogin = async(data: TLogin) => {
    try{
      const res = await login({
        variables: {
          email: data.email,
          password: data.password
        }
      })

      console.log(res);
      if(res.data?.login){
        return toast.success("Login feito com sucesso!");
      }
    }catch(error: unknown) {
      return toast.error("Email ou Senha incorretos");
    }
  }

  return (
      <FormPage>
        <FormLayout>
            <form className='flex flex-col gap-5 mb-8' onSubmit={handleSubmit(submitLogin)}>
              <Input type='text' id='email' label='E-mail' placeholder='Insira seu Email' register={register("email")}/>
              {
                errors.email && <small className="-translate-y-4 text-error-200">{errors.email.message}</small>
              }
              <Input type='password' id='email' placeholder='Insira sua Senha' label='Password'  register={register("password")} />
              {
                errors.password && <small className="-translate-y-4 text-error-200">{errors.password.message}</small>
              }

              <button className='py-4 rounded-lg uppercase font-default-font text-center text-base text-white-primary font-bold bg-brand-200'>Acessar</button>
              <Link className='text-xs text-right underline text-brand-100 font-semibold font-default-font' href={'#'}>Esqueci minha senha</Link>
            </form>

            <footer className='flex justify-center '>
              <Link href={'#'} className='py-4 rounded-lg w-full bg-brand-50 text-brand-100 uppercase text-center font-default-font font-bold'>Criar conta</Link>
            </footer>
        </FormLayout>
      </FormPage>
  )
}

export default LoginPage