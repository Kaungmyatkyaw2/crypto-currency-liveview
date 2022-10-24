import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CoinCard from './components/CoinCard'
import EachCoin from './components/EachCoin'
import { getCoins } from './store/feature/CoinSlicer'

const App = () => {

 

  return (
    <div className='bg-[#05141C] min-h-[100vh]'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CoinCard/>}></Route>
          <Route path='/each/:coinId' element={<EachCoin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App