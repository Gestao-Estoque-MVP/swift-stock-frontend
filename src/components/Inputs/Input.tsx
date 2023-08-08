import React, { ChangeEvent, useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { BsEyeFill, BsEyeSlash, BsEyeSlashFill } from 'react-icons/bs';

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
      <div className='rounded-lg bg-grey-50 px-3 py-2 flex items-center hover:border-1 hover:border-brand-100'>
        <input placeholder={placeholder} className='w-full bg-transparent outline-0' type={inputType} id={id} name={id} onChange={handleChange} value={value}  />
        <button type="button" onClick={handlePasswordType}>
          {type === 'password' &&
            (
              inputType === "password" ?
              <BsEyeFill className={`scale-125 hover:text-brand-200 hover:cursor-pointer text-brand-300`}/> 
              :
              <BsEyeSlashFill className={`scale-125 hover:text-brand-200 hover:cursor-pointer text-grey-200`}/> 
            )
          }
        </button>
      </div>
    </div>
  );
};

export default Input;
