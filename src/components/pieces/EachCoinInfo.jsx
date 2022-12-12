import React from 'react'
import InfoCard from './InfoCard'

const EachCoinInfo = ({leftCard,rightCard}) => {
  return (
    <div className='w-full flex justify-center'>
    <div className='md:w-[60%] sm:space-y-0 space-y-[30px] w-full flex flex-wrap items-center justify-between shadow-sm'>
      <InfoCard data={leftCard} check={false}/>
      <InfoCard data={rightCard} check={true}/>
    </div>
  </div>  )
}

export default EachCoinInfo