import React from 'react'

type appFunctionPros = {
    isBig: boolean
}
const AppFunctionCard = ({ isBig }: appFunctionPros) => {
  return (
    <div className={`${isBig ? 'w-full' : 'w-full md:w-[calc(50%-0.4rem)]'} rounded-lg border border-orange-700`}>
        <div className={`h-32 md:h-48`}></div>
    </div>
  )
}

export default AppFunctionCard