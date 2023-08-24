import React, { ReactNode } from 'react';

export type StateKeys = "completo" | "baixo" | "vazio" | "medio";
interface IFormPageProps {
  children: React.ReactNode,
  state: StateKeys,
}

const states: Record<StateKeys, { color: string, bg: string, text: string }> = {
  "completo": { color: "#3026DC", bg: "#DFEDF2",text:"Completo" },
  "baixo": { color: "#FFAB2D", bg: "rgba(255, 235, 204, 0.50)", text:"Baixo" },
  "vazio": { color: "#FF4A55", bg: "rgba(255, 74, 85, 0.25)",text:"Vazio" },
  "medio": { color: "#36C633", bg: "#EBFCEF",text:"Médio"},
}

const ProductStatus = ({ children, state }: IFormPageProps) => {
  return (

    <button className='p-[14px] flex items-center gap-2' style={{
      color: states[state] ? states[state].color : "white",
      backgroundColor: states[state] ? states[state].bg : "red",
      fontSize: "16px",
      fontWeight: "500"

    }}>
      <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4.5" r="4" fill="currentColor" />
      </svg>
      {(states[state] ? states[state].text : "Desconhecido")}
    </button>

  )
}

export default ProductStatus