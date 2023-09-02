import React from 'react'
import Image from 'next/image'

import logoBlue from '../../../assets/logo-blue.svg'
import avatarImg from '../../../assets/avatar.jpg'

import { BiSolidDashboard, BiSolidUser } from 'react-icons/bi';
import { PiBagFill } from 'react-icons/pi'
import { AiOutlinePaperClip, AiOutlineBarcode } from 'react-icons/ai'
import { IoMdNotifications } from 'react-icons/io'
import { BsFillGearFill } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'

import Link from 'next/link';

const SideBar = () => {
  return (
    <>
    <aside className='max-w-xs bg-white-total shadow-lg h-screen px-6 py-8 flex flex-col'>
      <header className='flex justify-start mb-16'>
       <Link href={"/"}>
       <Image src={logoBlue} alt="Logo SwiftStock" />
       </Link>
      </header>

      <ul className='font-default-font flex flex-col gap-2 h-full'>
        <li className='text-grey-200 px-4 py-2 rounded-xl hover:text-brand-200 hover:bg-brand-700'>
          <Link href={"/dashboard"} className='flex gap-3 items-center'>
            <BiSolidDashboard size={24}/>
            <p className='text-base font-semibold capitalize'>Dashboard</p>
          </Link>
        </li>

        <li className='text-grey-200 px-4 py-2 rounded-xl hover:text-brand-200 hover:bg-brand-700'>
         <Link href={"dashboard/products"} className='flex gap-3 items-center'>
          <PiBagFill size={24}/>
          <p className='text-base font-semibold capitalize'>Produtos</p>
         </Link>
        </li>

        <li className='text-grey-200 px-4 py-2 rounded-xl hover:text-brand-200 hover:bg-brand-700'>
          <Link href={"#"} className='flex gap-3 items-center'>
            <BiSolidUser size={24}/>
            <p className='text-base font-semibold capitalize'>Usuários</p>
          </Link>
        </li>

        <li className='text-grey-200 px-4 py-2 rounded-xl hover:text-brand-200 hover:bg-brand-700'>
          <Link href={"#"} className='flex gap-3 items-center'>
            <AiOutlinePaperClip size={24}/>
            <p className='text-base font-semibold capitalize'>Arquivos</p>
          </Link>
        </li>

        <li className='text-grey-200 px-4 py-2 rounded-xl hover:text-brand-200 hover:bg-brand-700'>
          <Link href={"#"} className='flex gap-3 items-center'>
            <AiOutlineBarcode size={24}/>
            <p className='text-base font-semibold capitalize'>Registros</p>
          </Link>
        </li>

        <li className='text-grey-200 px-4 py-2 rounded-xl hover:text-brand-200 hover:bg-brand-700'>
          <Link href={"#"} className='flex gap-3 items-center'>
            <IoMdNotifications size={24}/>
            <p className='text-base font-semibold capitalize'>Notificações</p>
          </Link>
        </li>

        <li className='text-grey-200 px-4 py-2 rounded-xl hover:text-brand-200 hover:bg-brand-700'>
          <Link href={"#"} className='flex gap-3 items-center'>
            <BsFillGearFill size={24}/>
            <p className='text-base font-semibold capitalize'>Configurações</p>
          </Link>
        </li>
      </ul>

      <footer className='flex items-center justify-between'>
        <Link href="#" className='flex items-start gap-2'>
          <Image src={avatarImg} alt="Profile image"  className='rounded-lg w-12'/>
          <div className='font-default-font text-grey-200'>
            <h2 className='text-sm font-bold'>Bejamin A. Pomba</h2>
            <p className='text-xs'>Admin</p>
          </div>
        </Link>
        <FiLogOut size={24} className='text-grey-200 cursor-pointer'/>
      </footer>
    </aside>
  
    </>
  )
}

export default SideBar