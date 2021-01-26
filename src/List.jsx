import React, {useState, useRef} from 'react'
import './styles/memory.css'
export default function List() {
    const [list, setList] = useState([])
    const [done, setDone] = useState([])
    const [on, setOn] = useState(false)
    const [show, setShow] = useState(false)
    const refDate = useRef()
    const refTxt = useRef()

    const addToList = (e) => {
        e.preventDefault()
        if(!refTxt.current.value || !refDate.current.value) return alert('Wypełnij pola')
        const newObj = {
            txt: refTxt.current.value,
            date: refDate.current.value,
            on: on,
            id: Math.random()
        }
        const newArray = [...list, newObj]
        setList(newArray)
        
    }
    const handleDelete = (id) => {
        const replica = [...list].filter(item => item.id !== id)
        setList(replica)
    }
    const handleDone = (id) => {
        const doneElement = [...list].find(item => item.id === id)
        const replica = [...list].filter(item => item.id !== id)
        setDone([...done, doneElement])
       setList(replica)
    }

    const DoneList = done && list.map(item => {
        return (
        <div className="one">
        <div className="dataList"><h2>{item.date}</h2></div>
        <div className="dataList"><h2>{item.txt}</h2></div>
        <div className="dataList"><h2 style = {item.on ? {color: 'green'} : {color: 'red'} }>{item.on ? "Tak": "Nie"}</h2></div>
        <div className="dataList"><button onClick = {handleDone.bind(this, item.id)}>Zrobione!</button></div>
        <div className="dataList"><button onClick = {handleDelete.bind(this, item.id)}>Porzucam...</button></div> 
        </div>)
    })
    const DoneDidList = done && done.map(item => {
        return (
        <div className="one">
        <div className="dataList"><h2>{item.date}</h2></div>
        <div className="dataList"><h2>{item.txt}</h2></div>
        <div className="dataList"><h2 style = {item.on ? {color: 'green'} : {color: 'red'} }>{item.on ? "Tak": "Nie"}</h2></div>
        
        </div>)
    })

    return (
        <div className = 'listCont'>
            <button onClick = {() => setShow(prev => !prev)} className = 'whatHaveIDone'>{show ?  'Pokaż do zrobienia' : 'Pokaż zrobione' }</button>
            <section className = 'listCreator'>
                <form onSubmit = {addToList} action="submit">
                    <div className="col">
                    <h1>Temat</h1>
                    <input ref = {refTxt} type="text"/>
                    </div>
                  
                    <div className="col">
                    <h1>Data</h1>
                    <input ref = {refDate} type="date"/>
                    </div>
                
                    <div className="col">
                    <h1>Ważne</h1>
                    <input onChange = {() => setOn(prev => !prev) } type="checkbox"/>
                 
                    </div>
                    <button>Dodaj</button>
                </form>
            </section>
            <div className="toBeDone">
                {show ?
                  <div className="desc" style = {{backgroundColor: "rgb(87, 211, 108)"}}>
                  <div><h1>Data</h1></div> 
                   <div><h1>Zadanie</h1> </div> 
                   <div><h1>Ważne</h1> </div> 
               
                     </div>
                     :
                <div className="desc" style = {{backgroundColor: " rgb(92, 78, 214)"}}>
               <div><h1>Data</h1></div> 
                <div><h1>Zadanie</h1> </div> 
                <div><h1>Ważne</h1> </div> 
                <div><h1>Done</h1></div> 
                <div><h1>Delete</h1></div>  
                  </div>
                 
              
          

            
            }
            
                {!show ?  DoneList : DoneDidList } 
                        
                  
        
            </div>
        </div>
    )
}
