import Container from "@/components/Container/Container";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";

const Heading = () => {
    return(
        <header className="h-screen w-screen bg-[url('../assets/headingBg.png')] bg-no-repeat bg-fixed bg-cover">
            <Container className="flex text-white-primary relative h-full flex-col justify-center items-center text-center">
                <h1 className="font-black text-4xl max-w-lg bg-gradient-to-r from-white-primary">
                    Gerencie seus estoques
                    de maneira <span className="text-brand-400">fácil</span> e <span className="text-brand-400">intuitiva</span>
                </h1>
                <p className="max-w-md text-sm mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et augue eros.
                    Mauris tempus eu tellus a fringilla..
                </p>
                <nav className="absolute bottom-0 left-0 pb-5">
                    <SocialMediaLinks/>
                </nav>
            </Container>
        </header>
    )
}

export default Heading;