import Container from "@/components/Container/Container";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import Link from "next/link";
import { AiOutlineArrowUp } from "react-icons/ai";

const Heading = () => {
    return(
        <header id="top" className="h-screen w-screen bg-center bg-[url('../assets/headingBg.png')] bg-no-repeat bg-fixed bg-cover">
            <Container className="flex text-white-primary relative h-full flex-col justify-center items-center text-center">
                <h1 className="font-extrabold text-4xl max-w-xl bg-gradient-to-tr from-white-primary to-brand-500 bg-clip-text text-transparent">
                    Gerencie seus estoques
                    de maneira <span className="text-brand-400">fácil</span> e <span className="text-brand-400">intuitiva</span>
                </h1>
                <p className="max-w-md text-sm mt-5 leading-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et augue eros.
                    Mauris tempus eu tellus a fringilla..
                </p>
                <a href={"#about"} className="animate-bounce pt-10">
                    <AiOutlineArrowUp className="rotate-180 w-6 h-6"/>
                </a>
                <nav className="absolute bottom-0 left-0 pb-10 pl-5 w-full flex justify-center md:justify-start">
                    <SocialMediaLinks bigger={true}/>
                </nav>
            </Container>
        </header>
    )
}

export default Heading;