import React from 'react';

interface IFormPageProps {
  children: React.ReactNode
}

const FormPage = ({children}: IFormPageProps) => {
  return (
    <section className='w-screen min-h-screen bg-no-repeat bg-cover bg-[url("/public/avatar/headingBg.png")] from-brand-200 to-brand-600 flex items-center justify-center'> 
      {children}
    </section>
  );
}

export default FormPage;