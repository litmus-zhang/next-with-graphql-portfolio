import React from 'react'

export default function Section({title, subTitle}) {
  return (
      <div className='w-1/2 pb-8'>
          <div className='w-20 h-2 bg-primary'>
          </div>
          <h1 className='font-bold text-white text-2xl pb-2'>{title}</h1>
          <p className='text-gray-3 font-normal'>{ subTitle }</p>
    </div>
  )
}
