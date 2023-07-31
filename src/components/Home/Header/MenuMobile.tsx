import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {GrClose} from 'react-icons/gr'
import logoBlackSvg from "../../../assets/logo-black.svg"

interface MenuMobileProps {
  modal: boolean;
  setModal: (modal: boolean) => void;
}

const MenuMobile: React.FC<MenuMobileProps> = ({ modal, setModal })=> {

  function handleModal() {
    setModal(!modal)
  }

  return (
    <div className='z-50 flex justify-end  w-screen fixed right-0 top-0 backdrop-blur-sm' data-aos="fade-left" data-aos-duration="400">
      <div className=' flex flex-col items-end px-6 py-7 justify-between bg-white-primary h-screen w-2/3 animate-showMenu'>
        <GrClose className='cursor-pointer' size={32} onClick={handleModal}/>

        <nav className='flex flex-col gap-20 text-right'>
          <div className='flex flex-col gap-12 text-right text-base text-brand-200'>
            <Link href={'#top'} onClick={handleModal}>Início</Link>
            <Link href={'#about'} onClick={handleModal}>Sobre</Link>
            <Link href={'#advantages'} onClick={handleModal}>Vantagens</Link>
            <Link href={'#participate'} onClick={handleModal}>Participar</Link>
            <Link href={'#contact'} onClick={handleModal}>Contato</Link> 
          </div>

          <Link href={'/'} className='py-2 px-10 bg-brand-200 text-white-primary rounded-md font-bold uppercase'>Login</Link> 
        </nav>

        <Image src={logoBlackSvg} alt='Logo SwiftStock'/>
      </div>
    </div>
  )
}

export default MenuMobile