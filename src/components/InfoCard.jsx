import React from 'react'

const InfoCard = ({data,check}) => {
  return (
            <div className='w-[45%] bg-[#28353E] rounded-[6px] py-[30px] px-[20px] space-y-[20px]'>
                  
                  {
                        data.map((i,index) => {
                          {
                            return <div key={index} className='w-full space-y-[5px]'>
                                <h1 className='text-[15px] font-bold'>{i.header}</h1>
                                <p className={`tracking-widest ${  i.header !== 'Low 24h' ? ' text-green-500' : 'text-red-500'}`}>$ {i.data}</p>
                            </div> }           
                        })
                  }
                  
                </div>  
                )
}

export default InfoCard