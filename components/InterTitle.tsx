import React from 'react'

type InterTitleProps = {
    title: string,
    subTitle: string,
}

const InterTitle = ({ title, subTitle }: InterTitleProps) => {
  return (
    <div className='flex flex-col items-center my-3'>
        <h2 className='text-lg lg:text-2xl font-bold'>{title}</h2>
        <p className='text-sm text-slate-600 mb-5'>{subTitle}</p>
    </div>
  )
}

export default InterTitle