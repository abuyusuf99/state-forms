import { useState } from 'react'
import  './style.css'
function App() {
  const[text, setText]=useState('')
  const[blur,setBlur] =useState(false)
  const[senden,setSended]=useState(false)

// const handleSend = (e)=>{
//   setSended(e.target.value)
// }



const handleText = (e)=>{
setText(e.target.value)
setSended(false)
}
const handleBlur =  ()=>{
  setBlur(true)
  setSended(false)
}
const handleSubmit = (e) =>{
  e.preventDefault()
  setText("")
  setBlur(false)
  setSended(true)
}

  return (
    <div>
      <div className="form">
        <form onSubmit={handleSubmit}>
        <input 
        onBlur={handleBlur}
         onChange={handleText}
          value={text} 
          type="text" />
          
        <button type='submit' disabled ={!text} >Отправить</button>
        {blur && !text ? <div>Строка не может быть пустым</div>: null }
        {senden ? <div>Отправлено</div>: null}
        </form>
      </div>
    </div>
  )
}

export default App