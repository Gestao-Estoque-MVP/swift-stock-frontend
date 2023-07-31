'use client'

import Image from "next/image"
import Link from "next/link"
import {BiMenu} from 'react-icons/bi'
import MenuMobile from "./MenuMobile"
import logoWhiteSvg from "../../../assets/logo-white.svg"
import React, { useEffect } from "react"
import Container from "@/components/Container/Container"


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
    <header className={`py-4 fixed top-0 w-full z-20 flex items-center justify-between ${scrollY > 200 ? "bg-brand-400" : ""} transition-all duration-500`}>
      <Container className="flex justify-between items-center">

        <Link data-aos="fade-down" href={'/'}><Image src={logoWhiteSvg} alt="Logo da SwiftStock" className=" w-36 lg:w-auto"/></Link>

        <nav className="flex items-center gap-9 text-white-primary text-base capitalize font-default-font">
          <Link data-aos="fade-down" data-aos-delay="50" className="hidden lg:flex hover:text-brand-500" href={'#top'}>Início</Link>

          <Link data-aos="fade-down" data-aos-delay="100" className="hidden lg:flex hover:text-brand-500" href={'#about'}>Sobre</Link>
          
          <Link data-aos="fade-down" data-aos-delay="150" className="hidden lg:flex hover:text-brand-500" href={'#advantages'}>Vantagens</Link>

          <Link data-aos="fade-down" data-aos-delay="200" className="hidden lg:flex hover:text-brand-500" href={'#participate'}>Participar</Link>

          <Link data-aos="fade-down" data-aos-delay="200" className="hidden lg:flex hover:text-brand-500" href={'#contact'}>Contato</Link>
 
          {/* <Link data-aos="fade-down" data-aos-delay="200" className="hidden lg:flex" href={'/'}>Depoimentos</Link> */}

          {/* <Link data-aos="fade-down" data-aos-delay="250" href={'/'} className="py-2 px-10 bg-brand-200 rounded-md font-bold uppercase hidden lg:flex">Login</Link> */}

          <BiMenu data-aos="fade-down" data-aos-delay="50" className="block lg:hidden cursor-pointer" size={32} onClick={handleModal}/>
        </nav>
      </Container>
    </header>

    {isOpen && <MenuMobile modal={isOpen} setModal={setIsOpen}/>}
    </>
  )
}

export default Header