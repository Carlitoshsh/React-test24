import { useEffect, useState } from "react"

export default function Another({props, myCallback}) {
    const [img, setImg] = useState(null)
    
    useEffect(() => {
        // Random number between 1 and 100
        const randomNumber = Math.floor(Math.random() * 500) + 1
        async function getData() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
            if(response.ok) {
                const data = await response.json()
                setImg(data.sprites.front_default)
            }
        }
        getData()
    }, [])
    
    return (
        <>
            <h3>Second component</h3>
            {img ? <img src={img} />: <></>}
            <span>{props.id}</span>
            <span>{props.name}</span>
            <span>{props.array.join(',')}</span>
            <button onClick={myCallback}>Click</button>
        </>
    )
}