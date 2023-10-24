import Image from "next/image";
import logoBlue from "../../../../assets/logo-blue.svg";


interface IFormLayout {
    children: React.ReactNode;
    title?: string;
}

const FormLayout = ({children, title}: IFormLayout) => {

    return(
        <>
        <section className='bg-white-primary w-full py-12 my-10 px-6  sm:rounded-xl max-w-lg mx-5'>
            <header className='flex flex-col items-center gap-5 mb-10'>
            <Image src={logoBlue} alt='Logo SwiftStock'/>
            <h1 className='font-default-font text-grey-100 text-sm text-center'>
                {
                    title || "Lorem Ipsum"
                }
            </h1>
            </header>
                {
                    children
                }
        </section>
        </>
    )
}

export default FormLayout;