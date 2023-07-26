'use client'

import Image from "next/image"
import Link from "next/link"
import {BiMenu} from 'react-icons/bi'
import MenuMobile from "./MenuMobile"
import logoWhiteSvg from "../../../assets/logo-white.svg"
import React, { useEffect } from "react"

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [scrollY, setScrollY] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  function handleModal() {
    setIsOpen(!isOpen);
  }


  return (
    <>
    <header className={`py-8 fixed top-0 w-full z-10 px-5 flex items-center justify-between lg:px-16 ${scrollY > 600 ? "bg-brand-400" : ""} transition-all duration-200`}>
      <Link href={'/'}><Image src={logoWhiteSvg} alt="Logo da SwiftStock" className=" w-36 lg:w-auto"/></Link>

      <nav className="flex items-center gap-9 text-white-primary text-base capitalize font-default-font">
        <Link className="hidden lg:flex" href={'/'}>Início</Link>

        <Link className="hidden lg:flex" href={'/'}>Sobre</Link>
        
        <Link className="hidden lg:flex" href={'/'}>Benefícios</Link>

        <Link className="hidden lg:flex" href={'/'}>Depoimentos</Link>

        <Link href={'/'} className="py-2 px-10 bg-brand-200 rounded-md font-bold uppercase hidden lg:flex">Login</Link>

        <BiMenu className="block lg:hidden cursor-pointer" size={32} onClick={handleModal}/>
      </nav>

    </header>

    {isOpen && <MenuMobile modal={isOpen} setModal={setIsOpen}/>}
    </>
  )
}

export default Header