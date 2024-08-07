import React from 'react'

type HoverButtonProps = {
    btnText: string
}

const HoverButtton = ({ btnText }: HoverButtonProps) => {
  return (
    <button className="absolute bg-white rounded-full text-black right-10 md:left-0 md:w-[320px] bottom-10 md:bottom-12 px-10 md:mx-7 overflow-hidden h-[50px] transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full">
      <span className="relative z-10">{btnText}</span>
    </button>
  )
}

export default HoverButtton