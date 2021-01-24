import React, {useEffect, useState, useRef} from 'react'
import './styles/memory.css'

const API = "http://data.fixer.io/api/latest?access_key=822ad430a66db6799703df803cc46ab8"

export default function Currency() {

    const [currency, setCurrency] = useState(null)
    const [vis, setVis] = useState(null)
   const [chose, setChose] = useState({one: '', two: ''})
    const [error, setError] = useState(false)
    const [res, setRes] = useState(0)
   
 
    const inpRef = useRef()
    const inpRefDwa = useRef()
    const moneyInput = useRef()
    useEffect(() => {
        fetch(API).then(response => response.json()).then(data => setCurrency(data.rates))
      
    })


    const handleWrite = (name) => {
       if(name === 'one') {
      setVis(
        currency && Object.getOwnPropertyNames(currency).filter(item => item.includes(inpRef.current.value.toUpperCase())).
        map(item =>  <h1>{item}</h1>)
      )
       }
       if(name === 'two') {
        setVis(
          currency && Object.getOwnPropertyNames(currency).filter(item => item.includes(inpRefDwa.current.value.toUpperCase())).
          map(item =>  <h1>{item}</h1>)
        )
         }
       
    }
   const counter = () => {
       if(!Object.getOwnPropertyNames(currency).includes(inpRefDwa.current.value.toUpperCase() || inpRef.current.value.toUpperCase())) return setError("błędna waluta")
       const stringOne = inpRef.current.value
       const stringTwo = inpRefDwa.current.value
       const z = currency.stringOne
       const na = currency.stringTwo

      setError("It seems this API wants me to pay for exact currency and i dont have money for this. My apologies")

     

   }

   
      
    return (
        <div className="currencyCont">
            <div className="ustawienie">
                <div>
            <h1>Z:</h1>
            <input ref = {inpRef} onChange = {handleWrite.bind(this, 'one')} onBlur = {() => setVis(null)} type="text"/>
            </div>
            <div>   <h1>Kwota</h1>
            <input ref = {moneyInput} onChange = {counter} type="number"/></div>
            <div>
            <h1>NA:</h1>
            <input ref = {inpRefDwa} onChange = {handleWrite.bind(this, 'two')} onBlur = {() => setVis(null)} type="text"/>
            </div>

            </div>
            {error && <h2>{error}</h2>}
            <div className = 'wyniki'>
            {currency && vis}
            
            </div>
           
        </div>
 
    )
}
