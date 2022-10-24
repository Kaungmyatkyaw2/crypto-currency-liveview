import {BiTransferAlt} from 'react-icons/bi'

const ExchangeForm = ({text,selectCurrency,handleChange,setIsDollar,isDollar,result}) => {
  return (
    <div className='w-full flex justify-center py-[60px]'>
    <div className='w-[60%] flex flex-col items-center justify-between shadow-sm '>
      <h1 className='w-full font-bold text-[20px] text-center pb-[20px]'>{text}</h1>
      <div className="w-full pb-[20px]">
      <select onChange={selectCurrency} className='bg-[#28353E] w-full py-[20px] px-[15px] text-[13px] rounded-[6px] outline-none'>
          <option value="usd">USD</option>
          <option value="mmk">MMK</option>
        </select>
      </div>
      <div className="w-full flex justify-between">
      <form className='w-[45%]'>
        <p className='text-[15px] pb-[6px] text-green-500'>Your Amount</p>
        <input onChange={handleChange} type="number" className='bg-[#28353E] w-full px-[15px] py-[10px] text-[13px] rounded-[6px] outline-none' placeholder='Enter amount'/>
      </form>
      <div className='w-[10%] flex h-full items-center justify-center'>
        <BiTransferAlt className='text-[20px] cursor-pointer' onClick={() => setIsDollar(!(isDollar))}/>
      </div>
      <div className='w-[45%]'>
      <p className='text-[15px] pb-[6px] text-red-500'>To Amount</p>
        <div className='bg-[#28353E] w-full px-[15px] py-[10px] text-[13px] rounded-[6px] outline-none'>
          {result}
          </div>
      </div>
      </div>
    </div>
  </div>
    )
}

export default ExchangeForm