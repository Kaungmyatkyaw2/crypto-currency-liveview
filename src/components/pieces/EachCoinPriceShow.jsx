import React from 'react'
import PriceShow from './PriceShow'

const EachCoinPriceShow = ({header,price}) => {
  return (
    <div className="w-full flex justify-center py-[40px]">

    <div className='w-[60%] flex flex-col items-center bg-[#28353E] shadow-sm rounded-[6px] overflow-hidden '>

    <PriceShow check={false} data={header}/>

     <PriceShow check={true} data={price}/>

    </div>

  </div>  )
}

export default EachCoinPriceShow