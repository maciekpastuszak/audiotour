import React from 'react'

type HoverButtonProps = {
    btnText: string,
    type: "submit" | "reset" | "button"
}

const HoverButtton = ({ btnText, type }: HoverButtonProps) => {
  return (
    <div className="flex justify-start">
      <button type={type} className="relative bg-white rounded-full text-black w-full md:w-[320px] px-10 py-3 overflow-hidden h-[50px] transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-slate-700 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full">
        <span className="relative z-10">{btnText}</span>
      </button>
    </div>
  )
}

export default HoverButtton