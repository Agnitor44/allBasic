import React, {useState, useRef} from 'react'
import {Modal} from '@material-ui/core';
export default function Note() {
    const [notes, setNotes] = useState([])
    const [open, setOpen] = useState(false);
    const [curr, setCurr] = useState('')
    const txtRef = useRef()
    const handleSub = (e) => {
        e.preventDefault()
        if(txtRef.current.value === '') return alert('Wypełnij pole')
        const newNotes = [...notes, {
            txt: txtRef.current.value,
            id: Math.random(),
        }]
        setNotes(newNotes)
        
    }
    const handleOpen = (v) => {
        setCurr(v)
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
        setCurr('')
      };
      const handleDel = (id) => {
        const newArr = [...notes].filter(item => item.id !== id )
        setNotes(newArr)
      }

    const list = notes.map(item =>  <div className="cardFormation"> <article> <p>{item.txt}</p>  </article> <button type="button" onClick={handleOpen.bind(this, item.txt)}>open</button> <button onClick = {handleDel.bind(this, item.id)}>delete</button> </div> )
  
       
       
    
    return (
        <div className = 'note'>
            <h1>Note creator</h1> 
            <div className="formNote">
            <form onSubmit = {handleSub} action="type">
            <textarea ref = {txtRef} name="" id="" cols="30" rows="10"/>
            <button>Add</button>
            </form>
            </div>
                <div className="cardCont">
                {list}
                <div>
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
          <div className = 'bigCard'>
              <article>
                  <p>
                  {curr}
                  </p>
              </article>
          
          </div>
      </Modal>
    </div>
                </div>
           
        </div>
    )
}
