import Container from "@/components/Container/Container";
import logoSvg from "../../../assets/logo-white.svg";
import Image from "next/image";
import Link from "next/link";

import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { AiOutlineArrowUp } from "react-icons/ai";

import Button from "@/components/Button/Button";
import footerBg from "../../../assets/footerBg.png";

const Footer = () => {
    return(
        <footer className="absolute bottom-0 w-screen h-96 bg-brand-400 py-8 bg-[url('/src/assets/footerBg.png')]">
            <Container className="relative  h-full">

                <div className="group w-100 flex justify-center -translate-y-16">
                    <Button className="max-w-xs rounded-3xl">
                        Voltar para o topo
                        <AiOutlineArrowUp className="transition-all ease-in-out group-hover:-translate-y-1"/>
                    </Button>
                </div>
                <div className="flex flex-col justify-between  h-full">
                    <div className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-6">
                        <Link href="">
                            <Image alt="Logo da SwiftStock" src={logoSvg}/>
                        </Link>
                        <nav className="text-white-primary flex-col gap-6">
                            <div className="flex justify-center md:justify-end items-center gap-4">
                                <Link href="" className="transition-all ease-in duration-75 hover:-translate-y-1">
                                    <RiWhatsappFill className="w-5 h-5"/>
                                </Link>

                                <Link href="" className="transition-all ease-in duration-75 hover:-translate-y-1">
                                    <FaLinkedin className="w-5 h-5"/>
                                </Link>

                                <Link href="" className="transition-all ease-in duration-75 hover:-translate-y-1">
                                    <PiInstagramLogoFill className="w-5 h-5"/>
                                </Link>
                            </div>
                            <Link href="mailto:switftstock@gmail.com" className="hover:underline text-xs">switftstock@gmail.com</Link>
                        </nav>
                    </div>
                    <div className="flex flex-col text-center md:text-left md:items-center md:flex-row flex-wrap justify-between items-center mb-5">
                        <p className="max-w-2xl mb-3 text-white-bg text-xs">Avançando juntos rumo ao futuro do gerenciamento de estoque - simplificado, eficiente e libertador</p>
                        <Button className="rounded max-w-xs">Conheça os desenvolvedores</Button>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer