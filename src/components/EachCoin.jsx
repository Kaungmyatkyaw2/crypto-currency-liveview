import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getEachCoin } from '../store/feature/CoinSlicer';
import Loader from './pieces/Loader';
import Description from './pieces/Description';
import EachCoinHeader from './pieces/EachCoinHeader';
import EachCoinPriceShow from './pieces/EachCoinPriceShow';
import EachCoinInfo from './pieces/EachCoinInfo';
import ExchangeForm from './pieces/ExchangeForm';

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

            <EachCoinHeader img={coin?.image?.large} name={coin?.id} symbol={coin?.symbol} rank={coin.market_cap_rank} />

            <EachCoinPriceShow price={price} header={header}/>

           <EachCoinInfo leftCard={leftCard} rightCard={rightCard}/>

           <ExchangeForm text={text} selectCurrency={selectCurrency} handleChange={handleChange} setIsDollar={setIsDollar} isDollar={isDollar} result={result} />


           <Description text={coin?.description?.en} />


      </div>

    </div>

    </div>
    }
    </>
  )
}

export default EachCoin