import React, { ChangeEvent } from 'react';
import { AiOutlineEye } from 'react-icons/ai';

interface InputProps {
  label: string;
  id: string;
  type: string;
  value: string;
  // placeholder: string;
  setValue: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ label, id, type, setValue, value }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className='flex flex-col gap-2'>
      <label className='font-default-font text-sm uppercase font-semibold text-grey-100' htmlFor={id}>{label}</label>
      <div className='rounded-lg bg-grey-50 px-3 py-2 flex items-center hover:border-1 hover:border-brand-100'>
        <input className='w-full bg-transparent outline-0' type={type} id={id} name={id} onChange={handleChange} value={value}  />
        {type === 'password' ? <AiOutlineEye/> : <></>}
      </div>
    </div>
  );
};

export default Input;
