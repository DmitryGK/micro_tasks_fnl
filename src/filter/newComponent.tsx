import { FilterType, MoneyType } from "./filter"

type NewComponentPropsType = {
    onClickFilterHandler: (value: FilterType) => void
    currentMoney: MoneyType[]
}

export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <div>
            <ul>
                {props.currentMoney.map((m, index: number) => {
                    return (
                    <li key={index}>
                        <span>{m.banknots}</span>
                        <span>{m.value}</span>
                        <span>{m.number}</span>
                    </li>)
                })
                }
            </ul>
            <div>
                <button onClick={() => props.onClickFilterHandler('all')}>all</button>
                <button onClick={() => props.onClickFilterHandler('ruble')}>ruble</button>
                <button onClick={() => props.onClickFilterHandler('dollar')}>dollar</button>
            </div>
        </div>
    )
}