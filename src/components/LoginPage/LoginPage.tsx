'use client'

import React from 'react'
import FormPage from '../FormPage/FormPage'
import logoBlue from '../../assets/logo-blue.svg'
import Image from 'next/image'
import Input from '../Inputs/Input'
import Link from 'next/link'


const LoginPage = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
      <FormPage>
        <section className='bg-white-primary w-full py-12 px-6  sm:rounded-xl sm:max-w-xl'>
          <header className='flex flex-col items-center gap-5 mb-10'>
            <Image src={logoBlue} alt='Logo SwiftStock'/>
            <p className='font-default-font text-grey-100 text-base text-center'>Lorem ipsum dolor amet lorem ipsum</p>
          </header>

          <form className='flex flex-col gap-5 mb-8' action="">
            <Input type='text' id='email' label='E-mail' placeholder='Insira seu Email' value={email} setValue={setEmail} />
            <Input type='password' id='email' placeholder='Insira sua Senha' label='Password' value={password} setValue={setPassword} />

            <Link href={'#'} className='py-2 rounded-lg uppercase font-default-font text-center text-base text-white-primary font-bold bg-brand-200'>Acessar</Link>
            <Link className='text-xs text-right underline text-brand-100 font-semibold font-default-font' href={'#'}>Esqueci minha senha</Link>
          </form>

          <footer className='flex justify-center '>
            <Link href={'#'} className='py-2 rounded-lg w-full bg-brand-50 text-brand-100 uppercase text-center font-default-font font-bold'>Criar conta</Link>
          </footer>
        </section>
      </FormPage>
  )
}

export default LoginPage