import React, {useState, useEffect} from 'react'
import './styles/memory.css'

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

export default function Memory() {
    const [memos, setMemos] = useState()

    useEffect(() => {
       const arr = shuffle(['red', 'red', 'grey', 'grey', 'green', 'green', 'pink', 'pink', 'yellow', 'yellow', 'brown', 'brown'])
       const state = [
        {id: 1, type: arr[0], live: true},
        {id: 2, type: arr[1], live: true},
        {id: 3, type: arr[2], live: true},
        {id: 4, type: arr[3], live: true},
        {id: 5, type: arr[4], live: true},
        {id: 6, type: arr[5], live: true},
        {id: 7, type: arr[6], live: true},
        {id: 8, type: arr[7], live: true},
        {id: 9, type: arr[8], live: true},
        {id: 10, type: arr[9], live: true},
        {id: 11, type: arr[10], live: true},
        {id: 12, type: arr[11], live: true}  
    ]
    setMemos(state)
    }, [])
    
    const [player, setPlayer] = useState([]) 
    useEffect(() => {
       
        if(player.length === 2) {
            setTimeout(() => {
                if(player[0].type === player[1].type) {
                  
                    setPlayer([])
            }
            else {
                const exPlayer = [...player]
                const firstUp = [...memos].findIndex(item => exPlayer[0] === item)
                const secondUp = [...memos].findIndex(item => exPlayer[1] === item)
                const MemosReplica = [...memos]
                MemosReplica[firstUp].live = true
                MemosReplica[secondUp].live = true
                
                setMemos(MemosReplica)
                setPlayer([])
            }
            if(!memos[0].live && !memos[1].live && !memos[2].live && !memos[3].live && !memos[4].live && !memos[5].live && !memos[6].live && !memos[7].live && !memos[8].live && !memos[9].live && !memos[10].live && !memos[11].live) {
                const arr = shuffle(['red', 'red', 'grey', 'grey', 'green', 'green', 'pink', 'pink', 'yellow', 'yellow', 'brown', 'brown'])
                const state = [
                 {id: 1, type: arr[0], live: true},
                 {id: 2, type: arr[1], live: true},
                 {id: 3, type: arr[2], live: true},
                 {id: 4, type: arr[3], live: true},
                 {id: 5, type: arr[4], live: true},
                 {id: 6, type: arr[5], live: true},
                 {id: 7, type: arr[6], live: true},
                 {id: 8, type: arr[7], live: true},
                 {id: 9, type: arr[8], live: true},
                 {id: 10, type: arr[9], live: true},
                 {id: 11, type: arr[10], live: true},
                 {id: 12, type: arr[11], live: true}  
             ]
             setMemos(state)
            } 
            }, 2000)
      
     
    }
 
    }, [player])
    const handleClick = (id, e) => {
        if(player.length === 2) return alert('poczekaj')
        const curr = [...memos].find(item => item.id === id)
        const memoId = [...memos].findIndex(item => item === curr)
        const newMemos = [...memos]
       

    

        if( newMemos[memoId].live === false) return alert('asdasd')
        newMemos[memoId].live = false
     
        setPlayer([...player, curr])
      
        setMemos(newMemos)

  
}
    const list = memos && memos.map(item => <div className="memo"  style = {!item.live ? {backgroundColor: item.type} : null} onClick = {handleClick.bind(this, item.id)}></div>)
    return (
        <div className = 'allMemo'>
            {list}
        </div>
    )
}
