import React from 'react'

const Description = ({text}) => {
  return (
    <div className="w-full flex justify-center">
    <div className='lg:w-[60%] w-full'>
    <h1 className='text-[25px] font-bold text-red-500'>Description</h1>
    <p  dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  </div>  )
}

export default Description