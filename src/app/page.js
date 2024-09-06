'use client'
import Counter from './components/counter'
import Another from './components/another'
import { useState } from 'react'

export default function Home() {
  const myJson = {
    id: 2,
    name: 'Carlos',
    array: [2323, 32323]
  }

  const [myObj, setMyObj] = useState(myJson)

  const changeName = () => {
    let myObjCurrent = myObj;
    myObjCurrent.name = 'Andres'
    setMyObj({...myObjCurrent})
  }

  return (
    <>
      <h1>Home</h1>
      <Counter />
      <Another props={myObj} myCallback={changeName} />
    </>
  );
}

