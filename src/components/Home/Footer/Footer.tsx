import Container from "@/components/Container/Container";
import logoSvg from "../../../assets/logo-white.svg";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button/Button";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import { AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
    return(
        <footer className="bottom-0 w-screen h-96 bg-brand-400 py-8 bg-[url('/src/assets/footerBg.png')]">
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
                            <SocialMediaLinks/>
                            <Link href="mailto:switftstock@gmail.com" className="hover:underline text-xs">switftstock@gmail.com</Link>
                        </nav>
                    </div>
                    <div className="flex flex-col text-center md:text-left md:items-center md:flex-row flex-wrap justify-between items-center mb-5">
                        <p className="max-w-2xl mb-3 text-white-primary text-xs">Avançando juntos rumo ao futuro do gerenciamento de estoque - simplificado, eficiente e libertador</p>
                        <Button className="rounded max-w-xs">Conheça os desenvolvedores</Button>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer