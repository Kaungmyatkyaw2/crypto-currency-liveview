import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getCoins, search, viewMore } from '../store/feature/CoinSlicer'
import CoinsRow from './pieces/CoinsRow'
import HeaderRow from './pieces/HeaderRow'
import Loader from './pieces/Loader'

const CoinCard = () => {

    const [load,setLoad] = useState(false);
    const [value,setValue] = useState('')
    const dispatch = useDispatch()
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`
    const coins = useSelector(state => state.coins);
  
    useEffect(() => {

        setLoad(true)

      axios.get(url)
      .then(res => 
        {setLoad(false)
        dispatch(getCoins(res.data))}
        )
      .catch(error => console.log(error))

    },[])


    const handleSearch = (e) => {

        setValue(e.target.value)

        dispatch(search(e.target.value))

    }





  return (
    <div className='w-full flex justify-center items-center py-[30px]'>

        <div className='md:w-[80%] w-[98%] bg-[#1B2730] rounded-[6px] px-[20px] pt-[50px] text-white'>

            <input className='w-[80%] bg-[#28353E] text-[13px] ml-[7%] px-[20px] py-[10px] rounded-[5px] outline-none' placeholder='Search Currency' type="text" onChange={handleSearch} />

            <HeaderRow/>

            {
                load ?
                <div className="w-full flex justify-center">
                    <Loader/>
                    </div>
                :
                coins.toShow.map((i,index) => <NavLink to={`/each/${i.id}`} key={index}><CoinsRow data={i} /></NavLink>)
            }

            <div className={`w-full flex justify-center ${value === '' ? 'block' :'hidden'}`}>
            <h1 className='text-[13px] font-bold text-blue-600 py-[30px] cursor-pointer w-fit' onClick={() => dispatch(viewMore(25))}>View More</h1>
            </div>
            
        </div>

    </div>
  )
}

export default CoinCard