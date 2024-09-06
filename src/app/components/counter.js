"use client"

import { useState } from "react"

export default function Counter() {
    const [counter, setCounter] = useState(0)
    const [name, setName] = useState('Carlos')

    const updateCounter = (posAcc = true) => {
        let currentCount = counter;
        if(posAcc) {
            currentCount += 1;
        } else {
            currentCount -= 1;
        }
        setCounter(currentCount);
        setName(counter % 2 == 0 ? 'Alvaro' : 'Andres')
    }

    return (
       <>
        <h3>{name}</h3>
        <button onClick={() => updateCounter(false)}>-</button>
        <span>{counter}</span>
        <button onClick={() => updateCounter()}>+</button>
       </>
    )
}