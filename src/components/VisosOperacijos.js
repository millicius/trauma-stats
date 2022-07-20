import React, {useState, useEffect} from 'react'
import { db } from '../firebase-config'
import { onSnapshot, collection } from 'firebase/firestore'

export default function VisosOperacijos() {

  const [operacijos, setOperacijos] = useState([])
  

  // useEffect(
  //   () => onSnapshot(collection(db, 'operacijos'), (snapshot) => setOperacijos(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))), [])   

  useEffect(
    ()=> 
    onSnapshot(collection(db, 'operacijos'), ((snaphot) => 
    setOperacijos(snaphot.docs.map((doc)=> (
      { 
        ...doc.data(), 
        id: doc.id
      }
      ))))
      ), [])

  return (
    <div className='root'>
      <h4>Visos operacijos</h4>
      <div className='operacijos-box'>
          {operacijos.map((operacija) => 
          (
            <div className='op-line' key={operacija.id}>{operacija.diagnoze} - {operacija.operacija}</div>
          ))}
      </div>
    </div>
  )
}
