"use client";
import Image from "next/image";
import logoIcon from "../../../assets/logoIcon.svg";
import Container from "@/components/Container/Container";
import Button from "@/components/Button/Button";
import { useState } from "react";

import { ApolloError, useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { CREATE_CONTACT_MUTATION } from "@/graphql/mutation/mutation";


const HomeForm = () => {

    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");

    const [ createContactInfo ] = useMutation(CREATE_CONTACT_MUTATION);

    const handleFormSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            const res = await createContactInfo({
                variables: {
                    Name: name,
                    email: email,
                    phone: phoneNumber,
                }
            })
    
            if(res.data?.createContactInfo){
                return toast.success("Prontinho! Você será notificado em breve.");
            }
            
        }catch(error: unknown){
            if (error instanceof ApolloError && error.graphQLErrors && error.graphQLErrors.length > 0) {
                const serverError = error.graphQLErrors[0];
                
                if(serverError.message.includes("duplicate key value")){
                    return toast.error("Email ou numero de telefone já cadastrado");
                }
            }                
            return toast.error("Oops! Algo deu errado. Tente novamente mais tarde.");
        };
    };

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let formattedNumber = e.target.value;
    
        formattedNumber = formattedNumber.replace(/\D/g, '');
    
        if (formattedNumber.length > 2) {
          formattedNumber = `(${formattedNumber.slice(0, 2)}) ${formattedNumber.slice(2)}`;
        }
    
        if (formattedNumber.length > 11) {
          formattedNumber = `${formattedNumber.slice(0, 10)}-${formattedNumber.slice(10)}`;
        }

        setPhoneNumber(formattedNumber);
    };

    return(
        <section>
            <Container className="flex justify-between items-center my-16">
                <figure data-aos="flip-left" className="hidden md:flex md:w-[40%] md:justify-center md:items-center">
                    <Image className="w-full h-full object-cover" src={logoIcon} alt="Swift Stock logo"/>
                </figure>

                <div className="w-full md:w-[40%]">
                    <header className="flex flex-col gap-3 mb-9">
                        <h3 data-aos="fade-right" className="font-extrabold text-2xl text-brand-200">
                            Em breve!
                        </h3>
                        <p data-aos="fade-right" className="text-grey-300 text-xs">
                            Nossos desenvolvedores estão empenhados em entregar uma ótima experiência para você!
                            Preencha o formulário abaixo e seja notificado(a) assim que tudo estiver pronto.
                        </p>
                    </header>

                    <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 text-brand-200 font-semibold">
                        <input data-aos="zoom-in-up" className="py-2 px-4 outline-none rounded-md placeholder:text-grey-200 placeholder:font-medium"
                            placeholder="Digite seu Nome" type="text" required value={name} onChange={(e)=>setName(e.target.value)}
                        />
                        <input data-aos="zoom-in-up" className="py-2 px-4 outline-none rounded-md placeholder:text-grey-200 placeholder:font-medium"
                            placeholder="Digite seu E-mail" type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}
                        />
                        <input data-aos="zoom-in-up" className="py-2 px-4 outline-none rounded-md placeholder:text-grey-200 placeholder:font-medium"
                            placeholder="Insira seu Número de telefone" type="text" minLength={15} maxLength={15} value={phoneNumber} required 
                            onChange={(e) => handlePhoneNumberChange(e)}
                        />
                        <div data-aos="fade-right" className="flex items-center gap-3">
                            <input id="accept-notifications" type="checkbox" required/>
                            <label htmlFor="accept-notifications" className="text-grey-300 text-xs font-normal">
                                Concordo em ser notificado sobre o lançamento da Swift Stock
                            </label>
                        </div>
                        <Button aos="fade-right" type="submit" className="mt-6 max-w-full rounded-md">Quero ser notificado!</Button>
                    </form>

                </div>
            </Container>
        </section>
    )
}

export default HomeForm;