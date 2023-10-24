import { IInputProps } from "@/components/interfaces/inputs";


export const InputPhone = ({id, label, onChange, placeholder, register, value}: IInputProps) => {
    
    const maskPhone = (phone: string) => {
        const numbers = phone.replace(/\D/g, "");
        if (numbers.length <= 10) {
            return numbers.replace(/(\d{2})(\d{0,4})(\d{0,4})/, "($1) $2-$3");
        } else {
            return numbers.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
        }
    };


    return (
        <div className='flex flex-col gap-2'>
            <label className='font-default-font text-sm uppercase font-semibold text-grey-100' htmlFor={id}>{label}</label>
            <div className='rounded-lg bg-grey-50 px-3 flex items-center border-grey-50 border-1 transition-all duration-200
            border-brand-200 border-solid border-[3px]'>
                <input 
                    placeholder={placeholder} 
                    className='w-full py-4 bg-transparent outline-0'
                    type="tel" 
                    id={id} 
                    name={id}
                    value={value}
                    onChange={onChange}
                    maxLength={15}
                    {...register}
                />
            </div>
        </div>
    );
}
