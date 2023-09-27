"use client"

import { ChangeEvent, useState } from "react";
import Input from "../../Inputs/Input"




const user = {
    profileUrl: "https://i.postimg.cc/jqcvwqBV/image-2023-09-22-105500643.png",
    companyImageUrl: "https://i.postimg.cc/J7699WML/image.png",
    companyName: "Tesla Motors",
    companySubname : "Tesla USA",
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
        name: "Nome do usuario",
        email: "email",
        password: "senha",
        phone: "phone",
      
    });

    // Função para atualizar o estado quando um campo de entrada (input) é alterado
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;

        // Atualize o objeto com base no campo de entrada (input) que foi alterado
        setUserInputsTexts((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };




    const onCickSendAlterations = () => {
        const payload = JSON.stringify(userInputsTexts, null, 2);
        alert(payload)
    }









    return (
        <div className="flex p-[47px] justify-between max-w-[920px] flex-wrap md:flex-nowrap object-cover text-base max-h-[100vh] overflow-auto">
            <div className="flex flex-col w-full md:w-auto max-h-full">
                <div className="flex gap-[40px]">
                    <div className="relative">
                        <img src={user.profileUrl} width="180px" className="rounded-full"></img>

                        <div className="bg-[#3026DC;] p-2 radius-md-full flex items-center justify-center rounded-full " style={{ position: "absolute", top: "50%", left: "100%", transform: "translate(-50%, -50%)" }}>

                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="15.6687" y="-4" width="11.2528" height="27.2035" transform="rotate(43.0849 15.6687 -4)" fill="white"/>
</svg>


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
                                {user.role =="admin" ? "Usuário Admin":"User "}
                            </p>
                        </div>
                        <div className="flex">

                            <div>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="20" height="20" fill="#A5A5A5" />
                                </svg>

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
                        <Input
                            type="tel"
                            id="phone"
                            label="Telefone"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"

                            value={userInputsTexts.phone}
                            onChange={handleInputChange}
                        />
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

                        <button className="w-full">
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
                                <rect x="1.5" y="1.5" width="30" height="30" rx="15" fill="#D9D9D9" stroke="white" stroke-width="3" />
                                <rect x="24.5" y="1.5" width="30" height="30" rx="15" fill="#D9D9D9" stroke="white" stroke-width="3" />
                                <rect x="46.5" y="1.5" width="30" height="30" rx="15" fill="#D9D9D9" stroke="white" stroke-width="3" />
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
                        <div>
                            <div className="flex items-center p-4 md:p-8 gap-4 md:gap-12">
                                <div>
                                    <svg width="51" height="52" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.1312 3.13025C23.9187 0.912149 27.0556 0.912149 27.8431 3.13024L32.1507 15.2632C32.6236 16.5953 33.8514 17.5121 35.2629 17.5873L47.7308 18.2511C49.979 18.3707 50.9358 21.1683 49.2317 22.6397L39.1894 31.311C38.1871 32.1765 37.759 33.5335 38.0834 34.8174L41.3898 47.9051C41.9572 50.1511 39.4288 51.8942 37.5315 50.565L27.4954 43.5339C26.2898 42.6893 24.6845 42.6893 23.4789 43.5339L13.4428 50.565C11.5455 51.8942 9.01713 50.1511 9.58454 47.9051L12.8909 34.8174C13.2153 33.5335 12.7872 32.1765 11.785 31.311L1.74258 22.6397C0.0385404 21.1683 0.99534 18.3707 3.24354 18.2511L15.7114 17.5873C17.1229 17.5121 18.3507 16.5953 18.8236 15.2632L23.1312 3.13025Z" fill="#3026DC" stroke="#3026DC" />
                                    </svg>

                                </div>

                                <div className="flex flex-col text-xs md:text-sm">
                                    <h1>Plano básico</h1>
                                    <p>Descrição do plano básico Lorem Ipsum sei la o que</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center  p-4  gap-4 md:p-8 md:gap-12 mt-4 md:mt-0">
                                <div>
                                    <svg width="51" height="52" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.6024 3.29753C24.2324 1.52305 26.7419 1.52306 27.3719 3.29752L31.6795 15.4305C32.22 16.9529 33.6232 18.0007 35.2363 18.0866L47.7042 18.7503C49.5028 18.8461 50.2682 21.0842 48.905 22.2613L38.8626 30.9326C37.7171 31.9217 37.2279 33.4725 37.5986 34.9399L40.905 48.0276C41.3589 49.8244 39.3362 51.2188 37.8184 50.1555L27.7823 43.1244C26.4044 42.1591 24.5699 42.1591 23.192 43.1244L13.1559 50.1555C11.6381 51.2188 9.61538 49.8244 10.0693 48.0276L13.3757 34.9399C13.7464 33.4725 13.2572 31.9217 12.1117 30.9326L2.06936 22.2613C0.706122 21.0842 1.47156 18.8461 3.27013 18.7503L15.738 18.0866C17.3511 18.0007 18.7543 16.9529 19.2948 15.4305L23.6024 3.29753Z" fill="#9AAFFF" stroke="#9AAFFF" stroke-width="2" />
                                    </svg>

                                </div>

                                <div className="flex flex-col  text-xs md:text-sm">
                                    <h1>Plano básico</h1>
                                    <p>Descrição do plano básico Lorem Ipsum sei la o que</p>
                                </div>
                            </div>
                            <div className="flex items-center  p-4 gap-4 md:p-8 md:gap-12 mt-4 md:mt-0">
                                <div>
                                    <svg width="51" height="52" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.6024 3.29753C24.2324 1.52305 26.7419 1.52306 27.3719 3.29752L31.6795 15.4305C32.22 16.9529 33.6232 18.0007 35.2363 18.0866L47.7042 18.7503C49.5028 18.8461 50.2682 21.0842 48.905 22.2613L38.8626 30.9326C37.7171 31.9217 37.2279 33.4725 37.5986 34.9399L40.905 48.0276C41.3589 49.8244 39.3362 51.2188 37.8184 50.1555L27.7823 43.1244C26.4044 42.1591 24.5699 42.1591 23.192 43.1244L13.1559 50.1555C11.6381 51.2188 9.61538 49.8244 10.0693 48.0276L13.3757 34.9399C13.7464 33.4725 13.2572 31.9217 12.1117 30.9326L2.06936 22.2613C0.706122 21.0842 1.47156 18.8461 3.27013 18.7503L15.738 18.0866C17.3511 18.0007 18.7543 16.9529 19.2948 15.4305L23.6024 3.29753Z" fill="#9AAFFF" stroke="#9AAFFF" stroke-width="2" />
                                    </svg>


                                </div>

                                <div className="flex flex-col text-xs md:text-sm">
                                    <h1>Plano básico</h1>
                                    <p>Descrição do plano básico Lorem Ipsum sei la o que</p>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>




        </div>
    )
}

export default ProfilePage