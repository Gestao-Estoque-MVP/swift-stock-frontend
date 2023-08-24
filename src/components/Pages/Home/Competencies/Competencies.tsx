'use client'

import React from 'react';
import dataCard from '../../../../../competenciesInfos.json';
import Card from '../Card/Card';
import {CgGym} from "react-icons/cg";
import { AiFillClockCircle, AiFillSignal } from 'react-icons/ai';
import { PiFeatherFill, PiWarningFill, PiHandFistFill } from 'react-icons/pi';
import { BsFillRocketFill} from 'react-icons/bs';
import { MdTouchApp, MdFiberSmartRecord} from 'react-icons/md';
import { BiSolidBrain } from "react-icons/bi";


const Competencies = () => {
  const [seeMore, setSeeMore] = React.useState(false)
  
  function handleSeeMore() {
    setSeeMore(!seeMore)
  }

  return (
    <section id="advantages" className={`bg-brand-400 py-11 pt-20 relative bg-[url('../assets/blur.png')] bg-no-repeat bg-cover transition-all duration-300 ${!seeMore ? 'max-h-mobile md:max-h-desktop overflow-hidden' : 'h-fit'}  after:content-[""] after:w-full after:h-80 after:absolute after:bottom-0 after:z-10 after:bg-gradient-to-t from-brand-400 ...`}>
      <div className='my-0 mx-auto p-4 max-w-screen-2xl flex flex-col gap-11 mb-11'>
        <div className='font-default-font flex flex-col gap-2'>
          <h2 data-aos="fade-right" className=' text-2xl max-w-xs font-extrabold bg-advantagesGradient bg-clip-text text-transparent'>Porquê vale a pena?</h2>
          <p data-aos="fade-right" className='text-grey-100 text-xs	font-light'>Entenda como podemos facilitar o seu dia a dia</p>
        </div>

        <ul className='flex flex-wrap	gap-6 justify-between pb-14'>
          {dataCard.map((data) => (
             <Card data={data}>
                <div className="text-brand-200">
                {
                  data.title === "Empoderamento" && <PiHandFistFill/>
                 }
                 {
                  data.title === "Tempo" && <AiFillClockCircle/>
                 }
                 {
                  data.title === "Liberdade" && <PiFeatherFill/>
                 }
                 {
                  data.title === "Melhoria Contínua" && <AiFillSignal/>
                 }
                 {
                  data.title === "Gerenciamento Simplificado" && <BsFillRocketFill/>
                 }
                 {
                  data.title === "Alertas de Estoque" && <PiWarningFill/>
                 }
                 {
                  data.title === "Gestão de Variações de Produto" && <MdFiberSmartRecord/>
                 }
                 {
                  data.title === "Interface Intuitiva" && <MdTouchApp/>
                 }
                 {
                  data.title === "Inteligência de Negócios" && <BiSolidBrain/>
                 }
                </div>
              </Card>
          )
          )}

         
        </ul>
      </div>

      <div className='absolute flex justify-center bottom-4 w-full'>
      <button onClick={handleSeeMore} className='bg-transparent z-30 font-default-font font-medium text-sm pb-8 hover:underline text-brand-200'>{!seeMore ? 'Ver todos' : 'Ver menos'}</button>
      </div>
    </section>
  )
}

export default Competencies