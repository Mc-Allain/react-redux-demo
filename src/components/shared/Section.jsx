import React from 'react'

const Section = ({title, children}) => {
  return (
    <div className='min-h-[200px] w-full border border-gray-400 bg-gray-100 relative'>
        <div className='absolute -translate-y-[50%] ml-6 px-5 py-2 text-lg font-medium uppercase bg-inherit w-fit'>
            {title}
        </div>
        <div className='px-6 py-11'>
            {children}
        </div>
    </div>
  )
}

export default Section