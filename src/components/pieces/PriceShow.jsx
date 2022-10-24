import React from 'react'

const PriceShow = ({data,check}) => {
  return (
             <div className={`w-full flex justify-center space-x-[14px] py-[10px] ${!check && 'border-b border-gray-700'}`}>
               {
                  data.map((i,index) => (
                  <div key={index} className={`w-[13%] text-center py-[5px] font-bold text-[14px] ${check ? (Math.sign(i) !== -1 ? 'text-green-500' : 'text-red-500') : 'text-white'}`}>{i}</div>
                  ))
                }
               </div>
  )
}

export default PriceShow