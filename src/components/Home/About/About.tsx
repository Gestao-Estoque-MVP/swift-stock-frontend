import Container from "@/components/Container/Container";
import Link from "next/link";
import { PiArrowUpLight } from "react-icons/pi";
import logoIcon from "../../../assets/logoIcon.svg";
import Image from "next/image";
import swiftStockUI from "../../../assets/swifStockUI.jpg";


const About = () => {
    return(
        <section id="about" className="md:relative p-0 lg:h-[720px] bg-white-primary pt-20 lg:pt-0">
            <Container className="w-full h-full py-5">
                <div className=" py-5 h-full flex flex-col items-start lg:max-w-[35%] md:justify-center">
                    <div className="flex gap-3 items-center">
                        <h2 data-aos="fade-up" className="text-brand-200 font-extrabold text-2xl mb-6">
                            Sobre a SwiftStock
                        </h2>
                        <Image data-aos="fade-up" src={logoIcon} alt="logo da swift stock" className="mb-6"></Image>
                    </div>
                    <p data-aos="fade-up" className="text-grey-300 mb-9 text-sm leading-6">
                        Imagine poder acordar todas as manhãs sem se preocupar com a contagem do seu estoque ou ter medo de se
                        deparar com prateleiras vazias. Bem-vindo ao Swift Stock, onde transformamos o gerenciamento de estoque
                        de um pesadelo em um passeio tranquilo. Liberte-se das dores de cabeça do inventário e dê um salto para
                        o sucesso do seu negócio. Experimente a magia de ter o controle total do seu estoque na palma da sua mão!
                    </p>
                    <Link data-aos="fade-right" href="#participate" className="group text-brand-200 font-medium text-base flex items-center gap-3 transition-all duration-75 hover:brightness-105">
                        Quero fazer Parte
                        <PiArrowUpLight className="rotate-90 w-5 h-5 transition-all duration-150 group-hover:translate-x-2"/>
                    </Link>
                </div>
            </Container>

            <figure data-aos="fade-left" className="w-[90%] max-w-7xl h-[720px] overflow-auto bg-brand-400 rounded-2xl flex items-start justify-start
            shadow-2xl m-5 lg:absolute lg:-right-[650px] 2xl:-right-[450px] lg:-top-28 lg:w-[1280px]">
                <img className="h-full lg:w-full lg:h-auto object-cover"
                src={swiftStockUI.src}
                alt="interface da SwiftStock"/>
            </figure>

        </section>
    )
}

export default About