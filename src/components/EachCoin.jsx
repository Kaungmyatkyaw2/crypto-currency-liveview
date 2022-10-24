import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getEachCoin } from '../store/feature/CoinSlicer';
import InfoCard from './InfoCard';
import Loader from './Loader';
import PriceShow from './PriceShow';
import {BiTransferAlt} from 'react-icons/bi'

const EachCoin = () => {


    const dispatch = useDispatch();
    const state = useSelector(state => state.coins);
    const {coinId} = useParams();
    const coin = state.eachCoin
    const header = ['1h','24h','7d','14d','30d','1y']
    const price = [
      coin?.market_data?.price_change_percentage_1h_in_currency.usd.toFixed(4),
      coin?.market_data?.price_change_percentage_24h_in_currency.usd.toFixed(4),
      coin?.market_data?.price_change_percentage_7d_in_currency.usd.toFixed(4),
      coin?.market_data?.price_change_percentage_14d_in_currency.usd.toFixed(4),
      coin?.market_data?.price_change_percentage_30d_in_currency.usd.toFixed(4),
      coin?.market_data?.price_change_percentage_1y_in_currency.usd.toFixed(4),

    ]
    const leftCard = [
      { 
        header:"Circulating Supply",
        data:coin?.market_data?.circulating_supply?.toFixed(5)
      },
      {
        header:"Market Cap",
        data : coin?.market_data?.market_cap.usd
      }
    ]
    const rightCard = [
      { 
        header:"Low 24h",
        data:coin?.market_data?.low_24h?.usd
      },
      {
        header:"High 24h",
        data : coin?.market_data?.high_24h.usd
      }
    ]
    const [load,setLoad] = useState(false)
    const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;
    const [result,setResult] = useState(0);
    const [isDollar,setIsDollar] = useState(true);
    const [toWhat,setToWhat] = useState('usd')
    const [text,setText] = useState(`${coin?.symbol?.toUpperCase()} to ${toWhat.toUpperCase()}`);
    const [user,setUser] = useState('');


    console.log(coin)
    

    const handleChange = (e) => {
      setUser(e.target.value)
    }

    const selectCurrency = (e) => {
      setToWhat(e.target.value)
    }


    useEffect(() => {
      setLoad(true)
      axios.get(url)
      .then(res =>
        {
        setLoad(false)
        dispatch(getEachCoin(res.data))
        }
        )
      .catch(error => console.log(error))
    },[coinId]);

    useEffect(() => {

      isDollar ? setText(`${coin?.symbol?.toUpperCase()} to ${toWhat.toUpperCase()}`)
       :
        setText(`${toWhat.toUpperCase()} to ${coin?.symbol?.toUpperCase()}`)



      isDollar ? 
      setResult((user * coin.market_data?.current_price[toWhat]))  
      :
      setResult((1 / (coin.market_data?.current_price[toWhat]) * user))  

    })
    






  return (
    <>
    {
      load ? 
      <div className='w-full h-[100vh] flex justify-center items-center'>
        <Loader/>
      </div>
      : 
      <div className='text-white text-[13px] py-[30px]'>

      <div className='w-full flex flex-col justify-center items-center'>

      <Link to='/' className='px-[15px] mb-[20px] py-[10px] bg-[#1B2730] shadow-xl flex justify-center w-fit rounded-[6px]'>Back Home</Link>


        <div className='w-[80%] bg-[#1B2730] rounded-[6px] px-[20px] py-[40px] text-white'>

            <div className='w-full flex justify-around'>
              <div className='flex items-center space-x-[30px]'>
                <img src={coin?.image?.large} className='w-[80px] h-[80px]' alt="" />
                <div>
                <h1 className='text-[20px] font-[600] tracking-widest'>{coin.symbol?.toUpperCase()}</h1>
                <p className='text-gray-600'>{coin.id?.toUpperCase()}</p>
                </div>
              </div>
              <div className='flex items-center'>
                <div className='bg-violet-700 text-white font-bold px-[15px] py-[7px] rounded-[7px] text-[15px]'>Rank # {coin.market_cap_rank}</div>
              </div>
            </div>

            <div className="w-full flex justify-center py-[40px]">

              <div className='w-[60%] flex flex-col items-center bg-[#28353E] shadow-sm rounded-[6px] overflow-hidden '>

              <PriceShow check={false} data={header}/>
     
               <PriceShow check={true} data={price}/>

              </div>

            </div>

            <div className='w-full flex justify-center'>
              <div className='w-[60%] flex items-center justify-between shadow-sm'>
                <InfoCard data={leftCard} check={false}/>
                <InfoCard data={rightCard} check={true}/>
              </div>
            </div>

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

            <div className="w-full flex justify-center">
              <div className='w-[60%]'>
              <h1 className='text-[25px] font-bold text-red-500'>Description</h1>
              <p>{coin?.description?.en}</p>
              </div>
            </div>

        </div>
      </div>

    </div>
    }
    </>
  )
}

export default EachCoin