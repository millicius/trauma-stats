import React, {useState} from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase-config'





export default function IkeltiOperacija() {
  
  const opCollRef = collection(db, 'operacijos')
  const [diagnoze, setDiagnoze] = useState('')
  const [operacija, setOperacija] = useState('')  

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addDoc(opCollRef, { diagnoze, operacija })
    setDiagnoze('')
    setOperacija('')
  }

  return (
    <div>
      <h3>Ikelti operacija</h3>
      <div className='operacijosForma'>
        <form onSubmit={handleSubmit}>
          <input type='text' value={diagnoze} placeholder='diagnoze...' onChange={(e) => setDiagnoze(e.target.value)}/>
          <input type='text' value={operacija} placeholder='operacija...' onChange={(e) => setOperacija(e.target.value)}/>
          <button>add</button>
        </form>
      </div>
    </div>
  )
}
