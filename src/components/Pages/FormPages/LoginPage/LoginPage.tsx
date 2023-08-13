'use client'

import React from 'react'
import FormPage from '../../../FormPage/FormPage'
import Input from '../../../Inputs/Input'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { TLogin } from '@/app/interfaces/login.interface'
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from '@/schemas/login.schema'
import FormLayout from '../FormLayout/FormLayout'


const LoginPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm<TLogin>({
    resolver: zodResolver(loginSchema)
  });

  const submitLogin = (data: TLogin) => {
    console.log(data);
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