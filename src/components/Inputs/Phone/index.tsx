import { IInputProps } from '../Text/Input';

export const InputPhone = ({ id, label, onChange, placeholder, register, value }: IInputProps) => {
    const maskPhone = (phone: string) => {
        const numbers = phone.replace(/\D/g, '');
        if (numbers.length <= 10) {
            return numbers.replace(/(\d{2})(\d{0,4})(\d{0,4})/, '($1) $2-$3');
        } else {
            return numbers.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
        }
    };

    return (
        <div className="flex flex-col gap-2">
            <label
                className="font-default-font text-sm uppercase font-semibold text-grey-100"
                htmlFor={id}
            >
                {label}
            </label>
            <div className="relative flex items-center border-[3px] border-brand-200 rounded-lg bg-grey-50 p-3 transition-all duration-200">
                <input
                    placeholder={placeholder}
                    className="w-full py-1 bg-transparent outline-none focus:ring-0 focus:border-transparent"
                    type="tel"
                    id={id}
                    name={id}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};
