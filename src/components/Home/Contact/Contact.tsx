import Container from "@/components/Container/Container"
import Link from "next/link"

import {IoIosCopy} from 'react-icons/io'

const Contact = () => {
  return (
    <section className="bg-white-primary py-16">
      <div className="bg-logoPattern bg-cover bg-no-repeat bg-right my-0 mx-auto p-4 w-full max-w-screen-2xl bg-brand-200 py-16 flex flex-col items-center gap-11 md:rounded-3xl md:bg-center ">
      <div className="flex flex-col gap-9">
      <div className="flex flex-col gap-2">
        <h1 className="text-center font-default-font text-3xl text-white-primary font-extrabold">Dúvidas?</h1>
        <p className="font-deafult-font text-base font-normal text-white-total text-center">Entre em contato com o time da Swift Stock</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-3">
          <div className="flex gap-2 items-center">
          <IoIosCopy title="Copiar telefone" className="text-white-total cursor-pointer " size={16}/>
          <p className="text-base text-brand-500 font-default-font font-normal">+55 99 99999-9999</p>
          </div>

          <div className="flex gap-2 items-center">
          <IoIosCopy title="Copiar email" className="text-white-total cursor-pointer " size={16}/>
          <p className="text-base text-brand-500 font-default-font font-normal underline">swiftstock@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full md:flex-row justify-center md:w-auto">
  <Link className="flex items-center justify-center py-3 rounded w-full md:w-auto bg-white-primary text-brand-300 font-default-font font-semibold text-base md:px-16" href="#">Whatsapp</Link>
  <Link className="flex items-center justify-center py-3 rounded w-full md:w-auto bg-white-primary text-brand-300 font-default-font font-semibold text-base md:px-16" href="#">Enviar Email</Link>
</div>

      </div>
    </section>
  )
}

export default Contact