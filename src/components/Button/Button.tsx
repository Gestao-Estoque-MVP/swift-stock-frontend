
interface IButtonProps {
    children: React.ReactNode;
    className?: string;
    type: "button" | "submit" | "reset" | undefined;
}


//INSERIR TAMANHO DO BOTÃO E AS DEMAIS ESTILIZAÇÕES COM A PROP CLASSNAME
const Button = ({children, className, type}: IButtonProps) => {
    return(
        <button type={type} className={`flex items-center justify-center gap-2 w-screen py-3 pw-6 transition-all ease-in text-white-primary 
        bg-gradient-to-r from-brand-300 to-brand-100 hover:brightness-90 ${className} `}>

            {children}
        </button>
    )
}
export default Button
