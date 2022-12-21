import { MouseEvent } from 'react'
import s from './Button.module.css'


export const Button = () => {

    // const myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     {console.log('hello motherfucker')}
    // }
    // const mySecondSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     {console.log('hello second motherfucker')}
    // }

    const onClickHandler = (name: string) => {
        console.log(name)
    }

    const foo1 = () => {
        console.log(100200)
    }

    const foo2 = (number: number) => {
        console.log(number)
    }

    return (
        <>
            <div className={s.button}>
                {/* <button onClick={(event) => {console.log('hello')}}>MyYouTubeChannel-1</button> */}
                <button onClick={() => onClickHandler('IVAN')}>MyYouTubeChannel-1</button>
                <button onClick={() => onClickHandler('BOB')}>MyYouTubeChannel-2</button>
            </div>
            <div>
                <button onClick={foo1}>1</button>
                <button onClick={() => {foo2(100200)}}>2</button>
            </div>
        </>
    )
}