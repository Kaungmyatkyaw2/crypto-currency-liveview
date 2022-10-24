import React from 'react'

const EachCoinHeader = ({img,name,symbol,rank}) => {
  return (
<div className='w-full flex justify-around'>
              <div className='flex items-center space-x-[30px]'>
                <img src={img} className='w-[80px] h-[80px]' alt="" />
                <div>
                <h1 className='text-[20px] font-[600] tracking-widest'>{symbol?.toUpperCase()}</h1>
                <p className='text-gray-600'>{name?.toUpperCase()}</p>
                </div>
              </div>
              <div className='flex items-center'>
                <div className='bg-violet-700 text-white font-bold px-[15px] py-[7px] rounded-[7px] text-[15px]'>Rank # {rank}</div>
              </div>
            </div>  )
}

export default EachCoinHeader