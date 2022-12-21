import { Button_1 } from "../Components/Button_1"

export const ButtonPractice = () => {

const Button1Foo = (subscriber: string, age: number) => {
    console.log(subscriber, age)
}

const Button2Foo = (subscriber:string, age: number) => {
    console.log(subscriber, age)
}

const StupidCallback = () => {
    console.log('I am stupid button!')
}

    return (
        <div>
            <Button_1 name = {'MyYouTubeChannel-1'} callBack={()=>{Button1Foo('I am stupid ass', 21)}}/>
            <Button_1 name = {'MyYouTubeChannel-2'} callBack={() => {Button2Foo('I am better', 23)}}/>
            <Button_1 name = {''} callBack={StupidCallback}/>
        </div>
    )
}
