import Image from "next/image";
import logoIcon from "../../../assets/logoIcon.svg";
import Container from "@/components/Container/Container";
import Button from "@/components/Button/Button";

const HomeForm = () => {
    return(
        <section>
            <Container className="flex justify-between items-center">
                <figure className="hidden md:flex md:w-[40%] md:justify-center md:items-center">
                    <Image className="w-full h-full object-cover" src={logoIcon} alt="Swift Stock logo"/>
                </figure>

                <div className="w-full md:w-[40%]">
                    <header className="flex flex-col gap-3 mb-6">
                        <h3 className="font-extrabold text-2xl text-brand-200">
                            Em breve!
                        </h3>
                        <p className="text-grey-300 text-xs">
                            Nossos desenvolvedores estão empenhados em entregar uma ótima experiência para você!
                            Preencha o formulário abaixo e seja notificado(a) assim que tudo estiver pronto.
                        </p>
                    </header>

                    <form className="flex flex-col gap-6 text-brand-200 font-semibold">
                        <input className="py-2 px-4 outline-none rounded-md placeholder:text-grey-200 placeholder:font-medium"
                            placeholder="Digite seu Nome" type="text" required
                        />
                        <input className="py-2 px-4 outline-none rounded-md placeholder:text-grey-200 placeholder:font-medium"
                            placeholder="Digite seu E-mail" type="email" required
                        />
                        <input className="py-2 px-4 outline-none rounded-md placeholder:text-grey-200 placeholder:font-medium"
                            placeholder="Insira seu Número de telefone" type="text" maxLength={14} required
                        />
                        <div className="flex items-center gap-3">
                            <input id="accept-notifications" type="checkbox" required/>
                            <label htmlFor="accept-notifications" className="text-grey-300 text-xs font-light">
                                Concordo em ser notificado sobre o lançamento da Swift Stock
                            </label>
                        </div>
                        <Button type="submit" className="mt-6 max-w-full rounded-md">Quero ser notificado!</Button>
                    </form>

                </div>
            </Container>
        </section>
    )
}

export default HomeForm;