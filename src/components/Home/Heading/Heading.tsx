import Container from "@/components/Container/Container";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import { AiOutlineArrowUp } from "react-icons/ai";

const Heading = () => {
    return(
        <header id="top" className="h-screen w-screen bg-center bg-[url('../assets/headingBg.png')] bg-no-repeat bg-fixed bg-cover">
            <Container className="flex text-white-primary relative h-full flex-col justify-center items-center text-center">
                <h1 className="font-extrabold text-4xl max-w-xl bg-headingGradient bg-clip-text text-transparent">
                    Controle seus estoques com <span className="text-brand-400">praticidade</span> e <span className="text-brand-400">eficiência</span>
                </h1>
                <p className="max-w-md text-sm mt-5 leading-5">
                    Descubra o Estoque Fácil: o sistema que facilita o controle dos seus estoques
                </p>
                <a href={"#about"} className="animate-bounce mt-10 outline-none">
                    <AiOutlineArrowUp className="rotate-180 w-6 h-6"/>
                </a>
                <nav className="absolute bottom-0 pl-5 left-0 pb-10 w-full flex justify-center md:justify-start">
                    <SocialMediaLinks bigger={true}/>
                </nav>
            </Container>
        </header>
    )
}

export default Heading;