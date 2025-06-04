import React from 'react'

const Title = ({children}) => {
  return (
    <h1 data-aos="fade-up" className='text-4xl sm:text-5xl 2xl:text-6xl font-medium text-center flex flex-col gap-4 items-center'>{children}<span className='bg-primary h-[6px] w-20 rounded-full'></span></h1>
  )
}

export default Title