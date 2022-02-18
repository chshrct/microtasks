import React, {MouseEvent, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {ButtonInp} from "./components/ButtonInp";

function App() {

    const [money, setMoney] = useState([
        { banknots: 'Dollars', nominal: 100, number: ' a1234567890' },
        { banknots: 'Dollars', nominal: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', nominal: 100, number: ' w1234567890' },
        { banknots: 'Dollars', nominal: 100, number: ' e1234567890' },
        { banknots: 'Dollars', nominal: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', nominal: 100, number: ' r1234567890' },
        { banknots: 'Dollars', nominal: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', nominal: 50, number: ' v1234567890' },
    ])

    const [filter,setFilter] = useState('all')

    let currentMoney = money

    if(filter==='all') currentMoney=money
    if(filter==='ru') currentMoney=money.filter(el=>el.banknots==='RUBLS')
    if(filter==='usd') currentMoney=money.filter(el=>el.banknots==='Dollars')

    return (<>
        <ul>
            {currentMoney.map(objFromMoneyArr=>{
                return (
                    <li key={objFromMoneyArr.number}>
                        <span>{objFromMoneyArr.banknots}</span>
                        <span>{objFromMoneyArr.nominal}</span>
                        <span>{objFromMoneyArr.number}</span>
                    </li>
                )
            })}
        </ul>
            <button onClick={()=>setFilter('all')}>All</button>
            <button onClick={()=>setFilter('ru')}>Ru</button>
            <button onClick={()=>setFilter('usd')}>Dollars</button>
        </>
    );
}

export default App;
