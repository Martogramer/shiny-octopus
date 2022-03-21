import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import { TableCoins } from './components/TableCoins';

function App() {

  const [coins, setcoins] = useState([])
  const [search, setsearch] = useState('')

  const getData=async()=>{
    const res=await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    setcoins(res.data)
  }
  useEffect(()=>{
    getData();
  }, [])

  return (
    <div className="container">
      <div className='row'>
      <h1>Shiny Coins</h1>
      <input type='text' placeholder='Search a Coin' className='form-control bg-dark text-light border-0 mt-4 text-center' onChange={e=> setsearch(e.target.value)}></input>
      <TableCoins coins={coins} search={search}/>
      </div>
    </div>
  );
}

export default App;
