
type ButtonType = {
    name: string
    callBack: () => void
}

export const Button_1 = (props: ButtonType) => {

const onClickHandler = () => {
    props.callBack()
}

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}