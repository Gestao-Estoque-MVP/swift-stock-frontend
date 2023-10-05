"use client"

import { ChangeEvent, useState } from "react";
import Input from "../../Inputs/Input"
import calendario from "../../../assets/calendario.svg"
import caneta from "../../../assets/Caneta.svg"

import Image from "next/image";

import Plan from "../../../components/ProfileInformation/Plan"
import 'react-phone-number-input/style.css'

import PhoneInput from 'react-phone-number-input'



const user = {
    profileUrl: "https://i.postimg.cc/jqcvwqBV/image-2023-09-22-105500643.png",
    companyImageUrl: "https://i.postimg.cc/J7699WML/image.png",
    companyName: "Tesla Motors",
    companySubname: "Tesla USA",
    companyDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut error, quasi animi esse eum nemo rerum vitae ad vel laudantium aliquid amet dolores placeat quae deleniti ex perspiciatis ipsum adipisci?",
    username: "Elon Musk",
    role: "admin",
    enteredTime: new Date(),
    staffCount: 8
}





const ProfilePage = () => {




    const [userInputsTexts, setUserInputsTexts] = useState<{
        token: string;
        name: string;
        email: string;
        password: string;
        phone: string;
    }>({
        token: "none",
        name: "Nome do usuario padrão",
        email: "example@email.com",
        password: "password",
        phone: "55 88999-27394",

    });




    const cancelEditClickHandler = () => {
        alert("CANCELATION")

        setUserInputsTexts(
            {
                token: "none",
                name: "Nome do usuario padrão",
                email: "example@email.com",
                password: "password",
                phone: "55 88999-27394",
            }
        )


    }


    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;

        setUserInputsTexts((prevState) => ({
            ...prevState,
            [id]: value,
        })
        );

    };





    const onCickSendAlterations = () => {
        const payload = JSON.stringify(userInputsTexts, null, 2);
        alert(payload)
    }









    return (
        <div className="flex p-[47px] justify-around max-w-full flex-wrap md:flex-nowrap object-cover text-base max-h-[100vh] overflow-auto">
            <div className="flex flex-col w-full md:w-auto max-h-full">
                <div className="flex gap-[40px]">
                    <div className="relative">
                        <img src={user.profileUrl} width="180px" className="rounded-full"></img>

                        <div className="bg-[#3026DC;] p-2 radius-md-full flex items-center justify-center rounded-full " style={{ position: "absolute", top: "50%", left: "100%", transform: "translate(-50%, -50%)" }}>

                            <button>EDIT</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 justify-center w-full md:max-w-full w-[450px] ">
                        <h1 className="font-bold">
                            {user.username}
                        </h1>
                        <div className="flex">
                            <div>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 10.8332C11.9967 10.8332 13.8125 11.4115 15.1483 12.2257C15.815 12.634 16.385 13.1132 16.7967 13.634C17.2017 14.1473 17.5 14.7607 17.5 15.4165C17.5 16.1207 17.1575 16.6757 16.6642 17.0715C16.1975 17.4465 15.5817 17.6948 14.9275 17.8682C13.6125 18.2157 11.8575 18.3332 10 18.3332C8.1425 18.3332 6.3875 18.2165 5.0725 17.8682C4.41833 17.6948 3.8025 17.4465 3.33583 17.0715C2.84167 16.6748 2.5 16.1207 2.5 15.4165C2.5 14.7607 2.79833 14.1473 3.20333 13.634C3.615 13.1132 4.18417 12.634 4.85167 12.2257C6.1875 11.4115 8.00417 10.8332 10 10.8332ZM10 1.6665C11.1051 1.6665 12.1649 2.10549 12.9463 2.88689C13.7277 3.66829 14.1667 4.7281 14.1667 5.83317C14.1667 6.93824 13.7277 7.99805 12.9463 8.77945C12.1649 9.56085 11.1051 9.99984 10 9.99984C8.89493 9.99984 7.83512 9.56085 7.05372 8.77945C6.27232 7.99805 5.83333 6.93824 5.83333 5.83317C5.83333 4.7281 6.27232 3.66829 7.05372 2.88689C7.83512 2.10549 8.89493 1.6665 10 1.6665Z" fill="#A5A5A5" />
                                </svg>
                            </div>
                            <p>
                                {user.role == "admin" ? "Usuário Admin" : "User "}
                            </p>
                        </div>
                        <div className="flex gap-1">

                            <div>
                                <button className="bg-[#ff0000]">DATE</button>


                            </div>
                            <p>
                                Entrou dia {user.enteredTime.toDateString()}
                            </p>
                        </div>
                    </div>



                </div>
                <div className="md:py-[40px] md:px-[20px] max-h-full">
                    <div className="flex flex-col mt-[102px] gap-3">
                        <h1 className="font-bold text-md">Editar Perfil</h1>
                        <Input
                            type="text"
                            id="name"
                            label="Nome"
                            value={userInputsTexts.name}
                            onChange={handleInputChange}
                        />
                        <Input
                            type="email"
                            id="email"
                            label="Email"
                            value={userInputsTexts.email}
                            onChange={handleInputChange}
                        />
                        {/* <Input
                            type="tel"
                            id="phone"
                            label="Telefone"

                            value={userInputsTexts.phone}
                            onChange={handleInputChange}
                        /> */}

                        <label>
                            TELEFONE
                        </label>

                        <PhoneInput value={userInputsTexts.phone}
                        onChange={() => handleInputChange} className='w-full py-4 bg-transparent outline-0'>

                        </PhoneInput>
                        <Input
                            type="password"
                            id="password"
                            label="Senha"
                            value={userInputsTexts.password}
                            onChange={handleInputChange}
                        />


                    </div>
                    <div className="flex w-full mt-8">
                        <button className="border p-4 w-full rounded-lg " style={{ color: "#3026DC" }} onClick={onCickSendAlterations}>
                            Salvar alterações
                        </button>

                        <button className="w-full" onClick={cancelEditClickHandler}>
                            Cancelar
                        </button>
                    </div>

                    <p className="mt-4">
                        Última Alteração 03/09/2023
                    </p>
                </div>



            </div>


            <hr className="md:hidden"></hr>
            <div className=" w-full md:max-w-[420px] mt-24 md:mt-0 max-h-full">

                <div>
                    <div className="flex gap-12">
                        <img src={user.companyImageUrl} width="100">
                        </img>
                        <div className="flex flex-col justify-center">
                            <h1 className="font-bold">{user.companyName}</h1>
                            <p>{user.companySubname}</p>
                        </div>
                    </div>

                    <div>

                        <div className="flex items-center mt-12">
                            <svg width="78" height="33" viewBox="0 0 78 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.5" y="1.5" width="30" height="30" rx="15" fill="#D9D9D9" stroke="white" />
                                <rect x="24.5" y="1.5" width="30" height="30" rx="15" fill="#D9D9D9" stroke="white" />
                                <rect x="46.5" y="1.5" width="30" height="30" rx="15" fill="#D9D9D9" stroke="white" />
                            </svg>

                            <p>{user.staffCount} funcionários da Tesla usam SwiftStock</p>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="mt-[59px]">
                        {user.companyDescription}
                    </div>
                </div>

                <div className="mt-[80px]">
                    <h1 className="font-bold">Assinatura</h1>

                    <div className="mt-[26px]">
                        <Plan name="Plano Básico" description="Descrição do plano básico Lorem Ipsum sei la o que" />
                        <Plan name="Plano Básico" description="Descrição do plano básico Lorem Ipsum sei la o que" />
                        <Plan name="Plano Básico" description="Descrição do plano básico Lorem Ipsum sei la o que" />
                    </div>


                </div>

            </div>

        </div>




    )
}

export default ProfilePage