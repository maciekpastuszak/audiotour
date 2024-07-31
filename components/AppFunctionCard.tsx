import React from 'react'

type appFunctionPros = {
    color: string,
    isBig: boolean
}
const AppFunctionCard = ({color, isBig}: appFunctionPros) => {
  return (
    <div className={`${isBig ? 'w-full' : 'w-full md:w-[calc(50%-0.4rem)]'} border border-orange-700`}>
        <div className={`${color} h-32 md:h-48 rounded-lg`}></div>
    </div>
  )
}

export default AppFunctionCard