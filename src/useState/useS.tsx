import { useState } from "react"

export function AppPractice () {

//let a = 1
let[a, setA] = useState(1)

const onClickHandler = () => {
    setA(++a)
    console.log(a)
}

const onZeroNumber = () => {
    setA(0)
}


    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onZeroNumber}>0</button>
        </div>
    )
}