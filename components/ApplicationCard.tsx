import Image from 'next/image'
import React from 'react'

const ApplicationCard = () => {
  return (
    <div className='items-start w-4/5  my-5 border border-violet-700'>
        <div className='flex'>
            <Image src="/img/app-icons/Icon Audioprzewodniki.svg" width={50} height={50 }alt="Ikona - Audioprzewodniki" />
            <div className='font-articulat leading-3'>
                <h3 className='text-lg font-bold font-articulat'>Audioprzewodniki</h3>
                <p>Prosta obsługa, <span className='text-blue-500'>szybka realizacja</span></p>
            </div>
        </div>
        <div>
            {/* main image */}
        </div>
        <div>
            {/* text */}
        </div>
    </div>
  )
}

export default ApplicationCard