import React, { ChangeEvent, useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { BsEyeFill, BsEyeSlash, BsEyeSlashFill } from 'react-icons/bs';
import { PiEyeBold, PiEyeSlashBold } from 'react-icons/pi';

interface IInputProps {
  label: string;
  id: string;
  type: string;
  value: string;
  placeholder?: string;
  setValue: (value: string) => void;
}

const Input = ({ label, id, type, setValue, value, placeholder }: IInputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const [inputType, setInputType] = useState(type || "text");

  const handlePasswordType = () => {
    setInputType(inputType === "password" ? "text" : "password");
  }

  return (
    <div className='flex flex-col gap-2'>
      <label className='font-default-font text-sm uppercase font-semibold text-grey-100' htmlFor={id}>{label}</label>
      <div className='rounded-lg bg-grey-50 px-3 flex items-center border-grey-50 hover:border-1 transition-all duration-200
      hover:border-brand-200 hover:border-solid border-[3px]'>
        <input placeholder={placeholder} className='w-full py-4 bg-transparent outline-0' type={inputType} id={id} name={id} onChange={handleChange} value={value}  />
        <button type="button" onClick={handlePasswordType}>
          {
          type === 'password' &&
            (
              inputType === "password" ?
              <PiEyeBold className={`scale-125 hover:text-brand-200 hover:cursor-pointer text-brand-300`}/> 
              :
              <PiEyeSlashBold className={`scale-125 hover:text-brand-200 hover:cursor-pointer text-grey-200`}/> 
            )
          }
        </button>
      </div>
    </div>
  );
};

export default Input;
