'use client'

import React from 'react'
import {MdGraphicEq} from 'react-icons/md'
import dataCard from '../../../../competenciesInfos.json'

const Competencies = () => {
  const [seeMore, setSeeMore] = React.useState(false)
  
function handleSeeMore() {
  setSeeMore(!seeMore)
}

  return (
    <section className={`bg-brand-400 py-11 relative ${!seeMore ? 'max-h-mobile md:max-h-desktop overflow-hidden' : 'h-fit'}  after:content-[""] after:w-full after:h-80 after:absolute after:bottom-0 after:z-10 after:bg-gradient-to-t from-brand-400 ...`}>
      <div className='my-0 mx-auto p-4 max-w-screen-2xl flex flex-col gap-11'>
        <div className='font-default-font flex flex-col gap-2'>
          <h1 className=' text-white-primary text-2xl	font-extrabold'>Porquê vale a pena?</h1>
          <p className='text-grey-100 text-xs	font-light'>Entenda como podemos facilitar o seu dia a dia</p>
        </div>

        <ul className='flex flex-wrap	gap-6 justify-between'>
          {dataCard.map((data) => (
             <li key={data.id} className='flex flex-col flex-1 gap-6 bg-white-primary rounded-lg	py-4 px-6 min-w-card max-w-md md:max-w-xs md:flex-none'>
             <div className='flex gap-3 items-center'>
               <div className='rounded-full border-grey-100 border p-1'>
                 <MdGraphicEq className='text-brand-200' size={24}/>
               </div>
               <h2 className='text-base text-brand-200 font-extrabold'>{data.title}</h2>
             </div>
             <p className='text-grey-200 text-xs font-medium'>{data.description}</p>
           </li>
          )
          )}

         
        </ul>
      </div>

      <div className='absolute flex justify-center bottom-4 w-full'>
      <button onClick={handleSeeMore} className='bg-transparent z-20 font-default-font font-medium text-xl text-brand-200'>{!seeMore ? 'Ver todos' : 'Ver menos'}</button>
      </div>
    </section>
  )
}

export default Competencies