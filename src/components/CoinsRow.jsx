import {BsGraphDown,BsGraphUp} from 'react-icons/bs'
const CoinsRow = ({data}) => {

    const key = ['market_cap_rank','image','current_price','total_volume','market_cap','market_cap_change_percentage_24h'];

    const isDollar = ['current_price','total_volume','market_cap']


  return (
<div className='w-full flex text-[13px] py-[15px] border-b border-[#28353E] cursor-pointer'>
   
        {
            key.map((i,index) => (
                i !== 'image' ? <div key={index} className={`w-[17%] flex items-center justify-center space-x-[10px]  ${Math.sign(data[i]) == -1 ? 'text-red-500' : i === 'market_cap_change_percentage_24h' ? 'text-green-500' : 'text-white'}`}>
                        {i === "market_cap_change_percentage_24h" ? (Math.sign(data['market_cap_change_percentage_24h']) === -1) ? <BsGraphDown/> : <BsGraphUp/> : null}

                    <h1>
                        {isDollar.includes(i) ? `$ ` + data[i] : (i === "market_cap_change_percentage_24h" ? data[i]?.toFixed(2) +  "%" : data[i])}
                    </h1>
                    </div>
                 :
                <div className='w-[17%] text-center flex justify-start items-center space-x-[10px]' key={index}><img src={data[i]} className="h-[30px] w-[30px] rounded-full object-cover" alt="" /><h1 className='text-[14px] font-bold'>{data.name}</h1></div>
            ))
        }

    </div>  )
}

export default CoinsRow